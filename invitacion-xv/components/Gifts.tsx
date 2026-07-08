"use client";

import { quinceanera } from "../data/quinceanera";
import { motion } from "framer-motion";


export default function Gifts() {
  return (
    <motion.section


     initial={{ opacity: 0, y: 100 }}
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8 }}
     viewport={{ once: true }}


      style={{
        padding: "100px 20px",
        textAlign: "center",
        backgroundColor: "#faf7f2",
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          fontSize: "3rem",
        }}
      >
        Mesa de Regalos
      </h2>

      <p>Tu presencia es mi mejor regalo.</p>

      <p>Liverpool Evento:</p>

      <h3>{quinceanera.mesaRegalos.evento}</h3>
    </motion.section>
  );
}