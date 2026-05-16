import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Home", to: "/", hash: "#home" },
  { label: "About", to: "/", hash: "#about" },
  { label: "Practice Areas", to: "/", hash: "#practice-areas" },
  { label: "Blog", to: "/blog", hash: "" },
  { label: "Contact", to: "/", hash: "#contact" },
];

export function Navbar({ active = "Home" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black border-b border-[#1a1a1a] h-[70px]">
      <div className="h-full max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <Logo size="sm" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => {
            const isActive = active === l.label;
            const href = l.to === "/" ? `/${l.hash}` : l.to;
            return (
              <a
                key={l.label}
                href={href}
                className={`font-sans text-sm tracking-wider uppercase transition-colors hover:text-white ${
                  isActive ? "text-brand-red" : "text-white/90"
                }`}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <a
          href="https://calendly.com/bslawfirmlegal/30min"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:inline-flex bg-white text-black font-sans font-semibold text-sm px-6 py-3 hover:bg-[#eeeeee] transition-colors"
        >
          Book Consultation
        </a>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-black border-t border-[#1a1a1a]">
          <div className="px-6 py-8 flex flex-col gap-6">
            {links.map((l) => {
              const isActive = active === l.label;
              const href = l.to === "/" ? `/${l.hash}` : l.to;
              return (
                <a
                  key={l.label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`font-sans text-lg uppercase tracking-wider ${
                    isActive ? "text-brand-red" : "text-white"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <a
              href="https://calendly.com/bslawfirmlegal/30min"
              target="_blank"
              rel="noreferrer"
              className="bg-white text-black font-sans font-semibold text-sm px-6 py-3 text-center"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
