import { Home, MessageCircle, Ruler, DollarSign } from "lucide-react";
import tylerImage from "@/assets/meet-tyler.heic";

const trustPoints = [
  {
    icon: Home,
    title: "Local, Experienced & Insured",
    description: "Central Ohio-based with years of hands-on experience and full insurance coverage.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description: "You'll always know what's happening with your project. No surprises.",
  },
  {
    icon: Ruler,
    title: "Attentive Planning & Craftsmanship",
    description: "Every detail matters. We plan carefully and execute with precision.",
  },
  {
    icon: DollarSign,
    title: "Competitive, Fair Rates",
    description: "Quality work at honest prices. Get the value you deserve.",
  },
];

export function WhyTrustUs() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
          Why Central Ohio Trusts Us
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {trustPoints.map((point) => (
            <div key={point.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                <point.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm">{point.description}</p>
            </div>
          ))}
        </div>

        {/* About Tyler */}
        <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 border border-border">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-primary/20">
              <img
                src={tylerImage}
                alt="Tyler, owner of Stark Remodel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-foreground mb-4">Meet Tyler</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tyler is the owner and lead contractor at Stark Remodel. He takes pride in treating every home like his own — showing up on time, communicating clearly, and delivering quality work you'll love for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
