
import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { Trophy, Medal } from 'lucide-react';

const skillCategories = [
  {
    title: "Game Genres",
    skills: [
      { name: "FPS", level: 95 },
      { name: "MOBA", level: 90 },
      { name: "Battle Royale", level: 92 },
      { name: "Strategy", level: 85 },
      { name: "RPG", level: 88 }
    ]
  },
  {
    title: "Technical Skills",
    skills: [
      { name: "Hardware Optimization", level: 80 },
      { name: "Stream Setup", level: 90 },
      { name: "Video Editing", level: 75 },
      { name: "Graphic Design", level: 70 },
      { name: "Game Development", level: 65 }
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Team Leadership", level: 90 },
      { name: "Community Management", level: 85 },
      { name: "Strategic Planning", level: 95 },
      { name: "Live Commentary", level: 85 },
      { name: "Coaching", level: 80 }
    ]
  }
];

const outdoorAchievements = [
  {
    game: "Badminton",
    achievement: "District Champion",
    icon: <Trophy className="h-6 w-6 text-gaming-accent" />,
    description: "Multiple-time district level badminton champion with recognized technical excellence and strategic gameplay."
  },
  {
    game: "Athletics",
    achievement: "Regional Finalist",
    icon: <Medal className="h-6 w-6 text-gaming-accent" />,
    description: "Qualified and competed in regional athletic competitions representing my district."
  }
];

const Skills = () => {
  const { observe } = useIntersectionObserver();
  const headingRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);
  const outdoorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (headingRef.current) {
      observe(headingRef.current);
    }
    
    if (outdoorRef.current) {
      observe(outdoorRef.current);
    }
    
    skillsRef.current.forEach(ref => {
      if (ref) observe(ref);
    });
  }, [observe]);

  return (
    <section id="skills" className="section-container bg-gaming-dark/50">
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="space-y-3 text-center mb-16 opacity-0">
          <p className="text-gaming-accent font-medium">MY EXPERTISE</p>
          <h2 className="section-heading">Gaming <span className="shimmer-text">Skills</span> & Abilities</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Years of dedicated practice and competition have honed my gaming abilities across multiple genres and platforms.
          </p>
        </div>
        
        {/* Outdoor Games Achievements */}
        <div 
          ref={outdoorRef}
          className="glass-card rounded-xl p-6 mb-12 opacity-0"
        >
          <h3 className="text-xl font-bold mb-6 text-center shimmer-text">Outdoor Games Excellence</h3>
          
          <div className="grid md:grid-cols-2 gap-6 items-center">
            {/* Badminton Image */}
            <div className="rounded-xl overflow-hidden glass-card p-1">
              <img 
                src="/lovable-uploads/6f12248c-1cf2-4910-bffc-b4fbac0d5c0b.png"
                alt="Badminton match in progress" 
                className="w-full h-auto rounded-lg"
              />
              <div className="p-2 text-center">
                <p className="text-sm text-gaming-accent font-medium">Championship Level Badminton</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {outdoorAchievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-gaming-muted/30 rounded-lg p-5 border border-gaming-accent/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gaming-accent/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gaming-dark p-3 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">{achievement.game}</h4>
                      <p className="text-gaming-accent font-medium">{achievement.achievement}</p>
                      <p className="text-white/70 mt-2 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <div className="bg-gaming-accent/10 px-4 py-2 rounded-lg border border-gaming-accent/20">
              <p className="text-center text-white/80">
                <span className="text-gaming-accent font-medium">Not just digital:</span> Excellence in both virtual and physical competitive environments
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              ref={el => skillsRef.current[categoryIndex] = el}
              className="glass-card rounded-xl p-6 opacity-0"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-bold mb-6 text-center shimmer-text">{category.title}</h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gaming-accent">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-gaming-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gaming-accent rounded-full"
                        style={{ 
                          width: `${skill.level}%`,
                          animation: `animate-slide-in 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                          animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Gaming Platforms */}
        <div 
          ref={el => skillsRef.current[3] = el}
          className="mt-12 glass-card rounded-xl p-6 opacity-0"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Gaming Platforms</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["PC", "PlayStation", "Xbox", "Nintendo Switch", "Mobile", "VR"].map((platform, index) => (
              <div 
                key={index}
                className={cn(
                  "px-5 py-3 rounded-lg font-medium transition-all duration-300",
                  "bg-gaming-muted hover:bg-gaming-accent hover:shadow-lg hover:shadow-gaming-accent/20"
                )}
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
