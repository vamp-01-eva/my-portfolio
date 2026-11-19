"use client";

import { useRef, useState, type FormEvent } from "react";
import { SITE } from "@/content/site";
import styles from "./ContactForm.module.css";

type FieldName = "name" | "email" | "message";

const FORM_ENDPOINT = "https://formspree.io/f/moedwzdd";

const initialErrors: Record<FieldName, boolean> = {
  name: false,
  email: false,
  message: false,
};

export function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const sendingRef = useRef(false);
  const [errors, setErrors] = useState(initialErrors);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [statusError, setStatusError] = useState(false);

  function fieldRef(field: FieldName) {
    if (field === "name") return nameRef.current;
    if (field === "email") return emailRef.current;
    return messageRef.current;
  }

  function validateField(field: FieldName) {
    const element = fieldRef(field);
    if (!element) return false;
    const value = element.value.trim();
    const validEmail =
      element.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    return value.length > 0 && validEmail;
  }

  function revalidate(field: FieldName) {
    if (!errors[field]) return;
    setErrors((current) => ({ ...current, [field]: !validateField(field) }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sendingRef.current) return;

    const form = event.currentTarget;
    const nextErrors: Record<FieldName, boolean> = {
      name: !validateField("name"),
      email: !validateField("email"),
      message: !validateField("message"),
    };
    setErrors(nextErrors);
    const firstInvalid = (["name", "email", "message"] as const).find(
      (field) => nextErrors[field],
    );
    if (firstInvalid) {
      setStatusError(true);
      setStatus("Check the highlighted fields.");
      fieldRef(firstInvalid)?.focus();
      return;
    }

    setStatusError(false);
    sendingRef.current = true;
    setSending(true);
    setStatus("Sending your message…");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Formspree returned ${response.status}`);
      }

      form.reset();
      setErrors(initialErrors);
      setStatus("Message sent. I’ll reply to the address you gave.");
    } catch {
      setStatusError(true);
      setStatus(`The message didn’t send. Try again, or email ${SITE.email}.`);
    } finally {
      sendingRef.current = false;
      setSending(false);
    }
  }

  return (
    <form
      className={styles.form}
      action={FORM_ENDPOINT}
      method="POST"
      onSubmit={onSubmit}
      noValidate
    >
      <input type="hidden" name="_subject" value="Portfolio contact form" />
      <input
        className={styles.honeypot}
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">your name</label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            aria-describedby="name-error"
            aria-invalid={errors.name ? "true" : "false"}
            ref={nameRef}
            required
            onInput={() => revalidate("name")}
          />
          <p className={styles.error} id="name-error" hidden={!errors.name}>
            enter your name.
          </p>
        </div>
        <div className={styles.field}>
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            spellCheck={false}
            aria-describedby="email-error"
            aria-invalid={errors.email ? "true" : "false"}
            ref={emailRef}
            required
            onInput={() => revalidate("email")}
          />
          <p className={styles.error} id="email-error" hidden={!errors.email}>
            enter a valid email address.
          </p>
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="topic">what do you need?</label>
        <select id="topic" name="topic" autoComplete="off">
          <option>a junior role</option>
          <option>a web application</option>
          <option>an AI automation</option>
          <option>technical support</option>
          <option>something else</option>
        </select>
      </div>
      <div className={styles.field}>
        <label htmlFor="message">message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          autoComplete="off"
          aria-describedby="message-error"
          aria-invalid={errors.message ? "true" : "false"}
          ref={messageRef}
          required
          onInput={() => revalidate("message")}
        />
        <p className={styles.error} id="message-error" hidden={!errors.message}>
          write a short message.
        </p>
      </div>
      <div className={styles.actions}>
        <button
          className={`btn btn--primary ${styles.submit}`}
          type="submit"
          disabled={sending}
        >
          {sending ? "sending…" : "send message"}
        </button>
      </div>
      <p className={styles.note}>
        Messages are delivered through Formspree to my inbox. I use your details
        only to reply. Prefer email?{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>
      <p
        className={`${styles.status}${statusError ? ` ${styles.statusError}` : ""}`}
        role="status"
        aria-live="polite"
      >
        {status}
      </p>
    </form>
  );
}
