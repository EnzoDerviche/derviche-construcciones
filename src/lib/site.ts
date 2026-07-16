/**
 * Configuración central del sitio.
 * Editá acá los datos de contacto, servicios, textos, etc.
 * Reemplazá WHATSAPP_NUMBER por el número real (formato internacional, sin +).
 */

export const site = {
  name: "Derviche",
  brand: "Derviche Construcciones",
  tagline: "Construimos confianza. Renovamos espacios.",
  description:
    "Empresa de construcción y mantenimiento integral en Berazategui. Electricidad, plomería, pintura, durlock, aire acondicionado (instaladores matriculados) y más para toda la Zona Sur de Buenos Aires y CABA.",
  location: "Berazategui, Buenos Aires, Argentina",
  coverage: "Zona Sur de Buenos Aires y Capital Federal",
  url: "https://derviche-construcciones.vercel.app",
  email: "derviche.contact@gmail.com",
  phoneDisplay: "+54 9 11 2155-5751",

  // ponytail: número de ejemplo. Cambialo por el real (país + área + número, sin "+" ni espacios).
  whatsappNumber: "5491121555751",
  whatsappMessage: "Hola, quisiera solicitar un presupuesto.",

  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
} as const;

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

/** Enlace de WhatsApp listo para usar. */
export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
