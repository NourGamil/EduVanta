import Hero from "../components/site/Hero";
import AboutSection from "../components/site/AboutSection";
import FeaturesSection from "../components/site/FeaturesSection";
import CoursesSection from "../components/site/CoursesSection";
import TeamSection from "../components/site/TeamSection";
import Testimonials from "../components/site/Testimonials";
import ContactSection from "../components/site/ContactSection";
import CTASection from "../components/site/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <CoursesSection compact />
      <CTASection />
      <TeamSection />
      <Testimonials />
      <ContactSection />
    </>
  );
}
