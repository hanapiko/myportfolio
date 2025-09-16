import { Award, Code, Palette, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const stats = [
    { icon: Code, label: "Projects Built", value: "75+" },
    { icon: Users, label: "Users Impacted", value: "10K+" },
    { icon: Award, label: "Open Source", value: "25+" },
    { icon: Palette, label: "Years Experience", value: "6+" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm a multi-disciplinary developer and designer who thrives at the intersection 
              of creativity and technology, building solutions that are both beautiful and functional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">My Story</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                As a software developer with a strong design background, I bring a unique perspective 
                to every project. I've spent years mastering both the art of user experience design 
                and the science of efficient, scalable code. My dual expertise allows me to bridge 
                the often-challenging gap between design vision and technical implementation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in React ecosystems, modern JavaScript frameworks, and design systems 
                that scale. When I'm not coding, you'll find me researching the latest design trends, 
                contributing to open source projects, or mentoring aspiring developers who want to 
                blend creativity with technical excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                      <stat.icon className="text-white" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}