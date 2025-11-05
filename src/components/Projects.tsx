import { ArrowRight, Star, Users } from 'lucide-react';
import { Button } from './ui/button';
import projectFitness from '@/assets/project-fitness.jpg';
import projectSaas from '@/assets/project-saas.jpg';
import projectSmarthome from '@/assets/project-smarthome.jpg';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectResume from '@/assets/project-resume.jpg';
import projectCrypto from '@/assets/project-crypto.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  tags: string[];
  image: string;
  metrics: {
    icon: 'star' | 'users';
    value: string;
  }[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Fitness Coach',
    description: 'Personalized workout app that uses AI to generate training plans and track progress.',
    tech: ['React Native', 'Expo', 'OpenAI API'],
    tags: ['#AI', '#HealthTech'],
    image: projectFitness,
    metrics: [
      { icon: 'star', value: '4.9★ Rating' },
      { icon: 'users', value: '10K+ Users' },
    ],
  },
  {
    id: 2,
    title: 'Enterprise SaaS Platform',
    description: 'A scalable SaaS web & mobile solution for business workflow automation and analytics.',
    tech: ['React Native', 'Next.js', 'Supabase'],
    tags: ['#SaaS', '#B2B'],
    image: projectSaas,
    metrics: [
      { icon: 'star', value: '5.0★ Rating' },
      { icon: 'users', value: '5K+ Users' },
    ],
  },
  {
    id: 3,
    title: 'SmartHome IoT App',
    description: 'Cross-platform IoT controller app for home devices with live energy tracking and automation.',
    tech: ['React Native', 'MQTT', 'Node.js'],
    tags: ['#IoT', '#ReactNative'],
    image: projectSmarthome,
    metrics: [
      { icon: 'star', value: '4.8★ Rating' },
      { icon: 'users', value: '3K+ Users' },
    ],
  },
  {
    id: 4,
    title: 'Commerce Mobile App',
    description: 'Full eCommerce mobile experience featuring cart, checkout, and order tracking.',
    tech: ['Expo', 'Stripe', 'Firebase'],
    tags: ['#eCommerce', '#MobileApp'],
    image: projectEcommerce,
    metrics: [
      { icon: 'star', value: '4.9★ Rating' },
      { icon: 'users', value: '15K+ Users' },
    ],
  },
  {
    id: 5,
    title: 'AI Resume Builder',
    description: 'AI tool that helps users generate and personalize professional resumes in minutes.',
    tech: ['Next.js', 'OpenAI API'],
    tags: ['#AI', '#WebApp'],
    image: projectResume,
    metrics: [
      { icon: 'star', value: '5.0★ Rating' },
      { icon: 'users', value: '8K+ Users' },
    ],
  },
  {
    id: 6,
    title: 'Crypto Analytics App',
    description: 'Mobile app that visualizes crypto market trends using live APIs and chart dashboards.',
    tech: ['React Native', 'Recharts', 'WebSockets'],
    tags: ['#Finance', '#DataViz'],
    image: projectCrypto,
    metrics: [
      { icon: 'star', value: '4.7★ Rating' },
      { icon: 'users', value: '12K+ Users' },
    ],
  },
];

const Projects = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured Projects <span className="text-4xl">🚀</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A few apps I've recently built for founders around the world.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-card rounded-3xl overflow-hidden glow-effect hover:scale-[1.02] transition-all duration-300"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-heading font-bold group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm text-secondary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex items-center gap-4 pt-2">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-sm text-foreground/80">
                      {metric.icon === 'star' ? (
                        <Star className="w-4 h-4 fill-primary text-primary" />
                      ) : (
                        <Users className="w-4 h-4 text-secondary" />
                      )}
                      <span>{metric.value}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  className="w-full group/btn border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  asChild
                >
                  <a href="#contact">
                    See Project
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            variant="ghost"
            className="group border border-primary/20 hover:border-primary hover:bg-primary/10 glow-effect"
            asChild
          >
            <a href="#contact">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
