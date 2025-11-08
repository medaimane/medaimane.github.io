import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import projectPrayerSense from '@/assets/project-prayersense.jpg';
import projectLmakinaHub from '@/assets/project-lmakinahub.jpg';
import projectFitAI from '@/assets/project-fitai.jpg';

const projects = [
  {
    id: 1,
    name: 'PrayerSense',
    description: 'AI-powered cross-platform app that connects iPhone, Android, and Apple Watch to track prayer motions and health data in real time.',
    image: projectPrayerSense,
    tags: ['React Native', 'Expo', 'AI', 'watchOS', 'HealthKit'],
    imagePosition: 'left' as const,
  },
  {
    id: 2,
    name: 'LmakinaHub',
    description: 'Peer-to-peer platform for renting electronics and appliances, built with Expo + Supabase + Laravel backend.',
    image: projectLmakinaHub,
    tags: ['React Native', 'Expo', 'Supabase', 'Laravel', 'TypeScript'],
    imagePosition: 'right' as const,
  },
  {
    id: 3,
    name: 'FitAI Coach',
    description: 'AI fitness assistant app that generates personalized workout plans and syncs with wearables for live tracking.',
    image: projectFitAI,
    tags: ['React Native', 'Expo', 'AI', 'TypeScript', 'Cloudflare'],
    imagePosition: 'left' as const,
  },
];

const Projects = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Recent <span className="gradient-text">Projects & App Showcase</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            A glimpse into real apps built with React Native, Expo, and AI — designed to scale across iOS, Android, and Web.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-card rounded-2xl p-6 md:p-8 lg:p-12 glow-effect animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`flex flex-col ${
                  project.imagePosition === 'right'
                    ? 'lg:flex-row-reverse'
                    : 'lg:flex-row'
                } gap-8 lg:gap-12 items-center`}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                      {project.name}
                    </h3>
                    <p className="text-foreground/90 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 transition-all duration-300 hover:bg-primary/20 hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="group/btn border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
