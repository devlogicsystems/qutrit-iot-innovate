import qutritLogo from "@/assets/qutrit-logo.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div>
            <img 
              src={qutritLogo} 
              alt="Qutrit Innovations" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Revolutionizing IoT with innovative device communication technology. 
              Reducing costs, accelerating deployment, securing your future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">
                  Features
                </a>
              </li>
              <li>
                <a href="#products" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">
                  Products
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Qutrit Innovations Pvt. Ltd.</li>
              <li>India</li>
              <li className="mt-4">
                <a href="mailto:info@qutritinnovations.com" className="hover:text-accent transition-colors duration-200">
                  info@qutritinnovations.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {currentYear} Qutrit Innovations Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
