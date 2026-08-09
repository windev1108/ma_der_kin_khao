import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { FeaturedDish } from "@/components/FeaturedDish";
import { MenuSection } from "@/components/MenuSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ReservationSection } from "@/components/ReservationSection";
import { LocationSection } from "@/components/LocationSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      {/* No message set — AnnouncementBar renders nothing until a real,
          current announcement is supplied. */}
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <FeaturedDish />
        <MenuSection />
        <ExperienceSection />
        <GallerySection />
        <TestimonialsSection />
        <ReservationSection />
        <LocationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
