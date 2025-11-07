import { Lightbulb, Map, Palette, Code2, Rocket, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Lightbulb,
    title: 'Idea & Discovery',
    description: 'Understand your vision, goals, and target users to shape the right product direction.',
  },
  {
    icon: Map,
    title: 'Strategy & Planning',
    description: 'Define core features, tech stack, and roadmap based on your business priorities.',
  },
  {
    icon: Palette,
    title: 'Design & Prototype',
    description: 'Create wireframes, UI, and interactive prototypes to visualize the experience early.',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Build the product using React Native + Expo for cross-platform performance (iOS, Android, Web, and Wearables).',
  },
  {
    icon: Rocket,
    title: 'Testing & Launch',
    description: 'Conduct QA, beta testing, and launch the app smoothly to stores or web.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Analysis',
    description: 'Collect user feedback, analyze usage, and refine future updates based on data.',
  },
];

const Process = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            My Proven Strategy — <span className="gradient-text">From Idea to Launch and Beyond</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A clear, transparent process to turn your app vision into a real product users love
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="glass-card glow-effect rounded-2xl p-8 transition-all duration-500 hover:scale-105 group relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-heading font-bold text-background shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connector Line - Hidden on last items */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="glow-effect bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-10 py-7 rounded-2xl font-semibold shadow-xl animate-fade-in"
            style={{ animationDelay: '600ms' }}
            aria-label="Start your journey with Mohamed Aimane"
          >
            Let's Start Your Journey →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
