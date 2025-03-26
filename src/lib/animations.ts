
import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const observerRef = useRef(null);
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Add RGB pulsing effect to enhance gaming vibe
          if (entry.target.classList.contains('glass-card')) {
            entry.target.classList.add('rgb-pulse');
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      ...options,
    });

    observerRef.current = observer;

    // Observe all elements
    elementsRef.current.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      if (elementsRef.current) {
        elementsRef.current.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, [options]);

  const observe = (element: HTMLElement) => {
    if (element && !elementsRef.current.includes(element)) {
      elementsRef.current.push(element);
      if (observerRef.current) {
        (observerRef.current as IntersectionObserver).observe(element);
      }
    }
  };

  return { observe };
};

export const staggeredAnimation = (element: HTMLElement, delay = 0) => {
  const children = Array.from(element.children) as HTMLElement[];
  
  children.forEach((child, index) => {
    child.style.opacity = '0';
    child.style.animation = 'none';
    
    setTimeout(() => {
      child.style.animation = '';
      child.style.opacity = '';
      child.style.animationDelay = `${index * 0.1 + delay}s`;
      child.classList.add('animate-fade-in');
      
      // Add RGB glow effect to certain elements
      if (child.tagName === 'H1' || child.tagName === 'H2' || child.tagName === 'H3') {
        child.classList.add('rgb-text-shadow');
      }
    }, 0);
  });
};

// Add gaming-specific animation for RGB effects
export const applyRgbEffect = (element: HTMLElement) => {
  element.classList.add('rgb-border-pulse');
  
  // Create RGB light reflection effect
  const reflection = document.createElement('div');
  reflection.classList.add('rgb-reflection');
  element.appendChild(reflection);
  
  return () => {
    element.classList.remove('rgb-border-pulse');
    if (reflection.parentNode === element) {
      element.removeChild(reflection);
    }
  };
};

// Helper to create particle effects like in gaming UIs
export const createParticleEffect = (container: HTMLElement, count = 20) => {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.classList.add('gaming-particle');
    
    // Randomize particle properties
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
    particle.style.animationDelay = `${Math.random() * 2}s`;
    
    container.appendChild(particle);
  }
  
  return () => {
    const particles = container.querySelectorAll('.gaming-particle');
    particles.forEach(p => p.remove());
  };
};
