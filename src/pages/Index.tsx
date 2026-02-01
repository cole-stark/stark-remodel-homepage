import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { Services } from "@/components/Services";
import { WhyTrustUs } from "@/components/WhyTrustUs";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Process } from "@/components/Process";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <WhyTrustUs />
        <BeforeAfter />
        <Process />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
