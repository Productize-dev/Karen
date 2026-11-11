import { GoldRule, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

type Faq = {
  question: string;
  answer: string;
};

export function FaqSection({
  title = "Common Questions",
  subtitle,
  faqs,
}: {
  title?: string;
  subtitle?: string;
  faqs: readonly Faq[] | Faq[];
}) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4">
        <Reveal className="mb-10 text-center">
          <h2 className="font-heading text-3xl text-ink md:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-muted-foreground">{subtitle}</p>
          ) : null}
          <GoldRule className="mx-auto mt-5 w-24" delay={0.1} />
        </Reveal>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-border bg-card transition duration-300 open:border-gold/35 open:shadow-[0_12px_36px_-28px_rgba(10,10,10,0.35)]"
            >
              <summary
                className={cn(
                  "flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden"
                )}
              >
                <span className="transition hover:text-gold-dark">
                  {faq.question}
                </span>
                <span
                  aria-hidden
                  className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center text-gold transition duration-300 group-open:rotate-45"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="size-4"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
