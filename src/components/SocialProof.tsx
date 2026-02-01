import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import michellePhoto from "@/assets/michelle-compton.jpg";
import trevisPhoto from "@/assets/trevis-davie.jpg";

const testimonials = [
  {
    name: "Michelle Compton",
    location: "Galena, Ohio",
    photo: michellePhoto,
    text: "The owner, Tyler, recently redid our deck and we are thrilled with the outcome. Tyler and his staff were friendly, hard working, professional, awesome at demolition and project clean up, and Tyler was very good at communicating. We will definitely use Stark Remodel for future projects!",
  },
  {
    name: "Trevis Davie",
    location: "Canal Winchester",
    photo: trevisPhoto,
    text: "Punctual, quality, kind and hard working are all words that come to mind after working with Tyler for nearly two weeks. Not only does he do great work and is a great communicator, he is simply put a great person. I would recommend his services to anyone in need.",
  },
];

export function SocialProof() {
  return (
    <section id="reviews" className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Rating Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-lg text-muted-foreground font-medium">
            Trusted by homeowners across Central Ohio
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.photo}
                    alt={`${testimonial.name} - Stark Remodel customer from ${testimonial.location}`}
                    className="w-14 h-14 rounded-full object-cover border-2 border-border"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-foreground/90 leading-relaxed">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
