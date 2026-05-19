import { useEffect, useRef, useState } from "react";
import { Briefcase, Star, User, Trophy } from "lucide-react";

const stats = [
  { icon: Briefcase, value: 500, suffix: "+", label: "Cases Handled" },
  { icon: Star, value: 10, suffix: "+", label: "Years of Practice" },
  { icon: User, value: 200, suffix: "+", label: "Clients Served" },
  { icon: Trophy, value: 100, suffix: "%", label: "Client Confidentiality" },
];

function CountUp({ to }: { to: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const dur = 1500;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / dur);
          setN(Math.round(to * p));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{n}</span>;
}

export function Stats() {
  return (
    <section className="bg-black">
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={i}
              className={`px-6 py-10 md:py-16 text-center ${
                i !== 0 ? "md:border-l border-[#222]" : ""
              } ${i % 2 === 1 ? "border-l md:border-l" : ""} ${i >= 2 ? "border-t md:border-t-0 border-[#222]" : ""}`}
            >
              <Icon className="text-white mx-auto mb-5" size={56} strokeWidth={1.25} />
              <div className="font-serif font-bold text-white text-5xl mb-2">
                <CountUp to={s.value} />
                {s.suffix}
              </div>
              <p className="font-sans text-white/60 text-sm uppercase tracking-wider">{s.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
