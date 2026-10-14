"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/525552150239"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-18
        right-8
        z-50
        w-16
        h-16
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        text-white
        shadow-2xl
        hover:scale-110
        transition-all
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
}