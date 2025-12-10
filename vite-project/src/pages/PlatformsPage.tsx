import PlatformsList from "../components/PlatformsList";

export default function PlatformsPage() {
  return (
    <div style={{ padding: "2rem", color: "white", position: "relative" }}>
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

      <div style={{ textAlign: "center", marginTop: "4rem" }}>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "0.5rem",
          }}
        >
          Plataformas RAWG
        </h1>

        <p
          style={{
            color: "#cccccc",
            fontSize: "1.1rem",
            marginBottom: "3rem",
          }}
        >
          Consulta todas las plataformas disponibles en la API de RAWG y obtén información detallada.
        </p>
      </div>

      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
      
      </h2>

      <PlatformsList />
    </div>
  );
}
