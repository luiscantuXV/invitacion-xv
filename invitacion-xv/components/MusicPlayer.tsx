"use client";

import { quinceanera } from "@/data/quinceanera";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  // Inicia la música en el primer clic o toque
  useEffect(() => {
    const startMusic = async () => {
      const audio = audioRef.current;
      if (!audio) return;

      try {
        await audio.play();
        setPlaying(true);
      } catch (err) {
        console.error("No se pudo iniciar la música:", err);
      }

      // Elimina los listeners para que solo se ejecute una vez
      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (playing) {
        audioRef.current.pause();
        setPlaying(false);
      } else {
        await audioRef.current.play();
        setPlaying(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        <source src="/music/song.mp3" type="audio/mpeg" />
      </audio>

      
      <button
        onClick={toggleMusic}
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          zIndex: 1000,
          border: "none",
          borderRadius: "50%",
          width: "65px",
          height: "65px",
          background: quinceanera.colores.primario,
          color: "white",
          fontSize: "28px",
          cursor: "pointer",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          transform: playing
            ? "rotate(360deg)"
            : "rotate(0deg)",
          transition: "all .5s ease",
        }}
      >
        {playing ? "🎵" : "▶"}
      </button>

    </>
  );
}