"use client";

import { quinceanera } from "../data/quinceanera";
import { motion } from "framer-motion";


export default function DressCode() {
  return (
    
<motion.section
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  style={{
    padding: "100px 20px",
    textAlign: "center",
    backgroundColor: "#ffffff",
  }}
>
      <h2
        style={{
          color: "#d4af37",
          fontSize: "3rem",
        }}
      >
        Dress Code
      </h2>

      <h3>{quinceanera.DressCode.tipo}</h3>

      <p>Evitar colores:</p>

      {quinceanera.DressCode.evitar.map(
        (color, index) => (
          <p key={index}>❌ {color}</p>
        )
      )}
    </motion.section>
  );
}