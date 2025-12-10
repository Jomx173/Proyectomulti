import PlatformsList from "../components/PlatformsList";

export default function PlatformsPage() {
  return (
    <div style={{ padding: "2rem", color: "white" }}>
      
      {/* Contenedor del rectángulo + título + botón */}
      <div
        style={{
          position: "relative",
          marginBottom: "4rem",
        }}
      >
        {/* Rectángulo grande */}
        <div
          style={{
            width: "100%",
            height: "220px",
            background: "linear-gradient(90deg, #4DA3FF, #8B5CFF)",
            borderRadius: "10px",
            position: "relative",
          }}
        ></div>

        {/* Botón Home dentro del rectángulo */}
        <button
          onClick={() => (window.location.href = "/")}
          style={{
            position: "absolute",
            top: "15px",
            left: "20px",
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

        {/* Título centrado en el rectángulo */}
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            margin: 0,
            fontSize: "3rem",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Plataformas RAWG
        </h1>
      </div>

      {/* Título de la lista */}
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
        }}
      >
        Plataformas Disponibles
      </h2>

      <PlatformsList />
    </div>
  );
}
