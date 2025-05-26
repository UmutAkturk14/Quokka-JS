import "./App.css";
import Navbar from "@components/Navbar/Navbar";
import Hero from "@components/Hero/Hero";
import Features from "@components/Features/Features";
import CodeExample from "@components/CodeExample/CodeExample";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CodeExample />
    </>
  );
}

export default App;
