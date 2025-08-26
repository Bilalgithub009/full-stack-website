import { Button } from "antd";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import CustomizedBadge from "./CustomizedBadge";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [islogin, setlogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-[42px] md:h-[60px]">
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "backdrop-blur-md bg-white/70 shadow-md"
          : "bg-white shadow-sm"
          }`}
      >
        {/* Navbar Content */}
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4">
          {/* === LOGO === */}
          <div className="flex items-center space-x-3">
            <p className="text-black font-bold text-2xl sm:text-3xl tracking-wide">
              SK
            </p>
            <div className="relative overflow-hidden h-6 w-28 sm:w-32">
              <div className="animate-slideWords absolute top-0 left-0 flex flex-col space-y-1 text-blue-600 font-medium text-sm sm:text-base">
                <span>Garments</span>
                <span>Underwear</span>
                <span>Boxer</span>
                <span>Jeans</span>
                <span>Ladies</span>
              </div>
            </div>
          </div>

          {/* === DESKTOP NAV === */}
          <nav className="hidden md:flex items-center gap-10 text-base font-medium text-gray-700">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative group transition-all"
              >
                <span className="group-hover:text-blue-600 transition">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* === LOGIN / LOGOUT === */}
          <div className="hidden md:flex items-center space-x-4">
            {islogin ? (
              <Button
                type="primary"
                danger
                size="middle"
                onClick={() => setlogin(false)}
              >
                Logout
              </Button>
            ) : (
              <Button size="middle" onClick={() => setlogin(true)}>
                Login
              </Button>
            )}

            <CustomizedBadge />
          </div>

          {/* === MOBILE TOGGLE === */}
          <div className="md:hidden flex items-center transition-all duration-300">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* === MOBILE NAV === */}
        {isOpen && (
          <div className="md:hidden backdrop-blur-md bg-white/80 border-t border-gray-200 shadow-inner animate-fadeIn">
            <nav className="flex flex-col px-6 py-4 space-y-3 text-base font-medium text-gray-700">
              {["Home", "Products", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-blue-600 border-b pb-2 border-gray-200"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex px-6 pb-4">
              {islogin ? (
                <Button
                  type="primary"
                  danger
                  block
                  onClick={() => setlogin(false)}
                >
                  Logout
                </Button>
              ) : (
                <Button block onClick={() => setlogin(true)}>
                  Login
                </Button>
              )}
              <CustomizedBadge />

            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
