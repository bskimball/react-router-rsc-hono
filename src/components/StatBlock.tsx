export function StatBlock({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  const colors: Record<string, string> = {
    red: "bg-red",
    blue: "bg-blue",
    yellow: "bg-yellow",
    black: "bg-black",
  };

  return (
    <div
      className={`border-4 border-black bg-white p-6 relative overflow-hidden group`}
    >
      <div
        className={`absolute top-0 right-0 w-16 h-16 border-l-4 border-b-4 border-black rounded-bl-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500 ${colors[color] || "bg-black"}`}
      />
      <div className="font-display font-bold text-5xl mb-2 relative z-10">
        {value}
      </div>
      <div className="font-heading text-sm uppercase font-bold tracking-widest text-gray-600 relative z-10">
        {label}
      </div>
    </div>
  );
}
