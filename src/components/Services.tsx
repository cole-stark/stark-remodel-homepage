import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import deckImage from "@/assets/deck.jpg";
import bathroomImage from "@/assets/bathroom-remodel.webp";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import flooringImage from "@/assets/after1.jpg";

const services = [
  {
    title: "Decks",
    description: "Expand your outdoor living with a custom-built deck designed for your space.",
    image: deckImage,
    alt: "Custom built wooden deck with modern railings in Central Ohio",
  },
  {
    title: "Bathrooms",
    description: "Transform your bathroom into a relaxing retreat with modern finishes.",
    image: bathroomImage,
    alt: "Modern bathroom remodel with updated vanity and tile work",
  },
  {
    title: "Kitchens",
    description: "Upgrade your kitchen with quality cabinetry, tile, and fixtures.",
    image: kitchenImage,
    alt: "Kitchen remodel featuring new cabinetry and countertops",
  },
  {
    title: "Tile",
    description: "Beautiful tilework for floors, backsplashes, and showers.",
    image: kitchenImage,
    alt: "Professional tile installation for kitchen backsplash",
  },
  {
    title: "Flooring",
    description: "Durable, stylish flooring that transforms any room.",
    image: flooringImage,
    alt: "New LVP flooring installation in living room",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Our Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group overflow-hidden bg-card border-border hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
