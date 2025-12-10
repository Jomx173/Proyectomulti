import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        gap: "2rem",

        backgroundImage: "url(/img/fondo.jpg.webp)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: "bold",
          textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
        }}
      >
        Bienvenido a la App RAWG
      </h1>


      <p style={{ fontSize: "1.3rem" }}>
        Explora Juegos, Consolas y Próximos Lanzamientos.
      </p>

      {/* BOTONES */}
      <div style={{ display: "flex", gap: "2rem" }}>
        {/* Ver Juegos */}

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
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          Ver Juegos 🎮
        </Link>

        {/* Ver Plataformas */}
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
            transition: "transform 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        >
          Ver Plataformas 🖥️
        </Link>

        {/* Nuevo botón: Próximos Juegos */}
        <Link
          to="/upcoming"
          style={{
            padding: "1rem 2rem",
            background: "#9b59b6",
            color: "white",
            borderRadius: "10px",
            textDecoration: "none",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Próximos Juegos 🎯
        </Link>
      </div>
    </div>
  );
}
