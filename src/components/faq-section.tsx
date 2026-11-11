"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Plus } from "lucide-react";
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
          {faqs.map((faq, index) => (
            <FaqItem key={faq.question} faq={faq} delay={index * 0.04} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq, delay }: { faq: Faq; delay: number }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = useId();

  return (
    <Reveal delay={delay}>
      <div
        className={cn(
          "border border-border bg-card transition duration-300",
          open &&
            "border-gold/35 shadow-[0_12px_36px_-28px_rgba(10,10,10,0.35)]"
        )}
      >
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full cursor-pointer items-start justify-between gap-4 px-5 py-4 text-left font-medium text-ink"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="transition hover:text-gold-dark">{faq.question}</span>
          <Plus
            className={cn(
              "mt-0.5 size-4 shrink-0 text-gold transition duration-300",
              open && "rotate-45"
            )}
          />
        </button>
        <AnimatePresence initial={false}>
          {open ? (
            <motion.div
              id={panelId}
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: reduce ? 0 : 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden"
            >
              <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </p>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
