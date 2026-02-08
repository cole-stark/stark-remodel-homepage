import { Card, CardContent } from "@/components/ui/card";
import deckImage from "@/assets/deck-example.jpeg";
import bathroomImage from "@/assets/bathroom-remodel.webp";
import kitchenImage from "@/assets/kitchen-remodel.jpg";
import flooringImage from "@/assets/flooring.jpg";
import tileImage from "@/assets/tile-backsplash.jpg";
import otherImage from "@/assets/other.jpeg";

const services = [
  {
    title: "Decks",
    description: "Expand your outdoor living with a custom-built deck designed for your space.",
    image: deckImage,
    alt: "Custom built composite deck with black metal railings overlooking pond in Central Ohio",
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
    image: tileImage,
    alt: "Professional tile backsplash installation in kitchen",
  },
  {
    title: "Flooring",
    description: "Durable, stylish flooring that transforms any room.",
    image: flooringImage,
    alt: "New hardwood flooring installation in living space",
  },
  {
    title: "Other",
    description: "Basement remodels, custom built-ins, and specialty projects tailored to your vision.",
    image: otherImage,
    alt: "Custom entertainment center with stone fireplace and built-in shelving",
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
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
