import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedArt from "@/components/FeaturedArt";
import ArtistStatement from "@/components/ArtistStatement";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedArt />
      <ArtistStatement />
      <Footer />
    </div>
  );
};

export default Index;
