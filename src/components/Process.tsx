import { Lightbulb, Map, Palette, Code2, TestTube, TrendingUp } from 'lucide-react';
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-full blur-[150px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            My Proven Strategy — <span className="gradient-text">From Idea to Launch and Beyond</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A transparent process that turns your vision into a product users love — fast, clear, and scalable.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30 lg:hidden" />
          
          {/* Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Connection Line - Desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-0.5 z-0">
                      <div className="w-full h-full bg-gradient-to-r from-primary/50 to-secondary/50 relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className="relative ml-16 lg:ml-0 group">
                    <div className="glass-card rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative overflow-hidden">
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500 rounded-2xl" />
                      
                      {/* Step Number Badge */}
                      <div className="absolute -left-8 lg:-left-4 top-6 lg:-top-4 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-heading font-bold text-background text-lg lg:text-xl shadow-lg glow-effect z-10">
                        {index + 1}
                      </div>

                      {/* Icon Container */}
                      <div className="relative mb-6">
                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300 relative">
                          {/* Icon Glow */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/40 to-secondary/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <Icon className="h-7 w-7 lg:h-8 lg:w-8 text-primary group-hover:text-secondary transition-colors duration-300 relative z-10" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="font-heading font-bold text-xl lg:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                          {step.description}
                        </p>
                      </div>

                      {/* Bottom Accent Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            size="lg"
            className="glow-effect bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-10 py-7 rounded-2xl font-semibold shadow-xl animate-fade-in group relative overflow-hidden"
            style={{ animationDelay: '900ms' }}
            aria-label="Start your journey with Mohamed Aimane"
          >
            <span className="relative z-10">Let's Start Your Journey →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
