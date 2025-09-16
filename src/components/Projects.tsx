import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "React E-commerce Platform",
      description: "Full-stack e-commerce solution built with React, Next.js, and Stripe integration. Features real-time inventory, admin dashboard, and responsive design from mobile to desktop.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTczMTUzMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Full-Stack"
    },
    {
      title: "Design System & Component Library",
      description: "Comprehensive design system with 50+ reusable components, built in React and documented in Storybook. Used across multiple projects to ensure consistency and speed up development.",
      image: "https://images.unsplash.com/photo-1670057046254-3b5095eb4b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdCUyMGphdmFzY3JpcHQlMjBjb2RlfGVufDF8fHx8MTc1NzI1OTQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Storybook", "Design System", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Design"
    },
    {
      title: "Mobile-First Web App",
      description: "Progressive web app designed mobile-first with offline capabilities. Features push notifications, service workers, and seamless cross-platform experience.",
      image: "https://images.unsplash.com/photo-1597740985671-2a8a3b80502e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU3Mjk3MjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["PWA", "Service Workers", "Vue.js", "Mobile-First"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      category: "Mobile"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world applications that blend thoughtful design with robust development.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden border-border hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-white/90 text-primary border-0">{project.category}</Badge>
                  </div>
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-transform"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink size={16} />
                        <span className="ml-1">Live</span>
                      </Button>
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white text-primary hover:bg-white/90 transform hover:scale-105 transition-transform"
                          onClick={() => window.open(project.githubUrl, '_blank')}
                        >
                          <Github size={16} />
                          <span className="ml-1">Code</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge 
                        key={tagIndex}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}