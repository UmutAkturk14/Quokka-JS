import type { ButtonProps } from "@interfaces";

export const Button = ({
  variant,
  to,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const baseStyle = "px-4 py-2 rounded text-white font-semibold";
  const variantStyle = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    "call-to-action": "bg-green-600 hover:bg-green-700",
  }[variant];

  const className = `${baseStyle} ${variantStyle}`;

  if (to) {
    // use <a> if "to" is provided
    return (
      <a
        href={to}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children ?? "Visit Link"}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={className} {...props}>
      {children ?? "Click Me"}
    </button>
  );
};
