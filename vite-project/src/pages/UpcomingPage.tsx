import { useState } from "react";
import UpcomingList from "../components/UpcomingList";

export default function UpcomingPage() {
  const [search, setSearch] = useState("");

  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
        color: "white",
        position: "relative",
      }}
    >
      <button
        onClick={() => (window.location.href = "/")}
        style={{
          position: "absolute",
          left: "20px",
          top: "20px",
          background: "rgba(255,255,255,0.15)",
          color: "white",
          border: "none",
          padding: "0.6rem 1.2rem",
          borderRadius: "8px",
          cursor: "pointer",
          fontWeight: 700,
          fontSize: "1rem",
          backdropFilter: "blur(4px)",
        }}
      >
        Home
      </button>

      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        Próximos Lanzamientos 2025 🎮
      </h1>

      <p style={{ color: "#cccccc", marginBottom: "2rem", fontSize: "1.2rem" }}>
        Explora los juegos que se lanzarán próximamente este año.
      </p>

      <input
        type="text"
        placeholder="Buscar próximo juego..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "0.8rem",
          width: "60%",
          borderRadius: "8px",
          border: "1px solid #555",
          marginBottom: "2rem",
          background: "#1e1e1e",
          color: "white",
          fontSize: "1rem",
        }}
      />

      <UpcomingList search={search} />
    </div>
  );
}
