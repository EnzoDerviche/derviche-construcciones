import { cn } from "@/lib/utils";
import { Reveal } from "@/components/animations/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

/** Encabezado consistente para las secciones (etiqueta + título + bajada). */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "mx-auto max-w-2xl text-center items-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-steel">
            <span className="h-px w-6 bg-silver" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="text-balance text-base leading-relaxed text-steel sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
