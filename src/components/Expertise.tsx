import { Brain, Smartphone, Monitor, Database, Palette, Cloud } from 'lucide-react';

const expertise = [
  {
    icon: Brain,
    title: 'AI-Powered App Development',
  },
  {
    icon: Smartphone,
    title: 'React Native + Expo',
  },
  {
    icon: Monitor,
    title: 'Cross-Platform (iOS, Android, Web, Wearables)',
  },
  {
    icon: Database,
    title: 'Supabase & Scalable Backends',
  },
  {
    icon: Palette,
    title: 'UI/UX Systems Design',
  },
  {
    icon: Cloud,
    title: 'Cloudflare & Edge Optimization',
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
            Combining cutting-edge technologies with proven expertise to deliver exceptional results
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertise.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105 group cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon with Gradient Background */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:from-primary/40 group-hover:to-secondary/40 transition-all">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  {/* Title */}
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

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
