import { quinceanera } from "../data/quinceanera";

export default function Gifts() {
  return (
    <section
      style={{
        padding: "100px 20px",
        textAlign: "center",
        backgroundColor: "#faf7f2",
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          fontSize: "3rem",
        }}
      >
        Mesa de Regalos
      </h2>

      <p>Tu presencia es mi mejor regalo.</p>

      <p>Liverpool Evento:</p>

      <h3>{quinceanera.mesaRegalos.evento}</h3>
    </section>
  );
}