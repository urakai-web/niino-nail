import { useState, useEffect } from "react";

const navItems = [
  { label: "コンセプト", href: "#about" },
  { label: "メニュー・料金", href: "#menu" },
  { label: "ギャラリー", href: "#gallery" },
  { label: "サロン情報", href: "#info" },
  { label: "ご予約", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`flex items-center group transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          <img
            src="/images/logo.jpg"
            alt="Niino - Private Nail Salon"
            className="h-10 w-auto rounded"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.slice(0, -1).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wide hover:text-primary transition-colors duration-300 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm tracking-widest bg-primary text-white px-6 py-2.5 hover:bg-primary-dark transition-colors duration-300"
          >
            ご予約
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="メニューを開く"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? "bg-gray-800" : "bg-white"
            } ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? "bg-gray-800" : "bg-white"
            } ${isMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-300 ${
              isScrolled ? "bg-gray-800" : "bg-white"
            } ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white ${
          isMenuOpen ? "max-h-96 shadow-lg" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-gray-700 py-2 border-b border-gray-100 tracking-wide hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
