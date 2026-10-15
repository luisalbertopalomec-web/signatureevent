import { Mail, Phone } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>

            <h3
              style={{ fontFamily: "var(--font-cinzel)" }}
              className="
                text-[#D4AF37]
                text-3xl
                mb-6
              "
            >
              Signature Events
            </h3>

            <p className="text-gray-400 leading-8">
              Diseñamos experiencias memorables
              para bodas, eventos corporativos y
              celebraciones exclusivas.
            </p>

          </div>

          <div>

            <h4 className="text-[#D4AF37] mb-4">
              Navegación
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#inicio">Inicio</a>
              </li>

              <li>
                <a href="#nosotros">Nosotros</a>
              </li>

              <li>
                <a href="#servicios">Servicios</a>
              </li>

              <li>
                <a href="#galeria">Galería</a>
              </li>

            </ul>

          </div>

          <div>

            <h4 className="text-[#D4AF37] mb-4">
              Contacto
            </h4>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3 items-center">
                <Phone size={18} />
                <a href="tel:+525662842573">
                      56 6284 2573
                </a>
              </div>

              <div className="flex items-center gap-3">
              <Mail size={18} className="shrink-0" />

              <a
                href="mailto:cotiza@signaturegroup.mx"
                className="
                  break-all
                  transition-colors
                  duration-200
                  hover:text-[#D4AF37]
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-[#D4AF37]
                "
                aria-label="Enviar correo a cotiza@signaturegroup.mx"
              >
                cotiza@signaturegroup.mx
              </a>
            </div>

            </div>

          </div>

          <div>

            <h4 className="text-[#D4AF37] mb-4">
              Síguenos
            </h4>

            <div className="flex gap-5 text-2xl">

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaLinkedin />
              </a>

              <a href="#">
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        <div
          className="
            border-t
            border-[#D4AF37]/20
            mt-16
            pt-8
            text-center
            text-gray-500
          "
        >
          © {new Date().getFullYear()} Signature Events.
          Todos los derechos reservados.
        </div>

      </div>

    </footer>
  );
}