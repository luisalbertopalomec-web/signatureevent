export default function Differentiators() {
  const items = [
    "Diseño personalizado",
    "Experiencias memorables",
    "Atención al detalle",
    "Proveedores premium",
    "Planeación estratégica",
    "Coordinación integral",
  ];

  return (
    <section
      id="diferenciador"
      className="
        scroll-mt-24
        bg-[#111111]
        pb-12
        pt-6
        text-white
        sm:pb-12
        sm:pt-8
        lg:pb-14
        lg:pt-8
      "
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Encabezado editorial */}
        <div className="mx-auto mb-6 max-w-4xl text-center sm:mb-8 lg:mb-10">

          <p
            className="
              mb-4
              text-xs
              font-medium
              uppercase
              tracking-[0.35em]
              text-[#D4AF37]
              sm:text-sm
              sm:tracking-[0.45em]
            "
          >
            Por qué Signature
          </p>

          <h2
            style={{ fontFamily: "var(--font-cinzel)" }}
            className="
              mx-auto
              text-3xl
              leading-tight
              text-white
              sm:text-4xl
              lg:text-5xl
            "
          >
            La diferencia está en cada detalle.
          </h2>

          <div
            className="
              mx-auto
              mt-6
              h-px
              w-20
              bg-[#D4AF37]
            "
            aria-hidden="true"
          />

        </div>

        {/* Atributos de Signature Events */}
        <div
          className="
            grid
            grid-cols-1
            gap-x-12
            gap-y-7
            sm:grid-cols-2
            sm:gap-y-8
            lg:grid-cols-3
            lg:gap-x-16
            lg:gap-y-9
          "
        >
          {items.map((item) => (
            <div
              key={item}
              className="
                group
                border-l-2
                border-[#D4AF37]/70
                py-2
                pl-5
                transition-colors
                duration-300
                hover:border-[#D4AF37]
              "
            >
              <p
                className="
                  text-base
                  font-medium
                  tracking-wide
                  text-white/90
                  transition-colors
                  duration-300
                  group-hover:text-[#D4AF37]
                  sm:text-lg
                "
              >
                {item}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}