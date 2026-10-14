export default function InstagramFeed() {
  return (
    <section
      className="
      py-28
      bg-white
      "
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="
          font-cinzel
          text-center
          text-5xl
          mb-16
          "
        >
          Síguenos en Instagram
        </h2>

        <div
          className="
          grid
          md:grid-cols-4
          gap-4
          "
        >
          {[1,2,3,4].map((item) => (
            <div
              key={item}
              className="
              h-80
              bg-gray-200
              rounded-lg
              "
            />
          ))}
        </div>

      </div>
   </section>
  );
}