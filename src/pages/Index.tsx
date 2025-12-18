import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import MethodologySection from "@/components/home/MethodologySection";
import MarketsSection from "@/components/home/MarketsSection";
import ServicesSection from "@/components/home/ServicesSection";
import PartnersSection from "@/components/home/PartnersSection";
import AuditOSSection from "@/components/home/AuditOSSection";
import ContactFormSection from "@/components/home/ContactFormSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <MethodologySection />
      <ServicesSection />
      <MarketsSection />
      <PartnersSection />
      <AuditOSSection />
      <ContactFormSection />
    </Layout>
  );
};

export default Index;
