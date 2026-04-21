export function CodeBlock({
  code,
  title,
  color = "blue",
}: {
  code: string;
  title?: string;
  color?: string;
}) {
  const accentColors: Record<string, string> = {
    red: "bg-red",
    blue: "bg-blue",
    yellow: "bg-yellow",
    black: "bg-black",
  };

  return (
    <div className="bauhaus-code rounded-none overflow-hidden relative">
      {title && (
        <div
          className={`px-4 py-3 bg-white border-b-4 border-black flex items-center justify-between`}
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-red border-2 border-black" />
              <div className="w-4 h-4 rounded-full bg-yellow border-2 border-black" />
              <div className="w-4 h-4 rounded-full bg-blue border-2 border-black" />
            </div>
            <div className="w-1 h-6 bg-black mx-2" />
            <span className="text-sm font-heading font-bold uppercase tracking-widest">
              {title}
            </span>
          </div>
        </div>
      )}
      <div className="p-6 overflow-x-auto bg-[#fafafa]">
        <pre className="font-mono text-sm text-black leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
      <div
        className={`absolute left-0 top-0 bottom-0 w-3 border-r-4 border-black z-10 ${accentColors[color] || "bg-blue"}`}
      />
    </div>
  );
}
