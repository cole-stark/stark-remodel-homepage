import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import heroImage from "@/assets/deck.jpg";

const trustChips = [
  "Local & Insured",
  "Clear Communication",
  "Quality Craftsmanship",
];

export function Hero() {
  return (
    <section className="relative pt-20 md:pt-24">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Beautiful custom-built deck with modern railings in Central Ohio backyard"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
            Decks, Kitchens & Bathrooms — Built Right in Central Ohio
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Expert craftsmanship, clear communication, and fully insured. Your home is in good hands.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" asChild className="text-base">
              <a href="#contact">Schedule a Free Consultation</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-base">
              <a href="#contact">Request an Estimate</a>
            </Button>
          </div>

          {/* Trust Chips */}
          <div className="flex flex-wrap gap-3">
            {trustChips.map((chip) => (
              <div
                key={chip}
                className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border"
              >
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{chip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
