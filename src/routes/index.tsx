import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { PracticeAreas } from "@/components/site/PracticeAreas";
import { Stats } from "@/components/site/Stats";
import { CTABanner } from "@/components/site/CTABanner";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="bg-white">
      <Navbar active="Home" />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <PracticeAreas />
        <Stats />
        <CTABanner />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
