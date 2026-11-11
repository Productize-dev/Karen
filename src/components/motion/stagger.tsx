import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={cn("stagger-on-view", className)}
      style={{ "--stagger-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("stagger-item", className)}>{children}</div>;
}
