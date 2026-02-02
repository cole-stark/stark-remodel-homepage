import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import michellePhoto from "@/assets/michelle-compton.jpg";
import trevisPhoto from "@/assets/trevis-davie.jpg";
import oliviaPhoto from "@/assets/olivia-rojas.jpg";
import andrewPhoto from "@/assets/andrew-notturniano.jpg";
import logoPhoto from "@/assets/StarkRemodel_2024.png";

const testimonials = [
  {
    name: "Olivia Rojas",
    location: "Pickerington",
    photo: oliviaPhoto,
    text: "WHAT a transformation 🤩 I can't say enough good things about Stark Remodel 🗣️ Tyler is a good friend of ours and does incredible work! He completed this bathroom rehab in under 2 weeks and the results speak for themselves! 😊 If you have a project and are looking for an incredible contractor Tyler is your guy!",
  },
  {
    name: "Michelle Compton",
    location: "Galena",
    photo: michellePhoto,
    text: "The owner, Tyler, recently redid our deck and we are thrilled with the outcome. Tyler and his staff were friendly, hard working, professional, awesome at demolition and project clean up, and Tyler was very good at communicating. We will definitely use Stark Remodel for future projects!",
  },
  {
    name: "Trevis Davie",
    location: "Canal Winchester",
    photo: trevisPhoto,
    text: "Punctual, quality, kind and hard working are all words that come to mind after working with Tyler for nearly two weeks. Not only does he do great work and is a great communicator, he is simply put a great person. I would recommend his services to anyone in need.",
  },
  {
    name: "Andrew Notturniano",
    location: "Worthington",
    photo: andrewPhoto,
    text: "Looks magnificent! Congratulations to all of the lucky homeowners who chose Stark Remodel, I'm sure they are enjoying their home on a new level now 🔥 Excellent work",
  },
  {
    name: "Happy Customer",
    location: "Central Ohio",
    photo: logoPhoto,
    isLogo: true,
    text: "Sadly, have seen posts about people hiring contractors who have not been ethical. I want to give a positive shout out to Stark Remodel. The owner, Tyler, recently redid our deck and we are thrilled with the outcome. Tyler and his staff were friendly, hard working, professional, awesome at demolition and project clean up, and Tyler was very good at communicating. From the day we secured him, he was really effective at communicating our start date. We will definitely use Stark Remodel for future projects!",
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

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.name} className="pl-4 md:basis-1/2">
                  <Card className="bg-card border-border h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={testimonial.photo}
                          alt={`${testimonial.name} - Stark Remodel customer from ${testimonial.location}`}
                          className={`w-14 h-14 rounded-full border-2 border-border ${
                            testimonial.isLogo ? "object-contain bg-white p-1" : "object-cover"
                          }`}
                        />
                        <div>
                          <p className="font-semibold text-foreground">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                        </div>
                      </div>
                      <p className="text-foreground/90 leading-relaxed flex-grow">"{testimonial.text}"</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-background border-border" />
            <CarouselNext className="bg-background border-border" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
