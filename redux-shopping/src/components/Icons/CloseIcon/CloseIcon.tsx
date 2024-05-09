interface CloseIconProps {
  onClick?: () => void;
}

export default function CloseIcon({ onClick }: CloseIconProps) {
  return (
    <svg
      onClick={onClick}
      style={{
        cursor: 'pointer',
      }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 5L5 19M5 5L19 19"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}
