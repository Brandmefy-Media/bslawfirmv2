import { useState } from "react";
import { Home, Mail, Phone, Clock } from "lucide-react";

const info = [
  { icon: Home, label: "Head Office", value: "45, Anna Salai, Babu Nagar, Pattabiram, Chennai, Tamil Nadu 600072" },
  { icon: Mail, label: "Email Address", value: "bsathishlawyer@gmail.com" },
  { icon: Phone, label: "Telephone", value: "+91 9150339531" },
  { icon: Clock, label: "Office Hours", value: "Mon to Sat: 9am to 6pm" },
];

const practiceAreas = [
  "Corporate Legal Advisory",
  "Contract Drafting",
  "Litigation Management",
  "Statutory Compliance",
  "POSH Compliance",
  "Legal Risk Assessment",
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", area: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    setStatus("sending");
    try {
      // Replace YOUR_FORMSPREE_ID with actual endpoint from formspree.io
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="bg-cover bg-center py-14 md:py-24"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.82)), url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1800&q=80')",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <p className="font-sans uppercase tracking-[0.3em] text-xs text-white/70 mb-4">
            Get In Touch
          </p>
          <h2 className="font-serif font-bold text-white text-4xl md:text-5xl mb-10">
            Contact Information
          </h2>
          <div className="space-y-8">
            {info.map((it, i) => {
              const Icon = it.icon;
              return (
                <div key={i} className="flex gap-5">
                  <div className="w-14 h-14 border border-white/40 flex items-center justify-center shrink-0">
                    <Icon className="text-white" size={22} strokeWidth={1.25} />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-white text-base mb-1">{it.label}</p>
                    <p className="font-sans text-white/80 text-sm leading-relaxed">{it.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <p className="font-sans uppercase tracking-[0.3em] text-xs text-white/70 mb-4">
            Contact Form
          </p>
          <h2 className="font-serif font-bold text-white text-3xl md:text-4xl mb-8">
            Need Consultation, Kindly Request Here
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={form.name} onChange={onChange} placeholder="Name *"
                className="bg-black/50 border border-[#444] text-white placeholder:text-white/50 font-sans p-4 focus:border-white outline-none" />
              <input name="email" value={form.email} onChange={onChange} placeholder="Email *" type="email"
                className="bg-black/50 border border-[#444] text-white placeholder:text-white/50 font-sans p-4 focus:border-white outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone *"
                className="bg-black/50 border border-[#444] text-white placeholder:text-white/50 font-sans p-4 focus:border-white outline-none" />
              <select name="area" value={form.area} onChange={onChange}
                className="bg-black/50 border border-[#444] text-white font-sans p-4 focus:border-white outline-none">
                <option value="" className="bg-black">Select Practice Area</option>
                {practiceAreas.map((a) => (
                  <option key={a} value={a} className="bg-black">{a}</option>
                ))}
              </select>
            </div>
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Case Description..." rows={5}
              className="w-full bg-black/50 border border-[#444] text-white placeholder:text-white/50 font-sans p-4 focus:border-white outline-none" />

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onSubmit}
                disabled={status === "sending"}
                className="bg-white text-black font-sans font-bold px-10 py-4 hover:bg-[#eeeeee] transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : status === "sent" ? "Sent ✓" : "Enquire Now"}
              </button>
              <a
                href="https://wa.me/919150339531?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20legal%20services."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center border border-white text-white font-sans font-bold px-8 py-4 hover:bg-white hover:text-black transition-colors"
              >
                Chat on WhatsApp →
              </a>
            </div>
            {status === "error" && (
              <p className="font-sans text-brand-red text-sm">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
