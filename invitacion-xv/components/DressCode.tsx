import { quinceanera } from "../data/quinceanera";

export default function DressCode() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          fontSize: "3rem",
        }}
      >
        Dress Code
      </h2>

      <h3>{quinceanera.DressCode.tipo}</h3>

      <p>Evitar colores:</p>

      {quinceanera.DressCode.evitar.map(
        (color, index) => (
          <p key={index}>❌ {color}</p>
        )
      )}
    </section>
  );
}