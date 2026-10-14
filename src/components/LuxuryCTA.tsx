import CalendlyButton from "@/components/CalendlyButton";

export default function LuxuryCTA() {
  return (
    <section
      className="
      py-32
      bg-black
      text-white
      text-center
      "
    >
      <div className="max-w-4xl mx-auto">

        <h2
          className="
          font-cinzel
          text-5xl
          mb-8
          "
        >
          Cada Evento Merece una Firma
        </h2>

        <p
          className="
          text-xl
          text-[#E8DCC0]
          mb-10
          "
        >
          Diseñamos experiencias únicas
          para quienes buscan algo extraordinario.
        </p>

        <CalendlyButton />

      </div>
    </section>
  );
}