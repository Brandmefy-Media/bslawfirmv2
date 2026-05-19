export function Logo({ light = true, size = "md" }: { light?: boolean; size?: "sm" | "md" | "lg" }) {
  const color = light ? "text-white" : "text-ink";
  const sub = light ? "text-subtext-dark" : "text-ink-soft";
  const sizes = {
    sm: { bs: "text-2xl", main: "text-sm", sub: "text-[9px]" },
    md: { bs: "text-3xl", main: "text-base", sub: "text-[10px]" },
    lg: { bs: "text-5xl", main: "text-xl", sub: "text-xs" },
  }[size];
  return (
    <div className={`font-serif leading-none ${color}`}>
      <div className="flex items-baseline gap-2">
        <span className={`${sizes.bs} font-bold tracking-tight`}>BS</span>
        <span className={`${sizes.main} opacity-60`}>|</span>
        <span className={`${sizes.main} font-normal tracking-[0.2em] uppercase`}>Law Firm</span>
    </div>
  );
}
