export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-6 h-6 bg-accent/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-primary/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-secondary/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-accent/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      
      {/* Floating squares */}
      <div className="absolute top-60 left-1/4 w-3 h-3 bg-primary/10 transform rotate-45 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-accent/15 transform rotate-12 animate-bounce" style={{animationDelay: '0.8s'}}></div>
      
      {/* Large background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
    </div>
  );
}