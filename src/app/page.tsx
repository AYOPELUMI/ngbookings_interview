import FindyByBrands from "@/components/findyByBrands";
import DestinationSection from "@/components/ui/sections/destinationSection";
import FindBySection from "@/components/ui/sections/findBySection";
import HeroSection from "@/components/ui/sections/heroSection";
import InformationSection from "@/components/ui/sections/informationSection";
import SlideShow from "@/components/ui/sections/slideShow";
import TopHotelOffers from "@/components/ui/sections/topOffers";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white relative">
      <HeroSection />
      <DestinationSection />
      <TopHotelOffers title="Top Hotel Offers" subtitle="Top hotels offering the best deals and experience" />
      <TopHotelOffers title="Top Apartment Offers" subtitle="Discover our top-rated apartments, carefully selected for comfort and convenience." />
      <TopHotelOffers title="Deals in Ikeja" subtitle="Discover our top-deals for you in the vicinity of ikeja" />
      <FindBySection />
      <FindyByBrands />
      <InformationSection />
    </div>
  );
}
