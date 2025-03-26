
import { useEffect, useRef } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const observerRef = useRef(null);
  const elementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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
    }, 0);
  });
};
