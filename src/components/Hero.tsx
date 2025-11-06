import { Button } from '@/components/ui/button';
import { Calendar, Rocket } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Photo */}
        <div className="mb-8 inline-block">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <img
              src={profilePhoto}
              alt="Mohamed Aimane"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background"
            />
          </div>
        </div>

        {/* Headline */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
            Hey 👋 I'm <span className="gradient-text">Mohamed Aimane</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-muted-foreground">
            Senior Software Engineer · React Native & Expo AI Apps
          </p>
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-foreground/90 max-w-3xl mx-auto mb-6 leading-relaxed">
          I help founders and startups build AI-powered mobile apps that people love — from idea to launch, with speed & clarity.
        </p>

        {/* Supporting line */}
        <p className="text-sm md:text-base text-muted-foreground mb-10">
          Top 3% on Upwork · 8+ years experience · 30+ projects completed
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <Button 
            size="lg" 
            className="glow-effect bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-8 py-6 rounded-2xl font-semibold shadow-lg"
            aria-label="Schedule a one-on-one consultation call with Mohamed Aimane"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a 1:1 Call
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-base md:text-lg px-8 py-6 rounded-2xl font-semibold transition-all duration-300"
            aria-label="Learn more about working with Mohamed Aimane on your project"
          >
            <Rocket className="mr-2 h-5 w-5" />
            Work With Me
          </Button>
        </div>

        {/* CTA Subtext */}
        <p className="text-sm text-muted-foreground">
          💡 Got an app idea? Let's make it happen 👇
        </p>
      </div>
    </section>
  );
};

export default Hero;
