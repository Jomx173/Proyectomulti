
type Props = {
  name: string;
  image?: string | null;
  rating?: number;
};

export default function PlatformGameCard({ name, image, rating }: Props) {
  return (
    <div
      style={{
        background: "#1e1e1e",
        padding: "1rem",
        borderRadius: "10px",
        width: "250px",
        color: "white",
        textAlign: "center",
      }}
    >
      <img
        src={image ?? "https://via.placeholder.com/250"}
        alt={name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3 style={{ marginTop: "0.5rem" }}>{name}</h3>
      <p>⭐ Rating: {rating ?? "N/A"}</p>
    </div>
  );
}

