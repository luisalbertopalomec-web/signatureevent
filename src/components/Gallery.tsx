"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/1.webp",
  "/2.webp",
  "/3.webp",
  "/4.webp",
  "/5.webp",
  "/6.webp",
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="scroll-mt-24 bg-[#F6F3EF] pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-10 text-center sm:mb-12 lg:mb-14">

          <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm mb-4">
            Portafolio
          </p>

          <h2
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="text-5xl md:text-6xl text-[#1A1A1A]"
          >
            Galería de Experiencias
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Cada celebración es una historia cuidadosamente diseñada.
          </p>

        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">

          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              className="
                mb-6
                overflow-hidden
                rounded-2xl
                shadow-xl
                break-inside-avoid
                group
              "
            >
              <div className="relative">

                <Image
                  src={image}
                  alt={`Evento ${index + 1}`}
                  width={800}
                  height={1200}
                  quality={70}
                  loading="lazy"                  
                  sizes="
                  (max-width:768px) 100vw,
                  (max-width:1200px) 50vw,
                  33vw"
                  className="
                    w-full
                    h-auto
                    object-cover   
                    transition-all
                    duration-700
                    group-hover:scale-110                 
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    group-hover:bg-black/25
                    transition-all
                  "
                />

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}