import { useEffect, useState } from "react";
import CustomizedBadge from "./CustomizedBadge";
import { useCart } from "@/context/cartcontext.jsx";
import { Button } from "antd";
import { X, Menu } from "lucide-react";
import { useNavigate } from "react-router";

export default function Header() {

  const { cartCount } = useCart();

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔹 Check login status from localStorage on page load
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsLogin(authStatus === "true");
  }, []);

  // 🔹 Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🔹 Navigation handlers
  const gotoSignup = () => {
    navigate("/signup");
  };

  const gotoHome = () => {
    navigate("/");
  };

  // 🔹 Logout function
  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    setIsLogin(false);
    navigate("/signin"); // redirect to signin page
  };

  return (
    <>
      {/* === FIXED HEADER === */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white shadow-sm"
          }`}
      >
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 py-3 md:py-4 h-[60px] md:h-[80px]">
          {/* === LOGO === */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={gotoHome}>
            <p className="text-black font-bold transition-all text-xl sm:text-3xl">
              BILAL
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
            {[
              { name: "Home", href: "#home" },
              { name: "Products", href: "#products" },
              { name: "About", href: "#about" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative group transition-all"
              >
                <span className="group-hover:text-blue-600 transition">
                  {item.name}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* === LOGIN / LOGOUT === */}
          <div className="hidden md:flex items-center space-x-4">
            {isLogin ? (
              <Button
                className="p-6 m-2"
                type="primary"
                danger
                size="middle"
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                className="p-6 m-2"
                size="middle"
                onClick={gotoSignup}
              >
                Login
              </Button>
            )}
            <CustomizedBadge count={cartCount} />
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
          <div className="md:hidden bg-white border-t border-gray-200 shadow-inner animate-fadeIn">
            <nav className="flex flex-col px-6 py-4 space-y-3 text-base font-medium text-gray-700">
              {[
                { name: "Home", href: "#home" },
                { name: "Products", href: "#products" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="hover:text-blue-600 border-b pb-2 border-gray-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="flex px-6 pb-4">
              {isLogin ? (
                <Button
                  type="danger"
                  danger
                  block
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              ) : (
                <Button
                  type="primary"
                  block
                  onClick={gotoSignup}
                >
                  Login
                </Button>
              )}
              <CustomizedBadge count={cartCount} />
            </div>
          </div>
        )}
      </header>

      {/* === SPACE FOR HEADER HEIGHT === */}
      <div className="h-[40px] md:h-[60px]" />
    </>
  );
}
