import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@components/ui/Button";
import type { NavbarProps } from "@interfaces";
import Quokka from "@assets/Quokka";

const Navbar: React.FC<NavbarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="w-full fixed top-0 bg-gray-50/30 backdrop-blur-sm border-b border-gray-200 z-50">
      <nav className="w-11/12 md:w-3/4 h-20 m-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Quokka className="w-9 h-9 select-none" />
          <p
            className="text-2xl md:text-3xl font-bold"
            style={{ fontFamily: "Ancizar Serif" }}
          >
            Quokka JS
          </p>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-4" id="navbar-buttons">
          <Button variant="basic">Features</Button>
          <Button variant="basic">Examples</Button>
          <Button variant="basic">Docs</Button>
          <Button variant="basic">GitHub</Button>
        </div>

        {/* Desktop CTAs */}
        <div
          className="hidden md:flex gap-4 items-center"
          id="navbar-cta-buttons"
        >
          <Button variant="outlined" copyText="npm install quokka-js">
            npm install quokka-js
          </Button>
          <Button variant="call-to-action">Get Started</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm">
          <div className="flex flex-col gap-4 px-4 py-6">
            <a
              href="#features"
              className="text-sm font-medium"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#examples"
              className="text-sm font-medium"
              onClick={toggleMenu}
            >
              Examples
            </a>
            <a
              href="#docs"
              className="text-sm font-medium"
              onClick={toggleMenu}
            >
              Docs
            </a>
            <a
              href="https://github.com"
              className="text-sm font-medium"
              onClick={toggleMenu}
            >
              GitHub
            </a>
            <div className="mt-4 flex flex-col gap-2">
              <button
                className="w-full px-4 py-2 text-sm text-white rounded bg-orange-600"
                onClick={() => alert("Clicked!")}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
