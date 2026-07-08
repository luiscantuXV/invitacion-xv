"use client";

import { Gift } from "lucide-react";
import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function Gifts() {
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
        <Gift
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
          Mesa de Regalos
        </h2>

        <p
          style={{
            marginBottom: "10px",
          }}
        >
          Tu presencia es mi mejor regalo.
        </p>

        <p
          style={{
            marginBottom: "30px",
          }}
        >
          Si deseas tener un detalle adicional,
          puedes apoyarte en mi mesa de regalos.
        </p>

        <div
          style={{
            marginTop: "20px",
            padding: "25px",
            borderRadius: "20px",
            background: quinceanera.colores.secundario,
            border: `1px solid ${quinceanera.colores.primario}15`,
          }}
        >
          <h3
            style={{
              color: quinceanera.colores.primario,
              marginBottom: "10px",
            }}
          >
            {quinceanera.mesaRegalos.tienda}
          </h3>

          <p
            style={{
              fontSize: "1.3rem",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            Evento: {quinceanera.mesaRegalos.evento}
          </p>
        </div>
      </div>
    </motion.section>
  );
}