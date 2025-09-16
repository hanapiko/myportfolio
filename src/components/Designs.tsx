import { ExternalLink, Figma, Palette, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

export function Designs() {
  const designs = [
    {
      title: "OLPS KENYA",
      description: "Complete mobile app design with user-centered approach, featuring intuitive navigation and modern aesthetics.",
      image: "/olps-screenshot.png", 
      tools: ["wordpress"],
      category: "Web Design",
      link: "https://olpskenya.org/"
    },
    {
      title: "County Government of Kisumu Job portal",
      description: "Clean and functional dashboard design for a SaaS platform with focus on data visualization and user experience.",
      image: "/county-screenshot.png",
      tools: ["Figma", "User Research", "Wireframing"],
      category: "Web Design",
      link: "https://www.figma.com/proto/m6hkUYJXsAXT6d7SuWufKN/county?node-id=637-991&t=InGvySb1PVEpWa4V-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=637%3A991&show-proto-sidebar=1"
    },
    {
      title: "Civic AI",
      description: "Complete brand identity including logo, color palette, typography, and brand guidelines for a tech startup.",
      image: "/civic.png",
      tools: ["Figma", "prototyping"],
      category: "Web design",
      link: "https://www.figma.com/proto/nrm4ljXRGLQvn71MlsIBiD/Civic?node-id=163-432&t=u6VsJ1kFPbZzCTH4-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=163%3A432&show-proto-sidebar=1"
    }
  ];

  return (
    <section id="designs" className="py-20 bg-white relative">
      {/* Curvy separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="url(#gradient1)"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="url(#gradient2)"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="url(#gradient3)"></path>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="container mx-auto px-6 pt-16">
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

          <Carousel 
            className="w-full max-w-5xl mx-auto"
            opts={{
              align: "start",
              loop: false,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {designs.map((design, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border">
                    <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10"></div>
                      <div className="relative p-6 flex items-center justify-center h-80">
                        <img 
                          src={design.image} 
                          alt={design.title}
                          className="max-w-full max-h-full object-contain rounded-lg shadow-lg group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 hover:shadow-2xl"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/95 text-foreground shadow-sm backdrop-blur-sm">
                          {design.category}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {design.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {design.tools.map((tool, toolIndex) => (
                          <Badge 
                            key={toolIndex}
                            variant="outline"
                            className="text-xs border-primary/20 text-primary"
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
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12 bg-white shadow-lg border-primary/20 hover:bg-primary hover:text-white" />
            <CarouselNext className="-right-12 bg-white shadow-lg border-primary/20 hover:bg-primary hover:text-white" />
          </Carousel>

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