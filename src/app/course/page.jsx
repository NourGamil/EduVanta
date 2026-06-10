import PageHeader from "../../components/site/PageHeader";
import CoursesSection from "../../components/site/CoursesSection";
import CTASection from "../../components/site/CTASection";

export default function CoursePage() {
  return <>
    <PageHeader title="Courses" subtitle="Explore programs" />
    <CoursesSection />
    <CTASection />
  </>;
}
