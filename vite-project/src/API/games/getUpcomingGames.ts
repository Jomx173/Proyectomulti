export type RawgUpcoming = {
  id: number;
  name: string;
  background_image?: string | null;
  released?: string;
  rating: number;
};

export async function getUpcomingGames(): Promise<RawgUpcoming[]> {
  const key = import.meta.env.VITE_RAWG_KEY;
  if (!key) throw new Error("Falta VITE_RAWG_KEY en .env");

  const url = `https://api.rawg.io/api/games?key=${key}&dates=2025-01-01,2025-12-31&ordering=released&page_size=30`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error cargando próximos juegos");

  const json = await res.json();
  return json.results || [];
}
