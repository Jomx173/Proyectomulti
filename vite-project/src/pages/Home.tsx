import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",           // toda la pantalla REAL
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",   // centra vertical
        alignItems: "center",        // centra horizontal
        textAlign: "center",
        color: "white",
        gap: "2rem",
      }}
    >
      <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
        Bienvenido a la App RAWG
      </h1>

      <p style={{ fontSize: "1.3rem" }}>
        Explora Juegos y Consolas usando tu API Key.
      </p>

      <div style={{ display: "flex", gap: "2rem" }}>
        <Link
          to="/games"
          style={{
            padding: "1rem 2rem",
            background: "#4CAF50",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Ver Juegos 🎮
        </Link>

        <Link
          to="/platforms"
          style={{
            padding: "1rem 2rem",
            background: "#2196F3",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Ver Plataformas 🖥️
        </Link>
      </div>
    </div>
  );
}





