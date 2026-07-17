import { faqs } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";

export function Faq() {
  return (
    <section id="preguntas-frecuentes" className="bg-cloud py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas antes de empezar"
          subtitle="Información clara sobre nuestros servicios de construcción y mantenimiento en Berazategui, Zona Sur y Capital Federal."
        />

        <div className="mt-12 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-mist bg-white px-6 py-5 open:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.12)]"
            >
              <summary className="cursor-pointer list-none text-base font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-steel">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
