import { useState } from "react";
import { Phone, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const projectTypes = [
  "Deck",
  "Bathroom",
  "Kitchen",
  "Tile",
  "Flooring",
  "Other",
];

// Web3Forms access key - this is safe to expose as it only accepts form submissions
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export function ContactCTA() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Project Inquiry: ${formData.projectType || "General"}`,
          from_name: formData.name,
          name: formData.name,
          email: formData.contact,
          project_type: formData.projectType,
          message: formData.message || "No additional message provided.",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Thank you!",
          description: "We'll be in touch soon to discuss your project.",
        });
        setFormData({ name: "", contact: "", projectType: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try calling or emailing us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - CTA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Transform Your Home?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get started with a free consultation. No pressure — just honest answers about your project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" asChild>
                  <a href="tel:7404176470">
                    <Phone className="h-4 w-4 mr-2" />
                    Call (740) 417-6470
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="mailto:tyler@starkremodel.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Email Tyler
                  </a>
                </Button>
              </div>

              <p className="text-muted-foreground">
                <span className="font-semibold">Prefer texting?</span> Send a text to{" "}
                <a href="sms:7404176470" className="text-primary hover:underline font-medium">
                  (740) 417-6470
                </a>
              </p>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Request a Free Estimate
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="contact">Email or Phone</Label>
                  <Input
                    id="contact"
                    placeholder="How can we reach you?"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="projectType">Project Type</Label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="What are you looking for?" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type.toLowerCase()}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Request"
                  )}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Fast response. No pressure.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
