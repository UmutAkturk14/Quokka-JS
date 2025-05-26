import type { ButtonProps } from "@interfaces";

export const Button = ({
  variant,
  to,
  onClick,
  children,
  ...props
}: ButtonProps) => {
  const baseStyle = "px-4 py-2 rounded hover:cursor-pointer";
  const variantMap = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
    "call-to-action":
      "bg-orange-600 hover:bg-orange-700 text-white font-semibold",
    outlined:
      "border border-gray-200 text-amber-700 hover:text-amber-800 rounded-lg hover:bg-amber-100 font-semibold transition duration-400",
    basic: "text-gray-500 hover:text-gray-800 font-semibold",
  } as const;

  const variantStyle = variant ? variantMap[variant] : variantMap.basic;

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
