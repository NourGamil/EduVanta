import PageHeader from "../../components/site/PageHeader";
import AboutSection from "../../components/site/AboutSection";
import FeaturesSection from "../../components/site/FeaturesSection";
import CTASection from "../../components/site/CTASection";

export default function AboutPage() {
  return <>
    <PageHeader title="About" subtitle="Who we are" />
    <AboutSection />
    <FeaturesSection />
    <CTASection />
  </>;
}
