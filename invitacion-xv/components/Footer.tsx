"use client";

import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      style={{
        background: quinceanera.colores.fondoOscuro,
        color: "white",
        textAlign: "center",
        padding: "120px 20px",
      }}
    >
      <h2
        style={{
          color: quinceanera.colores.primario,
          fontSize: "clamp(2rem, 6vw, 3rem)",
          marginBottom: "20px",
        }}
      >
        {quinceanera.nombre}
      </h2>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.8",
          fontSize: "1.1rem",
        }}
      >
        Gracias por acompañarme en este momento tan especial.
        Tu presencia hará que este día sea aún más inolvidable.
      </p>

      
      <div
        style={{
          width: "120px",
          height: "2px",
          background: quinceanera.colores.primario,
          margin: "40px auto",
        }}
      />

      <p
        style={{
          marginTop: "30px",
          color: "#777",
          fontSize: "1rem",
          lineHeight: "1.8",
        }}
      >
        Diseñado con amor para celebrar este día especial
      </p>

      <p
        style={{
          color: "#999",
          fontSize: "0.9rem",
        }}
      >
        Mis XV Años © {new Date().getFullYear()}
      </p>

    </motion.footer>
  );
}
