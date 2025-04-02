
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useRef, useEffect } from "react";
import { createParticleEffect } from "@/lib/animations";

const queryClient = new QueryClient();

const App = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Apply subtle particle effects to the background
    if (containerRef.current) {
      const cleanup = createParticleEffect(containerRef.current, 30);
      return cleanup;
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="overflow-hidden relative" ref={containerRef}>
            {/* Subtle Border Effect */}
            <div className="fixed inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#5D5FEF] via-[#7879F1] to-[#9b87f5] animate-gradient-x"></div>
            <div className="fixed inset-y-0 right-0 w-[2px] bg-gradient-to-b from-[#5D5FEF] via-[#7879F1] to-[#9b87f5] animate-gradient-y"></div>
            <div className="fixed inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-[#9b87f5] via-[#7879F1] to-[#5D5FEF] animate-gradient-x"></div>
            <div className="fixed inset-y-0 left-0 w-[2px] bg-gradient-to-b from-[#9b87f5] via-[#7879F1] to-[#5D5FEF] animate-gradient-y"></div>
            
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
