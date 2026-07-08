"use client";

import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function Hero() {
  return (
    <section
      style={{
        height: "100vh",
        backgroundImage: `url(${quinceanera.portada})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45))",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          padding: "20px",
          maxWidth: "900px",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(1rem, 3vw, 1.4rem)",
            letterSpacing: "6px",
            marginBottom: "20px",
          }}
        >
          {quinceanera.subtitulo}
        </h3>

        <h1
          style={{
            fontSize: "clamp(3.5rem, 10vw, 7rem)",
            color: quinceanera.colores.primario,
            margin: "0",
            letterSpacing: "2px",
            textShadow:
              "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          {quinceanera.nombre}
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            marginTop: "25px",
            marginBottom: "35px",
          }}
        >
          {new Date(
            quinceanera.fechaEvento
          ).toLocaleDateString("es-MX", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <a
          href="#contador"
          style={{
            display: "inline-block",
            padding: "12px 30px",
            backgroundColor: quinceanera.colores.primario,
            color: "white",
            textDecoration: "none",
            borderRadius: "4px",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
          }}
        >
          Abrir Invitación
        </a>
      </motion.div>
    </section>
  );
}