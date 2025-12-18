import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import precisianLogo from "@/assets/nd-precisian-logo.png";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const services = [{
  name: "Intelligence Partner",
  path: "/intelligence-partner"
}, {
  name: "Precisian Journey",
  path: "/precisian-events"
}, {
  name: "Precisian SKU",
  path: "/precisian-sku"
}, {
  name: "Precisian Core",
  path: "/precisian-core"
}, {
  name: "Precisian MMM",
  path: "/google-meridian"
}, {
  name: "Precisian Clarity",
  path: "/data-visualization"
}, {
  name: "GA4 Optimization",
  path: "/ga4-optimization"
}, {
  name: "GTM Setup",
  path: "/gtm-setup"
}, {
  name: "AdTechs",
  path: "/adtechs"
}, {
  name: "AI Insights",
  path: "/ai-insights"
}];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img alt="Precisian" className="h-10 w-auto" src="/lovable-uploads/adc5ea8b-1c39-4445-8911-d8573bff0664.png" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/">
              <Button variant="nav" className={location.pathname === "/" ? "text-foreground" : ""}>
                Home
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="nav" className="gap-1">
                  Soluções <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-border">
                {services.map(service => <DropdownMenuItem key={service.path} asChild>
                    <Link to={service.path} className="cursor-pointer hover:bg-secondary">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>)}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/sobre-nos">
              <Button variant="nav" className={location.pathname === "/sobre-nos" ? "text-foreground" : ""}>
                Sobre Nós
              </Button>
            </Link>

            <Button variant="hero" size="sm" className="ml-4">
              Contrate Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Home
                </Button>
              </Link>
              <div className="py-2">
                <span className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Soluções
                </span>
              </div>
              {services.map(service => <Link key={service.path} to={service.path} onClick={() => setIsOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start pl-6">
                    {service.name}
                  </Button>
                </Link>)}
              <Link to="/sobre-nos" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start mt-2">
                  Sobre Nós
                </Button>
              </Link>
              <Button variant="hero" className="mt-4">
                Contrate Agora
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;