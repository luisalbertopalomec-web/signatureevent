"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative isolate
        h-[100svh]
        min-h-[620px]
        max-h-[900px]
        overflow-hidden
        scroll-mt-20
      "
    >
      {/* Fondo cinematográfico */}
      <Image
        src="/hero.webp"
        alt="Ambientación elegante de un evento Signature Events"
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Oscurecimiento del fondo */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-black/60
          via-black/55
          to-black/75
        "
        aria-hidden="true"
      />

      {/* Contenido de portada */}
      <div
        className="
          relative z-10
          flex h-full
          items-center justify-center
          px-5
          pb-6 pt-24
          sm:px-8
          lg:px-10
        "
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto w-full max-w-6xl text-center"
        >
          <p
            className="
              mb-4
              text-[0.65rem]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#D4AF37]
              sm:text-xs
              sm:tracking-[0.4em]
              lg:text-sm
            "
          >
            Luxury Event Planning
          </p>

          <div
            className="mx-auto h-px w-16 bg-[#D4AF37]"
            aria-hidden="true"
          />

          <h1
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="
              mx-auto
              my-5
              max-w-[76rem]
              text-4xl
              leading-[1.03]
              tracking-[-0.025em]
              text-white
              sm:my-6
              sm:text-5xl
              md:text-6xl
              lg:text-6xl
              xl:text-7xl
              2xl:text-[4.75rem]
            "
          >
            <span className="block">Eventos que</span>
            <span className="block">cuentan historias</span>
          </h1>

          <div
            className="
              mx-auto
              my-5
              h-px
              w-20
              bg-[#D4AF37]
              sm:my-6
              sm:w-24
            "
            aria-hidden="true"
          />

          <p
            className="
              mx-auto
              max-w-3xl
              text-base
              leading-relaxed
              text-[#E8DCC0]
              sm:text-lg
              lg:text-xl
            "
          >
            Diseñamos bodas, eventos corporativos y experiencias
            extraordinarias donde cada detalle refleja elegancia,
            emoción y excelencia.
          </p>

          <div
            className="
              mt-6
              flex
              flex-col
              items-stretch
              justify-center
              gap-3
              sm:mt-7
              sm:flex-row
              sm:items-center
              sm:gap-5
            "
          >
            <a
              href="#contacto"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                rounded-md
                border border-[#D4AF37]
                bg-[#D4AF37]
                px-7 py-3
                text-sm
                font-semibold
                text-black
                transition-colors duration-300
                hover:border-[#E8CC69]
                hover:bg-[#E8CC69]
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#D4AF37]
                sm:min-w-56
              "
            >
              Solicitar Cotización
            </a>

            <a
              href="#galeria"
              className="
                inline-flex
                min-h-12
                items-center
                justify-center
                rounded-md
                border border-white/50
                bg-black/20
                px-7 py-3
                text-sm
                font-medium
                text-white
                transition-colors duration-300
                hover:border-[#D4AF37]
                hover:bg-[#D4AF37]
                hover:text-black
                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-[#D4AF37]
                sm:min-w-52
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