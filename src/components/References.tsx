
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { User, MessageSquare, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  profession: z.string().min(2, { message: 'Profession must be at least 2 characters long' }),
  testimonial: z.string().min(10, { message: 'Testimonial must be at least 10 characters long' }),
});

type ReferenceForm = z.infer<typeof formSchema>;

type Reference = {
  id: string;
  name: string;
  profession: string;
  testimonial: string;
  date: string;
};

// Use a consistent storage key
const STORAGE_KEY = 'testimonials';

// Add your sister's testimonial as a default reference
const DEFAULT_REFERENCES: Reference[] = [
  {
    id: "sister-reference-001",
    name: "Your Sister",
    profession: "Student",
    testimonial: "My brother has always been passionate about gaming and technology. His portfolio perfectly showcases his skills and creative vision. I'm proud of what he's accomplished and excited to see where his career will take him!",
    date: new Date(Date.now() - 86400000).toLocaleDateString(), // yesterday's date
  }
];

const References = () => {
  const { toast } = useToast();
  const [references, setReferences] = useState<Reference[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [initialized, setInitialized] = useState(false);
  
  // Load testimonials from localStorage when component mounts
  useEffect(() => {
    const loadTestimonials = () => {
      try {
        const savedReferences = localStorage.getItem(STORAGE_KEY);
        
        if (savedReferences) {
          const parsedReferences = JSON.parse(savedReferences);
          setReferences(parsedReferences);
          console.log('Testimonials loaded successfully:', parsedReferences);
        } else {
          // If no testimonials found, use the default references
          console.log('No saved testimonials found, using default references');
          setReferences(DEFAULT_REFERENCES);
          // Save default references to localStorage
          localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_REFERENCES));
        }
      } catch (error) {
        console.error('Error loading testimonials from localStorage:', error);
        // If there's an error, use default references as fallback
        setReferences(DEFAULT_REFERENCES);
        // Try to save the defaults
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(DEFAULT_REFERENCES));
        } catch (saveError) {
          console.error('Error saving default testimonials:', saveError);
        }
      } finally {
        setInitialized(true);
      }
    };

    loadTestimonials();
  }, []);

  const form = useForm<ReferenceForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      profession: '',
      testimonial: '',
    },
  });

  const onSubmit = (data: ReferenceForm) => {
    const newReference: Reference = {
      id: crypto.randomUUID(),
      name: data.name,
      profession: data.profession,
      testimonial: data.testimonial,
      date: new Date().toLocaleDateString(),
    };

    const updatedReferences = [...references, newReference];
    
    // Save to localStorage with better error handling
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReferences));
      console.log('Testimonials saved successfully:', updatedReferences);
      
      // Only update state after successful save
      setReferences(updatedReferences);
      form.reset();
      setShowForm(false);
      
      toast({
        title: "Thank you for your testimonial!",
        description: "Your feedback has been saved and will be displayed whenever someone visits the site.",
      });
    } catch (error) {
      console.error('Error saving testimonials to localStorage:', error);
      toast({
        title: "Error saving your testimonial",
        description: "There was a problem saving your feedback. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Don't render until we've tried to load from storage
  if (!initialized) {
    return (
      <section id="references" className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-3 text-center mb-16">
            <p className="text-gaming-accent font-medium">TESTIMONIALS</p>
            <h2 className="section-heading">References & <span className="shimmer-text">Feedback</span></h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Loading testimonials...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="references" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-3 text-center mb-16">
          <p className="text-gaming-accent font-medium">TESTIMONIALS</p>
          <h2 className="section-heading">References & <span className="shimmer-text">Feedback</span></h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            What others have to say about my work, goals, and creative vision.
          </p>
        </div>

        {references.length === 0 && (
          <Alert className="bg-gaming-accent/10 border-gaming-accent/20 text-white mb-8">
            <AlertTitle>No testimonials yet!</AlertTitle>
            <AlertDescription>
              Be the first to share your thoughts about my portfolio and career goals.
            </AlertDescription>
          </Alert>
        )}

        {references.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {references.map((reference) => (
              <Card key={reference.id} className="glass-card overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gaming-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold text-white">{reference.name}</h3>
                      <p className="text-sm text-white/70">{reference.profession}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-white/80 italic mb-4">"{reference.testimonial}"</p>
                  
                  <div className="text-xs text-white/50 flex items-center justify-between mt-4">
                    <span>Added on {reference.date}</span>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" />
                      <span>Verified</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {!showForm ? (
          <div className="text-center mt-8">
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-gaming-accent hover:bg-gaming-accent-light text-white px-6 py-3"
            >
              <User className="mr-2 h-4 w-4" /> Add Your Testimonial
            </Button>
          </div>
        ) : (
          <Card className="glass-card max-w-2xl mx-auto p-6 mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Share Your Feedback</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="bg-gaming-dark/50 text-white border-gaming-accent/30" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="profession"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Your Profession</FormLabel>
                      <FormControl>
                        <Input placeholder="Game Developer, Artist, etc." className="bg-gaming-dark/50 text-white border-gaming-accent/30" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="testimonial"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Your Feedback</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Share your thoughts about my portfolio, career goals, or creative vision..." 
                          className="bg-gaming-dark/50 text-white border-gaming-accent/30 min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end gap-3">
                  <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="border-gaming-accent/30 text-white">
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-gaming-accent hover:bg-gaming-accent-light text-white">
                    Submit Testimonial
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        )}
      </div>
    </section>
  );
};

export default References;
