import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  { body: "BS Law Firm provided exceptional corporate legal advice that helped us restructure our compliance systems entirely. Their proactive approach saved us from significant legal risk.", name: "Ramesh Krishnan", title: "Managing Director" },
  { body: "J Sathish is thorough, professional, and genuinely invested in outcomes. The contract review process was detailed and gave us complete confidence.", name: "Priya Anand", title: "Business Owner" },
  { body: "We engaged BS Law Firm for POSH compliance training. Their guidance was practical, well-structured, and clearly explained to our entire management team.", name: "Suresh Kumar", title: "HR Manager" },
  { body: "The legal risk assessment they conducted for our factory operations identified issues we had completely overlooked. Highly recommend their services.", name: "Arjun Venkatesh", title: "Factory Director" },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [perView, setPerView] = useState(3);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, []);

  const visible = Array.from({ length: perView }, (_, i) => items[(idx + i) % items.length]);

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="w-14 h-14 bg-black flex items-center justify-center mx-auto mb-6">
            <Quote className="text-white" size={22} strokeWidth={1.5} />
          </div>
          <p className="font-sans uppercase tracking-[0.3em] text-xs text-ink-soft mb-4">
            Testimonials
          </p>
          <h2 className="font-serif font-bold text-ink text-3xl md:text-5xl">
            What Our Clients Say About Us
          </h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={idx + "-" + perView}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {visible.map((t, i) => (
                <div key={i} className="border border-[#e0e0e0] p-8">
                  <div className="font-serif text-[#cccccc] text-6xl leading-none mb-2">"</div>
                  <p className="font-sans italic text-ink-soft text-[15px] leading-relaxed mb-6">
                    {t.body}
                  </p>
                  <p className="font-sans font-bold text-ink">{t.name}</p>
                  <p className="font-sans text-ink-soft text-sm">{t.title}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)}
              className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-brand-red transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2.5 h-2.5 ${i === idx ? "bg-black" : "bg-[#cccccc]"}`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIdx((i) => (i + 1) % items.length)}
              className="w-10 h-10 bg-black text-white flex items-center justify-center hover:bg-brand-red transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
