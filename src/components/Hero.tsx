import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-white to-accent/20 pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Hannah</span>
                <br />
                <span className="text-foreground">Apiko</span>
              </h1>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">Software Developer</span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm">UI/UX Designer</span>
                <span className="px-4 py-2 bg-secondary/50 text-primary rounded-full text-sm">Frontend Developer</span>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Bridging the gap between design and development to create 
                exceptional digital experiences that users love and businesses thrive on.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
                >
                  Get In Touch
                </Button>
              </div>
              
              <div className="flex space-x-6">
                <a 
                  href="https://github.com/hanapiko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white hover:bg-accent/80 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hannah-juma-831195300/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white hover:bg-accent/80 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="apikojuma94@gmail.com"
                  className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white hover:bg-accent/80 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/30 rounded-full blur-xl"></div>
              
              {/* Brushstroke to the left of image */}
              <img 
                src="/brushstroke1.png" 
                alt="" 
                className="absolute top-4 left-4 w-60 h-60 opacity-70 rotate-12 z-0"
              />
              
              <div className="relative w-80 h-80 transform rotate-3 hover:rotate-6 transition-transform duration-300 z-10">
                <img 
                  src="/hero.png" 
                  alt="Hannah Apiko" 
                  className="w-full h-full object-cover rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}