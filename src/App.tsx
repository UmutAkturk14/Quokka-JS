import "./App.css";
import Navbar from "@components/Navbar/Navbar";
import Hero from "@components/Hero/Hero";
import Features from "@components/Features/Features";
import CodeExample from "@components/CodeExample/CodeExample";
import { Documentation } from "@components/Documentation/Documentation";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CodeExample />
      <Documentation />
    </>
  );
}

export default App;
