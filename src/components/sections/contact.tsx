"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Reveal } from "@/components/animations/reveal";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { site, emailjsEnabled, whatsappHref } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = React.useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;

    try {
      if (emailjsEnabled) {
        await emailjs.sendForm(
          site.emailjs.serviceId,
          site.emailjs.templateId,
          form,
          { publicKey: site.emailjs.publicKey },
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1200));
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const details = [
    { icon: MapPin, label: "Ubicación", value: site.location },
    { icon: MapPin, label: "Zona de trabajo", value: site.coverage },
    { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { icon: Phone, label: "WhatsApp", value: site.phoneDisplay, href: whatsappHref },
  ];

  return (
    <section id="contacto" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-steel">
              <span className="h-px w-6 bg-silver" />
              Contacto
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Pedí tu presupuesto sin cargo
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-steel">
              Contanos qué necesitás y te respondemos a la brevedad. Trabajamos
              en toda la Zona Sur de Buenos Aires y Capital Federal.
            </p>
          </Reveal>

          <div className="mt-10 space-y-5">
            {details.map((d, i) => {
              const Icon = d.icon;
              const content = (
                <>
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cloud text-ink">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wide text-steel">
                      {d.label}
                    </span>
                    <span className="block text-sm font-medium text-ink">
                      {d.value}
                    </span>
                  </span>
                </>
              );
              return (
                <Reveal key={d.label} delay={0.1 + i * 0.06}>
                  {d.href ? (
                    <a
                      href={d.href}
                      target={d.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 transition-opacity hover:opacity-70"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal direction="left">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-mist bg-cloud/40 p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] sm:p-10"
          >
            <div className="grid grid-cols-1 gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="mb-2 block text-sm font-medium text-ink">
                    Nombre
                  </label>
                  <Input id="nombre" name="nombre" placeholder="Tu nombre" required autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="telefono" className="mb-2 block text-sm font-medium text-ink">
                    Teléfono
                  </label>
                  <Input id="telefono" name="telefono" type="tel" placeholder="11 0000-0000" autoComplete="tel" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                  Email
                </label>
                <Input id="email" name="email" type="email" placeholder="tucorreo@email.com" required autoComplete="email" />
              </div>

              <div>
                <label htmlFor="mensaje" className="mb-2 block text-sm font-medium text-ink">
                  Mensaje
                </label>
                <Textarea id="mensaje" name="mensaje" placeholder="Contanos qué trabajo necesitás..." required />
              </div>

              <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full">
                {status === "submitting" ? "Enviando..." : "Enviar consulta"}
                {status !== "submitting" && <Send />}
              </Button>

              <AnimatePresence mode="wait">
                {status === "success" && (
                  <motion.p
                    key="ok"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-xl bg-ink/5 px-4 py-3 text-sm font-medium text-ink"
                  >
                    <CheckCircle2 className="size-5" />
                    ¡Gracias! Recibimos tu consulta y te contactaremos pronto.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    key="err"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
                  >
                    <AlertCircle className="size-5" />
                    Hubo un error al enviar. Probá de nuevo o escribinos por WhatsApp.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
