"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { contactRoles } from "@/lib/data";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-2 w-full border-0 border-b border-ink/20 bg-transparent py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/80 focus:border-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      role: String(data.get("role") ?? "").trim(),
      subject: String(data.get("subject") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-ink/10 bg-cream-muted px-6 py-10 text-center sm:px-8">
        <p className="font-serif text-2xl text-ink">Message sent</p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-soft">
          Thanks for writing in. We&apos;ll reply to the email you entered — no
          public inbox on this site.
        </p>
        <Button
          className="mt-6"
          type="button"
          onClick={() => setStatus("idle")}
        >
          Send another note
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <Field label="Name" htmlFor="name">
        <input
          id="name"
          name="name"
          required
          maxLength={80}
          autoComplete="name"
          className={fieldClass}
        />
      </Field>

      <Field label="Your email" htmlFor="email">
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={120}
          autoComplete="email"
          className={fieldClass}
        />
      </Field>

      <Field label="I am a" htmlFor="role">
        <select
          id="role"
          name="role"
          defaultValue=""
          className={cn(fieldClass, "rounded-none")}
        >
          <option value="" disabled>
            Select one
          </option>
          {contactRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Subject" htmlFor="subject">
        <input
          id="subject"
          name="subject"
          required
          maxLength={120}
          className={fieldClass}
        />
      </Field>

      <Field label="Message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          className="mt-2 w-full resize-y rounded-md border border-ink/15 bg-cream px-3 py-3 text-sm text-ink outline-none placeholder:text-muted/80 focus:border-ink"
        />
      </Field>

      {status === "error" ? (
        <p className="text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
