import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import MethodologySection from "@/components/home/MethodologySection";
import ServicesSection from "@/components/home/ServicesSection";
import PartnersSection from "@/components/home/PartnersSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <MethodologySection />
      <PartnersSection />
    </Layout>
  );
};

export default Index;
