import { useState } from "react";
import "./App.css";
import About from "./components/about/About";
import RightNav from "./components/navbar/Navbar";
import LeftSection from "./components/profile/Profile";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { AnimatePresence } from "framer-motion";
import { RiUserSmileFill } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";
import Prof from './assets/common/profile.jpg';

// Wrap the renderSection function with AnimatePresence

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [showProfile, setShowProfile] = useState(false);

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
  const handleMenuSwipeShow = () => {
    setShowProfile(true);
  };
  const handleMenuSwipeHide = () => {
    setShowProfile(false);
  };
  const handlers = useSwipeable({
    onSwipedLeft: handleMenuSwipeHide,
    onSwipedRight: handleMenuSwipeShow,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <>
      <div {...handlers} className="min-h-screen flex relative">
        {/* Left Section */}
        <div
          className={`w-[25%] bg-gray-100 border-r max-lg:z-40 max-[350px]:w-[90%] max-sm:w-[75%] max-lg:w-[45%] max-lg:absolute  ${
            showProfile ? "max-lg:block" : "max-lg:hidden"
          }`}
        >
          <LeftSection />
        </div>
        <div
          onClick={() => setShowProfile(!showProfile)}
          className={`lg:hidden max-sm:text-[2rem] text-[3rem] max-lg:z-50 absolute max-sm:top-3 top-5  drop-shadow-md ${
            showProfile
              ? "max-sm:left-[70%] max-lg:left-[40%]"
              : "max-lg:left-5 animate-pulse"
          }`}
        >
          {/* <RiUserSmileFill /> */}
          <img
           src={Prof}
           className="w-16 h-16 object-center rounded-full"
            alt="Profile" />
        </div>

        {/* Center Section */}
        <div onClick={() => setShowProfile(false)} className="w-full bg-white">
          <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
        </div>

        {/* Right Section */}
        <div
          onClick={() => setShowProfile(false)}
          className="max-sm:w-[17%] w-[10%] bg-gray-100 border-l sticky top-0 h-screen"
        >
          <RightNav
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />
        </div>
      </div>
    </>
  );
}

export default App;
