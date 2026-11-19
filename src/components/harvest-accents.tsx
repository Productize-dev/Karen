import { cn } from "@/lib/utils";

type HarvestTone = "maple" | "cranberry" | "sage" | "gold";

function toneFill(tone: HarvestTone) {
  if (tone === "cranberry") return "var(--cranberry)";
  if (tone === "sage") return "var(--sage)";
  if (tone === "gold") return "var(--gold)";
  return "var(--maple)";
}

/** Elegant maple-leaf silhouette for seasonal atmosphere (decorative only). */
export function MapleLeaf({
  className,
  tone = "maple",
}: {
  className?: string;
  tone?: HarvestTone;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("pointer-events-none", className)}
      aria-hidden
    >
      <path
        fill={toneFill(tone)}
        d="M32 4c1.2 6.4 4.2 10.8 9.2 14.2 2.4-4.6 6.6-7.8 12.2-9.2-1.2 5.8-0.2 10.8 2.6 15.2 4.8-1.4 9.2-1 13.4 1.4-4.6 3.2-7.2 7.4-8 12.4 5.6 1.8 9.6 5.2 11.6 10.2-6.2-.6-11.2.8-15.2 4.4 1.6 4.8 1.2 9.4-.8 14-3.8-3.8-8.4-5.6-13.6-5.6V58h-2.8V50.8c-5.2 0-9.8 1.8-13.6 5.6-2-4.6-2.4-9.2-.8-14-4-3.6-9-5-15.2-4.4 2-5 6-8.4 11.6-10.2-.8-5-3.4-9.2-8-12.4 4.2-2.4 8.6-2.8 13.4-1.4 2.8-4.4 3.8-9.4 2.6-15.2 5.6 1.4 9.8 4.6 12.2 9.2C27.8 14.8 30.8 10.4 32 4z"
      />
    </svg>
  );
}

export function WheatStem({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: HarvestTone;
}) {
  return (
    <svg
      viewBox="0 0 40 120"
      className={cn("pointer-events-none", className)}
      aria-hidden
    >
      <path
        fill={toneFill(tone)}
        d="M19 118h2V52c4 2 7 6 8 11-3-1-6-1-9 0 1 5 0 9-2 13-1-4-3-8-5-11-2 1-5 2-8 2 2-5 5-9 9-12v-7c3 2 6 5 7 9-3-1-5-1-8 0 1 4 0 7-1 10-1-3-3-6-5-9-2 1-4 2-7 2 2-4 5-8 8-10V36c3 2 5 4 6 8-2-1-4-1-6 0 1 3 0 6-1 8-1-3-2-5-4-7-2 1-4 1-6 2 1-3 3-6 6-8V26c2 2 4 4 5 7-2 0-3 0-5 1 1 2 0 4-1 6-1-2-2-4-3-6-1 1-3 1-5 2 1-3 3-6 6-8V8l1-4 1 4v10c3 2 5 5 6 8-2-1-4-1-6 0v8c3 2 5 5 7 9-3-1-5-1-8 0v9c4 2 7 6 9 11-3-1-6-1-9 0v52z"
      />
    </svg>
  );
}

/** Single elegant seasonal rule — not a rainbow bar. */
export function HarvestStripe({ className }: { className?: string }) {
  return (
    <div className={cn("h-1 w-full bg-cranberry", className)} aria-hidden />
  );
}

export function HarvestBackdrop({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <MapleLeaf
        tone="cranberry"
        className="absolute -left-6 top-8 size-20 opacity-[0.12] motion-safe:animate-float-soft md:size-28"
      />
      <MapleLeaf
        tone="maple"
        className="absolute -right-4 top-1/4 size-16 opacity-[0.14] motion-safe:animate-float-soft md:size-24"
      />
      <WheatStem
        tone="gold"
        className="absolute bottom-6 right-4 h-28 w-10 opacity-15 md:h-36"
      />
    </div>
  );
}
