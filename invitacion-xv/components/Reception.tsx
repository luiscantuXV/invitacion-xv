
"use client";

import { PartyPopper } from "lucide-react";
import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function Reception() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        padding: "100px 20px",
        background: quinceanera.colores.blanco,
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: quinceanera.colores.secundario,
          borderRadius: "25px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <PartyPopper
          size={48}
          color={quinceanera.colores.primario}
          style={{
            marginBottom: "20px",
          }}
        />

        <h2
          style={{
            color: quinceanera.colores.primario,
            fontSize: "clamp(2rem, 6vw, 2.5rem)",
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
    </motion.section>
  );
}