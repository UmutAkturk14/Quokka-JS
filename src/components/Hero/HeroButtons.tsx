import React from "react";
import { Button } from "@components/ui/Button";
import clsx from "clsx";

interface HeroButtonsProps {
  className?: string;
}

const HeroButtons: React.FC<HeroButtonsProps> = ({ className }) => {
  return (
    <div className={clsx("flex gap-4", className)}>
      <Button variant="call-to-action" onClick={() => alert("Clicked!")}>
        Get Started
      </Button>

      <Button
        className="rounded-sm text-gray-800 border-gray-300 border-1 font-semibold px-4 py-2 hover:bg-amber-100 transition-colors duration-300 hover:text-amber-800 cursor-pointer"
        onClick={() => alert("Clicked!")}
      >
        Documentation
      </Button>
    </div>
  );
};

export default HeroButtons;
