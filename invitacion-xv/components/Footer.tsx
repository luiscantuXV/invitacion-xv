
import { quinceanera } from "../data/quinceanera";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#111111",
        color: "#ffffff",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          fontSize: "2.5rem",
          marginBottom: "20px",
        }}
      >
        {quinceanera.nombre}
      </h2>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          margin: "0 auto",
          lineHeight: "1.8",
        }}
      >
        Gracias por acompañarme en este día tan especial.
        Tu presencia hará de este momento un recuerdo inolvidable.
      </p>

      <div
        style={{
          marginTop: "40px",
          color: "#888",
        }}
      >
        Mis XV Años © 2026
      </div>
    </footer>
  );
}
