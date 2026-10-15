"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("contacto");

    if (!contactSection) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setIsContactVisible(entries[0]?.isIntersecting ?? false);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  // Evita que el botón tape los campos del formulario de contacto.
  if (isContactVisible) return null;

  return (
    <a
      href="https://wa.me/525662842573?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20evento."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar a Signature Events por WhatsApp"
      title="Contactar por WhatsApp"
      className="
        fixed
        bottom-5
        right-5
        z-40
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        transition-transform
        duration-300
        hover:scale-105
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#25D366]
        sm:bottom-6
        sm:right-6
        sm:h-16
        sm:w-16
      "
    >
      <FaWhatsapp size={30} aria-hidden="true" />
    </a>
  );
}