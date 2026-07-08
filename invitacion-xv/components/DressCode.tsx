"use client";

import { Shirt } from "lucide-react";
import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function DressCode() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        padding: "100px 20px",
        backgroundColor: quinceanera.colores.blanco,
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
        <Shirt
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
          Dress Code
        </h2>

        <h3>{quinceanera.DressCode.tipo}</h3>

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
                  padding: "10px 20px",
                  borderRadius: "30px",
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