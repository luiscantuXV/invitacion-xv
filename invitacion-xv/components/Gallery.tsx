"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import "swiper/css";

import { motion } from "framer-motion";
import { quinceanera } from "../data/quinceanera";

export default function Gallery() {
  const photos = [
    "/photos/1.jpg",
    "/photos/2.jpg",
    "/photos/3.jpg",
    "/photos/4.jpg",
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        padding: "80px 20px",
        background: quinceanera.colores.blanco,
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: quinceanera.colores.primario,
          fontSize: "clamp(2rem, 6vw, 3rem)",
          marginBottom: "40px",
        }}
      >
        Galería
      </h2>

      <PhotoProvider>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index}>
              <PhotoView src={photo}>
                <img
                  src={photo}
                  alt={`Foto ${index + 1}`}
                  style={{
                    width: "100%",
                    maxWidth: "700px",
                    height: "clamp(250px, 50vw, 450px)",
                    objectFit: "cover",
                    borderRadius: "25px",
                    margin: "0 auto",
                    display: "block",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  }}
                />
              </PhotoView>
            </SwiperSlide>
          ))}
        </Swiper>
      </PhotoProvider>
    </motion.section>
  );
}