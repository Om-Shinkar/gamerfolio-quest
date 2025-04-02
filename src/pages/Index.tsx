
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
    // Apply gaming particle effects to the background
    if (containerRef.current) {
      const cleanup = createParticleEffect(containerRef.current, 30);
      return cleanup;
    }
  }, []);
  
  return (
    <div className="overflow-hidden relative" ref={containerRef}>
      {/* RGB Border Effect */}
      <div className="fixed inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#ff0844] via-[#00f260] to-[#2196f3] animate-gradient-x"></div>
      <div className="fixed inset-y-0 right-0 w-[2px] bg-gradient-to-b from-[#ff0844] via-[#00f260] to-[#2196f3] animate-gradient-y"></div>
      <div className="fixed inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#2196f3] via-[#00f260] to-[#ff0844] animate-gradient-x"></div>
      <div className="fixed inset-y-0 left-0 w-[2px] bg-gradient-to-b from-[#2196f3] via-[#00f260] to-[#ff0844] animate-gradient-y"></div>
      
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
