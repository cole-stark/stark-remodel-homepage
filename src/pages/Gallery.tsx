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
import basementFlooring from "@/assets/gallery/basement-flooring.jpg";
import whiteUpperCabinets from "@/assets/gallery/white-upper-cabinets.jpg";
import whiteLowerCabinets from "@/assets/gallery/white-lower-cabinets.jpg";
import kitchenCabinetDetail from "@/assets/gallery/kitchen-cabinet-detail.jpg";
import grayWainscotingBathroom from "@/assets/gallery/gray-wainscoting-bathroom.jpg";
import modernGlassShower from "@/assets/gallery/modern-glass-shower.jpg";
import basementEgress from "@/assets/gallery/basement-egress.jpg";
import grayVanityBathroom from "@/assets/gallery/gray-vanity-bathroom.jpg";
import doubleVanityBlackFixtures from "@/assets/gallery/double-vanity-black-fixtures.jpg";
import luxuryMarbleShower from "@/assets/gallery/luxury-marble-shower.jpg";
import crownMoldingDetail from "@/assets/gallery/crown-molding-detail.jpg";
import marbleVanityShower from "@/assets/gallery/marble-vanity-shower.jpg";
import marbleShowerMirror from "@/assets/gallery/marble-shower-mirror.jpg";
import waveTileSoakingTub from "@/assets/gallery/wave-tile-soaking-tub.jpg";
import marbleTileShower from "@/assets/gallery/marble-tile-shower.jpg";
import blueVanityRoundMirror from "@/assets/gallery/blue-vanity-round-mirror.jpg";
import wetBarFloatingShelves from "@/assets/gallery/wet-bar-floating-shelves.jpg";
import goldRainShower from "@/assets/gallery/gold-rain-shower.jpg";
import greenTileGoldShower from "@/assets/gallery/green-tile-gold-shower.jpg";
import blueWainscotingBathroom from "@/assets/gallery/blue-wainscoting-bathroom.jpg";
import compositeDeckBlackRailing from "@/assets/gallery/composite-deck-black-railing.jpg";
import cedarFenceGate from "@/assets/gallery/cedar-fence-gate.jpg";
import largeDeckWhiteRailing from "@/assets/gallery/large-deck-white-railing.jpg";
import compositeBridgePond from "@/assets/gallery/composite-bridge-pond.jpg";
import geometricTileNiche from "@/assets/gallery/geometric-tile-niche.jpg";
import entryStepsWhiteRailing from "@/assets/gallery/entry-steps-white-railing.jpg";
import greenTileWalkInShower from "@/assets/gallery/green-tile-walk-in-shower.jpg";

const galleryImages = [
  { src: elevatedDeck, alt: "Elevated deck with black railings and white skirting", category: "Deck" },
  { src: compositeDeckBlackRailing, alt: "Composite deck with black metal railings and stairs", category: "Deck" },
  { src: largeDeckWhiteRailing, alt: "Large deck with white railings and wide stairs", category: "Deck" },
  { src: compositeBridgePond, alt: "Composite bridge over backyard pond", category: "Deck" },
  { src: entryStepsWhiteRailing, alt: "Entry steps with white railing and composite treads", category: "Deck" },
  { src: luxuryMarbleShower, alt: "Luxury walk-in shower with marble tile and rain showerhead", category: "Bathroom" },
  { src: doubleVanityBlackFixtures, alt: "Double vanity with black fixtures and industrial lighting", category: "Bathroom" },
  { src: modernGlassShower, alt: "Modern glass shower with wave tile and hexagon floor", category: "Bathroom" },
  { src: soakingTub, alt: "Freestanding soaking tub with blue wainscoting", category: "Bathroom" },
  { src: doubleVanity, alt: "Modern double vanity bathroom with vessel sinks", category: "Bathroom" },
  { src: vesselSink, alt: "Custom vessel sink with hexagon tile backsplash", category: "Bathroom" },
  { src: grayVanityBathroom, alt: "Gray bathroom with dark vanity and wainscoting", category: "Bathroom" },
  { src: grayWainscotingBathroom, alt: "Bathroom with gray wainscoting and nickel fixtures", category: "Bathroom" },
  { src: marbleVanityShower, alt: "Marble shower with black vanity and industrial lighting", category: "Bathroom" },
  { src: marbleShowerMirror, alt: "Marble shower with rain showerhead and black fixtures", category: "Bathroom" },
  { src: waveTileSoakingTub, alt: "Freestanding tub with wave tile accent wall", category: "Bathroom" },
  { src: marbleTileShower, alt: "Walk-in shower with marble tile walls and hexagon floor", category: "Bathroom" },
  { src: blueVanityRoundMirror, alt: "Blue vanity with round backlit mirror and vessel sink", category: "Bathroom" },
  { src: goldRainShower, alt: "White ribbed tile shower with gold rain showerhead", category: "Bathroom" },
  { src: greenTileGoldShower, alt: "Green tile shower with gold fixtures and window", category: "Bathroom" },
  { src: blueWainscotingBathroom, alt: "Bathroom with blue wainscoting and glass shower", category: "Bathroom" },
  { src: geometricTileNiche, alt: "Geometric pattern tile with built-in shower niche", category: "Bathroom" },
  { src: greenTileWalkInShower, alt: "Large walk-in shower with green tile and gold fixtures", category: "Bathroom" },
  { src: kitchenIsland, alt: "Open kitchen with island seating and pendant lights", category: "Kitchen" },
  { src: kitchenCorner, alt: "Kitchen corner with floating shelves and marble countertops", category: "Kitchen" },
  { src: stoveBacksplash, alt: "Stovetop with decorative tile medallion backsplash", category: "Kitchen" },
  { src: whiteUpperCabinets, alt: "Refinished white upper kitchen cabinets", category: "Kitchen" },
  { src: whiteLowerCabinets, alt: "White lower cabinets with marble countertop", category: "Kitchen" },
  { src: kitchenCabinetDetail, alt: "Kitchen cabinet detail with black hardware", category: "Kitchen" },
  { src: basementFlooring, alt: "Finished basement with LVP flooring and recessed lighting", category: "Other" },
  { src: basementEgress, alt: "Basement room with egress window", category: "Other" },
  { src: crownMoldingDetail, alt: "Custom black crown molding detail", category: "Other" },
  { src: wetBarFloatingShelves, alt: "Wet bar with floating shelves and wine fridge", category: "Other" },
  { src: cedarFenceGate, alt: "Custom cedar fence gate with black hardware", category: "Other" },
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
