import beforeImage from "@/assets/before1.jpg";
import afterImage from "@/assets/after1.jpg";

export function BeforeAfter() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          See the Transformation
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real results from a recent living room renovation featuring new LVP flooring and shiplap walls.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Before */}
          <div className="relative group">
            <div className="overflow-hidden rounded-xl">
              <img
                src={beforeImage}
                alt="Living room before renovation with dated flooring and walls"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 bg-foreground/80 text-background px-4 py-2 rounded-full text-sm font-semibold">
              Before
            </div>
          </div>

          {/* After */}
          <div className="relative group">
            <div className="overflow-hidden rounded-xl">
              <img
                src={afterImage}
                alt="Living room after renovation with new LVP flooring and shiplap wall treatment"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
              After
            </div>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-6 font-medium">
          Living Room Transformation — New Flooring & Wall Treatment
        </p>
      </div>
    </section>
  );
}
