"use client";

import { useRef, useState, type FormEvent } from "react";
import { SITE } from "@/content/site";

type FieldName = "name" | "email" | "message";

const initialErrors: Record<FieldName, boolean> = {
  name: false,
  email: false,
  message: false,
};

export function ContactForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [errors, setErrors] = useState(initialErrors);
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

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
    setStatus(
      `Nothing was sent. This form is not connected yet. Email ${SITE.email}.`,
    );
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <div className="field-row">
        <div className="field">
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
          <p className="field__error" id="name-error" hidden={!errors.name}>
            enter your name.
          </p>
        </div>
        <div className="field">
          <label htmlFor="email">email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-describedby="email-error"
            aria-invalid={errors.email ? "true" : "false"}
            ref={emailRef}
            required
            onInput={() => revalidate("email")}
          />
          <p className="field__error" id="email-error" hidden={!errors.email}>
            enter a valid email address.
          </p>
        </div>
      </div>
      <div className="field">
        <label htmlFor="topic">what do you need?</label>
        <select id="topic" name="topic">
          <option>a junior role</option>
          <option>a web application</option>
          <option>an AI automation</option>
          <option>technical support</option>
          <option>something else</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          aria-describedby="message-error"
          aria-invalid={errors.message ? "true" : "false"}
          ref={messageRef}
          required
          onInput={() => revalidate("message")}
        />
        <p className="field__error" id="message-error" hidden={!errors.message}>
          write a short message.
        </p>
      </div>
      <button className="btn btn--primary" type="submit">
        check the message
      </button>
      <p className="form__note">
        This form is not connected yet. It checks the fields here and tells you
        so. Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> to reach me.
      </p>
      <p
        className={`form__status${statusError ? " is-error" : ""}`}
        role="status"
        aria-live="polite"
      >
        {status}
      </p>
    </form>
  );
}
