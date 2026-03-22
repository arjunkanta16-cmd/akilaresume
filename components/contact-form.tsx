"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/data";

export function ContactForm() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(`Resume Website Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Your email client has been opened to send the message.");
    event.currentTarget.reset();
  };

  return (
    <form
      aria-label="Contact form"
      className="grid gap-4"
      onSubmit={handleSubmit}
    >
      <label className="grid gap-2 text-sm text-muted">
        Full name
        <input
          required
          name="name"
          className="rounded-2xl border border-border/70 bg-surface px-4 py-3 text-text outline-none transition focus:border-accent"
          placeholder="Your name"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Email address
        <input
          required
          type="email"
          name="email"
          className="rounded-2xl border border-border/70 bg-surface px-4 py-3 text-text outline-none transition focus:border-accent"
          placeholder="you@example.com"
        />
      </label>
      <label className="grid gap-2 text-sm text-muted">
        Message
        <textarea
          required
          name="message"
          rows={5}
          className="rounded-2xl border border-border/70 bg-surface px-4 py-3 text-text outline-none transition focus:border-accent"
          placeholder="Share your hiring requirement or collaboration message"
        />
      </label>
      <button
        type="submit"
        className="inline-flex justify-center rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:opacity-95"
      >
        Send Message
      </button>
      {status ? <p className="text-sm text-muted">{status}</p> : null}
    </form>
  );
}

