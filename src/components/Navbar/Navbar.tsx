import React from "react";
import { Button } from "@components/ui/Button";
import type { NavbarProps } from "@interfaces";
import Quokka from "@assets/Quokka";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="w-full bg-yellow-50/30 backdrop-blur-sm border-b border-gray-100">
      <div className="w-3/4 h-20 m-auto flex justify-between items-center">
        <div className="flex gap-2 justify-center items-center">
          <Quokka className="w-14 h-14" />
          <p
            className="text-3xl font-bold"
            style={{ fontFamily: "Ancizar Serif" }}
          >
            Quokka JS
          </p>
        </div>
        <div id="navbar-buttons" className="flex gap-4">
          <Button variant="basic" onClick={() => alert("Clicked!")}>
            Features
          </Button>
          <Button variant="basic" onClick={() => alert("Clicked!")}>
            Examples
          </Button>
          <Button variant="basic" onClick={() => alert("Clicked!")}>
            Docs
          </Button>
          <Button variant="basic" onClick={() => alert("Clicked!")}>
            GitHub
          </Button>
        </div>
        <div id="navbar-cta-buttons" className="flex gap-6">
          <Button variant="outlined" onClick={() => alert("Clicked!")}>
            npm install quokka-js
          </Button>
          <Button variant="call-to-action" onClick={() => alert("Clicked!")}>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
