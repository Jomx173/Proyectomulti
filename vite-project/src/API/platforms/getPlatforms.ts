export type RawgPlatform = {
  id: number;
  name: string;
  image_background?: string | null;
};

export async function getPlatforms(): Promise<RawgPlatform[]> {
  const key = import.meta.env.VITE_RAWG_KEY;
  if (!key) throw new Error("Falta VITE_RAWG_KEY en .env");

  const url = `https://api.rawg.io/api/platforms?key=${key}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error cargando plataformas desde RAWG");

  const json = await res.json();
  return json.results || [];
}