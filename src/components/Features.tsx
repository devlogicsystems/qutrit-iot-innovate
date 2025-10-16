import { Shield, Zap, Cog, Database, Clock, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning-Fast Communication",
    description: "Innovative node technology handles massive data volumes in real-time with guaranteed accuracy and integrity.",
  },
  {
    icon: TrendingDown,
    title: "Reduced Operational Costs",
    description: "Cut IoT implementation costs by up to 70% with our efficient data transfer protocols and infrastructure.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "Robust encryption protocols, access controls, and automated backups protect your sensitive data 24/7.",
  },
  {
    icon: Cog,
    title: "Easy Configuration",
    description: "Intuitive web application for localized setup, scheduling, alarms, and heartbeat monitoring.",
  },
  {
    icon: Clock,
    title: "Rapid Deployment",
    description: "Reduce implementation time by 50% with our plug-and-play IoT nodes and automated configuration.",
  },
  {
    icon: Database,
    title: "Scalable Architecture",
    description: "From home automation to massive infrastructure projects - scale seamlessly as your needs grow.",
  },
];

export const Features = () => {
  return (
    <section className="py-20 bg-background" id="features">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose Qutrit?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology meets practical innovation. Our IoT platform delivers unmatched value across every dimension.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50 bg-card hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
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
