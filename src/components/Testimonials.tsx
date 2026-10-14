"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      photo: "/1.webp",
      name: "Mariana & Alejandro",
      type: "Boda de Destino",
      location: "Riviera Maya",
      text: "Signature Events convirtió nuestro sueño en una experiencia extraordinaria.",
    },
    {
      photo: "/2.webp",
      name: "Grupo Nexus",
      type: "Evento Corporativo",
      location: "Ciudad de México",
      text: "La organización fue impecable y superó todas nuestras expectativas.",
    },
    {
      photo: "/3.webp",
      name: "Fernanda Rodríguez",
      type: "Celebración Privada",
      location: "Querétaro",
      text: "Profesionalismo, elegancia y una ejecución impecable.",
    },
  ];

  return (
    <section
      id="testimonios"
      className="bg-[#111111] py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm mb-4">
            Testimonios
          </p>

          <h2
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="text-white text-5xl md:text-6xl"
          >
            Historias de confianza
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="
                bg-white/5
                backdrop-blur-md
                border
                border-[#D4AF37]/20
                rounded-2xl
                overflow-hidden
                hover:border-[#D4AF37]
                transition-all
              "
            >
              <Image
                src={item.photo}
                alt={item.name}
                width={500}
                height={350}
                quality={80}
                loading="lazy"
                className="
                  w-full
                  h-72
                  object-cover
                "
              />

              <div className="p-8">

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#D4AF37"
                      color="#D4AF37"
                    />
                  ))}
                </div>

                <p className="text-gray-300 leading-8 mb-8">
                  {item.text}
                </p>

                <h4 className="text-white text-xl font-semibold">
                  {item.name}
                </h4>

                <p className="text-[#D4AF37] text-sm mt-2">
                  {item.type}
                </p>

                <p className="text-gray-500 text-sm">
                  {item.location}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}