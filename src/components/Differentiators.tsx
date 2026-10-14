export default function Differentiators() {

  const items = [
    "Diseño Personalizado",
    "Experiencias Memorables",
    "Atención al Detalle",
    "Proveedores Premium",
    "Planeación Estratégica",
    "Coordinación Integral"
  ];

  return (
    <section className="py-28 bg-black text-white">

      <div className="max-w-6xl mx-auto">

        <h2 className="
          font-cinzel
          text-5xl
          mb-16
        ">
          Nuestro Diferenciador
        </h2>

        <div className="
          grid
          md:grid-cols-3
          gap-8
        ">

          {items.map(item=>(
            <div
              key={item}
              className="
                border-l-2
                border-[#D4AF37]
                pl-4
              "
            >
              {item}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}