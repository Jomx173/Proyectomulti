import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { getGames } from "../API/games/getGames";

export default function GamesList() {
  const [games, setGames] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getGames(search).then((res) => setGames(res));
  }, [search]);

  return (
    <div style={{ textAlign: "center" }}>
      
    
      <input
        type="text"
        placeholder="Buscar juego..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        {games.map((game) => (
          <GameCard
            key={game.id}
            name={game.name}
            image={game.background_image}
            rating={game.rating}
          />
        ))}
      </div>
    </div>
  );
}


