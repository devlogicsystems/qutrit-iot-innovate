import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Qutrit's IoT solution reduced our deployment costs by 65% and implementation time by half. The web interface is incredibly intuitive, making configuration a breeze.",
    author: "Rajesh Kumar",
    role: "CTO, SmartCity Solutions",
    company: "Leading Smart Infrastructure Provider",
  },
  {
    quote: "The security and reliability of Qutrit's nodes are outstanding. We've deployed over 5,000 devices across our facilities with zero downtime. Game-changing technology.",
    author: "Priya Sharma",
    role: "Director of Operations",
    company: "Major Manufacturing Conglomerate",
  },
  {
    quote: "From prototype to production in record time. The automated configuration and robust encryption gave us the confidence to scale rapidly. Highly recommended.",
    author: "Amit Patel",
    role: "Founder & CEO",
    company: "Industrial Automation Startup",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our clients say about revolutionizing their IoT infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border hover:border-accent/50 transition-all duration-300 bg-card hover:shadow-xl animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-10 w-10 text-accent/30 group-hover:text-accent/50 transition-colors duration-300" />
                </div>

                <p className="text-card-foreground leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-card-foreground mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-accent mt-1">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
