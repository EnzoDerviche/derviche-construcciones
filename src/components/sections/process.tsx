"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, MapPin, FileText, HardHat, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

type Step = { icon: LucideIcon; title: string; text: string };

const steps: Step[] = [
  {
    icon: MessageSquare,
    title: "Nos contactás",
    text: "Contanos qué necesitás por WhatsApp o el formulario. Te respondemos rápido.",
  },
  {
    icon: MapPin,
    title: "Visitamos tu ubicación",
    text: "Coordinamos una visita para relevar el trabajo y entender tus objetivos.",
  },
  {
    icon: FileText,
    title: "Presupuesto",
    text: "Recibís un presupuesto claro y detallado, sin costos ocultos.",
  },
  {
    icon: HardHat,
    title: "Comenzamos el trabajo",
    text: "Ejecutamos el trabajo con prolijidad y te mantenemos al tanto en cada etapa.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Process() {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 65%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Un proceso simple y transparente"
          subtitle="Cuatro pasos para llevar tu proyecto de la idea a la realidad."
        />

        <div ref={ref} className="relative mt-16 pl-8 sm:pl-0">
          <div className="absolute bottom-4 left-[15px] top-4 w-px bg-mist sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            style={{ scaleY: lineScale }}
            className="absolute bottom-4 left-[15px] top-4 w-px origin-top bg-ink sm:left-1/2 sm:-translate-x-1/2"
          />

          <ul className="space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;
              return (
                <li
                  key={step.title}
                  className="relative sm:grid sm:grid-cols-2 sm:gap-x-12"
                >
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="absolute left-0 top-1 flex size-8 items-center justify-center rounded-full border border-mist bg-white text-ink shadow-sm sm:left-1/2 sm:-translate-x-1/2"
                  >
                    <span className="size-2.5 rounded-full bg-ink" />
                  </motion.span>

                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className={
                      isLeft
                        ? "pl-12 sm:col-start-1 sm:pl-0 sm:pr-12 sm:text-right"
                        : "pl-12 sm:col-start-2 sm:pl-12"
                    }
                  >
                    <div
                      className={
                        isLeft
                          ? "inline-flex items-center gap-3 sm:flex-row-reverse"
                          : "inline-flex items-center gap-3"
                      }
                    >
                      <span className="flex size-10 items-center justify-center rounded-xl bg-cloud text-ink">
                        <Icon className="size-5" strokeWidth={1.5} />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-steel">
                        Paso {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-tight text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel">
                      {step.text}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
