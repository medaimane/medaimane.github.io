import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FileText } from 'lucide-react';
import projectFitness from '@/assets/project-fitness.jpg';
import projectSaas from '@/assets/project-saas.jpg';
import projectPrayer from '@/assets/project-prayer.jpg';
import projectCrypto from '@/assets/project-crypto.jpg';
import projectCommerce from '@/assets/project-commerce.jpg';
import projectChat from '@/assets/project-chat.jpg';

const projects = [
  {
    id: 1,
    title: 'AI Fitness Coach',
    category: 'AI Fitness',
    description: 'A cross-platform fitness tracker powered by on-device AI and Apple Watch motion sensors to analyze workout form and provide real-time feedback.',
    image: projectFitness,
    tags: ['React Native', 'Expo', 'Supabase', 'AI', 'watchOS', 'HealthKit'],
    featured: true,
    links: {
      caseStudy: '#',
      demo: '#'
    }
  },
  {
    id: 2,
    title: 'Enterprise SaaS Platform',
    category: 'SaaS Platform',
    description: 'A scalable mobile + web platform for managing company operations, subscriptions, and analytics dashboards with real-time sync.',
    image: projectSaas,
    tags: ['React Native', 'Expo', 'Next.js', 'Supabase', 'Stripe'],
    featured: false,
    links: {
      caseStudy: '#',
      demo: null
    }
  },
  {
    id: 3,
    title: 'Smart Prayer Tracker',
    category: 'Health Tracker',
    description: 'An AI-enhanced app that integrates iPhone and Apple Watch to detect prayer postures and analyze spiritual activity.',
    image: projectPrayer,
    tags: ['React Native', 'watchOS', 'DeviceMotion API', 'AI', 'Supabase'],
    featured: false,
    links: {
      caseStudy: '#',
      demo: '#'
    }
  },
  {
    id: 4,
    title: 'Crypto Insight',
    category: 'AI Finance',
    description: 'A crypto analytics app delivering AI-driven insights, portfolio tracking, and real-time alerts using Expo and WebSockets.',
    image: projectCrypto,
    tags: ['React Native', 'Expo', 'Realtime APIs', 'AI'],
    featured: false,
    links: {
      caseStudy: '#',
      demo: '#'
    }
  },
  {
    id: 5,
    title: 'Commerce Mobile App',
    category: 'eCommerce',
    description: 'An eCommerce experience for brands with seamless product browsing, smart recommendations, and checkout via Stripe.',
    image: projectCommerce,
    tags: ['React Native', 'Expo', 'Stripe', 'AI Recommender'],
    featured: false,
    links: {
      caseStudy: '#',
      demo: '#'
    }
  },
  {
    id: 6,
    title: 'AI Chat Companion',
    category: 'AI Assistant',
    description: 'A personal AI assistant app that adapts to user behavior across iOS, Android, and web using OpenAI APIs.',
    image: projectChat,
    tags: ['React Native', 'Expo', 'OpenAI', 'Supabase'],
    featured: false,
    links: {
      caseStudy: '#',
      demo: '#'
    }
  }
];

const Projects = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            AI-Powered App Showcases <span className="gradient-text">🚀</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A selection of AI-driven cross-platform apps built with React Native, Expo, and cutting-edge technologies — seamlessly running on mobile, web, and wearable devices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="glass-card group hover:scale-[1.02] transition-all duration-300 glow-effect overflow-hidden border-border/50"
              style={{
                animation: `fade-in 0.6s ease-out ${index * 0.1}s backwards`
              }}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold">
                    ⭐ Featured
                  </Badge>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              <CardHeader className="space-y-3">
                {/* Category Badge */}
                <Badge variant="secondary" className="w-fit text-xs">
                  {project.category}
                </Badge>

                <CardTitle className="text-2xl font-heading group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </CardTitle>

                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className={`text-xs ${
                        tag.includes('AI')
                          ? 'border-primary/50 text-primary'
                          : tag.includes('Expo') || tag.includes('React')
                          ? 'border-secondary/50 text-secondary'
                          : 'border-accent/50 text-accent-foreground'
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={project.links.caseStudy}>
                      <FileText className="w-4 h-4 mr-2" />
                      Case Study
                    </a>
                  </Button>
                  {project.links.demo && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a href={project.links.demo}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center animate-fade-in">
          <Button
            variant="outline"
            size="lg"
            className="glow-effect group"
            asChild
          >
            <a href="#projects">
              View All Projects
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
