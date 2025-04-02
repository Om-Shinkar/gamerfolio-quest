
import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { cn } from '@/lib/utils';
import { GraduationCap, Book, Brain, Award } from 'lucide-react';

const skillCategories = [
  {
    title: "Academic Expertise",
    skills: [
      { name: "Research Methods", level: 95 },
      { name: "Critical Analysis", level: 90 },
      { name: "Scientific Writing", level: 92 },
      { name: "Data Interpretation", level: 85 },
      { name: "Theoretical Frameworks", level: 88 }
    ]
  },
  {
    title: "Technical Proficiencies",
    skills: [
      { name: "Statistical Analysis", level: 80 },
      { name: "Digital Research Tools", level: 90 },
      { name: "Documentation", level: 75 },
      { name: "Knowledge Management", level: 70 },
      { name: "Educational Technology", level: 65 }
    ]
  },
  {
    title: "Professional Skills",
    skills: [
      { name: "Mentorship", level: 90 },
      { name: "Public Speaking", level: 85 },
      { name: "Project Management", level: 95 },
      { name: "Curriculum Development", level: 85 },
      { name: "Academic Advising", level: 80 }
    ]
  }
];

const academicAchievements = [
  {
    field: "Philosophy",
    achievement: "Published Researcher",
    icon: <Book className="h-6 w-6 text-primary" />,
    description: "Multiple published papers in peer-reviewed journals on epistemology and contemporary philosophical thought."
  },
  {
    field: "Education",
    achievement: "Teaching Excellence Award",
    icon: <GraduationCap className="h-6 w-6 text-primary" />,
    description: "Recognized for innovative teaching methodologies and exceptional student engagement metrics."
  }
];

const Skills = () => {
  const { observe } = useIntersectionObserver();
  const headingRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<(HTMLDivElement | null)[]>([]);
  const academicRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (headingRef.current) {
      observe(headingRef.current);
    }
    
    if (academicRef.current) {
      observe(academicRef.current);
    }
    
    skillsRef.current.forEach(ref => {
      if (ref) observe(ref);
    });
  }, [observe]);

  return (
    <section id="skills" className="section-container bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        <div ref={headingRef} className="space-y-3 text-center mb-16 opacity-0">
          <p className="text-primary font-medium">MY EXPERTISE</p>
          <h2 className="section-heading">Knowledge <span className="shimmer-text">Areas</span> & Competencies</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Years of dedicated study, research, and professional practice have developed my expertise across multiple disciplines.
          </p>
        </div>
        
        {/* Academic Achievements */}
        <div 
          ref={academicRef}
          className="glass-card rounded-xl p-6 mb-12 opacity-0"
        >
          <h3 className="text-xl font-bold mb-6 text-center shimmer-text">Academic Excellence</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {academicAchievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 rounded-lg p-5 border border-primary/20 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-slate-900 p-3 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{achievement.field}</h4>
                    <p className="text-primary font-medium">{achievement.achievement}</p>
                    <p className="text-white/70 mt-2 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center">
            <div className="bg-primary/10 px-4 py-2 rounded-lg border border-primary/20">
              <p className="text-center text-white/80">
                <span className="text-primary font-medium">Lifelong learning:</span> Committed to the pursuit of knowledge and intellectual growth
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
                      <span className="text-sm text-primary">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
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
        
        {/* Additional Areas of Knowledge */}
        <div 
          ref={el => skillsRef.current[3] = el}
          className="mt-12 glass-card rounded-xl p-6 opacity-0"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Areas of Knowledge</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Philosophy", "Education", "Psychology", "Literature", "History", "Ethics"].map((area, index) => (
              <div 
                key={index}
                className={cn(
                  "px-5 py-3 rounded-lg font-medium transition-all duration-300",
                  "bg-slate-700 hover:bg-primary hover:shadow-lg hover:shadow-primary/20"
                )}
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
