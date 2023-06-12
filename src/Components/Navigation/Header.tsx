import { useState, useEffect } from "react";
import { MdMenu } from "react-icons/md";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Update the window width when the window is resized
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 768; // Define the breakpoint for mobile screens

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-background  text-gray-700 p-2 px-5">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex gap-x-8 items-center justify-between md:justify-normal w-full">
            <div className="flex gap-x-4 text-2xl text-primary items-center font-bold">
              <img src="/Images/speedy.svg" alt="companylogo" />
              <h1>Speedy</h1>
            </div>
            {isMobile && (
              <button className="text-primary" onClick={toggleMobileMenu}>
                <MdMenu size={30} />
              </button>
            )}
            {!isMobile && <h1 className="text-lg">👋 Hello, Harsh</h1>}
          </div>
          {isMobile ? (
            <>
              {isMobileMenuOpen && (
                <div className="flex flex-col items-center mt-2">
                  <h1 className="text-md">
                    <i>//we can add anything if we want//</i>
                  </h1>
                </div>
              )}
            </>
          ) : (
            <div className="flex gap-x-5 items-center">
              <h1 className="text-md truncate border-r-2 p-2 border-gray-400">
                Harsh Raghav
              </h1>
              <div className="p-2 hover:bg-gray-400 transition-all text-white bg-gray-700 font-semibold ease-in-out rounded-full">
                HR
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
