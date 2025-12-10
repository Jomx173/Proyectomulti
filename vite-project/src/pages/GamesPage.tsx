
import GamesList from "../components/GamesList";

export default function GamesPage() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "white" }}>
        Clasificación de Juegos RAWG
      </h1>

      <p style={{ color: "#cccccc", marginBottom: "2rem", fontSize: "1.2rem" }}>
        Explora los videojuegos mejor valorados y busca tus favoritos.
      </p>

      <GamesList />
    </div>
  );
}

