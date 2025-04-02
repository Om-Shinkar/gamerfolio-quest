
import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { ExternalLink, BookOpen, Users, Calendar } from 'lucide-react';

// Sample projects data
const projects = [
  {
    title: "Epistemology in Practice",
    description: "Published research on the practical applications of epistemological frameworks in educational settings.",
    image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=800&h=500&fit=crop",
    tags: ["Philosophy", "Education", "Epistemology"],
    date: "Dec 2023",
    participants: "3 Collaborators",
    link: "#"
  },
  {
    title: "Critical Thinking Framework",
    description: "Developed a comprehensive framework for teaching critical thinking skills across academic disciplines.",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=500&fit=crop",
    tags: ["Education", "Methodology", "Framework"],
    date: "Aug 2023",
    participants: "University Implementation",
    link: "#"
  },
  {
    title: "Ethics in Modern Society",
    description: "Research examining the evolution of ethical frameworks in response to technological and social changes.",
    image: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=800&h=500&fit=crop",
    tags: ["Ethics", "Society", "Technology"],
    date: "Jan 2023",
    participants: "Conference Keynote",
    link: "#"
  },
  {
    title: "Knowledge Acquisition Study",
    description: "Longitudinal study on how environmental factors influence knowledge acquisition and retention.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=800&h=500&fit=crop",
    tags: ["Psychology", "Education", "Research"],
    date: "Mar-Jun 2023",
    participants: "200+ Subjects",
    link: "#"
  },
  {
    title: "Educational Content Series",
    description: "Developed a comprehensive series of educational materials on philosophical concepts for undergraduate students.",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=500&fit=crop",
    tags: ["Content", "Philosophy", "Education"],
    date: "Ongoing",
    participants: "10,000+ Students",
    link: "#"
  },
  {
    title: "Academic Symposium",
    description: "Organized and chaired an international symposium on advancing educational methodologies.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop",
    tags: ["Conference", "Education", "Leadership"],
    date: "Nov 2023",
    participants: "15 Countries",
    link: "#"
  }
];

const Projects = () => {
  const { observe } = useIntersectionObserver();
  const headingRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    if (headingRef.current) {
      observe(headingRef.current);
    }
    
    projectRefs.current.forEach(ref => {
      if (ref) observe(ref);
    });
  }, [observe]);

  return (
    <section id="projects" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef} className="space-y-3 text-center mb-16 opacity-0">
          <p className="text-primary font-medium">MY CONTRIBUTIONS</p>
          <h2 className="section-heading">Featured <span className="shimmer-text">Research</span> & Publications</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A showcase of my key academic works, research projects, and scholarly contributions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="project-card opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden h-44">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-card-image object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-white/70 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-white/60">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{project.participants}</span>
                  </div>
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 text-sm font-medium"
                >
                  View Project <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div 
          ref={el => projectRefs.current[6] = el}
          className="mt-16 text-center opacity-0"
        >
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <BookOpen className="h-5 w-5" />
            View All Publications
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
