"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export function Hero() {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: la imagen se desplaza y el contenido se desvanece al hacer scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative flex h-screen min-h-[640px] items-center overflow-hidden"
    >
      {/* Fondo con parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80"
          alt="Obra de construcción en Zona Sur de Buenos Aires"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink/85" />
        <div className="absolute inset-0 opacity-[0.15] noise-overlay" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-7xl px-6 lg:px-8"
      >
        <motion.span
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-white" />
          Construcción y mantenimiento integral · Berazategui
        </motion.span>

        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Construimos confianza.
          <br />
          <span className="text-silver-gradient">Renovamos espacios.</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
        >
          Electricidad, plomería, pintura, durlock, aire acondicionado y
          mantenimiento integral para hogares y empresas.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Button asChild size="lg">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Solicitar presupuesto
              <ArrowRight />
            </a>
          </Button>
          <Button asChild size="lg" variant="light">
            <Link href="#servicios">Ver servicios</Link>
          </Button>
        </motion.div>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute inset-x-0 bottom-8 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/60"
        >
          <ChevronDown className="size-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
