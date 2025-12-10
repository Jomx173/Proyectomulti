
export type RawgGame = {
  id: number;
  name: string;
  background_image?: string | null;
  rating: number;
};

export async function getPlatformGames(platformId: number): Promise<RawgGame[]> {
  const key = import.meta.env.VITE_RAWG_KEY;
  if (!key) throw new Error("Falta VITE_RAWG_KEY en .env");

  const url = `https://api.rawg.io/api/games?key=${key}&platforms=${platformId}&page_size=12`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error cargando juegos de plataforma");

  const json = await res.json();
  return json.results || [];
}


