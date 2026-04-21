// Geometric Shapes for Logo
export function BauhausLogo({
  className = "w-10 h-10",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="10"
        y="10"
        width="35"
        height="35"
        fill="var(--color-bauhaus-red)"
      />
      <circle cx="75" cy="27.5" r="17.5" fill="var(--color-bauhaus-blue)" />
      <polygon
        points="27.5,90 10,55 45,55"
        fill="var(--color-bauhaus-yellow)"
      />
      <path d="M90 90 L55 90 L55 55 Z" fill="var(--color-bauhaus-black)" />
    </svg>
  );
}
