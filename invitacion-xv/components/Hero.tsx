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

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          padding: "20px",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            letterSpacing: "4px",
          }}
        >
          {quinceanera.subtitulo}
        </h3>

        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "#d4af37",
            margin: "20px 0",
            textShadow: "2px 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          {quinceanera.nombre}
        </h1>

        <p
          style={{
            fontSize: "1.3rem",
            marginBottom: "30px",
          }}
        >
          
           {new Date(
            quinceanera.fechaEvento
          ).toLocaleDateString("es-MX", {
            day: "2-digit",
            month: "long",
            year: "numeric",
       })}
``
        </p>

        <a
          href="#contador"
          style={{
            display: "inline-block",
            padding: "15px 35px",
            borderRadius: "30px",
            backgroundColor: "#d4af37",
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
          }}
        >
          Abrir Invitación
        </a>
      </motion.div>
    </section> 
  );
}
