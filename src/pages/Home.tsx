
import Hero from '@/components/Hero';
import AboutSection from '@/components/About';
import Skills from '@/components/Skills';
import ProjectsSection from '@/components/Projects';
import ContactSection from '@/components/Contact';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
