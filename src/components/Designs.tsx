import { ExternalLink, Figma, Palette } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Designs() {
  const designs = [
    {
      title: "E-commerce Mobile App",
      description: "Complete mobile app design with user-centered approach, featuring intuitive navigation and modern aesthetics.",
      image: "/design1.png", // Add your design images to public folder
      tools: ["Figma", "Adobe XD", "Prototyping"],
      category: "Mobile Design",
      link: "https://figma.com/your-design-link"
    },
    {
      title: "SaaS Dashboard",
      description: "Clean and functional dashboard design for a SaaS platform with focus on data visualization and user experience.",
      image: "/design2.png",
      tools: ["Figma", "User Research", "Wireframing"],
      category: "Web Design",
      link: "https://figma.com/your-design-link"
    },
    {
      title: "Brand Identity System",
      description: "Complete brand identity including logo, color palette, typography, and brand guidelines for a tech startup.",
      image: "/design3.png",
      tools: ["Adobe Illustrator", "Figma", "Brand Strategy"],
      category: "Branding",
      link: "https://figma.com/your-design-link"
    }
  ];

  return (
    <section id="designs" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="flex space-x-2">
                <Palette className="w-6 h-6 text-primary animate-pulse" />
                <Figma className="w-6 h-6 text-accent animate-pulse" style={{animationDelay: '0.5s'}} />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              UI/UX Designs
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Crafting beautiful and functional designs that solve real problems and create delightful user experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designs.map((design, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={design.image} 
                    alt={design.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-foreground">
                      {design.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-foreground group-hover:text-primary transition-colors">
                    {design.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {design.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {design.tools.map((tool, toolIndex) => (
                      <Badge 
                        key={toolIndex}
                        variant="outline"
                        className="text-xs border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
                    onClick={() => window.open(design.link, '_blank')}
                  >
                    View Design
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
            >
              View All Designs
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}