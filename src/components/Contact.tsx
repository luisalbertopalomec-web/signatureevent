"use client";

import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
} from "lucide-react";

import { motion } from "framer-motion";

type FormStatus = {
  type: "success" | "error";
  message: string;
} | null;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      eventType: String(formData.get("eventType") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "No pudimos enviar tu solicitud."
        );
      }

      setStatus({
        type: "success",
        message:
          result.message ||
          "Tu solicitud se envió correctamente.",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Ocurrió un error al enviar tu solicitud.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      id="contacto"
      className="
        scroll-mt-24
        bg-[#F6F3EF]
        pt-8 pb-12
        sm:pt-10 sm:pb-14
        lg:pt-12 lg:pb-16
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          items-center
          gap-10
          px-5
          sm:px-6
          lg:grid-cols-2
          lg:gap-14
          xl:gap-16
        "
      >
        {/* Información de contacto */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[8px] text-[#D4AF37]">
            Contacto
          </p>

          <h2
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="
              mb-6
              text-4xl
              leading-[1.12]
              text-[#1A1A1A]
              sm:text-5xl
              xl:text-6xl
            "
          >
            Hagamos realidad
            <br />
            tu próximo evento.
          </h2>

          <p className="mb-12 text-lg leading-9 text-gray-600">
            Más de 10 años diseñando bodas y eventos corporativos
            que superan expectativas.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Phone
                className="shrink-0 text-[#D4AF37]"
                aria-hidden="true"
              />

              <a
                href="tel:+525662842573"
                className="transition-colors hover:text-[#B58F21]"
              >
                56 6284 2573
              </a>
            </div>

            <div className="flex items-center gap-4">
              <Mail
                className="shrink-0 text-[#D4AF37]"
                aria-hidden="true"
              />

              <a
                href="mailto:cotiza@signaturegroup.mx"
                className="transition-colors hover:text-[#B58F21]"
              >
                cotiza@signaturegroup.mx
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin
                className="shrink-0 text-[#D4AF37]"
                aria-hidden="true"
              />

              <span>Ciudad de México</span>
            </div>

            <div className="flex items-center gap-4">
              <Calendar
                className="shrink-0 text-[#D4AF37]"
                aria-hidden="true"
              />

              <span>Atención previa cita</span>
            </div>
          </div>

          <a
            href="https://calendly.com/luisalberto-palomec"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-12
              inline-flex
              items-center
              justify-center
              rounded-lg
              bg-[#D4AF37]
              px-8 py-4
              font-semibold
              text-black
              transition-colors
              hover:bg-[#E8CC69]
            "
          >
            Agendar Consulta
          </a>
        </motion.div>

        {/* Formulario de cotización */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            rounded-2xl
            bg-white
            p-6
            shadow-xl
            sm:p-8
            lg:p-9
          "
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5"
          >
            <label className="sr-only" htmlFor="contact-name">
              Nombre completo
            </label>

            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Nombre completo"
              autoComplete="name"
              maxLength={120}
              required
              className="
                w-full
                rounded-lg
                border border-gray-300
                p-4
                text-gray-900
                outline-none
                transition
                focus:border-[#D4AF37]
                focus:ring-2
                focus:ring-[#D4AF37]/20
              "
            />

            <label className="sr-only" htmlFor="contact-email">
              Correo electrónico
            </label>

            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Correo electrónico"
              autoComplete="email"
              maxLength={254}
              required
              className="
                w-full
                rounded-lg
                border border-gray-300
                p-4
                text-gray-900
                outline-none
                transition
                focus:border-[#D4AF37]
                focus:ring-2
                focus:ring-[#D4AF37]/20
              "
            />

            <label className="sr-only" htmlFor="contact-phone">
              Teléfono
            </label>

            <input
              id="contact-phone"
              name="phone"
              type="tel"
              placeholder="Teléfono"
              autoComplete="tel"
              maxLength={30}
              required
              className="
                w-full
                rounded-lg
                border border-gray-300
                p-4
                text-gray-900
                outline-none
                transition
                focus:border-[#D4AF37]
                focus:ring-2
                focus:ring-[#D4AF37]/20
              "
            />

            <label className="sr-only" htmlFor="contact-event-type">
              Tipo de evento
            </label>

            <select
              id="contact-event-type"
              name="eventType"
              required
              defaultValue=""
              className="
                w-full
                rounded-lg
                border border-gray-300
                bg-white
                p-4
                text-gray-900
                outline-none
                transition
                focus:border-[#D4AF37]
                focus:ring-2
                focus:ring-[#D4AF37]/20
              "
            >
              <option value="" disabled>
                Selecciona el tipo de evento
              </option>

              <option value="Boda">Boda</option>

              <option value="Evento Corporativo">
                Evento Corporativo
              </option>

              <option value="Evento Social">
                Evento Social
              </option>
            </select>

            <label className="sr-only" htmlFor="contact-message">
              Cuéntanos sobre tu evento
            </label>

            <textarea
              id="contact-message"
              name="message"
              rows={5}
              maxLength={5000}
              required
              placeholder="Cuéntanos sobre tu evento"
              className="
                w-full
                resize-y
                rounded-lg
                border border-gray-300
                p-4
                text-gray-900
                outline-none
                transition
                focus:border-[#D4AF37]
                focus:ring-2
                focus:ring-[#D4AF37]/20
              "
            />

            {/* Mensajes para el visitante */}
            {status && (
              <div
                role="status"
                aria-live="polite"
                className={`
                  rounded-lg
                  border
                  p-4
                  text-sm
                  ${
                    status.type === "success"
                      ? "border-green-200 bg-green-50 text-green-800"
                      : "border-red-200 bg-red-50 text-red-800"
                  }
                `}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full
                rounded-lg
                bg-[#D4AF37]
                py-4
                font-semibold
                text-black
                transition-colors
                hover:bg-[#E8CC69]
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              {isSubmitting
                ? "Enviando solicitud..."
                : "Solicitar Cotización"}
            </button>

            <p className="text-xs leading-5 text-gray-500">
              Utilizaremos tus datos únicamente para atender tu
              solicitud de cotización y dar seguimiento a tu evento.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}