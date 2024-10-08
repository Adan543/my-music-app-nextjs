import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white">

      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <WhyChooseUs/>
      <TestimonialCard/>
      <UpcomingWebinars/>
      <Instructors/>
      <footer/>
    </main>
  );
}
