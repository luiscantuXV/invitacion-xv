"use client";

import { Gift } from "lucide-react";
import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function Gifts() {
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
        <Gift
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
          Mesa de Regalos
        </h2>

        <p>
          Tu presencia es mi mejor regalo.
        </p>

        <p>
          Si deseas tener un detalle adicional,
          puedes apoyarte en mi mesa de regalos.
        </p>

        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            borderRadius: "20px",
            background: quinceanera.colores.secundario,
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
            }}
          >
            Evento: {quinceanera.mesaRegalos.evento}
          </p>
        </div>
      </div>
    </motion.section>
  );
}