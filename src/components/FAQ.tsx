const faqs = [
  {
    q: "¿Organizan bodas destino?",
    a: "Sí. Planeamos y coordinamos bodas nacionales e internacionales."
  },
  {
    q: "¿Trabajan eventos corporativos?",
    a: "Sí. Convenciones, lanzamientos, premiaciones y experiencias ejecutivas."
  },
  {
    q: "¿Cuánto tiempo antes debo contratar?",
    a: "Idealmente entre 6 y 12 meses antes del evento."
  },
  {
    q: "¿Ofrecen proveedores?",
    a: "Sí. Contamos con una red de proveedores cuidadosamente seleccionados."
  }
];

export default function FAQ() {
  return (
    <section
      className="
      py-28
      bg-[#F6F3EF]
      "
    >
      <div className="max-w-4xl mx-auto">

        <h2
          className="
          font-cinzel
          text-5xl
          text-center
          mb-16
          "
        >
          Preguntas Frecuentes
        </h2>

        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="
            mb-8
            border-b
            pb-6
            "
          >
            <h3
              className="
              font-semibold
              text-xl
              mb-2
              "
            >
              {faq.q}
            </h3>

            <p>{faq.a}</p>

          </div>
        ))}

      </div>
    </section>
  );
}