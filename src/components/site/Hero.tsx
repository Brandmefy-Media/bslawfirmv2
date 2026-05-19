import { motion } from "framer-motion";
import { Briefcase, Users, FileText, Gavel, ArrowRight } from "lucide-react";

const services = [
  { dark: true, label: "Corporate", title: "BS Law Firm", sub: "Corporate Advisory", icon: null },
  { dark: false, label: "POSH", title: "POSH Compliance", icon: Users },
  { dark: false, label: "Contracts", title: "Contract Drafting", icon: FileText },
  { dark: false, label: "Litigation", title: "Litigation Management", icon: Gavel },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-[70px] bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.72)), url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80')",
      }}
    >
      <div className="flex-1 flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 w-full py-14 md:py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-sans text-white uppercase tracking-[0.3em] text-xs mb-6"
          >
            Advocates & Legal Consultants in Chennai
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif font-bold text-white text-5xl md:text-7xl leading-[1.1]"
          >
            Legal Strength.
            <br />
            Business Growth.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-sans text-white/80 text-base md:text-lg mt-8 max-w-[520px] leading-relaxed"
          >
            Corporate legal advisory and strategic legal solutions for individuals, businesses, and institutions across India.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-black font-sans font-bold px-8 py-4 hover:bg-[#eeeeee] transition-colors"
            >
              Get Legal Advice <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Service quick-links bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative w-full grid grid-cols-2 md:grid-cols-4"
      >
        {services.map((s, i) => {
          const Icon = s.icon || Briefcase;
          return (
            <div
              key={i}
              className={`${
                s.dark ? "bg-black" : "bg-[#111111]"
              } border-t border-r border-[#1a1a1a] last:border-r-0 p-8 flex flex-col gap-3`}
            >
              {s.dark ? (
                <>
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/60">
                    {s.label}
                  </span>
                  <span className="font-serif font-bold text-white text-xl">{s.title}</span>
                  <span className="font-sans text-sm text-white/70">{s.sub}</span>
                </>
              ) : (
                <>
                  <Icon className="text-white" size={32} strokeWidth={1.25} />
                  <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/60">
                    {s.label}
                  </span>
                  <span className="font-serif font-bold text-white text-lg">{s.title}</span>
                </>
              )}
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}
