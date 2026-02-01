import { Phone, Mail, MapPin, Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/StarkRemodel_2024.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & About */}
          <div>
            <img
              src={logo}
              alt="Stark Remodel"
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 text-sm">
              Expert home remodeling services in Central Ohio. Decks, kitchens, bathrooms, tile, and flooring.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <a
                href="tel:7404176470"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                (740) 417-6470
              </a>
              <a
                href="mailto:tyler@starkremodel.com"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                tyler@starkremodel.com
              </a>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                Central Ohio & Columbus Area
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link
                to="/"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Gallery
              </Link>
              <a
                href="/#contact"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </a>
              <a
                href="https://www.facebook.com/StarkRemodel/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Stark Remodel. All rights reserved.</p>
          <p className="mt-1">Proudly serving Central Ohio & the Columbus area.</p>
        </div>
      </div>
    </footer>
  );
}
