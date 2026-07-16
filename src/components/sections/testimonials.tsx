"use client";

import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Impecables. Renovaron toda la instalación eléctrica de casa en tiempo récord y quedó todo prolijo. Súper recomendables.",
    name: "María Fernanda",
    role: "Quilmes",
  },
  {
    quote:
      "Contratamos el mantenimiento del local y no tuvimos que preocuparnos por nada más. Puntuales y muy profesionales.",
    name: "Diego Martínez",
    role: "Comercio en Berazategui",
  },
  {
    quote:
      "Hicieron durlock, pintura y arreglaron una filtración con membrana. Trato excelente y precios claros desde el inicio.",
    name: "Carla Giménez",
    role: "Avellaneda",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function Testimonials() {
  return (
    <section className="bg-cloud/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
          subtitle="La mejor carta de presentación es la palabra de quienes ya confiaron en nosotros."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.12 }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: EASE },
                },
              }}
              className="flex flex-col justify-between rounded-2xl border border-mist/80 bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
            >
              <div>
                <Quote className="size-8 text-mist" strokeWidth={1.5} />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-ink text-ink"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-slate">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-ink text-sm font-semibold text-white">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-steel">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
