import { motion } from "framer-motion";
import { Scale, Home } from "lucide-react";
import { Logo } from "./Logo";

export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-14 h-14 bg-black flex items-center justify-center mb-6">
            <Home className="text-white" size={24} strokeWidth={1.25} />
          </div>
          <p className="font-sans uppercase tracking-[0.3em] text-xs text-ink-soft mb-4">
            About BS Law Firm
          </p>
          <h2 className="font-serif font-bold text-ink text-3xl md:text-4xl leading-tight mb-6">
            High-Quality Legal Advice With Proactive Approach To All Our Clients
          </h2>
          <p className="font-sans text-ink-soft text-[15px] leading-relaxed mb-6">
            BS Law Firm is a Chennai based corporate legal advisory practice committed to delivering ethical, strategic, and result oriented legal solutions. We work with individuals, businesses, and institutions to provide clear, preventive, and outcome-focused legal guidance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-square overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&w=1000&q=80"
            alt="Lady Justice scales bronze statue"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="font-sans text-ink text-[15px] leading-relaxed text-justify">
            Our team of well-qualified advocates delivers services of the highest quality, capable of meeting the most demanding standards. Our goal is to provide resolution to our clients at the earliest with the highest quality of service and client satisfaction.
          </p>
          <p className="mt-8 font-sans font-bold text-ink text-lg">J Sathish</p>
          <p className="font-sans text-ink-soft text-sm">- Founder, BS Law Firm</p>
          <div className="mt-6">
            <Logo light={false} size="sm" />
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="bg-black border-y border-[#1a1a1a] overflow-hidden">
        <div className="flex items-center py-5 whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              <Scale className="text-white mx-8" size={24} strokeWidth={1.25} />
              <span className="font-sans text-white text-base tracking-wide">
                Expert End-To-End Legal Solutions For Your Diverse Legal Needs
              </span>
              <Scale className="text-white mx-8" size={24} strokeWidth={1.25} />
              <span className="font-sans text-white text-base tracking-wide">
                Expert End-To-End Legal Solutions For Your Diverse Legal Needs
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
