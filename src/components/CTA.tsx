import { Button } from '@/components/ui/button';
import { Calendar, MessageSquare } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[120px] animate-glow-pulse" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 animate-fade-in">
          Let's Build Something <span className="gradient-text">Amazing Together</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
          Ready to turn your idea into a scalable digital product?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            size="lg" 
            className="glow-effect bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-10 py-7 rounded-2xl font-semibold shadow-xl"
            aria-label="Book a consultation call to discuss your project"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Call
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-background text-base md:text-lg px-10 py-7 rounded-2xl font-semibold transition-all duration-300"
            aria-label="Start your project with Mohamed Aimane"
          >
            <MessageSquare className="mr-2 h-5 w-5" />
            Start Your Project
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Replies within 24 hours · Available for new projects
        </p>
      </div>
    </section>
  );
};

export default CTA;
