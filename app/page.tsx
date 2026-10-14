import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProofCarousel } from "@/components/ProofCarousel";
import {
  AmitySection,
  FAQ,
  FinalCTA,
  Footer,
  HowItWorks,
  Pricing,
  Services,
  Stats,
  Testimonials,
  WhatsAppFab,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <AmitySection />
        <ProofCarousel />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
