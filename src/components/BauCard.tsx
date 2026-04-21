import { GeoIcon } from "./GeoIcon";

export function BauCard({
  title,
  description,
  shapeType,
  shapeColor,
}: {
  title: string;
  description: string;
  shapeType: "circle" | "square" | "triangle" | "semi";
  shapeColor: string;
}) {
  const barColors: Record<string, string> = {
    red: "bg-red",
    blue: "bg-blue",
    yellow: "bg-yellow",
    black: "bg-black",
  };

  return (
    <div className="bauhaus-card p-8 flex flex-col h-full bg-white relative overflow-hidden group">
      {/* Decorative background grid pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none z-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-bauhaus-black) 2px, transparent 2px), linear-gradient(90deg, var(--color-bauhaus-black) 2px, transparent 2px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="mb-8 z-10 relative">
        <GeoIcon type={shapeType} color={shapeColor} />
      </div>

      <h3 className="font-heading font-bold text-2xl text-black mb-4 z-10 uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-gray-700 text-base leading-relaxed font-body z-10 flex-grow">
        {description}
      </p>

      {/* Decorative bold bottom border that expands on hover */}
      <div
        className={`absolute bottom-0 left-0 h-2 w-full transition-all duration-300 group-hover:h-4 ${barColors[shapeColor] || "bg-black"}`}
      />
    </div>
  );
}
