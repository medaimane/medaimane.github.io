import { Star, Briefcase, Globe, Rocket } from 'lucide-react';

const stats = [
  {
    icon: Star,
    label: '100% Job Success on Upwork',
    gradient: 'from-primary to-secondary',
  },
  {
    icon: Briefcase,
    label: '8+ Years of Experience',
    gradient: 'from-secondary to-primary',
  },
  {
    icon: Globe,
    label: 'Clients from 10+ Countries',
    gradient: 'from-primary to-purple-400',
  },
  {
    icon: Rocket,
    label: '30+ Projects Delivered',
    gradient: 'from-purple-400 to-primary',
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
                className="glass-card glow-effect rounded-2xl p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <p className="text-foreground font-semibold text-lg leading-tight">
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
