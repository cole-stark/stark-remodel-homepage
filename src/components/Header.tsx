import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/StarkRemodel_2024.png";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "/gallery", label: "Gallery", isRoute: true },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // Helper to get the correct href for anchor links
  const getHref = (href: string) => {
    if (href.startsWith("#") && !isHomePage) {
      return `/${href}`;
    }
    return href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Stark Remodel - Home Remodeling in Central Ohio"
              className="h-10 md:h-14 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={getHref(link.href)}
                  className="text-foreground/80 hover:text-foreground font-medium transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:7404176470"
              className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              (740) 417-6470
            </a>
            <Button asChild>
              <a href={getHref("#contact")}>Schedule a Free Consultation</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:7404176470"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground"
              aria-label="Call Stark Remodel"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={getHref(link.href)}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="mt-4 px-4">
                <Button asChild className="w-full">
                  <a href={getHref("#contact")}>Schedule a Free Consultation</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
