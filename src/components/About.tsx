
import { useRef, useEffect } from 'react';
import { Trophy, Star, Target, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver, staggeredAnimation } from '@/lib/animations';

const stats = [
  { icon: <Trophy className="h-6 w-6 text-gaming-accent" />, value: '150+', label: 'Tournaments' },
  { icon: <Star className="h-6 w-6 text-gaming-accent" />, value: '10+', label: 'Years Gaming' },
  { icon: <Target className="h-6 w-6 text-gaming-accent" />, value: '25+', label: 'Games Mastered' },
  { icon: <Rocket className="h-6 w-6 text-gaming-accent" />, value: '100K+', label: 'Followers' }
];

const About = () => {
  const { observe } = useIntersectionObserver();
  const statsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (statsRef.current) {
      observe(statsRef.current);
    }
    
    if (contentRef.current) {
      observe(contentRef.current);
      staggeredAnimation(contentRef.current, 0.2);
    }
  }, [observe]);

  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3 text-center mb-16" ref={contentRef}>
          <p className="text-gaming-accent font-medium">ABOUT ME</p>
          <h2 className="section-heading">Gaming Excellence <span className="shimmer-text">Personified</span></h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A passionate gamer with years of competitive experience, pushing the boundaries of what's possible in digital worlds and building communities along the way.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="relative opacity-0" ref={contentRef}>
            <div className="rounded-2xl overflow-hidden glass-card p-1 shadow-xl">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Gaming Setup" 
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark/80 to-transparent"></div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gaming-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gaming-accent/10 rounded-full blur-xl"></div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6 opacity-0" ref={contentRef}>
            <h3 className="text-2xl font-bold">My Gaming Journey</h3>
            <p className="text-white/70 leading-relaxed">
              I began my gaming journey at a young age, quickly developing a passion for strategic gameplay and competitive eSports. Over the years, I've honed my skills across multiple platforms and genres, from FPS to MOBAs, Battle Royales to RPGs.
            </p>
            <p className="text-white/70 leading-relaxed">
              My competitive career has taken me to tournaments worldwide, where I've competed alongside and against the best players in the industry. Beyond competition, I'm passionate about gaming technology, streaming, and creating content that entertains and educates my community.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="skill-badge">Strategic Planning</span>
              <span className="skill-badge">Team Leadership</span>
              <span className="skill-badge">Content Creation</span>
              <span className="skill-badge">Community Building</span>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 rounded-lg bg-gaming-accent hover:bg-gaming-accent-light text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gaming-accent/20 mt-4"
            >
              Connect With Me
            </a>
          </div>
        </div>
        
        {/* Stats */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 opacity-0"
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gaming-accent/10"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold shimmer-text">{stat.value}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
