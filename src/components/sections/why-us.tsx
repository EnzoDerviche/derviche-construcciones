"use client";

import { Counter } from "@/components/animations/counter";
import { Reveal } from "@/components/animations/reveal";
import { MapPin, ShieldCheck, Sparkles, Clock } from "lucide-react";

const stats = [
  { value: 200, prefix: "+", suffix: "", label: "Proyectos realizados" },
  { value: 100, prefix: "", suffix: "%", label: "Compromiso" },
  { value: 30, prefix: "+", suffix: "", label: "Años de experiencia" },
  { value: 1, prefix: "", suffix: "h", label: "Tiempo de respuesta" },
];

const highlights = [
  {
    icon: ShieldCheck,
    title: "Responsabilidad",
    text: "Cumplimos plazos y presupuestos acordados, sin sorpresas.",
  },
  {
    icon: Sparkles,
    title: "Atención personalizada",
    text: "Te acompañamos en cada etapa con trato directo y cercano.",
  },
  {
    icon: MapPin,
    title: "Cobertura Zona Sur y CABA",
    text: "Llegamos a toda la Zona Sur de Buenos Aires y Capital Federal.",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    text: "Respetamos tu tiempo desde el primer contacto hasta la entrega.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
      {/* Textura sutil de fondo */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] noise-overlay" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-silver">
              <span className="h-px w-6 bg-silver/60" />
              Por qué elegirnos
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Resultados que hablan por nosotros
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-balance text-base leading-relaxed text-white/60 sm:text-lg">
              Años de trabajo prolijo y clientes que vuelven a confiar en
              nosotros para cada nuevo proyecto.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="text-center">
              <div className="text-silver-gradient text-5xl font-semibold tracking-tight sm:text-6xl">
                <Counter
                  to={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-3 text-sm font-medium text-white/70">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = h.icon;
            return (
              <Reveal
                key={h.title}
                delay={i * 0.06}
                className="bg-ink p-8"
              >
                <Icon className="size-7 text-silver" strokeWidth={1.5} />
                <h3 className="mt-4 text-base font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {h.text}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
