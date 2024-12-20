import { useState } from "react";
import { useSwipeable } from "react-swipeable";

function useSwipables() {
  const [showProfile, setShowProfile] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);

  const handleMenuSwipeShow = () => {
    setShowProfile(true);
    setShowProfile(true);
    console.log(showProfile);
  };
  const handleMenuSwipeHide = () => {
    if (showProfile) {
      setMenuAnimating(true);
      setTimeout(() => {
        setShowProfile(false);
        setMenuAnimating(false);
      }, 500); // Match animation duration (0.5s)
    }
  };
  const handlers = useSwipeable({
    onSwipedLeft: handleMenuSwipeHide,
    onSwipedRight: handleMenuSwipeShow,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return {
    handlers,
    handleMenuSwipeShow,
    handleMenuSwipeHide,
    showProfile,
    setShowProfile,
    menuAnimating,
  };
}

export default useSwipables;