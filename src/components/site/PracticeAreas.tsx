import { motion } from "framer-motion";
import { Scale, Users, UserX, Coins, Gavel, BarChart3 } from "lucide-react";

const items = [
  { icon: Scale, title: "Corporate Legal Advisory", body: "Strategic legal guidance for businesses to support informed decisions and reduce risk." },
  { icon: Users, title: "POSH Compliance", body: "Guidance on POSH policies, training, and legal compliance for organisations." },
  { icon: UserX, title: "Litigation Management", body: "Structured legal representation and dispute management with practical approach." },
  { icon: Coins, title: "Statutory Compliance", body: "End to end compliance support to help businesses meet regulatory obligations." },
  { icon: Gavel, title: "Contract Drafting and Review", body: "Professionally drafted contracts that protect business interests." },
  { icon: BarChart3, title: "Legal Risk Assessment", body: "Identify hidden legal risks and build stronger legal foundations." },
];

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="grid grid-cols-1 md:grid-cols-2 min-h-[700px]">
      <div
        className="hidden md:block bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.80), rgba(0,0,0,0.80)), url('https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="bg-black px-6 md:px-16 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sans uppercase tracking-[0.3em] text-xs text-white/70 mb-4">
            Our Services
          </p>
          <h2 className="font-serif font-bold text-white text-4xl md:text-5xl mb-6">
            Corporate Legal Advisory
          </h2>
          <p className="font-sans text-white/80 text-base max-w-[520px] leading-relaxed mb-12">
            BS Law Firm provides comprehensive corporate legal advisory services to businesses, helping them navigate complex regulatory environments, reduce legal risk, and operate with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <Icon className="text-white shrink-0" size={40} strokeWidth={1.25} />
                <div>
                  <h4 className="font-serif font-bold text-white text-base mb-1">{it.title}</h4>
                  <p className="font-sans text-white/60 text-[13px] leading-relaxed">{it.body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
