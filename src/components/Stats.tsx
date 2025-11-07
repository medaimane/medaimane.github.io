import { Star, Briefcase, Globe, Rocket } from 'lucide-react';

const stats = [
  {
    icon: Star,
    value: '100%',
    label: 'Job Success on Upwork',
  },
  {
    icon: Briefcase,
    value: '8+',
    label: 'Years of Experience',
  },
  {
    icon: Globe,
    value: '10+',
    label: 'Countries Worldwide',
  },
  {
    icon: Rocket,
    value: '30+',
    label: 'Projects Delivered',
  },
];

const Stats = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="glass-card glow-effect rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium text-base leading-tight">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
