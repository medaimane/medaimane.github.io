import { Button } from '@/components/ui/button';
import { Linkedin, Github, Upload, Twitter, Code, Instagram, MessageCircle } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-[#0077B5]' },
  { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-foreground' },
  { name: 'Upwork', icon: Upload, href: '#', color: 'hover:text-[#14A800]' },
  { name: 'X (Twitter)', icon: Twitter, href: '#', color: 'hover:text-[#1DA1F2]' },
  { name: 'Dev.to', icon: Code, href: '#', color: 'hover:text-foreground' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-[#E4405F]' },
  { name: 'Discord', icon: MessageCircle, href: '#', color: 'hover:text-[#5865F2]' },
];

const SocialLinks = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Trusted by Founders <span className="gradient-text">Worldwide 🌍</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Button
                key={link.name}
                variant="outline"
                size="lg"
                className={`glass-card glow-effect rounded-2xl p-4 transition-all duration-300 ${link.color}`}
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <Icon className="h-6 w-6" />
                </a>
              </Button>
            );
          })}
        </div>

        <p className="text-muted-foreground text-lg">
          ❤️ Grateful you're here — let's build something amazing together
        </p>
      </div>
    </section>
  );
};

export default SocialLinks;
