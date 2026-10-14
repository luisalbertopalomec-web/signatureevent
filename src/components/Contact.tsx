"use client";

import {
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contacto"
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
        "
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[8px] text-[#D4AF37] text-sm mb-4">
            Contacto
          </p>

          <h2
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="text-5xl md:text-6xl mb-8"
          >
            Hagamos realidad
            tu próximo evento.
          </h2>

          <p className="text-gray-600 text-lg leading-9 mb-12">
            Más de 10 años diseñando bodas y eventos corporativos
            que superan expectativas.
          </p>

          <div className="space-y-8">

            <div className="flex gap-4 items-center">
              <Phone className="text-[#D4AF37]" />
              <span>+52 56 6284 2573</span>
            </div>

            <div className="flex gap-4 items-center">
              <Mail className="text-[#D4AF37]" />
              <span>hola@signatureevents.mx</span>
            </div>

            <div className="flex gap-4 items-center">
              <MapPin className="text-[#D4AF37]" />
              <span>Ciudad de México</span>
            </div>

            <div className="flex gap-4 items-center">
              <Calendar className="text-[#D4AF37]" />
              <span>Atención previa cita</span>
            </div>

          </div>

          <a
            href="https://calendly.com/luisalberto-palomec"
            className="
              inline-block
              mt-12
              bg-[#D4AF37]
              text-black
              px-8
              py-4
              rounded-lg
              font-semibold
              hover:scale-105
              transition-all
            "
          >
            Agendar Consulta
          </a>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="
            bg-white
            rounded-3xl
            p-10
            shadow-2xl
          "
        >
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Nombre completo"
              className="w-full border border-gray-300 rounded-lg p-4"
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              className="w-full border border-gray-300 rounded-lg p-4"
            />

            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full border border-gray-300 rounded-lg p-4"
            />

            <select
              className="w-full border border-gray-300 rounded-lg p-4"
            >
              <option>Boda</option>
              <option>Evento Corporativo</option>
              <option>Evento Social</option>
            </select>

            <textarea
              rows={6}
              placeholder="Cuéntanos sobre tu evento"
              className="w-full border border-gray-300 rounded-lg p-4"
            />

            <button
              type="submit"
              className="
                w-full
                bg-[#D4AF37]
                text-black
                py-4
                rounded-lg
                font-semibold
                hover:scale-[1.02]
                transition-all
              "
            >
              Solicitar Cotización
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}