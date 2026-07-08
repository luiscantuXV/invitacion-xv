import { quinceanera } from "../data/quinceanera";

export default function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        backgroundImage: "url('/photos/cover.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      {/* Capa oscura */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            letterSpacing: "3px",
          }}
        >
          {quinceanera.subtitulo}
        </h3>

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "#d4af37",
            margin: "20px 0",
          }}
        >
          {quinceanera.nombre}
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
          }}
        >
          04 de Septiembre de 2026
        </p>

        <button
          style={{
            marginTop: "30px",
            padding: "15px 35px",
            borderRadius: "30px",
            border: "none",
            backgroundColor: "#d4af37",
            color: "white",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Abrir Invitación
        </button>
      </div>
    </section>
  );
}