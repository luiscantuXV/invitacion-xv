import { quinceanera } from "../data/quinceanera";

export default function Ceremony() {
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
        Ceremonia Religiosa
      </h2>

      <h3>{quinceanera.ceremonia.lugar}</h3>

      <p>{quinceanera.ceremonia.direccion}</p>

      <p>{quinceanera.ceremonia.hora}</p>
    </section>
  );
}