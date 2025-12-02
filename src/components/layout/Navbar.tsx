import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import precisianLogo from "@/assets/precisian-logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const services = [
  { name: "Precisian Events", path: "/precisian-events" },
  { name: "Precisian SKU", path: "/precisian-sku" },
  { name: "Precisian Attribution", path: "/precisian-attribution" },
  { name: "GA4 Optimization", path: "/ga4-optimization" },
  { name: "GA360", path: "/ga360" },
  { name: "GTM Setup & Optimization", path: "/gtm-setup" },
  { name: "Google Meridian MMM", path: "/google-meridian" },
  { name: "Data Visualization", path: "/data-visualization" },
  { name: "AI Insights", path: "/ai-insights" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src={precisianLogo} alt="Precisian" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <Link to="/">
              <Button
                variant="nav"
                className={location.pathname === "/" ? "text-foreground" : ""}
              >
                Home
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="nav" className="gap-1">
                  Services <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-card border-border">
                {services.map((service) => (
                  <DropdownMenuItem key={service.path} asChild>
                    <Link
                      to={service.path}
                      className="cursor-pointer hover:bg-secondary"
                    >
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="hero" size="sm" className="ml-4">
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <Button variant="ghost" className="w-full justify-start">
                  Home
                </Button>
              </Link>
              <div className="py-2">
                <span className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Services
                </span>
              </div>
              {services.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button variant="ghost" className="w-full justify-start pl-6">
                    {service.name}
                  </Button>
                </Link>
              ))}
              <Button variant="hero" className="mt-4">
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
