import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

const posts = [
  {
    category: "Corporate Law",
    title: "Understanding Corporate Legal Compliance in India",
    excerpt: "Every business operating in India must navigate complex statutory obligations. Understanding these early can prevent costly legal exposure.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Business Advisory",
    title: "Top Legal Mistakes Businesses Make and How to Avoid Them",
    excerpt: "Many businesses expose themselves to unnecessary legal risk through poorly drafted contracts and reactive legal strategies.",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Legal Guide",
    title: "How to Choose the Right Legal Partner for Your Business",
    excerpt: "Finding a legal advisor who understands your business model is one of the most important decisions a founder can make.",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — BS Law Firm | Legal Insights & Updates" },
      { name: "description", content: "Practical legal knowledge and updates from BS Law Firm." },
      { property: "og:title", content: "BS Law Firm Blog" },
      { property: "og:description", content: "Practical legal knowledge and updates from BS Law Firm." },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

function Blog() {
  return (
    <div className="bg-white">
      <Navbar active="Blog" />
      <section className="bg-black pt-[140px] pb-20 text-center">
        <p className="font-sans uppercase tracking-[0.3em] text-xs text-white/70 mb-4">Blog</p>
        <h1 className="font-serif font-bold text-white text-4xl md:text-6xl mb-4">
          Legal Insights & Updates
        </h1>
        <p className="font-sans text-white/70 max-w-xl mx-auto px-6">
          Practical legal knowledge and updates from BS Law Firm.
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((p) => (
          <article key={p.title} className="border border-[#e0e0e0] bg-white flex flex-col">
            <img src={p.img} alt={p.title} className="w-full aspect-[4/3] object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <p className="font-sans uppercase tracking-wider text-xs text-ink font-bold border-l-[3px] border-brand-red pl-3 mb-4">
                {p.category}
              </p>
              <h2 className="font-serif font-bold text-ink text-xl mb-3 leading-snug">{p.title}</h2>
              <p className="font-sans text-ink-soft text-sm leading-relaxed mb-6 flex-1">
                {p.excerpt}
              </p>
              <a href="#" className="font-sans font-bold text-black border-b-2 border-black self-start pb-1 hover:border-brand-red hover:text-brand-red transition-colors">
                Read More →
              </a>
            </div>
          </article>
        ))}
      </section>

      <Footer />
    </div>
  );
}
