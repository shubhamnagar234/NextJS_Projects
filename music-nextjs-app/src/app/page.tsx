import HeroSection from "@/components/hero-section";
import FeaturedCourses from "@/components/featured-courses";
import WhyChooseUs from "@/components/why-choose-us";
import MusicSchoolTestimonials from "@/components/testimonial-cards";
import UpcomingWebinars from "@/components/upcoming-webinars";
import Instructors from "@/components/instructors";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/0.96 antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
