// Serves the archived legacy site for parity checks.
// Run: node legacy/serve.mjs
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "..");
const publicDir = path.join(root, "public");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".pdf": "application/pdf",
};

http
  .createServer((request, response) => {
    const url = new URL(request.url, "http://localhost");
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === "/") pathname = "/index.html";

    const file = pathname.startsWith("/assets/")
      ? path.join(publicDir, pathname)
      : pathname === "/favicon.svg" || pathname === "/MAURICIO_RESUME.pdf"
        ? path.join(publicDir, pathname)
        : path.join(here, pathname);

    fs.readFile(file, (error, data) => {
      if (error) {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("not found");
        return;
      }
      response.writeHead(200, {
        "Content-Type": types[path.extname(file)] ?? "application/octet-stream",
      });
      response.end(data);
    });
  })
  .listen(3001, () => console.log("legacy site on http://localhost:3001"));
