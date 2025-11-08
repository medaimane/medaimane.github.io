import { Brain, Smartphone, Monitor, Database, Palette, Cloud } from 'lucide-react';

const expertise = [
  {
    icon: Monitor,
    title: 'Cross-Platform Development',
    description: 'iOS, Android, Web, Wearables',
  },
  {
    icon: Brain,
    title: 'AI Integrations',
    description: 'Smart features that scale',
  },
  {
    icon: Database,
    title: 'Real-time Data',
    description: 'Fast, synchronized experiences',
  },
  {
    icon: Cloud,
    title: 'Scalable Backends',
    description: 'Built for growth',
  },
  {
    icon: Smartphone,
    title: 'Wearables Support',
    description: 'Apple Watch & beyond',
  },
];

const Expertise = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Specialized in Building <span className="gradient-text">Cross-Platform AI Apps that Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized in building AI-powered apps that work everywhere — mobile, web, and wearables — using React Native, Expo, and modern cloud technologies.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105 group cursor-pointer animate-fade-in text-center relative"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                {/* Icon with Gradient Background */}
                <div className="mx-auto mb-4 w-16 h-16 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:from-primary/40 group-hover:to-secondary/40 group-hover:animate-pulse transition-all">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                {/* Title */}
                <h3 className="font-heading font-semibold text-base text-foreground leading-tight group-hover:text-primary transition-colors mb-2">
                  {item.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 transition-all duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Social Proof Badge */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="inline-flex items-center gap-3 glass-card rounded-full px-8 py-4 glow-effect">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="font-semibold text-foreground">Top 3% Talent on Upwork</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">8+ Years Experience</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">30+ Projects Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
