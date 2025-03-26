
import { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { ExternalLink, Trophy, Users, Calendar } from 'lucide-react';

// Sample projects data
const projects = [
  {
    title: "World Championship 2023",
    description: "First place in the international gaming tournament with over 200 participants from 30 countries.",
    image: "/placeholder.svg",
    tags: ["FPS", "Tournament", "Champion"],
    date: "Dec 2023",
    participants: "200+",
    link: "#"
  },
  {
    title: "Battle Royale Masters",
    description: "Achieved top 5 ranking in the seasonal Battle Royale championship series.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop",
    tags: ["Battle Royale", "Championship", "Top 5"],
    date: "Aug 2023",
    participants: "500+",
    link: "#"
  },
  {
    title: "BGMI Tournament",
    description: "Secured multiple chicken dinners in the BGMI Pro Series and ranked in the top 10 nationally.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&h=500&fit=crop",
    tags: ["BGMI", "Mobile Gaming", "Esports"],
    date: "Jan 2023",
    participants: "5000+",
    link: "#"
  },
  {
    title: "Clash of Clans League",
    description: "Led clan to Legend League status and participated in the Clash World Championship qualifiers.",
    image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=800&h=500&fit=crop",
    tags: ["CoC", "Strategy", "Team Leader"],
    date: "Mar-Jun 2023",
    participants: "50+ clans",
    link: "#"
  },
  {
    title: "Gaming Content Creation",
    description: "Developed a series of tutorial videos helping new players master advanced techniques.",
    image: "/placeholder.svg",
    tags: ["Content", "Tutorial", "YouTube"],
    date: "Ongoing",
    participants: "100K+ views",
    link: "#"
  },
  {
    title: "Charity Gaming Marathon",
    description: "Organized and led a 48-hour gaming marathon raising funds for children's hospital.",
    image: "/placeholder.svg",
    tags: ["Charity", "Event", "Fundraising"],
    date: "Nov 2023",
    participants: "$25K raised",
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
          <p className="text-gaming-accent font-medium">MY ACHIEVEMENTS</p>
          <h2 className="section-heading">Featured <span className="shimmer-text">Gaming</span> Projects</h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A showcase of my top gaming achievements, tournaments, and content creation projects.
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
                <div className="absolute inset-0 bg-gradient-to-t from-gaming-dark to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium bg-gaming-accent/20 text-gaming-accent rounded-md"
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
                  className="inline-flex items-center gap-2 text-gaming-accent hover:text-gaming-accent-light transition-colors duration-300 text-sm font-medium"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gaming-accent hover:bg-gaming-accent-light text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-gaming-accent/20"
          >
            <Trophy className="h-5 w-5" />
            View All Achievements
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
