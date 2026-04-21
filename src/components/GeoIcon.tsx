export function GeoIcon({
  type,
  color,
}: {
  type: "circle" | "square" | "triangle" | "semi";
  color: string;
}) {
  const colors: Record<string, string> = {
    red: "bg-red",
    blue: "bg-blue",
    yellow: "bg-yellow",
    black: "bg-black",
  };

  const bg = colors[color] || colors.black;

  switch (type) {
    case "circle":
      return (
        <div className={`w-16 h-16 rounded-full ${bg} border-4 border-black`} />
      );
    case "square":
      return <div className={`w-16 h-16 ${bg} border-4 border-black`} />;
    case "triangle":
      return (
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div
            className={`w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[56px] ${color === "red" ? "border-b-red" : color === "blue" ? "border-b-blue" : "border-b-yellow"}`}
          />
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 64 64"
          >
            <polygon
              points="32,4 64,60 0,60"
              fill="none"
              stroke="var(--color-bauhaus-black)"
              strokeWidth="6"
              strokeLinejoin="miter"
            />
          </svg>
        </div>
      );
    case "semi":
      return (
        <div
          className={`w-16 h-8 rounded-t-full ${bg} border-4 border-b-0 border-black`}
        />
      );
    default:
      return <div className={`w-16 h-16 ${bg} border-4 border-black`} />;
  }
}
