import { useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

import { ChevronRight } from "lucide-react";

const DocContent = () => {
  useEffect(() => {
    document.querySelectorAll("pre code").forEach((el) => {
      hljs.highlightElement(el as HTMLElement);
    });
  }, []);

  return (
    <div className="mt-16 max-w-3xl mx-auto bg-white rounded-lg border border-stone-100 shadow-sm p-8">
      <h3 className="text-2xl font-semibold mb-6" id="installation">
        Installation
      </h3>
      <p className="mb-4 text-muted-foreground">
        Install the library using your package manager of choice:
      </p>
      <pre className="mb-8">
        <code className="bash">npm install your-library</code>
      </pre>

      <h3 className="text-2xl font-semibold mb-6" id="basic-usage">
        Basic Usage
      </h3>
      <p className="mb-4 text-muted-foreground">
        Import the library and start using it in your project:
      </p>
      <pre className="mb-8">
        <code className="typescript">{`import { createStore } from 'your-library';

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
        <code className="typescript">{`import { createStore } from 'your-library';

const store = createStore(
  { count: 0 },
  {
    immutable: true,
    localStorage: true,
    debug: process.env.NODE_ENV === 'development'
  }
);`}</code>
      </pre>

      <div className="mt-10 text-center flex justify-center items-center ">
        <a
          href="#"
          className="doc-link border-2 border-stone-100 font-semibold text-amber-700 hover:bg-amber-50 transition-colors px-4 py-2 rounded"
        >
          <span className="inline-block mr-2">📖</span>
          <span className="inline-flex items-center">
            View Complete Documentation
            <ChevronRight className="h-5 w-5 ml-2" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default DocContent;
