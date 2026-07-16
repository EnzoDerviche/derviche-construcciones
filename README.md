# Derviche Construcciones — Landing page

Landing page moderna, premium y responsive para **Derviche Construcciones**
(construcción y mantenimiento integral en Berazategui, Zona Sur de Buenos Aires
y CABA).

Construida con **Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer
Motion**, con animaciones suaves, parallax, contadores animados, galería con
lightbox y formulario de contacto listo para conectar a un backend.

## Requisitos

- Node.js 18.18+ (recomendado 20+)

## Puesta en marcha

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando         | Descripción                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Servidor de desarrollo               |
| `npm run build` | Build de producción                  |
| `npm run start` | Sirve el build de producción         |
| `npm run lint`  | Linter (ESLint)                      |

## Estructura

```
src/
├─ app/
│  ├─ layout.tsx        # Metadata/SEO, fuentes, Navbar, Footer, botón WhatsApp
│  ├─ page.tsx          # Composición de todas las secciones
│  ├─ globals.css       # Tokens de diseño (colores, utilidades, glass, noise)
│  └─ icon.svg          # Favicon temporal (monograma)
├─ components/
│  ├─ ui/               # Primitivos estilo shadcn (button, card, input, textarea)
│  ├─ animations/       # Reveal (scroll reveal), Counter (contadores)
│  ├─ layout/           # Navbar, Footer
│  ├─ sections/         # Hero, Services, WhyUs, Gallery, Process, About,
│  │                    # Testimonials, Contact
│  ├─ logo.tsx          # Logotipo tipográfico
│  ├─ section-heading.tsx
│  └─ whatsapp-button.tsx
└─ lib/
   ├─ site.ts           # ⚙️ Configuración central (contacto, WhatsApp, redes)
   └─ utils.ts          # helper cn()
```

## Personalización rápida

Casi todo se edita desde **`src/lib/site.ts`**:

- **Número de WhatsApp**: reemplazá `whatsappNumber` (formato internacional sin
  `+`, ej. `5491123456789`).
- **Email, teléfono, ubicación y redes sociales**.
- **Textos** de marca (nombre, tagline, descripción).

### Imágenes

Las imágenes son placeholders de [Unsplash](https://unsplash.com). Reemplazalas
por fotos reales de tus obras:

- Hero: `src/components/sections/hero.tsx`
- Galería: `src/components/sections/gallery.tsx`
- Nosotros: `src/components/sections/about.tsx`

Si usás otro dominio de imágenes, agregalo en `next.config.ts` →
`images.remotePatterns`.

### Conectar el formulario de contacto

El formulario (`src/components/sections/contact.tsx`) ya maneja estados de
envío, éxito y error. Actualmente **simula** el envío. Para conectarlo, buscá el
bloque marcado con `ponytail:` dentro de `handleSubmit` y usá por ejemplo:

- **EmailJS**: `emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)`
- **Resend / backend propio**: `fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })`

## Diseño

- Paleta monocromática (blanco, grises, negro) con acento **plateado/metálico**.
- Tipografía Geist, mucho espacio en blanco, bordes suaves y sombras sutiles.
- Glassmorphism aplicado con criterio (navbar al hacer scroll, tarjetas).
- Animaciones con Framer Motion: fade up, reveal, stagger, parallax, hover y
  contadores. Respeta `prefers-reduced-motion`.

## Despliegue

Optimizada para [Vercel](https://vercel.com). Importá el repo y desplegá; no
requiere variables de entorno para funcionar (salvo que conectes el formulario).
