import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const LandingV2 = lazy(() => import("./pages/LandingV2"));
const LandingV3 = lazy(() => import("./pages/LandingV3"));
const LandingV4 = lazy(() => import("./pages/LandingV4"));

// Solution pages at /solutions/*
const JourneyPage = lazy(() => import("./pages/solutions/JourneyPage"));
const CatalogPage = lazy(() => import("./pages/solutions/CatalogPage"));
const CorePage = lazy(() => import("./pages/solutions/CorePage"));
const AttributionPage = lazy(() => import("./pages/solutions/AttributionPage"));
const ClarityPage = lazy(() => import("./pages/solutions/ClarityPage"));

const queryClient = new QueryClient();

// Loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#FD68B3] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 font-mono text-sm">Loading...</p>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Main landing page (DVQ-first) */}
            <Route path="/" element={<Index />} />

            {/* Landing V2 - New design */}
            <Route path="/v2" element={<LandingV2 />} />

            {/* Landing V3 - Expanded DVQ modules */}
            <Route path="/v3" element={<LandingV3 />} />

            {/* Landing V4 - Circuit connector design */}
            <Route path="/v4" element={<LandingV4 />} />

            {/* Solution pages at /solutions/* */}
            <Route path="/solutions/journey" element={<JourneyPage />} />
            <Route path="/solutions/catalog" element={<CatalogPage />} />
            <Route path="/solutions/core" element={<CorePage />} />
            <Route path="/solutions/attribution" element={<AttributionPage />} />
            <Route path="/solutions/clarity" element={<ClarityPage />} />

            {/* Legacy redirects from /services/* to /solutions/* */}
            <Route path="/services/journey" element={<Navigate to="/solutions/journey" replace />} />
            <Route path="/services/catalog" element={<Navigate to="/solutions/catalog" replace />} />
            <Route path="/services/core" element={<Navigate to="/solutions/core" replace />} />

            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
