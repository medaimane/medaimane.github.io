import { Lightbulb, Map, Palette, Code2, TestTube, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Lightbulb,
    title: 'Idea & Discovery',
    description: 'Understand your vision, goals, and users. Define success and clarify your app concept.',
  },
  {
    icon: Map,
    title: 'Strategy & Planning',
    description: 'Turn insights into a roadmap — define milestones, core features, and success metrics.',
  },
  {
    icon: Palette,
    title: 'Design & Prototype',
    description: 'Create interactive prototypes that validate ideas before writing code. Focus on user experience.',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Build the product using React Native + Expo for iOS, Android, and Wearables — fast, consistent, and future-ready.',
  },
  {
    icon: TestTube,
    title: 'Testing & Launch',
    description: 'Conduct real-device testing, fix bugs, and deploy with confidence to App Store, Play Store, and web.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Analysis',
    description: 'Collect real-world feedback, track usage analytics, and iterate for product-market fit.',
  },
];

const Process = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-[140px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary font-semibold text-sm md:text-base mb-3 tracking-wide uppercase">
            How We'll Work Together
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            My Proven Strategy — <span className="gradient-text">From Idea to Launch and Beyond</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A transparent process that turns your vision into a product users love — fast, clear, and scalable.
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
                {/* Step Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-heading font-bold text-background shadow-lg">
                  {index + 1}
                </div>

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
                </div>

                {/* Content */}
                <h3 className="font-heading font-bold text-2xl mb-3 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {/* Connection Line - Desktop Only */}
                {index < steps.length - 1 && (
                  <>
                    {/* Horizontal connector for adjacent cards in same row */}
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
            Ready to see your app idea come to life?
          </p>
          <Button
            size="lg"
            className="glow-effect bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-10 py-7 rounded-2xl font-semibold shadow-xl animate-fade-in group"
            style={{ animationDelay: '700ms' }}
            aria-label="Start your journey with Mohamed Aimane"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
