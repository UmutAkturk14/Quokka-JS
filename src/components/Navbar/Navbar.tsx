import React from "react";
import type { NavbarProps } from "@interfaces";

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="w-3/4 h-12 m-auto flex justify-between items-center">
      <div id="navbar-icon">Navbar icon</div>
      <div id="navbar-buttons">Buttons</div>
      <div id="navbar-cta-buttons">Cta buttons</div>
    </div>
  );
};

export default Navbar;
