import { Card, CardContent } from "@/components/ui/card";
import { Home, Building2, Factory, Boxes } from "lucide-react";

const useCases = [
  {
    icon: Home,
    title: "Home Automation",
    description: "Transform any home into a smart home with our cost-effective IoT solutions. Control lighting, security, climate, and appliances seamlessly.",
    metrics: "70% cost reduction vs traditional systems",
  },
  {
    icon: Building2,
    title: "Smart Buildings",
    description: "Optimize commercial building operations with intelligent monitoring and control. Reduce energy costs and improve tenant comfort.",
    metrics: "50% faster deployment time",
  },
  {
    icon: Factory,
    title: "Industrial Automation",
    description: "Real-time monitoring and control for manufacturing facilities. Predictive maintenance and operational efficiency at scale.",
    metrics: "99.9% data accuracy guarantee",
  },
  {
    icon: Boxes,
    title: "Massive IoT Infrastructure",
    description: "Deploy thousands of nodes across infrastructure projects. Smart cities, utilities, transportation - all at unprecedented scale and affordability.",
    metrics: "Support for 10,000+ nodes",
  },
];

export const UseCases = () => {
  return (
    <section className="py-20 bg-background" id="use-cases">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Versatile Use Cases
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From small-scale to massive implementations, our solutions scale with your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border hover:border-accent transition-all duration-300 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500" />
                
                <CardContent className="p-6 relative">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {useCase.description}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-accent">
                      {useCase.metrics}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
