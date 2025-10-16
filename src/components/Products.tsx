import { Card, CardContent } from "@/components/ui/card";
import { Network, Smartphone, Settings, BarChart3 } from "lucide-react";

const products = [
  {
    icon: Network,
    title: "IoT Communication Nodes",
    description: "High-performance nodes with innovative inter-device communication protocols. Handle massive data volumes with guaranteed accuracy and integrity.",
    features: ["Real-time data processing", "Robust encryption", "Scalable architecture"],
  },
  {
    icon: Smartphone,
    title: "Configuration Web App",
    description: "Intuitive web interface for complete device management. Configure, monitor, and control your entire IoT network from anywhere.",
    features: ["Localized connection setup", "Schedule configuration", "Alarm management"],
  },
  {
    icon: Settings,
    title: "Automated Deployment",
    description: "Reduce implementation time by 50% with our plug-and-play system. Pre-configured templates for common use cases.",
    features: ["Quick setup wizards", "Template library", "Automated testing"],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Real-time insights into your IoT infrastructure. Monitor performance, track costs, and optimize operations.",
    features: ["Live monitoring", "Cost analytics", "Performance metrics"],
  },
];

export const Products = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Our IoT Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete ecosystem for seamless IoT deployment and management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <Card
                key={index}
                className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl bg-card animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mr-3" />
                        {feature}
                      </div>
                    ))}
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
