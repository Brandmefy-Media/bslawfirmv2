import { motion } from "framer-motion";
import { Coins, Clock, Gavel } from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "Affordable Legal Services",
    body: "Getting justice should not be complicated or expensive. BS Law Firm aims to provide clear, affordable, and high-quality legal services for all your needs.",
  },
  {
    icon: Clock,
    title: "Efficient Resolution",
    body: "We understand the value of your time. Our goal is to resolve legal matters at the earliest with practical strategies and 100% client satisfaction.",
  },
  {
    icon: Gavel,
    title: "Strong Track Record",
    body: "We approach every case with relentless dedication. Our preventive and proactive legal strategy ensures the best possible outcomes for our clients.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-0 border border-[#e0e0e0]">
        <div className="bg-black p-10 flex flex-col justify-between">
          <h3 className="font-serif font-bold text-white text-2xl leading-snug">
            Expert End-to-end legal solutions for your diverse legal needs.
          </h3>
          <a
            href="#contact"
            className="mt-8 inline-flex justify-center border border-white text-white font-sans font-semibold px-6 py-3 hover:bg-white hover:text-black transition-colors"
          >
            Contact Us
          </a>
        </div>
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 border-l border-[#e0e0e0]"
            >
              <Icon className="text-black mb-6" size={48} strokeWidth={1.25} />
              <h4 className="font-serif font-bold text-ink text-xl mb-3">{f.title}</h4>
              <p className="font-sans text-ink-soft text-sm leading-relaxed text-justify">
                {f.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
