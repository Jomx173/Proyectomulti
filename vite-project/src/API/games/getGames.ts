export async function getGames(search: string = "", page = 1, pageSize = 40) {
  const key = import.meta.env.VITE_RAWG_KEY;
  if (!key) throw new Error("Falta VITE_RAWG_KEY en .env");

  const url = `https://api.rawg.io/api/games?key=${key}&page=${page}&page_size=${pageSize}&search=${search}`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Error cargando juegos desde RAWG");

  const json = await res.json();
  return json.results || [];
}

