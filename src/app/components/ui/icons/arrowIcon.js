export default function Arrow({ size = 18, color = "black", direction, className }) {
  if (direction === "down") {
    return (
      <svg
        width={size}
        height={size}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}
      >
        <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z"></path>
      </svg>
    );
  }

  if (direction === "up") {
    return (
      <svg
        width={size}
        height={size}
        fill={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className={className}

      >
        <path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z"></path>
      </svg>
    );
  }
}
