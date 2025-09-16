import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "JavaScript ES6+", "HTML5", "CSS3"],
      color: "bg-primary",
      icon: "💻"
    },
    {
      title: "Backend & Tools",
      skills: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Git", "Docker", "AWS", "REST APIs"],
      color: "bg-accent", 
      icon: "⚙️"
    },
    {
      title: "Design & UX",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research", "Design Systems", "Wireframing"],
      color: "bg-secondary",
      icon: "🎨"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-3 h-3 bg-secondary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Full-stack capabilities with a design-first mindset, constantly evolving with the latest technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-border hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className="text-white text-lg">{category.icon}</span>
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-muted text-muted-foreground hover:bg-accent hover:text-white transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-8 text-foreground">What I Bring to the Table</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎨</span>
                </div>
                <h4 className="font-medium mb-2 text-foreground">Design-First Development</h4>
                <p className="text-muted-foreground text-sm">
                  Creating intuitive interfaces with pixel-perfect implementation
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h4 className="font-medium mb-2 text-foreground">Performance Focused</h4>
                <p className="text-muted-foreground text-sm">
                  Optimizing for speed, accessibility, and user experience
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary text-2xl">🤝</span>
                </div>
                <h4 className="font-medium mb-2 text-foreground">Cross-Functional</h4>
                <p className="text-muted-foreground text-sm">
                  Bridging design and development teams seamlessly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}