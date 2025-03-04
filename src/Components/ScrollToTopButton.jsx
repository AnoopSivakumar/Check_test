import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-20 right-4 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
     
    >
       <button
        className="p-3 rounded-full bg-tb text-white animate-pulse animation-duration-2s focus:outline-none hover:bg-blue-600 transform transition-transform  rotate-180 hover:rotate-0"
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default ScrollToTopButton;