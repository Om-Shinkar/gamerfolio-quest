
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-gaming-muted py-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold font-display flex items-center gap-2">
              <span className="shimmer-text">Gamer</span>
              <span>Portfolio</span>
            </a>
            <p className="text-white/60 mt-2 max-w-md">
              Elevating gaming into a true art form through competition, content, and community.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-gaming-dark rounded-full hover:bg-gaming-accent/20 transition-colors duration-300 mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Gamer Portfolio. All rights reserved.
            </p>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="flex flex-wrap justify-center md:justify-between items-center mt-10 pt-8 border-t border-white/5 text-sm text-white/50">
          <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Cookies Policy</a>
          </div>
          
          <div>
            Designed with passion and precision
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
