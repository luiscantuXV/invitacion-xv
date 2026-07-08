import { MapPin } from "lucide-react";
import { quinceanera } from "../data/quinceanera";

export default function Ceremony() {
  return (
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: "#faf7f2",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: "#ffffff",
          borderRadius: "25px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <MapPin
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
          Ceremonia Religiosa
        </h2>

        <h3>{quinceanera.ceremonia.lugar}</h3>

        <p>{quinceanera.ceremonia.direccion}</p>

        <p>{quinceanera.ceremonia.hora}</p>

        <a
          href={quinceanera.ceremonia.maps}
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
          Ver Ubicación
        </a>
      </div>
    </section>
  );
}