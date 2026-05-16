import { Logo } from "./Logo";

export function CTABanner() {
  return (
    <section
      className="bg-cover bg-center py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="max-w-[900px] mx-auto px-6 text-center flex flex-col items-center gap-6">
        <Logo size="md" />
        <p className="font-sans text-white uppercase tracking-[0.3em] text-xs mt-4">Call us 24/7</p>
        <h2 className="font-serif font-bold text-white text-4xl md:text-6xl">
          +91 9150339531
        </h2>
        <a
          href="https://calendly.com/bslawfirmlegal/30min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex bg-white text-black font-sans font-bold px-8 py-4 hover:bg-[#eeeeee] transition-colors mt-2"
        >
          Book a Consultation
        </a>
      </div>
    </section>
  );
}
