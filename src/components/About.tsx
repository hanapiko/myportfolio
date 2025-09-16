import { Award, Code, Palette, Users } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const stats = [
    { icon: Code, label: "Projects Built", value: "10+", hoverColor: "hover:bg-blue-50 hover:border-blue-200" },
    { icon: Users, label: "Users Impacted", value: "50+", hoverColor: "hover:bg-green-50 hover:border-green-200" },
    { icon: Award, label: "Open Source", value: "3+", hoverColor: "hover:bg-purple-50 hover:border-purple-200" },
    { icon: Palette, label: "Years Experience", value: "1 1⁄2", hoverColor: "hover:bg-orange-50 hover:border-orange-200" },
  ];

  return (
    <section id="about" className="py-20 bg-white relative">
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
                I'm a Software Developer building my skills in different languages. Check out some of my work in the Projects section. 
                I also like sharing content related to the stuff that I have learned and participated in since I joined Zone01 Development 
                so it can help other people of the Dev Community. Feel free to Connect or Follow me on my LinkedIn where I post useful 
                content related to what I do.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Beyond development, I have a passion for UI/UX design, creating intuitive and visually appealing interfaces. 
                I enjoy the creative process of transforming ideas into beautiful, user-friendly designs using tools like Figma. 
                My design approach focuses on user experience, accessibility, and modern aesthetics that enhance functionality.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm open to Job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches 
                my skills and experience, don't hesitate to contact me.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className={`text-center p-6 border-border hover:shadow-lg transition-all duration-300 ${stat.hoverColor}`}>
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
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