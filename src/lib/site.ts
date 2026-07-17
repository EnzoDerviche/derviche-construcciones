export const site = {
  name: "Derviche",
  brand: "Derviche Construcciones",
  tagline: "Construimos confianza. Renovamos espacios.",
  description:
    "Construcción y mantenimiento integral en Berazategui, Zona Sur de Buenos Aires y CABA. Electricidad, plomería, pintura, durlock, albañilería y aire acondicionado con instaladores matriculados. Presupuesto sin cargo.",
  location: "Berazategui, Buenos Aires, Argentina",
  coverage: "Zona Sur de Buenos Aires y Capital Federal",
  url: "https://derviche-construcciones.com",
  email: "dervicheconstrucciones@gmail.com",
  phoneDisplay: "+54 9 11 2155-5751",
  phoneE164: "+5491121555751",

  whatsappNumber: "5491121555751",
  whatsappMessage: "Hola, quisiera solicitar un presupuesto.",

  geo: {
    latitude: -34.7653,
    longitude: -58.2106,
  },

  areasServed: [
    "Berazategui",
    "Avellaneda",
    "Quilmes",
    "Lanús",
    "Lomas de Zamora",
    "Florencio Varela",
    "Banfield",
    "Temperley",
    "Adrogué",
    "San José",
    "Wilde",
    "Remedios de Escalada",
    "Bernal",
    "Ezpeleta",
    "Burzaco",
    "Longchamps",
    "Claypole",
    "Capital Federal",
    "CABA",
  ],

  services: [
    "Electricidad",
    "Plomería",
    "Pintura",
    "Durlock",
    "Membrana e impermeabilización",
    "Albañilería",
    "Aire acondicionado",
    "Mantenimiento integral",
  ],

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

export const seo = {
  title:
    "Derviche Construcciones | Construcción y mantenimiento en Berazategui, Zona Sur y CABA",
  description: site.description,
  keywords: [
    "construcción Berazategui",
    "mantenimiento integral Berazategui",
    "empresa de construcción Zona Sur",
    "reformas Zona Sur Buenos Aires",
    "reformas CABA",
    "electricista Berazategui",
    "plomero Zona Sur",
    "pintor Berazategui",
    "durlock Zona Sur",
    "albañil Berazategui",
    "membrana impermeabilización",
    "instalación aire acondicionado Berazategui",
    "instalador matriculado aire acondicionado CABA",
    "mantenimiento edificios Zona Sur",
    "presupuesto construcción Berazategui",
    "electricista CABA",
    "plomero CABA",
    "pintor CABA",
    "durlock CABA",
    "albañil CABA",
    "membrana impermeabilización CABA",
    "instalación aire acondicionado CABA",
    "mantenimiento edificios CABA",
    "presupuesto construcción CABA",
  ],
} as const;

export const faqs = [
  {
    question: "¿Trabajan solo en Berazategui o también en otras zonas?",
    answer:
      "Tenemos base en Berazategui y trabajamos en toda la Zona Sur de Buenos Aires —Avellaneda, Quilmes, Lanús, Lomas de Zamora, Florencio Varela, Banfield, Temperley, Adrogué y más— además de Capital Federal (CABA).",
  },
  {
    question: "¿Qué servicios de construcción y mantenimiento ofrecen?",
    answer:
      "Electricidad, plomería, pintura, durlock, membrana e impermeabilización, albañilería, instalación de aire acondicionado con técnicos matriculados y mantenimiento integral para hogares, comercios y empresas.",
  },
  {
    question: "¿El presupuesto es sin cargo?",
    answer:
      "Sí. Visitamos tu ubicación en Berazategui, Zona Sur o CABA, evaluamos el trabajo y te enviamos un presupuesto claro y sin compromiso.",
  },
  {
    question: "¿Instalan aire acondicionado con matrícula?",
    answer:
      "Sí. Contamos con instaladores matriculados para colocación, carga de gas y mantenimiento de equipos split, con garantía y normativa al día.",
  },
  {
    question: "¿Atienden urgencias de plomería o electricidad?",
    answer:
      "Sí. Resolvemos urgencias de plomería y electricidad en Berazategui, Zona Sur y Capital Federal. Escribinos por WhatsApp para una respuesta rápida.",
  },
] as const;

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
