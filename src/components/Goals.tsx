
import { Trophy, Flag, Rocket } from 'lucide-react';

const Goals = () => {
  const goals = [
    {
      title: "Become a Professional Artist",
      description: "Build upon my 10 years of experience in sketching and painting to establish myself as a recognized professional artist with exhibitions across the country.",
      icon: <Trophy className="w-10 h-10 text-gaming-accent" />
    },
    {
      title: "Game Development Mastery",
      description: "Channel my passion for gaming into creating immersive games that push the boundaries of storytelling and interactive experiences.",
      icon: <Rocket className="w-10 h-10 text-gaming-accent" />
    },
    {
      title: "National Badminton Champion",
      description: "Represent India on the international stage as a badminton player, showcasing the bright minds and athletic talents of the country to the world.",
      icon: <Flag className="w-10 h-10 text-gaming-accent" />
    }
  ];

  return (
    <section id="goals" className="section-container">
      <h2 className="section-heading shimmer-text">My Future Goals</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {goals.map((goal, index) => (
          <div 
            key={index}
            className="glass-card p-6 rounded-xl flex flex-col items-center text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-gaming-accent/20"
          >
            <div className="mb-4">
              {goal.icon}
            </div>
            
            <h3 className="text-xl font-display font-bold mb-3 text-white">{goal.title}</h3>
            
            <p className="text-white/70">
              {goal.description}
            </p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="glass-card max-w-2xl mx-auto p-6 rounded-xl">
          <h3 className="text-xl font-display font-bold mb-4 text-gaming-accent">Vision Statement</h3>
          <p className="text-white/90 italic">
            "My vision is to combine my creative talents and competitive spirit to make meaningful contributions to the arts, 
            gaming industry, and sports, representing India with excellence and inspiring the next generation of creators and athletes."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Goals;
