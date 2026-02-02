import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Gallery images
import elevatedDeck from "@/assets/gallery/elevated-deck.jpg";
import kitchenCorner from "@/assets/gallery/kitchen-corner.jpg";
import doubleVanity from "@/assets/gallery/double-vanity.jpg";
import soakingTub from "@/assets/gallery/soaking-tub.jpg";
import vesselSink from "@/assets/gallery/vessel-sink.jpg";
import kitchenIsland from "@/assets/gallery/kitchen-island.jpg";
import stoveBacksplash from "@/assets/gallery/stove-backsplash.jpg";

const galleryImages = [
  { src: elevatedDeck, alt: "Elevated deck with black railings and white skirting", category: "Deck" },
  { src: soakingTub, alt: "Freestanding soaking tub with blue wainscoting", category: "Bathroom" },
  { src: doubleVanity, alt: "Modern double vanity bathroom with vessel sinks", category: "Bathroom" },
  { src: vesselSink, alt: "Custom vessel sink with hexagon tile backsplash", category: "Bathroom" },
  { src: kitchenIsland, alt: "Open kitchen with island seating and pendant lights", category: "Kitchen" },
  { src: kitchenCorner, alt: "Kitchen corner with floating shelves and marble countertops", category: "Kitchen" },
  { src: stoveBacksplash, alt: "Stovetop with decorative tile medallion backsplash", category: "Kitchen" },
];

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Work
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Browse through our completed projects showcasing quality craftsmanship across decks, bathrooms, kitchens, and more.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Let's discuss how we can transform your space. Schedule a free consultation today.
            </p>
            <Button asChild size="lg">
              <a href="/#contact">Schedule a Free Consultation</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
