import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import USPSection from "@/components/USPSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";
import StickyMobileOrder from "@/components/StickyMobileOrder";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <Navbar />
      <main>
        <HeroSection />
        <USPSection />
        <AboutSection />
        <MenuSection />
        <ReviewsSection />
        <LocationSection />
        <OrderSection />
      </main>
      <Footer />
      <StickyMobileOrder />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
