"use client";

import { motion } from "framer-motion";
import {
  Gem,
  Building2,
  PartyPopper,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Bodas Premium",
      description:
        "Planeación integral de bodas exclusivas y experiencias memorables.",
      icon: <Gem size={42} />,
    },
    {
      title: "Eventos Corporativos",
      description:
        "Eventos empresariales diseñados para fortalecer marca y relaciones.",
      icon: <Building2 size={42} />,
    },
    {
      title: "Celebraciones Sociales",
      description:
        "Eventos privados, aniversarios y celebraciones personalizadas.",
      icon: <PartyPopper size={42} />,
    },
  ];

  return (
    <section
      id="servicios"
      className="scroll-mt-24 bg-[#111111] pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-8"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-8 text-center sm:mb-10 lg:mb-12">

          <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm mb-4">
            Servicios
          </p>

          <h2
             style={{ fontFamily: "var(--font-cinzel)" }}
              className="
                mx-auto
                max-w-6xl
                text-white
                text-4xl
                leading-tight
                sm:text-5xl
                lg:text-[3.25rem]
                2xl:text-[3.5rem]
            "
          >
            Diseñamos experiencias únicas
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="
                bg-white/5
                backdrop-blur-md
                border
                border-[#D4AF37]/20
                rounded-2xl
                p-10
                text-center
                hover:border-[#D4AF37]
                transition-all
              "
            >
              <div
                className="
                  text-[#D4AF37]
                  mb-6
                  flex
                  justify-center
                "
              >
                {service.icon}
              </div>

              <h3 className="text-white text-2xl mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {service.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}