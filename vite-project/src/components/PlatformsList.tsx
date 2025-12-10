// IMPORTS (usa `import type` para tipos)
import { useEffect, useState } from "react";
import { getPlatforms } from "../API/platforms/getPlatforms";
import { getPlatformGames } from "../API/platforms/getPlatformGames";
import type { RawgPlatform } from "../API/platforms/getPlatforms";
import type { RawgGame } from "../API/platforms/getPlatformGames";
import PlatformGameCard from "./PlatformCard";


export default function PlatformsList() {
  const [platforms, setPlatforms] = useState<RawgPlatform[]>([]);
  const [gamesByPlatform, setGamesByPlatform] = useState<Record<number, RawgGame[]>>({});

  useEffect(() => {
  
    (async () => {
      try {
        const plats = await getPlatforms();
        setPlatforms(plats);

        const result: Record<number, RawgGame[]> = {};

        
        for (const pl of plats) {
          const games = await getPlatformGames(pl.id);
          result[pl.id] = games;
        }

        setGamesByPlatform(result);
      } catch (err) {
        console.error("Error cargando plataformas/juegos:", err);
      }
    })();
  }, []);



  return (
  <div style={{ padding: "2rem", color: "white" }}>
    <h1 style={{ marginBottom: "2rem" }}>Plataformas y Juegos Disponibles</h1>

    {platforms.map((pl) => (
      <div key={pl.id} style={{ marginBottom: "3rem" }}>
        
        {/* Nombre de la plataforma */}
        <h2
          style={{
            borderBottom: "2px solid #555",
            paddingBottom: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          {pl.name}
        </h2>

        {/* Lista de juegos de la plataforma */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          {(gamesByPlatform[pl.id] ?? []).map((game) => (
            <PlatformGameCard
              key={game.id}
              name={game.name}
              image={game.background_image}
              rating={game.rating}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

}
