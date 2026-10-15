"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-20 bg-[#F6F3EF] pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pt-16 lg:pb-16"
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-12
          px-5
          sm:px-6
          lg:grid-cols-2
          lg:gap-16
          xl:gap-20
        "
      >
        {/* Imagen y distintivo */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-xl lg:max-w-none"
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/2.webp"
              alt="Ambientación de un evento organizado por Signature Events"
              width={800}
              height={1000}
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="
                h-auto
                max-h-[650px]
                w-full
                object-cover
                object-center
              "
            />
          </div>

          {/* Distintivo dorado */}
          <div
            className="
              absolute
              -bottom-4
              right-3
              rounded-xl
              bg-[#D4AF37]
              p-5
              text-black
              shadow-xl
              sm:-bottom-5
              sm:-right-4
              sm:p-7
              lg:-right-5
            "
          >
            <p className="text-3xl font-bold sm:text-4xl">
              100+
            </p>

            <p className="mt-1 text-xs uppercase tracking-[0.12em] sm:text-sm">
              Eventos realizados
            </p>
          </div>
        </motion.div>

        {/* Contenido de la firma */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="pt-2 lg:pt-0"
        >
          <p
            className="
              mb-4
              text-xs
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#B58F21]
              sm:text-sm
              sm:tracking-[0.45em]
            "
          >
            Nuestra firma
          </p>

          <h2
             style={{ fontFamily: "var(--font-cinzel)" }}
              className="
                mb-6
                text-4xl
                leading-[1.15]
                text-[#1A1A1A]
                sm:text-[2.6rem]
                lg:text-5xl
                xl:text-[3.25rem]
            "
          >
            Más de una década creando momentos memorables.
          </h2>

          <div className="mb-7 h-px w-20 bg-[#D4AF37]" />

          <p className="mb-5 text-base leading-8 text-gray-700 sm:text-lg">
            En Signature Events diseñamos y coordinamos bodas,
            eventos corporativos y celebraciones exclusivas donde
            cada detalle se convierte en una experiencia
            cuidadosamente planeada.
          </p>

          <p className="text-base leading-8 text-gray-700 sm:text-lg">
            Durante más de 10 años hemos acompañado a nuestros
            clientes en algunos de los momentos más importantes
            de sus vidas y organizaciones, transformando ideas
            en experiencias elegantes, memorables y ejecutadas
            con excelencia.
          </p>

          {/* Indicadores */}
          <div
            className="
              mt-9
              grid
              grid-cols-2
              gap-x-5
              gap-y-7
              border-t
              border-[#D4AF37]/25
              pt-7
              sm:grid-cols-4
              sm:gap-5
            "
          >
            <div>
              <p className="text-3xl font-semibold text-[#B58F21] sm:text-4xl">
                10+
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Años de experiencia
              </p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-[#B58F21] sm:text-4xl">
                100+
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Eventos realizados
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#B58F21] sm:text-3xl">
                Bodas
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Premium
              </p>
            </div>

            <div>
              <p className="text-2xl font-semibold text-[#B58F21] sm:text-3xl">
                VIP
              </p>
              <p className="mt-1 text-sm text-gray-600">
                Corporativos
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}