"use client";

import { Shirt } from "lucide-react";
import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function DressCode() {
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
        backgroundColor: quinceanera.colores.blanco,
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          background: quinceanera.colores.secundario,
          borderRadius: "30px",
          border: `1px solid ${quinceanera.colores.primario}20`,
          padding: "50px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <Shirt
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
          Dress Code
        </h2>

        <h3
          style={{
            marginBottom: "20px",
          }}
        >
          {quinceanera.DressCode.tipo}
        </h3>

        <p>Evitar colores:</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {quinceanera.DressCode.evitar.map(
            (color, index) => (
              <div
                key={index}
                style={{
                  background:
                    quinceanera.colores.primario,
                  color: "white",
                  padding: "12px 22px",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  boxShadow:
                    "0 6px 15px rgba(0,0,0,0.1)",
                }}
              >
                ❌ {color}
              </div>
            )
          )}
        </div>
      </div>
    </motion.section>
  );
}