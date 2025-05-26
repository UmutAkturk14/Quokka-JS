import { Github, Twitter, Package } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth-50 border-t border-stone-300 py-12 flex justify-center items-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Your Library</h3>
            <p className="text-stone-600">
              A modern TypeScript library that enhances your development
              workflow.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-stone-500 hover:text-amber-700 transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="#"
                className="text-stone-500 hover:text-amber-700 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-stone-500 hover:text-amber-700 transition-colors"
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">npm</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  Examples
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  npm
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-600 hover:text-amber-700 transition-colors"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-300 mt-8 pt-8 text-center text-stone-500 text-sm">
          <p>© 2025 Quokka JS. All rights reserved.</p>
          <p className="mt-2">Made with ♥ for the TypeScript community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
