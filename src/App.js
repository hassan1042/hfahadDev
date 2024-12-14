import {  useState } from "react";
import "./App.css";
import About from "./components/about/About";
import RightNav from "./components/navbar/Navbar";
import LeftSection from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { AnimatePresence } from "framer-motion";
import useSwipables from "./components/utilities/common/swipables";

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

  const {handlers, showProfile, setShowProfile, menuAnimating} = useSwipables();



  return (
    <>
      <div 
      {...handlers}
       className="min-h-screen flex relative w-full 2xl:justify-between">
        {/* Left Section */}
        <div
          className={`w-[25%] 2xl:w-[30%]  bg-gray-100 border-r max-lg:z-40 max-[350px]:w-[90%] max-sm:w-[75%] max-lg:w-[45%] max-lg:sticky top-0  ${
            showProfile
      ? "max-lg:block max-lg:menu-slide-in"
      : menuAnimating
      ? "max-lg:menu-slide-out"
      : "max-lg:hidden"
  }`}
        >
          <LeftSection />
        </div>

        {/* Center Section */}
        <div
          onClick={() => setShowProfile(false)}
          className={`w-full  bg-white
        ${showProfile ? "max-lg:hidden" : ""}
        `}
        >
          <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
        </div>

        {/* Right Section */}
        <div
          onClick={() => setShowProfile(false)}
          className={`max-sm:w-[17%] w-[10%]  bg-gray-100 border-l sticky top-0 h-screen 
          ${showProfile ? "ms-auto" : ""}
          `}
        >
          <RightNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
        {/** Menu Button */}
        <div
          onClick={() => setShowProfile(!showProfile)}
          className={`lg:hidden max-sm:text-[2rem] text-[3rem] max-lg:z-50  drop-shadow-md fixed ${
            showProfile
              ? "max-sm:left-[70%] max-lg:left-[40%] hidden"
              : "max-lg:left-5 animate-pulse"
          }        
          `}
        >
         <div className="text-3xl cursor-pointer animate-bounce mt-5">
  👋
</div>

        </div>
      </div>
    </>
  );
}

export default App;