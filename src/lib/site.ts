export const site = {
  name: "Derviche",
  brand: "Derviche Construcciones",
  tagline: "Construimos confianza. Renovamos espacios.",
  description:
    "Empresa de construcción y mantenimiento integral en Berazategui. Electricidad, plomería, pintura, durlock, aire acondicionado (instaladores matriculados) y más para toda la Zona Sur de Buenos Aires y CABA.",
  location: "Berazategui, Buenos Aires, Argentina",
  coverage: "Zona Sur de Buenos Aires y Capital Federal",
  url: "https://derviche-construcciones.vercel.app",
  email: "dervicheconstrucciones@gmail.com",
  phoneDisplay: "+54 9 11 2155-5751",

  whatsappNumber: "5491121555751",
  whatsappMessage: "Hola, quisiera solicitar un presupuesto.",

  social: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
  emailjs: {
    serviceId: "service_n9l2e4s",
    templateId: "template_b35nzvc",
    publicKey: "PfThk_W5p4-WgpSzB",
  },
} as const;

export const emailjsEnabled =
  !!site.emailjs.serviceId && !!site.emailjs.templateId && !!site.emailjs.publicKey;

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
