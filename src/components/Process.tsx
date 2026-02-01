import { ClipboardCheck, FileText, Calendar, Hammer, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    step: "1",
    title: "In-Home Consultation",
    description: "We visit your home to discuss your vision",
  },
  {
    icon: FileText,
    step: "2",
    title: "Personalized Quote",
    description: "Transparent pricing with no surprises",
  },
  {
    icon: Calendar,
    step: "3",
    title: "Scheduling & Planning",
    description: "We lock in dates and order materials",
  },
  {
    icon: Hammer,
    step: "4",
    title: "Quality Work, On-Time",
    description: "Expert execution with daily updates",
  },
  {
    icon: CheckCircle,
    step: "5",
    title: "Final Walkthrough",
    description: "We don't leave until you're thrilled",
  },
];

export function Process() {
  return (
    <section id="process" className="py-16 md:py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Our Process — What to Expect
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          We make home remodeling simple and stress-free from start to finish.
        </p>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop horizontal layout */}
          <div className="hidden md:flex items-start justify-between relative">
            {/* Connecting line */}
            <div className="absolute top-7 left-[10%] right-[10%] h-0.5 bg-border" />
            
            {steps.map((item, index) => (
              <div key={item.step} className="flex flex-col items-center text-center relative z-10 w-1/5">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 shadow-md">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile vertical layout */}
          <div className="md:hidden space-y-6">
            {steps.map((item, index) => (
              <div key={item.step} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md flex-shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2 min-h-[40px]" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
