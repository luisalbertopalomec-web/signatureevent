"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Servicios", href: "#servicios" },
    { label: "Galería", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        border-b border-[#D4AF37]/15
        bg-black/80
        backdrop-blur-md
      "
    >
      {/* Barra principal */}
      <div
        className="
          mx-auto flex h-20 lg:h-24
          w-full max-w-7xl
          items-center justify-between
          px-5
          sm:px-7
          lg:px-8
        "
      >
        {/* Logotipo */}
        <a
          href="#inicio"
          aria-label="Signature Events, ir al inicio"
          onClick={() => setIsOpen(false)}
          className="shrink-0"
        >
          <Image
            src="/logo.webp"
            alt="Signature Events"
            width={210}
            height={93}
            priority
            sizes="(min-width: 1280px) 200px, (min-width: 1024px) 185px, 150px"
            className="
              h-auto
              w-[135px]
              sm:w-[150px]
              lg:w-[185px]
              xl:w-[200px]
            "
          />
        </a>

        {/* Navegación de escritorio */}
        <nav
          aria-label="Navegación principal"
          className="
            hidden
            items-center
            gap-6
            text-sm
            text-white
            lg:flex
            xl:gap-9
            xl:text-base
          "
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="
                whitespace-nowrap
                py-2
                transition-colors
                duration-200
                hover:text-[#D4AF37]
                focus-visible:text-[#D4AF37]
                focus-visible:outline-none
              "
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botón de menú móvil */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="
            flex h-11 w-11
            items-center justify-center
            rounded-md
            text-white
            transition-colors
            hover:bg-white/10
            hover:text-[#D4AF37]
            lg:hidden
          "
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Navegación móvil */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="
            border-t border-[#D4AF37]/20
            bg-black/95
            lg:hidden
          "
        >
          <nav
            aria-label="Navegación móvil"
            className="
              mx-auto flex
              max-w-7xl
              flex-col
              px-6 py-4
            "
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="
                  border-b border-white/10
                  py-4
                  text-base
                  text-white
                  transition-colors
                  last:border-b-0
                  hover:text-[#D4AF37]
                "
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}