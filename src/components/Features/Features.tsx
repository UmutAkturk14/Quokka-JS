import React from "react";
import type { Feature } from "@interfaces";
import { ArrowRight, Box, Code, Lightbulb, Zap } from "lucide-react";

const features: Feature[] = [
  {
    icon: <Code className="h-10 w-10 text-amber-600" />,
    title: "Modern Tooling",
    description:
      "Built with the latest technologies to ensure compatibility with modern development workflows.",
    link: "https://github.com/umutakturk14/quokkajs",
  },
  {
    icon: <Zap className="h-10 w-10 text-amber-600" />,
    title: "Efficient",
    description:
      "Designed for maximum efficiency with clean abstractions and minimal boilerplate.",
    link: "https://github.com/umutakturk14/quokkajs",
  },
  {
    icon: <Box className="h-10 w-10 text-amber-600" />,
    title: "Modular Design",
    description:
      "Component-based architecture that promotes reusability and maintainability.",
    link: "https://github.com/umutakturk14/quokkajs",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-amber-600" />,
    title: "Intuitive API",
    description:
      "Thoughtfully designed API that's easy to learn while remaining powerful.",
    link: "https://github.com/umutakturk14/quokkajs",
  },
];

const Features = () => {
  return (
    <section
      className="py-16 flex justify-center items-center"
      id="features-alt"
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon, title, description, link }, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>
              <div className="mt-auto flex items-center justify-center">
                <a
                  href={link}
                  className="group inline-flex items-center text-amber-600 hover:text-amber-700 font-medium"
                  target="_blank"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
