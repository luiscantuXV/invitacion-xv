"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function Ceremony() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        padding: "100px 20px",
        backgroundColor: quinceanera.colores.secundario,
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: quinceanera.colores.blanco,
          borderRadius: "25px",
          padding: "40px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <MapPin
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
            background: quinceanera.colores.primario,
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
    </motion.section> 
  );
}
