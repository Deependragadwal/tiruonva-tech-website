"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { site } from "@/content/site";

const requirements = [
  "IT & Networking",
  "CCTV & Smart Surveillance",
  "Security & Access Control",
  "Cloud Computing",
  "Cybersecurity",
  "Website & App Development",
  "Software Solutions",
  "Solar Energy Solutions",
  "IT Consultancy",
  "AMC / Support",
  "Request a Quote",
  "Other",
];

const intentMap: Record<string, string> = {
  quote: "Request a Quote",
  cctv: "CCTV & Smart Surveillance",
  solar: "Solar Energy Solutions",
};

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  requirement: string;
  message: string;
};

const emptyForm: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  requirement: "",
  message: "",
};

export function ContactForm() {
  const searchParams = useSearchParams();
  const intent = searchParams.get("intent") ?? "";
  const [form, setForm] = useState<FormState>({
    ...emptyForm,
    requirement: intentMap[intent] ?? "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const enquiryBody = useMemo(() => {
    return [
      `Name: ${form.name}`,
      `Company: ${form.company || "—"}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Requirement: ${form.requirement}`,
      "",
      form.message,
    ].join("\n");
  }, [form]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.requirement || !form.message.trim()) {
      setError("Please complete name, phone, email, requirement and message.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!/^[0-9+\-\s()]{8,20}$/.test(form.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    const subject = encodeURIComponent(`Enquiry: ${form.requirement} — ${form.name}`);
    const body = encodeURIComponent(enquiryBody);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-line bg-white p-6 sm:p-8">
        <h2 className="font-heading text-2xl font-semibold text-pretty text-navy">Enquiry ready to send</h2>
        <p className="mt-3 text-muted">
          Your email app should open with the enquiry details. If it does not, call or message us
          directly and we will respond promptly.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.phones[0].href}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white sm:w-auto"
          >
            Call {site.phones[0].display}
          </a>
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(enquiryBody)}`}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full border border-line px-5 py-3 text-sm font-semibold text-navy sm:w-auto"
            target="_blank"
            rel="noreferrer"
          >
            Send on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-white p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink outline-none focus:border-blue"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm font-medium text-navy">
          Company Name
          <input
            value={form.company}
            onChange={(event) => update("company", event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink outline-none focus:border-blue"
            autoComplete="organization"
          />
        </label>
        <label className="block text-sm font-medium text-navy">
          Phone Number
          <input
            required
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink outline-none focus:border-blue"
            autoComplete="tel"
          />
        </label>
        <label className="block text-sm font-medium text-navy">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink outline-none focus:border-blue"
            autoComplete="email"
          />
        </label>
      </div>
      <label className="mt-4 block text-sm font-medium text-navy">
        Requirement
        <select
          required
          value={form.requirement}
          onChange={(event) => update("requirement", event.target.value)}
          className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink outline-none focus:border-blue"
        >
          <option value="">Select a requirement</option>
          {requirements.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className="mt-4 block text-sm font-medium text-navy">
        Message
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-base text-ink outline-none focus:border-blue"
        />
      </label>
      {error ? <p className="mt-4 text-sm text-orange-600">{error}</p> : null}
      <button
        type="submit"
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-orange px-5 py-3 text-sm font-semibold text-white hover:bg-orange-600 sm:w-auto"
      >
        Send Enquiry
      </button>
    </form>
  );
}
