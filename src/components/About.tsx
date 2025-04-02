
import { useRef, useEffect } from 'react';
import { BookOpen, Award, GraduationCap, Brain, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver, staggeredAnimation } from '@/lib/animations';

const stats = [
  { icon: <BookOpen className="h-6 w-6 text-primary" />, value: '20+', label: 'Publications' },
  { icon: <Award className="h-6 w-6 text-primary" />, value: '15+', label: 'Years Teaching' },
  { icon: <GraduationCap className="h-6 w-6 text-primary" />, value: '100+', label: 'Students Mentored' },
  { icon: <Brain className="h-6 w-6 text-primary" />, value: '5+', label: 'Research Fields' }
];

const About = () => {
  const { observe } = useIntersectionObserver();
  const statsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const badmintonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (statsRef.current) {
      observe(statsRef.current);
    }
    
    if (contentRef.current) {
      observe(contentRef.current);
      staggeredAnimation(contentRef.current, 0.2);
    }
    
    if (badmintonRef.current) {
      observe(badmintonRef.current);
    }
  }, [observe]);

  return (
    <section id="about" className="section-container">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-3 text-center mb-16" ref={contentRef}>
          <p className="text-primary font-medium">ABOUT ME</p>
          <h2 className="section-heading">Academic Excellence <span className="shimmer-text">Personified</span></h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A passionate educator and researcher dedicated to advancing knowledge, fostering critical thinking, and inspiring the next generation of scholars.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Image */}
          <div className="relative opacity-0" ref={contentRef}>
            <div className="rounded-2xl overflow-hidden glass-card p-1 shadow-xl">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/6c68e96c-9566-4791-930e-50087402b716.png" 
                  alt="Professor in a library setting" 
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                {/* Soft Glow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 opacity-60 mix-blend-overlay"></div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
          
          {/* About Content */}
          <div className="space-y-6 opacity-0" ref={contentRef}>
            <h3 className="text-2xl font-bold">My Academic Journey</h3>
            <p className="text-white/70 leading-relaxed">
              I began my academic journey with a profound fascination for how knowledge shapes our understanding of the world. My research has taken me across disciplines, exploring the intersections of theory and practice, and how ideas evolve over time.
            </p>
            <p className="text-white/70 leading-relaxed">
              My work spans multiple fields, from theoretical frameworks to practical applications, always with a focus on advancing understanding and contributing to the academic community. I'm passionate about mentoring the next generation of scholars and fostering environments where critical thinking flourishes.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="skill-badge">Research Methodology</span>
              <span className="skill-badge">Academic Writing</span>
              <span className="skill-badge">Educational Leadership</span>
              <span className="skill-badge">Scholarly Discourse</span>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 mt-4"
            >
              Connect With Me
            </a>
          </div>
        </div>
        
        {/* Badminton Career Section */}
        <div 
          ref={badmintonRef}
          className="mt-20 opacity-0"
        >
          <div className="space-y-3 text-center mb-10">
            <p className="text-primary font-medium">BEYOND ACADEMICS</p>
            <h2 className="text-3xl font-bold">My <span className="shimmer-text">Badminton</span> Career</h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Balancing intellectual pursuits with physical excellence through the competitive sport of badminton.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Badminton Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden glass-card p-1 shadow-xl">
                <div className="relative rounded-xl overflow-hidden">
                  <img 
                    src="/lovable-uploads/6c68e96c-9566-4791-930e-50087402b716.png" 
                    alt="Badminton player in action" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  {/* Soft Glow Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 opacity-60 mix-blend-overlay"></div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/30 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
            
            {/* Badminton Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Physical Excellence</h3>
              <p className="text-white/70 leading-relaxed">
                While my primary focus remains in academia, I've cultivated a parallel career as a competitive badminton player. The discipline, strategy, and quick thinking required in this sport complement my scholarly approach, enhancing my ability to perform under pressure.
              </p>
              <p className="text-white/70 leading-relaxed">
                Throughout my badminton journey, I've participated in numerous tournaments, developed advanced techniques, and even coached aspiring players. This balance of mental and physical excellence reflects my belief in holistic development.
              </p>
              
              <div className="flex items-center space-x-3 mt-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold">Multiple Tournament Victories</p>
                  <p className="text-white/70 text-sm">Regional and national level competitions</p>
                </div>
              </div>
            </div>
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
              className="glass-card rounded-xl p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/10"
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
