"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function Gallery() {
  const photos = [
    "/photos/1.jpg",
    "/photos/2.jpg",
    "/photos/3.jpg",
    "/photos/4.jpg",
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#ffffff",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          color: "#d4af37",
          fontSize: "3rem",
          marginBottom: "40px",
        }}
      >
        Galería
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        slidesPerView={1}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img
              src={photo}
              alt={`Foto ${index + 1}`}
              style={{
                width: "100%",
                maxWidth: "800px",
                height: "500px",
                objectFit: "cover",
                borderRadius: "20px",
                margin: "0 auto",
                display: "block",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}