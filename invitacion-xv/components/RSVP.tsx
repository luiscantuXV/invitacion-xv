"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function RSVP() {
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState("");
  const [mensajePersonal, setMensajePersonal] = useState("");

  const confirmar = () => {
    const mensaje = `
Hola.

Confirmo mi asistencia a los XV de ${quinceanera.nombre}.

Nombre: ${nombre}
Número de asistentes: ${personas}

Mensaje:
${mensajePersonal}
`;

    window.open(
      `https://wa.me/${quinceanera.whatsapp}?text=${encodeURIComponent(
        mensaje
      )}`
    );
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        padding: "100px 20px",
        textAlign: "center",
        backgroundColor: quinceanera.colores.secundario,
      }}
    >
      <h2
        style={{
          color: quinceanera.colores.primario,
          fontSize: "clamp(2rem, 6vw, 3rem)",
          marginBottom: "40px",
        }}
      >
        Confirma tu Asistencia
      </h2>

      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          background: quinceanera.colores.blanco,
          padding: "40px",
          borderRadius: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: `1px solid ${quinceanera.colores.primario}`,
          }}
        />

        <input
          type="number"
          placeholder="Número de asistentes"
          value={personas}
          onChange={(e) => setPersonas(e.target.value)}
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: `1px solid ${quinceanera.colores.primario}`,
          }}
        />

        <textarea
          placeholder="Mensaje para la festejada"
          value={mensajePersonal}
          onChange={(e) => setMensajePersonal(e.target.value)}
          rows={4}
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: `1px solid ${quinceanera.colores.primario}`,
            resize: "none",
          }}
        />

        <button
          onClick={confirmar}
          style={{
            backgroundColor: quinceanera.colores.primario,
            color: "white",
            border: "none",
            padding: "15px",
            borderRadius: "30px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Confirmar por WhatsApp
        </button>
      </div>
    </motion.section>
  );
}