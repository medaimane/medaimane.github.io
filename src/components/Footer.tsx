import { Linkedin, Github, Upload, Twitter, Code, Instagram, MessageCircle } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'GitHub', icon: Github, href: '#' },
  { name: 'Upwork', icon: Upload, href: '#' },
  { name: 'X', icon: Twitter, href: '#' },
  { name: 'Dev.to', icon: Code, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Discord', icon: MessageCircle, href: '#' },
];

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-primary/20 relative">
      {/* Gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Mohamed's ${link.name} profile`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center">
            © 2025 Mohamed Aimane · Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
