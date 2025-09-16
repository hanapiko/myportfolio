import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-white via-accent/20 to-secondary/30 rounded-lg flex items-center justify-center transform rotate-3">
                  <span className="text-primary font-medium">H</span>
                </div>
                <span className="font-medium">Hannah Apiko</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Crafting exceptional digital experiences through the perfect 
                blend of development expertise and design thinking.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <nav className="space-y-2">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-medium mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/hanapiko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Github size={16} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hannah-juma-831195300/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Linkedin size={16} />
                </a>
                <a 
                  href="apikojuma94@gmail.com"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © {currentYear} Hannah Apiko. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center">
              Made using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}