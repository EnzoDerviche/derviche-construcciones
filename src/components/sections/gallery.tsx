"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

type Photo = { src: string; alt: string; w: number; h: number };

const url = (id: string, w: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const photos: Photo[] = [
  { src: url("photo-1600585154340-be6161a56a0c", 900), alt: "Living renovado", w: 900, h: 600 },
  { src: url("photo-1503387762-592deb58ef4e", 900), alt: "Obra en ejecución", w: 900, h: 1200 },
  { src: url("photo-1600566753086-00f18fb6b3ea", 900), alt: "Dormitorio reformado", w: 900, h: 675 },
  { src: url("photo-1504307651254-35680f356dfd", 900), alt: "Trabajo de albañilería", w: 900, h: 675 },
  { src: url("photo-1600607687920-4e2a09cf159d", 900), alt: "Cocina moderna", w: 900, h: 1200 },
  { src: url("photo-1581858726788-75bc0f6a952d", 900), alt: "Trabajos de pintura", w: 900, h: 600 },
  { src: url("photo-1600607688969-a5bfcd646154", 900), alt: "Baño renovado", w: 900, h: 675 },
  { src: url("photo-1416339306562-f3d12fefd36f", 900), alt: "Detalle de terminación", w: 900, h: 1200 },
];

export function Gallery() {
  const [index, setIndex] = React.useState<number | null>(null);

  const close = React.useCallback(() => setIndex(null), []);
  const prev = React.useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + photos.length) % photos.length)),
    [],
  );
  const next = React.useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % photos.length)),
    [],
  );

  React.useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, prev, next]);

  return (
    <section id="galeria" className="bg-cloud/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Galería"
          title="Trabajos que hablan solos"
          subtitle="Una muestra de obras y reformas. Cuidamos cada terminación como si fuera nuestra."
        />

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group mb-5 block w-full overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.w}
                  height={photo.h}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25" />
                <span className="absolute bottom-4 left-4 translate-y-3 text-sm font-medium text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.alt}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-5 top-5 rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <X className="size-7" />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Anterior"
              className="absolute left-3 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:left-6"
            >
              <ChevronLeft className="size-8" />
            </button>

            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] w-auto max-w-5xl"
            >
              <Image
                src={photos[index].src}
                alt={photos[index].alt}
                width={photos[index].w}
                height={photos[index].h}
                sizes="90vw"
                className="max-h-[85vh] w-auto rounded-xl object-contain"
              />
            </motion.div>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Siguiente"
              className="absolute right-3 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white sm:right-6"
            >
              <ChevronRight className="size-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
