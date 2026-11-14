"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { business } from "@/lib/business";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";

const frequencies = [
  "One-time",
  "Weekly",
  "Biweekly",
  "Monthly",
  "Not sure yet",
];

const propertyTypes = [
  "House",
  "Apartment / Condo",
  "Airbnb / Vacation rental",
  "Office",
  "Other commercial",
];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          city: data.get("city"),
          propertyType: data.get("propertyType"),
          size: data.get("size"),
          service: data.get("service"),
          frequency: data.get("frequency"),
          notes: data.get("notes"),
          website: data.get("website"),
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        error?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          payload?.error ||
            "Unable to send your request right now. Please call or text us."
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="animate-fade-up border border-gold/40 bg-secondary/60 p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-gold" />
        <h2 className="mt-4 font-heading text-2xl text-ink">Thank you</h2>
        <p className="mt-3 text-muted-foreground">
          Your quote request was sent. We&apos;ll follow up soon. Need faster
          help? Call or text{" "}
          <a href={business.phoneHref} className="font-medium text-gold-dark">
            {business.phoneDisplay}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="animate-fade-up space-y-5 border border-border bg-card p-6 shadow-[0_20px_50px_-40px_rgba(10,10,10,0.35)] md:p-8"
    >
      {/* Honeypot — leave empty */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="City" name="city" required placeholder="Franklin, TN" />
        <div>
          <Label htmlFor="propertyType">Property type</Label>
          <select
            id="propertyType"
            name="propertyType"
            required
            className="field"
            defaultValue=""
          >
            <option value="" disabled>
              Select type
            </option>
            {propertyTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <Field
          label="Size / beds & baths"
          name="size"
          placeholder="e.g. 3 bed / 2 bath"
          required
        />
        <div>
          <Label htmlFor="service">Service needed</Label>
          <select
            id="service"
            name="service"
            required
            className="field"
            defaultValue=""
          >
            <option value="" disabled>
              Select service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="frequency">Preferred frequency</Label>
          <select
            id="frequency"
            name="frequency"
            required
            className="field"
            defaultValue=""
          >
            <option value="" disabled>
              Select frequency
            </option>
            {frequencies.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <Label htmlFor="notes">Notes / special requests</Label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className="field min-h-28"
          placeholder="Tell us about pets, access instructions, priorities, or condition of the property."
        />
      </div>
      <p className="text-sm text-muted-foreground">{business.pricingNote}</p>
      {error ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          {error}{" "}
          <a href={business.phoneHref} className="font-medium underline">
            Call {business.phoneDisplay}
          </a>
        </p>
      ) : null}
      <Button
        type="submit"
        size="lg"
        disabled={submitting}
        className="bg-gold-gradient text-ink transition hover:opacity-90 hover:shadow-[0_10px_28px_-12px_rgba(197,163,90,0.9)] disabled:opacity-70"
      >
        {submitting ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="size-4 animate-spin" />
            Sending request…
          </span>
        ) : (
          "Request personalized quote"
        )}
      </Button>
    </form>
  );
}

function Label({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-sm font-medium text-ink"
    >
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="field"
      />
    </div>
  );
}
