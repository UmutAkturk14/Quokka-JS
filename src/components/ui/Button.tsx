import { useState } from "react";
import { CopyIcon } from "@radix-ui/react-icons";
import type { ButtonProps } from "@interfaces";

export const Button = ({
  variant,
  to,
  onClick,
  children,
  copyText,
  ...props
}: ButtonProps & { copyText?: string }) => {
  const [isCopied, setIsCopied] = useState(false);
  const baseStyle =
    "px-4 py-2 rounded hover:cursor-pointer flex items-center gap-2 transition-all";
  const variantMap = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-600 hover:bg-gray-700 text-white",
    "call-to-action":
      "bg-orange-600 hover:bg-orange-700 text-white font-semibold",
    outlined:
      "border border-gray-200 text-amber-700 hover:text-amber-800 rounded-lg hover:bg-amber-50 font-semibold transition duration-400",
    basic: "text-gray-500 hover:text-gray-800 font-semibold",
  } as const;

  const variantStyle = variant ? variantMap[variant] : variantMap.basic;
  const className = `${baseStyle} ${variantStyle}`;

  const handleCopy = async () => {
    if (!copyText) return;

    try {
      await navigator.clipboard.writeText(copyText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (to) {
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
    <div className="relative inline-block group">
      <button
        onClick={() => {
          if (copyText) handleCopy();
          onClick?.();
        }}
        className={className}
        {...props}
      >
        {children ?? "Click Me"}
        {copyText && (
          <span className="ml-3 p-2 rounded-md hover:bg-amber-500/50 transition-colors">
            <CopyIcon className="w-5 h-5 text-amber-600 group-hover:text-amber-700" />
          </span>
        )}
      </button>
      {isCopied && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-md shadow-lg whitespace-nowrap">
          Copied!
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
        </div>
      )}
    </div>
  );
};
