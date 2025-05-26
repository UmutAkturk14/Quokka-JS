import { ChevronRight } from "lucide-react";

type DocSection = {
  title: string;
  items: { title: string; href: string }[];
};

const docSections: DocSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "#installation" },
      { title: "Basic Usage", href: "#basic-usage" },
      { title: "Configuration", href: "#configuration" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Store API", href: "#store-api" },
      { title: "State Management", href: "#state-management" },
      { title: "Type Safety", href: "#type-safety" },
    ],
  },
  {
    title: "Advanced Usage",
    items: [
      { title: "Middleware", href: "#middleware" },
      { title: "API Integration", href: "#api-integration" },
      { title: "Performance Tips", href: "#performance-tips" },
    ],
  },
];

const Documentation = () => {
  return (
    <section className="py-16 bg-secondary/30" id="documentation">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Documentation
          </h2>
          <p className="text-lg text-muted-foreground max-w-[42rem]">
            Everything you need to know to get the most out of our library.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {docSections.map((section, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-earth-100 shadow-sm p-6"
            >
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a
                      href={item.href}
                      className="group flex items-center text-earth-800 hover:text-warmth-700 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 text-warmth-500 mr-2 transition-transform group-hover:translate-x-1" />
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-white rounded-lg border border-earth-100 shadow-sm p-8">
          <h3 className="text-2xl font-semibold mb-6" id="installation">
            Installation
          </h3>
          <p className="mb-4 text-muted-foreground">
            Install the library using your package manager of choice:
          </p>
          <pre className="mb-8">
            <code>npm install your-library</code>
          </pre>

          <h3 className="text-2xl font-semibold mb-6" id="basic-usage">
            Basic Usage
          </h3>
          <p className="mb-4 text-muted-foreground">
            Import the library and start using it in your project:
          </p>
          <pre className="mb-8">
            <code>{`import { createStore } from 'your-library';

// Create a store with initial state
const store = createStore({
  count: 0,
  user: null
});

// Get state
const count = store.get('count');

// Update state
store.set('count', count + 1);`}</code>
          </pre>

          <h3 className="text-2xl font-semibold mb-6" id="configuration">
            Configuration
          </h3>
          <p className="mb-4 text-muted-foreground">
            Customize the library behavior by providing configuration options:
          </p>
          <pre>
            <code>{`import { createStore } from 'your-library';

const store = createStore(
  { count: 0 },
  {
    immutable: true,
    localStorage: true,
    debug: process.env.NODE_ENV === 'development'
  }
);`}</code>
          </pre>

          <div className="mt-10 text-center">
            <a href="#" className="doc-link">
              View Complete Documentation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documentation;
