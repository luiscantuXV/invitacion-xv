"use client";

import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function Message() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "#faf7f2",
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          fontSize: "3rem",
        }}
      >
        Mi Gran Día
      </h2>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          lineHeight: "2",
          fontSize: "1.2rem",
        }}
      >
        {quinceanera.mensaje}
      </p>
    </motion.section>
  );
}