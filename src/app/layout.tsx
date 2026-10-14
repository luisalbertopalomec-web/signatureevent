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
  title: "Signature Events | Eventos Premium",
  description:
    "Planeación de bodas, eventos corporativos y sociales de lujo.",
  keywords: [
    "Wedding Planner",
    "Event Planner",
    "Eventos Corporativos",
    "Bodas",
    "Eventos Sociales",
    "Luxury Events",
    "Signature Events",
  ],
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