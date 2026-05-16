import { Facebook, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

const services = [
  "Corporate Legal Advisory",
  "Contract Drafting and Review",
  "Litigation Management",
  "Statutory Compliance Advisory",
  "POSH Compliance Advisory",
  "Legal Risk Assessment",
];

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Practice Areas", href: "/#practice-areas" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const socials = [Facebook, Instagram, Twitter, Linkedin];

export function Footer() {
  return (
    <footer className="bg-black">
      {/* Top */}
      <div className="border-b border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex gap-3 md:justify-start justify-center">
            {socials.map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 border border-[#333] flex items-center justify-center hover:border-white transition-colors">
                <Icon className="text-white" size={18} strokeWidth={1.5} />
              </a>
            ))}
          </div>
          <div className="flex justify-center">
            <Logo size="md" />
          </div>
          <div>
            <p className="font-sans text-white mb-3 uppercase tracking-wider text-sm">Newsletter</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address *"
                className="flex-1 bg-white text-black font-sans px-4 py-3 placeholder:text-ink-soft outline-none"
              />
              <button className="bg-[#222] text-white px-5 hover:bg-[#333] transition-colors" aria-label="Subscribe">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mid */}
      <div className="max-w-[1400px] mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h4 className="font-serif font-bold text-white text-xl mb-5">Our Address</h4>
          <ul className="space-y-3 font-sans text-white/70 text-sm">
            <li>45, Anna Salai, Babu Nagar, Pattabiram, Chennai 600072</li>
            <li>Phone: +91 9150339531</li>
            <li>Email: bsathishlawyer@gmail.com</li>
            <li>Office Time: Mon to Sat, 9AM to 6PM</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-bold text-white text-xl mb-5">Our Services</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-sans text-white/70 text-sm">
            {services.map((s) => (
              <li key={s}><a href="#practice-areas" className="hover:text-white transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-bold text-white text-xl mb-5">Useful Links</h4>
          <ul className="space-y-2 font-sans text-white/70 text-sm">
            {links.map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-white transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#111]">
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 font-sans text-white/60 text-sm">
          <p>Copyright © 2026 BS Law Firm. All rights reserved.</p>
          <a href="https://brandmefy.com" target="_blank" rel="noreferrer" className="text-white hover:underline">
            Built by Brandmefy
          </a>
        </div>
      </div>
    </footer>
  );
}
