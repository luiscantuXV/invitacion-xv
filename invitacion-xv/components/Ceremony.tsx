"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function Ceremony() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      style={{
        padding: "120px 20px",
        backgroundColor: quinceanera.colores.secundario,
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: quinceanera.colores.blanco,
          borderRadius: "30px",
          border: `1px solid ${quinceanera.colores.primario}20`,
          padding: "50px",
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0,0,0,0.10)",
        }}
      >
        <MapPin
          size={56}
          color={quinceanera.colores.primario}
          style={{
            marginBottom: "20px",
          }}
        />

        <h2
          style={{
            color: quinceanera.colores.primario,
            fontSize: "clamp(2rem, 6vw, 2.8rem)",
            marginBottom: "20px",
          }}
        >
          Ceremonia Religiosa
        </h2>

        <h3
          style={{
            marginBottom: "15px",
          }}
        >
          {quinceanera.ceremonia.lugar}
        </h3>

        <p
          style={{
            marginBottom: "10px",
          }}
        >
          {quinceanera.ceremonia.direccion}
        </p>

        <p
          style={{
            fontWeight: "bold",
            marginBottom: "25px",
          }}
        >
          {quinceanera.ceremonia.hora}
        </p>

        <a
          href={quinceanera.ceremonia.maps}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: quinceanera.colores.primario,
            color: "white",
            padding: "16px 34px",
            borderRadius: "40px",
            textDecoration: "none",
            fontWeight: "bold",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            transition: "all .3s ease",
          }}
        >
          Ver Ubicación
        </a>
      </div>
    </motion.section>
  );
}