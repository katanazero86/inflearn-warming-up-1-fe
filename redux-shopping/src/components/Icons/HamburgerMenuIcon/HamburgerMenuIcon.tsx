interface HamburgerMenuIconProps {
  onClick?: () => void;
}

export default function HamburgerMenuIcon({ onClick }: HamburgerMenuIconProps) {
  return (
    <svg
      style={{
        cursor: 'pointer',
      }}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M7 16H25M7 8H16H25M7 24H25"
        stroke="#4A4A4A"
        strokeWidth="1.6"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
    </svg>
  );
}
