import { Clock3 } from "lucide-react";
import { quinceanera } from "../data/quinceanera";

export default function Timeline() {
  return (
    <section
      style={{
        padding: "100px 20px",
        backgroundColor: "#faf7f2",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#d4af37",
          fontSize: "3rem",
          marginBottom: "50px",
        }}
      >
        Itinerario
      </h2>

      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
        }}
      >
        {quinceanera.itinerario.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#ffffff",
              padding: "25px",
              marginBottom: "20px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            }}
          >
            <Clock3 size={30} color="#d4af37" />

            <div>
              <h3
                style={{
                  margin: 0,
                  color: "#d4af37",
                }}
              >
                {item.hora}
              </h3>

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
    </section>
  );
}