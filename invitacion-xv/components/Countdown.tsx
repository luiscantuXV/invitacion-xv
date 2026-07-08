"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-09-04T17:00:00");

    const interval = setInterval(() => {
      const now = new Date();

      const difference =
        targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          dias: Math.floor(
            difference / (1000 * 60 * 60 * 24)
          ),
          horas: Math.floor(
            (difference / (1000 * 60 * 60)) % 24
          ),
          minutos: Math.floor(
            (difference / (1000 * 60)) % 60
          ),
          segundos: Math.floor(
            (difference / 1000) % 60
          ),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const cardStyle = {
    backgroundColor: "#ffffff",
    borderRadius: "20px",
    padding: "25px",
    minWidth: "140px",
    border: "1px solid #d4af37",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  };

  return (
    <section
      id="contador"
      style={{
        background: "#faf7f2",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          color: "#d4af37",
          marginBottom: "40px",
        }}
      >
        Faltan
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h1>{timeLeft.dias}</h1>
          <p>Días</p>
        </div>

        <div style={cardStyle}>
          <h1>{timeLeft.horas}</h1>
          <p>Horas</p>
        </div>

        <div style={cardStyle}>
          <h1>{timeLeft.minutos}</h1>
          <p>Minutos</p>
        </div>

        <div style={cardStyle}>
          <h1>{timeLeft.segundos}</h1>
          <p>Segundos</p>
        </div>
      </div>
    </section>
  );
}