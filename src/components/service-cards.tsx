import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  Building2,
  Home,
  BedDouble,
  Package,
  Sparkles,
  RefreshCw,
  Briefcase,
} from "lucide-react";
import type { ServiceRecord } from "@/lib/services";
import { Stagger, StaggerItem } from "@/components/motion";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  "residential-cleaning": Home,
  "deep-cleaning": Sparkles,
  "recurring-cleaning": RefreshCw,
  "airbnb-vacation-rental-cleaning": BedDouble,
  "move-in-move-out-cleaning": Package,
  "office-cleaning": Briefcase,
  "commercial-cleaning": Building2,
};

export function ServiceCards({
  services,
  columns = 3,
}: {
  services: ServiceRecord[];
  columns?: 2 | 3 | 4;
}) {
  const grid =
    columns === 2
      ? "md:grid-cols-2"
      : columns === 4
        ? "md:grid-cols-2 lg:grid-cols-4"
        : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <Stagger className={`grid gap-5 ${grid}`}>
      {services.map((service) => {
        const Icon = icons[service.slug] ?? Sparkles;
        return (
          <StaggerItem key={service.slug}>
            <Link
              href={`/services/${service.slug}`}
              className="group relative block overflow-hidden border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_18px_50px_-28px_rgba(197,163,90,0.65)]"
            >
              <span className="pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100" />
              <div className="mb-4 inline-flex size-11 items-center justify-center rounded-full bg-secondary text-gold-dark transition duration-300 group-hover:-translate-y-0.5 group-hover:bg-gold/15 group-hover:text-gold-dark">
                <Icon className="size-5 transition duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-heading text-xl text-ink transition group-hover:text-gold-dark">
                {service.name}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {service.intro}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gold-dark">
                Learn more
                <ArrowRight className="size-3.5 transition duration-300 group-hover:translate-x-1.5" />
              </span>
            </Link>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
