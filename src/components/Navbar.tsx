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
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-black/60
        backdrop-blur-md
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-2
          flex
          justify-between
          items-center
        "
      >
        <a href="#inicio">
          <Image
            src="/logo.webp"
            alt="Signature Events"
            width={180}
            height={80}
            priority
            className="
            w-[120px]
            lg:w-[180px]
            h-auto"
          />
        </a>

        {/* Desktop */}

        <nav className="hidden lg:flex gap-10 text-white">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#D4AF37] transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div
          className="
            lg:hidden
            bg-black
            border-t
            border-[#D4AF37]/20
          "
        >
          <nav className="flex flex-col p-6 gap-6 text-white">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#D4AF37]"
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