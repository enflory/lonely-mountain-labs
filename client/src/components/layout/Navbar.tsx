import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-[#f4efe4]/85 backdrop-blur-md border-[#d4c9af]"
          : "bg-[#f4efe4]/85 backdrop-blur-md border-[#d4c9af]"
      )}
      style={{ padding: "20px 56px" }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 font-serif text-lg font-medium" style={{ letterSpacing: "-0.01em" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9c6b3a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 20 5-12 4 8 3-5 6 9z" />
          </svg>
          <span>Lonely Mountain Labs</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[13px] font-medium" style={{ letterSpacing: "0.02em" }}>
          <button onClick={() => scrollToSection("#about")} className="fn-link" style={{ borderBottom: "none" }}>About</button>
          <button onClick={() => scrollToSection("#projects")} className="fn-link" style={{ borderBottom: "none" }}>Projects</button>
          <button onClick={() => scrollToSection("#contact")} className="fn-link" style={{ borderBottom: "none" }}>Contact</button>
          <a href="https://github.com/enflory" target="_blank" rel="noreferrer" className="fn-link" style={{ borderBottom: "none" }}>GitHub</a>
          <a href="https://www.linkedin.com/in/ethanflory/" target="_blank" rel="noreferrer" className="fn-link" style={{ borderBottom: "none" }}>LinkedIn</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#f4efe4] border-b border-[#d4c9af] shadow-lg p-6 md:hidden flex flex-col gap-4">
          <button onClick={() => scrollToSection("#about")} className="text-left text-lg font-serif text-foreground hover:text-accent">About</button>
          <button onClick={() => scrollToSection("#projects")} className="text-left text-lg font-serif text-foreground hover:text-accent">Projects</button>
          <button onClick={() => scrollToSection("#contact")} className="text-left text-lg font-serif text-foreground hover:text-accent">Contact</button>
          <a href="https://github.com/enflory" target="_blank" rel="noreferrer" className="text-lg font-serif text-foreground hover:text-accent">GitHub</a>
          <a href="https://www.linkedin.com/in/ethanflory/" target="_blank" rel="noreferrer" className="text-lg font-serif text-foreground hover:text-accent">LinkedIn</a>
        </div>
      )}
    </nav>
  );
}
