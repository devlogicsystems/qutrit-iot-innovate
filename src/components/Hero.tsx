import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import qutritLogo from "@/assets/qutrit-logo.png";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[hsl(var(--navy-dark))] to-[hsl(var(--blue-primary))]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src={qutritLogo} 
              alt="Qutrit Innovations Logo" 
              className="h-24 w-auto md:h-32 drop-shadow-[0_0_30px_rgba(62,189,214,0.5)]"
            />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in-up leading-tight">
            Revolutionizing IoT with
            <span className="block mt-2 bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              Intelligent Communication
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-4 max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Reduce operational costs by up to 70% with our innovative IoT device communication technology
          </p>

          <p className="text-base md:text-lg text-primary-foreground/70 mb-12 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            From home automation to massive infrastructure projects, deploy faster and smarter with Qutrit's cutting-edge IoT solutions
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-[0_0_30px_rgba(62,189,214,0.4)] transition-all duration-300 hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("products")}
              className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 font-semibold px-8 py-6 text-lg backdrop-blur-sm transition-all duration-300"
            >
              Explore Solutions
            </Button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full max-w-4xl animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">70%</div>
              <div className="text-sm text-primary-foreground/70">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">50%</div>
              <div className="text-sm text-primary-foreground/70">Faster Deployment</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-sm text-primary-foreground/70">Secure & Encrypted</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};
