import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://signaturegroup.mx"),

  // Título principal y estructura de títulos
  title: {
    default: "Signature Events | Bodas y Eventos Premium en CDMX",
    template: "%s | Signature Events",
  },

  // Descripción que pueden utilizar los buscadores
  description:
    "Diseñamos y coordinamos bodas, eventos corporativos y celebraciones exclusivas en Ciudad de México. Creamos experiencias memorables con elegancia, planeación y atención a cada detalle.",

  // URL canónica de la página principal
  alternates: {
    canonical: "/",
  },

  // Indicaciones para los buscadores
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Metadatos para compartir el sitio
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://signaturegroup.mx/",
    siteName: "Signature Events",
    title: "Signature Events | Bodas y Eventos Premium en CDMX",
    description:
      "Bodas, eventos corporativos y celebraciones exclusivas diseñadas con elegancia en Ciudad de México.",
    images: [
      {
        url: "/hero.webp",
        alt: "Signature Events: diseño y organización de eventos premium",
      },
    ],
  },

  // Vista previa al compartir enlaces en plataformas compatibles
  twitter: {
    card: "summary_large_image",
    title: "Signature Events | Bodas y Eventos Premium en CDMX",
    description:
      "Diseñamos bodas, eventos corporativos y celebraciones exclusivas en Ciudad de México.",
    images: ["/hero.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`
          ${cinzel.variable}
          ${montserrat.variable}
          bg-[#F6F3EF]
          text-[#1A1A1A]
          antialiased
          overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}