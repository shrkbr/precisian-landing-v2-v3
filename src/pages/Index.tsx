import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import MethodologySection from "@/components/home/MethodologySection";
import ServicesSection from "@/components/home/ServicesSection";
import PartnersSection from "@/components/home/PartnersSection";
import SalesBoostSection from "@/components/home/SalesBoostSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <MethodologySection />
      <PartnersSection />
      <SalesBoostSection />
    </Layout>
  );
};

export default Index;
