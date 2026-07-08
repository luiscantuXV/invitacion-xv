import { PartyPopper } from "lucide-react";
import { quinceanera } from "../data/quinceanera";

export default function Reception() {
  return (
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#faf7f2",
          borderRadius: "25px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <PartyPopper
          size={48}
          color="#d4af37"
          style={{
            marginBottom: "20px",
          }}
        />

        <h2
          style={{
            color: "#d4af37",
            fontSize: "2.5rem",
          }}
        >
          Recepción
        </h2>

        <h3>{quinceanera.recepcion.lugar}</h3>

        <p>{quinceanera.recepcion.direccion}</p>

        <p>{quinceanera.recepcion.hora}</p>

        <a
          href={quinceanera.recepcion.maps}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#d4af37",
            color: "white",
            padding: "14px 30px",
            borderRadius: "30px",
            textDecoration: "none",
            marginTop: "20px",
          }}
        >
          Ver Mapa
        </a>
      </div>
    </section>
  );
}