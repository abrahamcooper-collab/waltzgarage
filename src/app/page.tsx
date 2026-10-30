import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import StorySection from "@/app/components/StorySection";
import ServicesSection from "@/app/components/ServicesSection";
import GallerySection from "@/app/components/GallerySection";
import ProcessSection from "@/app/components/ProcessSection";
import CTABanner from "@/app/components/CTABanner";
import FAQSection from "@/app/components/FAQSection";
import LocationSection from "@/app/components/LocationSection";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StorySection />
      <ServicesSection />
      <GallerySection />
      <ProcessSection />
      <CTABanner />
      <FAQSection />
      <LocationSection />
      <Footer />
    </main>
  );
}
