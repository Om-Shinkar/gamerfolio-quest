
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

const STORAGE_KEY = 'testimonials';

const References = () => {
  const { toast } = useToast();
  const [references, setReferences] = useState<Reference[]>([]);
  const [showForm, setShowForm] = useState(false);
  
  // Load testimonials from localStorage when component mounts
  useEffect(() => {
    const savedReferences = localStorage.getItem(STORAGE_KEY);
    if (savedReferences) {
      try {
        const parsedReferences = JSON.parse(savedReferences);
        setReferences(parsedReferences);
        console.log('Loaded testimonials:', parsedReferences);
      } catch (error) {
        console.error('Error parsing testimonials from localStorage:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
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
    setReferences(updatedReferences);
    
    // Save to localStorage
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReferences));
      console.log('Saved testimonials:', updatedReferences);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
    
    form.reset();
    setShowForm(false);
    
    toast({
      title: "Thank you for your testimonial!",
      description: "Your feedback has been saved and displayed.",
    });
  };

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
