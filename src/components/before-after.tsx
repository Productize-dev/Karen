"use client";

import Image from "next/image";
import {
  useCallback,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { beforeAfterPairs, type BeforeAfterPair } from "@/lib/work";
import { GoldRule, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

function Slider({ pair }: { pair: BeforeAfterPair }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);
  const labelId = useId();

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, next)));
  }, []);

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(true);
    updateFromClientX(event.clientX);
  }

  function onPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (!dragging) return;
    updateFromClientX(event.clientX);
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    event.currentTarget.releasePointerCapture(event.pointerId);
    setDragging(false);
  }

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition((value) => Math.max(4, value - 4));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition((value) => Math.min(96, value + 4));
    }
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] touch-none overflow-hidden border border-border bg-cream select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="slider"
      aria-labelledby={labelId}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <span id={labelId} className="sr-only">
        Before and after comparison for {pair.label}
      </span>

      <Image
        src={pair.after.src}
        alt={pair.after.alt}
        fill
        loading="lazy"
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 900px"
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={pair.before.src}
          alt={pair.before.alt}
          fill
          loading="lazy"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-cream shadow-[0_0_0_1px_rgba(197,163,90,0.45)]"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/50 bg-cream text-gold-dark shadow-md">
          <span aria-hidden className="text-xs tracking-tight">
            ‹ ›
          </span>
        </div>
      </div>

      <span className="absolute top-3 left-3 rounded-full bg-cream/90 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-ink shadow-sm">
        Before
      </span>
      <span className="absolute top-3 right-3 rounded-full bg-gold-gradient px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-ink shadow-sm">
        After
      </span>
    </div>
  );
}

export function BeforeAfterSection() {
  const [activeId, setActiveId] = useState(beforeAfterPairs[0].id);
  const active =
    beforeAfterPairs.find((pair) => pair.id === activeId) ?? beforeAfterPairs[0];

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-gold-dark">
            Real results
          </p>
          <h2 className="mt-3 font-heading text-4xl text-ink">
            Before &amp; after from our cleans
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Drag the slider to see the difference Grace Living brings to
            bathrooms, kitchens, and the details that usually get overlooked.
          </p>
          <GoldRule className="mx-auto mt-5 w-24" delay={0.1} />
        </Reveal>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {beforeAfterPairs.map((pair) => (
            <button
              key={pair.id}
              type="button"
              onClick={() => setActiveId(pair.id)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
                activeId === pair.id
                  ? "border-gold bg-gold/15 text-gold-dark"
                  : "border-border bg-card text-muted-foreground hover:border-gold/40 hover:text-ink"
              )}
            >
              {pair.label}
            </button>
          ))}
        </div>

        <Reveal>
          <Slider key={active.id} pair={active} />
        </Reveal>
      </div>
    </section>
  );
}
