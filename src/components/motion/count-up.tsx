export function CountUp({
  value,
  suffix = "",
  prefix = "",
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
