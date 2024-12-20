import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Home from "./components/pages/Home";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "skills":
        return <Skills />;
      case "projects":
        return <Projects />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Home
        renderSection={renderSection}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </>
  );
}

export default App;