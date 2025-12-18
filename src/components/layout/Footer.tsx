import { Link } from "react-router-dom";
import precisianLogo from "@/assets/precisian-logo-footer.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block">
              <img src={precisianLogo} alt="Precisian" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm">
              Clareza e certeza em todos os dados de investimento e performance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Data Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/precisian-events" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Precisian Events
                </Link>
              </li>
              <li>
                <Link to="/precisian-sku" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Precisian Catalog
                </Link>
              </li>
              <li>
                <Link to="/precisian-attribution" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Precisian Attribution
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Analytics</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ga4-optimization" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  GA4 Optimization
                </Link>
              </li>
              <li>
                <Link to="/ga360" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  GA360
                </Link>
              </li>
              <li>
                <Link to="/gtm-setup" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  GTM Setup
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Advanced</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/google-meridian" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Google Meridian MMM
                </Link>
              </li>
              <li>
                <Link to="/data-visualization" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Data Visualization
                </Link>
              </li>
              <li>
                <Link to="/ai-insights" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  AI Insights
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Precisian. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
