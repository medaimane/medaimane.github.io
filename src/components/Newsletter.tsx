import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Welcome aboard! 🎉",
        description: "You've successfully subscribed to the newsletter.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full blur-[140px] animate-glow-pulse" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="glass-card glow-effect rounded-3xl p-8 md:p-12 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-6 animate-float">
            <Mail className="h-8 w-8 text-background" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Stay Inspired. Get <span className="gradient-text">App-Building Insights</span> Monthly.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            A short monthly email on building AI-powered apps, product strategy, and startup lessons.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="relative flex-1">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 rounded-2xl bg-background/50 border-primary/30 text-foreground placeholder:text-muted-foreground px-6 text-base focus:border-primary"
                disabled={isLoading}
              />
            </div>
            
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="glow-effect bg-gradient-to-r from-primary to-secondary text-background hover:opacity-90 h-14 px-8 rounded-2xl font-semibold text-base shadow-xl whitespace-nowrap"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              {isLoading ? 'Subscribing...' : 'Join Free Newsletter →'}
            </Button>
          </form>

          {/* Privacy Note */}
          <p className="text-sm text-muted-foreground mt-6">
            No spam. Unsubscribe anytime. Your data is safe with me. 🔒
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
