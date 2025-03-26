
import { useState, useEffect, useRef } from 'react';
import { ArrowDown, Gamepad, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Particles setup
  const particlesRef = useRef<HTMLDivElement>(null);
  const getRandomPosition = () => `${Math.random() * 100}%`;
  const getRandomSize = () => `${Math.random() * 2 + 1}px`;
  const getRandomDuration = () => `${Math.random() * 50 + 20}s`;
  
  // Profile image fade in effect
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Create particles
    if (particlesRef.current) {
      const particlesContainer = particlesRef.current;
      
      // Clear existing particles
      particlesContainer.innerHTML = '';
      
      // Create new particles
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        
        particle.style.position = 'absolute';
        particle.style.top = getRandomPosition();
        particle.style.left = getRandomPosition();
        particle.style.width = getRandomSize();
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.2)';
        particle.style.borderRadius = '50%';
        particle.style.animation = `float ${getRandomDuration()} linear infinite`;
        particle.style.opacity = `${Math.random() * 0.5 + 0.1}`;
        
        particlesContainer.appendChild(particle);
      }
    }
    
    // Trigger animations when component mounts
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timeout);
  }, []);
  
  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      heroRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Animated Background Particles */}
      <div 
        ref={particlesRef} 
        className="absolute inset-0 pointer-events-none"
      />
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-gaming-accent/10 via-transparent to-transparent opacity-30" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Hero Content */}
          <div 
            className={cn(
              "flex-1 space-y-6 transform transition-all duration-1000",
              isLoaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            )}
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gaming-accent/10 border border-gaming-accent/20 text-gaming-accent">
                <Gamepad className="h-4 w-4" />
                <span className="text-sm font-medium">Professional Gamer</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Gaming with <span className="shimmer-text">Precision</span> and <span className="shimmer-text">Passion</span>
              </h1>
            </div>
            
            <p className="text-lg text-white/80 max-w-xl leading-relaxed">
              Elite gaming professional with a track record of competition wins, strategic gameplay, and community leadership. Turning gaming passion into a successful career.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-lg bg-gaming-accent hover:bg-gaming-accent-light text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gaming-accent/20"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg bg-gaming-muted hover:bg-gaming-muted/80 text-white font-medium transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-gaming-accent" />
                <span>100+ Tournament Wins</span>
              </div>
              <div className="h-6 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-gaming-accent" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div 
            ref={heroRef}
            className={cn(
              "flex-1 relative transform transition-all duration-1000 w-full max-w-md",
              isLoaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            )}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
              {/* Profile Image */}
              <div className="absolute inset-0 bg-gaming-muted rounded-2xl overflow-hidden glass-card">
                <div className={cn(
                  "w-full h-full transition-opacity duration-700",
                  imageLoaded ? "opacity-100" : "opacity-0"
                )}>
                  <img
                    src="/placeholder.svg" 
                    alt="Gamer Profile"
                    className="w-full h-full object-cover"
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                
                {/* Image Loading Placeholder */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 border-4 border-gaming-accent border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gaming-accent/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gaming-accent/10 rounded-full blur-xl"></div>
            </div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-6 -left-6 glass-card px-4 py-3 rounded-xl shadow-lg animate-float">
              <p className="text-sm font-medium">Top Player</p>
              <p className="text-xl font-bold shimmer-text">Elite Rank</p>
            </div>
            
            <div className="absolute -top-6 -right-6 glass-card px-4 py-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
              <p className="text-sm font-medium">Twitch</p>
              <p className="text-xl font-bold shimmer-text">10K+ Followers</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white/50 hover:text-white transition-colors duration-300">
          <ArrowDown className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
