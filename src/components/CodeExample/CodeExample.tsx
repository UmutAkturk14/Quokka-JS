import { Copy } from "lucide-react";
import { useState, useRef } from "react";
import exampleCodes from "../../helpers/codeExamples";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { useEffect } from "react";

const CodeExample = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof exampleCodes>("basic");
  // ... existing state and hooks ...
  const codeRef = useRef<HTMLElement>(null);

  // Highlight code when activeTab changes
  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [activeTab]);

  const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);

    const copy = async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1500);
      } catch (err) {
        console.error("Failed to copy:", err);
      }
    };

    return { isCopied, copy };
  };

  const { isCopied, copy } = useCopyToClipboard();

  return (
    <section className="py-16  min-h-[100svh]" id="code-examples">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter mb-4">
            Simple but Powerful API
          </h2>
          <p className="text-lg text-gray-600 max-w-[42rem]">
            Write clean, maintainable code with our intuitive API design.
          </p>
        </div>

        {/* macOS-style window */}
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden border border-gray-200 shadow-sm relative">
          {/* Window controls */}
          <div className="flex items-center justify-between bg-stone-200 px-4 py-2 border-b border-gray-200">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="relative">
              <button
                onClick={() => copy(exampleCodes[activeTab])}
                className="flex items-center gap-1 px-4 py-1 text-xs text-gray-500 hover:text-gray-700 rounded hover:bg-stone-200 transition-colors "
              >
                <Copy className="h-3.5 w-3.5" />
                Copy
              </button>
              {isCopied && (
                <div className="absolute bg-gray-800 text-white text-xs px-2 py-1 rounded z-50">
                  Copied!
                </div>
              )}
            </div>
          </div>

          {/* Tab navigation */}
          <div className="bg-gray-100 border-b border-gray-200 px-4">
            <div className="flex space-x-4">
              {Object.keys(exampleCodes).map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium border-b-3 hover:bg-stone-200 transition duration-300 ${
                    activeTab === tab
                      ? "border-amber-500 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab as keyof typeof exampleCodes)}
                >
                  {tab === "basic" && "Basic Usage"}
                  {tab === "advanced" && "API Client"}
                  {tab === "integration" && "Functional Utils"}
                  {tab === "eventManager" && "Event Manager"}
                </button>
              ))}
            </div>
          </div>

          {/* Code content */}
          <div className="p-4 bg-stone-100 overflow-x-auto">
            <pre className="text-sm font-mono text-gray-800 whitespace-pre bg-stone-100 py-4 px-2">
              <code key={activeTab} ref={codeRef} className="typescript">
                {exampleCodes[activeTab]}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
