
import { useRef, useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/lib/animations';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-gaming-accent" />,
    title: "Email",
    value: "contact@gamerportfolio.com",
    link: "mailto:contact@gamerportfolio.com"
  },
  {
    icon: <MapPin className="h-6 w-6 text-gaming-accent" />,
    title: "Location",
    value: "Los Angeles, CA",
    link: "#"
  },
  {
    icon: <Phone className="h-6 w-6 text-gaming-accent" />,
    title: "Phone",
    value: "+1 (123) 456-7890",
    link: "tel:+11234567890"
  }
];

const Contact = () => {
  const { observe } = useIntersectionObserver();
  const headingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);
  
  useEffect(() => {
    if (headingRef.current) observe(headingRef.current);
    if (formRef.current) observe(formRef.current);
    if (contactInfoRef.current) observe(contactInfoRef.current);
  }, [observe]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus({
        success: true,
        message: "Thanks for your message! I'll get back to you soon."
      });
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className="space-y-3 text-center mb-16 opacity-0">
          <p className="text-gaming-accent font-medium">GET IN TOUCH</p>
          <h2 className="section-heading">Let's <span className="shimmer-text">Connect</span></h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Have a project, collaboration opportunity, or just want to chat about gaming? Reach out and I'll get back to you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card rounded-xl p-8 space-y-6 opacity-0"
          >
            <h3 className="text-xl font-bold mb-4">Send Me a Message</h3>
            
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gaming-muted border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gaming-accent/50 transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gaming-muted border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gaming-accent/50 transition-all"
                placeholder="you@example.com"
              />
            </div>
            
            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-gaming-muted border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gaming-accent/50 transition-all resize-none"
                placeholder="Hi there, I'd like to talk about..."
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full py-3 rounded-lg font-medium transition-all duration-300",
                "bg-gaming-accent hover:bg-gaming-accent-light disabled:opacity-70",
                "hover:shadow-lg hover:shadow-gaming-accent/20 flex items-center justify-center gap-2"
              )}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </>
              )}
            </button>
            
            {/* Form Status */}
            {submitStatus && (
              <div 
                className={cn(
                  "px-4 py-3 rounded-lg text-sm",
                  submitStatus.success 
                    ? "bg-green-500/20 text-green-200"
                    : "bg-red-500/20 text-red-200"
                )}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
          
          {/* Contact Information & Social Links */}
          <div ref={contactInfoRef} className="space-y-8 opacity-0">
            {/* Contact Information */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="p-3 bg-gaming-muted rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{info.title}</p>
                      <a 
                        href={info.link}
                        className="font-medium hover:text-gaming-accent transition-colors duration-300"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-6">Connect on Social Media</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {["Twitch", "Twitter", "Discord", "YouTube", "Instagram", "TikTok"].map((platform, index) => (
                  <a 
                    key={index}
                    href="#"
                    className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gaming-muted hover:bg-gaming-accent/20 transition-all duration-300"
                  >
                    <span>{platform}</span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Available For */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Available For</h3>
              
              <div className="flex flex-wrap gap-3">
                <span className="skill-badge">Game Collaborations</span>
                <span className="skill-badge">Sponsorships</span>
                <span className="skill-badge">Tournament Invites</span>
                <span className="skill-badge">Coaching Sessions</span>
                <span className="skill-badge">Content Creation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
