"use client";

import { useEffect, useRef, useState } from "react";

export function DeferredIframe({
  src,
  title,
  height,
  className,
}: {
  src: string;
  title: string;
  height: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{ minHeight: height }}
    >
      {active ? (
        <iframe
          src={src}
          title={title}
          width="100%"
          height={height}
          style={{ border: "none", overflow: "hidden" }}
          loading="lazy"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className="mx-auto max-w-full"
        />
      ) : (
        <div
          className="flex h-full items-center justify-center bg-secondary/50 text-sm text-muted-foreground"
          style={{ height }}
          aria-hidden
        >
          Loading post…
        </div>
      )}
    </div>
  );
}
