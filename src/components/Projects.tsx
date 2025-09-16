import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "HEAL",
      description: "Professional mental health support powered by AI, with 24/7 availability, crisis management, and privacy-first design",
      image: "/Heal.png", 
      tags: ["Next.js", "TypeScript", "Node.js, Nest.JS, Go"], 
      liveUrl: "https://healmentalcare.netlify.app/",
      githubUrl: "https://github.com/yourusername/project1",
      category: "Full-Stack"
    },
    {
      title: "Real-time Forum",
      description: "A real-time forum built with Go, SQLite, and vanilla JavaScript. It features user registration, login, post creation, commenting, and private messaging — all in a single-page application (SPA) experience.",
      image: "/Forum.png", 
      tags: ["Javascript", "CSS", "Gorilla websocket", "Golang", "SQLite"], // Your tech stack
      liveUrl: "https://your-project2-url.com",
      githubUrl: "https://github.com/yourusername/project2",
      category: "Frontend"
    },
    {
      title: "Groupie-Tracker",
      description: "Groupie Trackers consists on receiving a given API and manipulate the data contained in it, in order to create a site, displaying the information.",
      image: "/groupie.png", 
      tags: ["JavaScript", "CSS", "HTML"], // Your tech stack
      liveUrl: "https://your-project3-url.com",
      githubUrl: "https://github.com/yourusername/project3",
      category: "Design"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white relative">
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