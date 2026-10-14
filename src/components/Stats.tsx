const stats = [
  {
    value: "150+",
    label: "Eventos Realizados"
  },
  {
    value: "98%",
    label: "Clientes Satisfechos"
  },
  {
    value: "10+",
    label: "Años de Experiencia"
  },
  {
    value: "5000+",
    label: "Invitados Atendidos"
  }
];

export default function Stats() {
  return (
    <section
      className="
      py-24
      bg-[#1A1A1A]
      text-white
      "
    >
      <div
        className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-4
        gap-8
        text-center
        "
      >
        {stats.map((stat) => (
          <div key={stat.label}>

            <h2
              className="
              text-5xl
              font-bold
              text-[#D4AF37]
              "
            >
              {stat.value}
            </h2>

            <p className="mt-3">
              {stat.label}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}