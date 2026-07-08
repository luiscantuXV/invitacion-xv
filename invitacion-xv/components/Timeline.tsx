"use client";

import { Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function Timeline() {
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
      <h2
        style={{
          textAlign: "center",
          color: quinceanera.colores.primario,
          fontSize: "clamp(2rem, 6vw, 3rem)",
          marginBottom: "60px",
        }}
      >
        Itinerario
      </h2>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {quinceanera.itinerario.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                width: "80px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: quinceanera.colores.primario,
                }}
              />

              {index !==
                quinceanera.itinerario.length - 1 && (
                <div
                  style={{
                    width: "4px",
                    height: "100px",
                    background:
                      quinceanera.colores.primario,
                    marginTop: "10px",
                  }}
                />
              )}
            </div>

            <div
              style={{
                background:
                  quinceanera.colores.blanco,
                padding: "25px",
                borderRadius: "20px",
                flex: 1,
                boxShadow:
                  "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                <Clock3
                  size={20}
                  color={
                    quinceanera.colores.primario
                  }
                />

                <strong
                  style={{
                    color:
                      quinceanera.colores.primario,
                  }}
                >
                  {item.hora}
                </strong>
              </div>

              <p
                style={{
                  margin: 0,
                }}
              >
                {item.evento}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}