import { cn } from "@/lib/utils";

interface LogoProps {
  /** "dark" para fondos claros, "light" para fondos oscuros (hero). */
  tone?: "dark" | "light";
  className?: string;
}

/** Logotipo tipográfico minimalista de Derviche Construcciones. */
export function Logo({ tone = "dark", className }: LogoProps) {
  return (
    <span className={cn("flex flex-col leading-none select-none", className)}>
      <span
        className={cn(
          "text-lg font-semibold tracking-[0.32em] transition-colors",
          tone === "dark" ? "text-ink" : "text-white",
        )}
      >
        DERVICHE
      </span>
      <span
        className={cn(
          "text-[0.62rem] font-light uppercase tracking-[0.42em] transition-colors",
          tone === "dark" ? "text-steel" : "text-white/70",
        )}
      >
        Construcciones
      </span>
    </span>
  );
}
