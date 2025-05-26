import "./App.css";
import Navbar from "@components/Navbar/Navbar";
import Hero from "@components/Hero/Hero";
import Features from "@components/Features/Features";
import CodeExample from "@components/CodeExample/CodeExample";
import { Documentation } from "@components/Documentation/Documentation";
import Footer from "@components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <CodeExample />
      <Documentation />
      <Footer />
    </>
  );
}

export default App;
