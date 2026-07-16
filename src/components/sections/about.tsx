"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";

const values = [
  "Responsabilidad",
  "Puntualidad",
  "Calidad",
  "Atención personalizada",
  "Trabajo prolijo",
  "Emitimos factura",
];

export function About() {
  return (
    <section id="nosotros" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Imagen */}
        <Reveal direction="right">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80"
                alt="Equipo de Derviche Construcciones trabajando"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
            {/* Tarjeta flotante con vidrio esmerilado */}
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-mist bg-white/80 p-6 shadow-[0_24px_48px_-16px_rgba(0,0,0,0.18)] backdrop-blur sm:block">
              <p className="text-4xl font-semibold tracking-tight text-ink">
                +30
              </p>
              <p className="mt-1 text-sm text-steel">años de experiencia</p>
            </div>
          </div>
        </Reveal>

        {/* Texto */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-steel">
              <span className="h-px w-6 bg-silver" />
              Nosotros
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Una empresa que hace las cosas bien
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-steel">
              En Derviche Construcciones combinamos oficio, prolijidad y trato
              cercano. Nacimos en Berazategui y hoy acompañamos a familias,
              comercios y empresas de toda la Zona Sur y CABA en la construcción
              y el mantenimiento de sus espacios.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-steel">
              Creemos que la confianza se construye con hechos: cumpliendo
              plazos, cuidando cada detalle y dejando cada obra impecable.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <li key={value} className="flex items-center gap-3">
                  <span className="flex size-6 items-center justify-center rounded-full bg-ink text-white">
                    <Check className="size-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-sm font-medium text-ink">{value}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
