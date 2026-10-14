"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="nosotros"
      className="bg-[#F6F3EF] py-32"
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-20
          items-center
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/2.webp"
            alt="Signature Events"
            width={800}
            height={1000}
            className="
              rounded-2xl
              object-cover
              shadow-2xl
            "
          />

          <div
            className="
              absolute
              -bottom-8
              -right-8
              bg-[#D4AF37]
              text-black
              p-8
              rounded-xl
              shadow-xl
            "
          >
            <p className="text-4xl font-bold">
              100+
            </p>

            <p
              className="
                text-sm
                uppercase
                tracking-widest
              "
            >
              Eventos Realizados
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="
              uppercase
              tracking-[8px]
              text-[#D4AF37]
              mb-4
              text-sm
            "
          >
            Nuestra Firma
          </p>

          <h2
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="
              text-5xl
              md:text-6xl
              text-[#1A1A1A]
              leading-tight
              mb-8
            "
          >
            Más de una década
            creando momentos
            memorables.
          </h2>

          <div className="w-24 h-px bg-[#D4AF37] mb-8" />

          <p className="text-lg text-gray-700 leading-9 mb-6">
            En Signature Events diseñamos y coordinamos
            bodas, eventos corporativos y celebraciones
            exclusivas donde cada detalle se convierte
            en una experiencia cuidadosamente planeada.
          </p>

          <p className="text-lg text-gray-700 leading-9">
            Durante más de 10 años hemos acompañado a
            nuestros clientes en algunos de los momentos
            más importantes de sus vidas y organizaciones,
            transformando ideas en experiencias elegantes,
            memorables y ejecutadas con excelencia.
          </p>

          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-8
              mt-12
            "
          >
            <div>
              <p className="text-4xl font-bold text-[#D4AF37]">
                10+
              </p>
              <p className="text-gray-600">Años</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#D4AF37]">
                100+
              </p>
              <p className="text-gray-600">Eventos</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#D4AF37]">
                Bodas
              </p>
              <p className="text-gray-600">Premium</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-[#D4AF37]">
                VIP
              </p>
              <p className="text-gray-600">Corporativos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}