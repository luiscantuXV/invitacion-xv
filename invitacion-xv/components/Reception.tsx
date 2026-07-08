import { quinceanera } from "../data/quinceanera";

export default function Reception() {
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
        Recepción
      </h2>

      <h3>{quinceanera.recepcion.lugar}</h3>

      <p>{quinceanera.recepcion.direccion}</p>

      <p>{quinceanera.recepcion.hora}</p>
    </section>
  );
}