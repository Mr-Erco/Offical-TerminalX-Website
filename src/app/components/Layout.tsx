import { Link, Outlet, useLocation } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImage from "../../imports/download-removebg-preview-1.png";
import gridBackground from "../../imports/image-1.png";
import FuturisticBackground from "./FuturisticBackground";
import { Menu, X, Github, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage, languages } from "../i18n/LanguageContext";

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { name: t("nav_home"), path: "/" },
    { name: t("nav_security"), path: "/security" },
    { name: t("nav_packages"), path: "https://packages.terminalx.cloud", external: true },
    { name: t("nav_privacy"), path: "/privacy-policy" },
    { name: t("nav_github"), path: "/github" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-black relative">
      {/* Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${gridBackground})`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Futuristic Animated Background */}
      <FuturisticBackground />

      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 h-[70px] bg-black/90 backdrop-blur-sm border-b border-[#1A1A1A] flex items-center px-4 sm:px-8 z-50">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            <ImageWithFallback
              src={logoImage}
              alt="TerminalX Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 brightness-150 contrast-125"
            />
            <span
              className="text-white text-lg sm:text-xl"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              TerminalX
            </span>
          </Link>

          {/* Desktop Navigation Links - Centered */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:bg-[#2A2A2A] px-3 py-2 rounded transition-colors"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-white hover:bg-[#2A2A2A] px-3 py-2 rounded transition-colors ${
                    location.pathname === item.path ? "bg-[#1A1A1A]" : ""
                  }`}
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Right side: language picker + mobile button */}
          <div className="flex items-center gap-2">
            {/* Language Picker */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-white hover:bg-[#2A2A2A] px-3 py-2 rounded transition-colors text-sm"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                <span>{lang.flag}</span>
                <span className="hidden sm:inline">{lang.label}</span>
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${langOpen ? "rotate-180" : ""}`}
                />
              </button>

              {langOpen && (
                <div className="absolute right-0 top-full mt-1 w-44 bg-black/95 border border-[#2A2A2A] rounded shadow-lg z-50 overflow-hidden">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setLang(l);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-white hover:bg-[#2A2A2A] transition-colors text-left ${
                        lang.code === l.code ? "bg-[#1A1A1A]" : ""
                      }`}
                      style={{ fontFamily: "Orbitron, sans-serif" }}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-[#2A2A2A] rounded transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[70px] left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-[#1A1A1A] z-40">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-white hover:bg-[#2A2A2A] px-4 py-3 rounded transition-colors"
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-white hover:bg-[#2A2A2A] px-4 py-3 rounded transition-colors ${
                    location.pathname === item.path ? "bg-[#1A1A1A]" : ""
                  }`}
                  style={{ fontFamily: "Orbitron, sans-serif" }}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-0 pt-[70px]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Left Section - Copyright */}
            <div
              className="text-white text-sm sm:text-base text-center md:text-left"
              style={{ fontFamily: "Orbitron, sans-serif" }}
            >
              {t("footer_copyright")}
            </div>

            {/* Center Section - Links */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link
                to="/security"
                className="text-white hover:text-white transition-colors text-sm sm:text-base"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                {t("nav_security")}
              </Link>
              <a
                href="https://packages.terminalx.cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors text-sm sm:text-base"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                {t("nav_packages")}
              </a>
              <Link
                to="/privacy-policy"
                className="text-white hover:text-white transition-colors text-sm sm:text-base"
                style={{ fontFamily: "Orbitron, sans-serif" }}
              >
                {t("nav_privacy")}
              </Link>
            </div>

            {/* Right Section - Social Media */}
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/TerminalX-Offical"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <span
                className="text-white/40 cursor-default"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
