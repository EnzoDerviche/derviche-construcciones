import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fija la raíz del proyecto (hay otro lockfile en la carpeta superior).
  turbopack: {
    root: __dirname,
  },
  images: {
    // Imágenes de ejemplo (placeholders). Reemplazá por tus propias fotos cuando las tengas.
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
};

export default nextConfig;
