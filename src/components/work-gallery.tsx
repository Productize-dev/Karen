"use client";

import Image from "next/image";
import { galleryImages } from "@/lib/work";
import { GoldRule, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

export function WorkGallery() {
  return (
    <section className="bg-secondary/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Reveal className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.22em] text-gold-dark">
            Our work
          </p>
          <h2 className="mt-3 font-heading text-4xl text-ink">
            Spaces that feel fresh again
          </h2>
          <p className="mt-3 text-muted-foreground">
            Homes, suites, and kitchens across Middle Tennessee — cleaned with
            care you can see.
          </p>
          <GoldRule className="mt-5 w-20" delay={0.1} />
        </Reveal>

        <Stagger className="grid auto-rows-[180px] gap-3 sm:auto-rows-[220px] md:grid-cols-4 md:auto-rows-[200px]">
          {galleryImages.map((image) => (
            <StaggerItem
              key={image.src}
              className={cn("relative overflow-hidden border border-border", image.className)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-700 ease-out hover:scale-105"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
