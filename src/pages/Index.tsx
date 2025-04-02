
import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { createParticleEffect } from '@/lib/animations';

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Apply subtle particle effects to the background
    if (containerRef.current) {
      const cleanup = createParticleEffect(containerRef.current, 30);
      return cleanup;
    }
  }, []);
  
  return (
    <div className="overflow-hidden relative" ref={containerRef}>
      {/* Subtle Border Effect */}
      <div className="fixed inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#5D5FEF] via-[#7879F1] to-[#9b87f5] animate-gradient-x"></div>
      <div className="fixed inset-y-0 right-0 w-[2px] bg-gradient-to-b from-[#5D5FEF] via-[#7879F1] to-[#9b87f5] animate-gradient-y"></div>
      <div className="fixed inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#9b87f5] via-[#7879F1] to-[#5D5FEF] animate-gradient-x"></div>
      <div className="fixed inset-y-0 left-0 w-[2px] bg-gradient-to-b from-[#9b87f5] via-[#7879F1] to-[#5D5FEF] animate-gradient-y"></div>
      
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
