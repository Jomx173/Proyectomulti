import { useEffect, useState } from "react";
import { getUpcomingGames } from "../API/games/getUpcomingGames";
import type { RawgUpcoming } from "../API/games/getUpcomingGames";
import GameCard from "./GameCard"; // Usa el mismo de juegos normales

type Props = {
  search: string; // Recibimos la búsqueda
};

export default function UpcomingList({ search }: Props) {
  const [games, setGames] = useState<RawgUpcoming[]>([]);

  useEffect(() => {
    getUpcomingGames().then((res) => setGames(res));
  }, []);

  // 🔍 Filtrar según la búsqueda
  const filtered = games.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1.5rem",
        justifyContent: "center",
      }}
    >
      {filtered.map((g) => (
        <GameCard
          key={g.id}
          name={g.name}
          image={g.background_image}
          rating={g.rating}
        />
      ))}
    </div>
  );
}
