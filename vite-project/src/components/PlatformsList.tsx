import { useEffect, useState } from "react";
import { getPlatforms } from "../API/platforms/getPlatforms";
import type { RawgPlatform } from "../API/platforms/getPlatforms";

export default function PlatformsList() {
  const [platforms, setPlatforms] = useState<RawgPlatform[]>([]);

  useEffect(() => {
    getPlatforms().then((res) => setPlatforms(res));
  }, []);

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h1 style={{ marginBottom: "1rem" }}>Plataformas Disponibles</h1>

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {platforms.map((p) => (
          <li key={p.id} style={{ margin: "0.8rem 0", fontSize: "1.2rem" }}>
            🔹 {p.name}
          </li>
        ))}
      </ul>
    </div>
  );
}


