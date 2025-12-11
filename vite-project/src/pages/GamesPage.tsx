import GamesList from "../components/GamesList";

export default function GamesPage() {
  return (
    <div
      style={{
        position: "relative",
        color: "white",
        minHeight: "100vh",
        textAlign: "center",
        padding: "2rem",

        // Imagen de fondo
        backgroundImage: "url(/img/opcion1.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Botón Home */}
      <button
        onClick={() => (window.location.href = "/")}
        style={{
          position: "absolute",
          left: "20px",
          top: "20px",
          background: "rgba(255,255,255,0.2)",
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
        Clasificación de Juegos RAWG
      </h1>

      <p style={{ color: "#cccccc", marginBottom: "2rem", fontSize: "1.2rem" }}>
        Explora los videojuegos mejor valorados y busca tus favoritos.
      </p>

      <GamesList />
    </div>
  );
}