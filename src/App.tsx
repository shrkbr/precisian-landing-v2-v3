import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrecisianEvents from "./pages/PrecisianEvents";
import PrecisianSKU from "./pages/PrecisianSKU";
import PrecisianCore from "./pages/PrecisianCore";
import PrecisianAttribution from "./pages/PrecisianAttribution";
import GA4Optimization from "./pages/GA4Optimization";
import GA360 from "./pages/GA360";
import GTMSetup from "./pages/GTMSetup";
import GoogleMeridian from "./pages/GoogleMeridian";
import DataVisualization from "./pages/DataVisualization";
import AIInsights from "./pages/AIInsights";
import AdTechs from "./pages/AdTechs";
import IntelligencePartner from "./pages/IntelligencePartner";
import SobreNos from "./pages/SobreNos";
import TechDemo from "./pages/TechDemo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/precisian-events" element={<PrecisianEvents />} />
          <Route path="/precisian-sku" element={<PrecisianSKU />} />
          <Route path="/precisian-core" element={<PrecisianCore />} />
          <Route path="/precisian-attribution" element={<PrecisianAttribution />} />
          <Route path="/ga4-optimization" element={<GA4Optimization />} />
          <Route path="/ga360" element={<GA360 />} />
          <Route path="/gtm-setup" element={<GTMSetup />} />
          <Route path="/google-meridian" element={<GoogleMeridian />} />
          <Route path="/data-visualization" element={<DataVisualization />} />
          <Route path="/ai-insights" element={<AIInsights />} />
          <Route path="/adtechs" element={<AdTechs />} />
          <Route path="/intelligence-partner" element={<IntelligencePartner />} />
          <Route path="/sobre-nos" element={<SobreNos />} />
          <Route path="/tech" element={<TechDemo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
