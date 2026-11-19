"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { business } from "@/lib/business";
import { thanksgiving } from "@/lib/seasonal";
import { featuredVideo } from "@/lib/work";
import { MapleLeaf } from "@/components/harvest-accents";
import { Button } from "@/components/ui/button";
import { GoldRule, Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";

export function FeaturedVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    const video = videoRef.current;
    if (!video) return;
    void video.play();
    setPlaying(true);
  }

  return (
    <section className="relative overflow-hidden border-y border-border bg-ink py-16 text-cream md:py-24">
      <div className="absolute inset-x-0 top-0 h-1 bg-cranberry" aria-hidden />
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <MapleLeaf
          tone="gold"
          className="absolute left-[8%] top-16 size-20 opacity-30 motion-safe:animate-float-soft md:size-28"
        />
        <MapleLeaf
          tone="cranberry"
          className="absolute right-[10%] bottom-20 size-16 rotate-12 opacity-35 motion-safe:animate-float-soft md:size-24"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        <Reveal className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.22em] text-harvest">
            {thanksgiving.videoEyebrow}
          </p>
          <h2 className="mt-3 font-heading text-4xl text-cream md:text-5xl lg:text-6xl">
            {featuredVideo.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-cream/75 md:text-lg">
            {featuredVideo.description}
          </p>
          <GoldRule className="mx-auto mt-5 w-24" delay={0.1} />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="relative mx-auto w-full max-w-[420px] overflow-hidden border border-maple/45 bg-black shadow-[0_30px_80px_-40px_rgba(196,92,38,0.55)] md:max-w-[480px]">
            <div className="relative aspect-[9/16] w-full">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src={featuredVideo.src}
                poster={featuredVideo.poster}
                controls={playing}
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
              >
                Your browser does not support the video tag.
              </video>

              <button
                type="button"
                onClick={handlePlay}
                aria-label={`Play ${featuredVideo.title}`}
                className={cn(
                  "absolute inset-0 flex items-center justify-center bg-ink/55 transition duration-300",
                  playing && "pointer-events-none opacity-0"
                )}
              >
                <span className="inline-flex size-20 items-center justify-center rounded-full bg-cranberry text-cream transition hover:scale-105 hover:bg-maple md:size-24">
                  <Play className="ml-1 size-8 fill-current md:size-10" />
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center" delay={0.12}>
          <Button
            asChild
            size="lg"
            className="bg-cranberry text-base font-semibold text-cream transition hover:bg-maple md:text-lg"
          >
            <Link href="/quote">{business.estimateCta}</Link>
          </Button>
          <p className="text-sm uppercase tracking-[0.18em] text-harvest sm:ml-2">
            {business.firstVisitOffer} {business.firstVisitOfferDetail}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
