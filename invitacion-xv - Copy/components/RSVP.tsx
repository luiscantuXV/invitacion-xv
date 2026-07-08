"use client";

import { useState } from "react";
import { quinceanera } from "../data/quinceanera";

export default function RSVP() {
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState("");

  const confirmar = () => {
    const mensaje = `
Hola.

Confirmo mi asistencia a los XV de ${quinceanera.nombre}.

Nombre: ${nombre}
Número de asistentes: ${personas}
`;

    window.open(
      `https://wa.me/${quinceanera.whatsapp}?text=${encodeURIComponent(
        mensaje
      )}`
    );
  };

  return (
    <section
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
        Confirma tu Asistencia
      </h2>

      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
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
            border: "1px solid #ccc",
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
            border: "1px solid #ccc",
          }}
        />

        <button
          onClick={confirmar}
          style={{
            backgroundColor: "#d4af37",
            color: "white",
            border: "none",
            padding: "15px",
            borderRadius: "30px",
            cursor: "pointer",
          }}
        >
          Confirmar por WhatsApp
        </button>
      </div>
    </section>
  );
}