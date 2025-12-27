// src/assets/icons/CloseIcon.tsx

export default function CloseIcon({ color }: { color?: string }) {
  if (!color) color = "#474747";
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 3L3 15M3 3L15 15"
        stroke={color}
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
