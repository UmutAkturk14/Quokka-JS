import React from "react";
import { Button } from "@components/ui/Button";
import type { NavbarProps } from "@interfaces";
import Quokka from "@assets/Quokka";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="w-full 0">
      <div className="w-3/4 h-20 m-auto flex justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <Quokka className="w-15 h-15 stroke-3 stroke-amber-500 text-sky-950" />
          <p
            className="text-3xl font-bold"
            style={{ fontFamily: "Ancizar Serif" }}
          >
            Quokka JS
          </p>
        </div>
        <div id="navbar-buttons" className="flex gap-6">
          <Button variant="primary" onClick={() => alert("Clicked!")}>
            Features
          </Button>
          <Button variant="primary" onClick={() => alert("Clicked!")}>
            Examples
          </Button>
          <Button variant="primary" onClick={() => alert("Clicked!")}>
            Docs
          </Button>
          <Button variant="primary" onClick={() => alert("Clicked!")}>
            GitHub
          </Button>
        </div>
        <div id="navbar-cta-buttons">Cta buttons</div>
      </div>
    </div>
  );
};

export default Navbar;
