"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlySection() {
  return (
    <section
      id="calendly"
      className="bg-[#111111] py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p
            className="
              uppercase
              tracking-[8px]
              text-[#D4AF37]
              text-sm
              mb-4
            "
          >
            Agenda una reunión
          </p>

          <h2
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="
              text-white
              text-5xl
              md:text-6xl
            "
          >
            Conversemos sobre tu evento
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Reserva una consulta personalizada y diseñemos
            juntos una experiencia memorable.
          </p>

        </div>

        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-[#D4AF37]/20
            bg-white
          "
        >
          <InlineWidget
            url="https://calendly.com/luisalberto-palomec"
            styles={{
              height: "750px",
            }}
          />
        </div>

      </div>
    </section>
  );
}