"use client";

import {
  Zap,
  Droplets,
  PaintRoller,
  Layers,
  Home,
  Hammer,
  AirVent,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Zap,
    title: "Electricidad",
    description:
      "Instalaciones, tableros, cableado y reparaciones en Berazategui, Zona Sur y CABA con materiales certificados y normas al día.",
  },
  {
    icon: Droplets,
    title: "Plomería",
    description:
      "Cañerías, desagües, sanitarios y detección de pérdidas con soluciones prolijas y duraderas.",
  },
  {
    icon: PaintRoller,
    title: "Pintura",
    description:
      "Interiores y exteriores con terminaciones impecables, preparación de superficies y acabados premium.",
  },
  {
    icon: Layers,
    title: "Durlock",
    description:
      "Tabiques, cielorrasos y revestimientos en seco para transformar y aislar cualquier ambiente.",
  },
  {
    icon: Home,
    title: "Membrana",
    description:
      "Colocación e impermeabilización de techos y terrazas para protegerte de filtraciones.",
  },
  {
    icon: Hammer,
    title: "Albañilería",
    description:
      "Trabajos generales, reformas y refacciones ejecutados con criterio, orden y calidad.",
  },
  {
    icon: AirVent,
    title: "Aire acondicionado",
    description:
      "Instaladores matriculados en Berazategui y Capital Federal: instalación, carga de gas y mantenimiento de equipos split con garantía.",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Services() {
  return (
    <section id="servicios" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que tu espacio necesita"
          subtitle="Un único equipo en Berazategui para resolver cada detalle de tu obra o mantenimiento en la Zona Sur y Capital Federal, con prolijidad de principio a fin."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.09 }}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative overflow-hidden rounded-2xl border border-mist/80 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-shadow duration-300 hover:shadow-[0_24px_48px_-16px_rgba(0,0,0,0.18)]"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-cloud opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex size-14 items-center justify-center rounded-xl bg-ink text-white transition-transform duration-300 group-hover:scale-105">
                    <Icon className="size-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
