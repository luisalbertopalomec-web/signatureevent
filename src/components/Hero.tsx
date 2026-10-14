"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative
      min-h-[45vh]
      lg:min-h-screen
      overflow-hidden"
    >
      <Image
        src="/hero.webp"
        alt="Signature Events"
        fill
        priority
        quality={85}
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/72"
      />
      <div className="relative z-10 min-h-screen flex items-start
       lg:items-center justify-center px-6 pt-30 lg:pt-32">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-5xl text-center lg:translate-y-0"
        >
          <p
            className="
              uppercase
              tracking-[10px]
              text-[#D4AF37]
              text-sm
              mb-6
            "
          >
            Luxury Event Planning
          </p>
          <div className="w-16 h-px bg-[#D4AF37] mx-auto my-6" />
          <h1
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="
              text-white
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-[6.2rem] x1:text-[5.5]
              leading-[0.95]
            "
          >
            Eventos que
            <br />
            cuentan historias
          </h1>

          <div className="w-24 h-px bg-[#D4AF37] mx-auto my-8" />

          <p
            className="
              text-[#E8DCC0]
              text-lg
              md:text-2xl
              max-w-3xl
              mx-auto
            "
          >
            Diseñamos bodas, eventos corporativos y experiencias
            extraordinarias donde cada detalle refleja elegancia,
            emoción y excelencia.
          </p>

          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-5
              mt-10
            "
          >
            <a
              href="#contacto"
              className="
                bg-[#D4AF37]
                text-black
                px-10
                py-4
                rounded-md
                font-medium
                hover:scale-105
                transition-all
              "
            >
              Solicitar Cotización
            </a>

            <a
              href="#galeria"
              className="
                border
                border-white/50
                text-white
                px-10
                py-4
                rounded-md
                hover:bg-white
                hover:text-black
                transition-all
              "
            >
              Ver Portafolio
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}