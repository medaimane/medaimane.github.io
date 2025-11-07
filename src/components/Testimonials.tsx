import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Mohamed was seamless — he turned our idea into a fully functional product in weeks.",
    author: "Sarah Johnson",
    role: "Founder, TechStart",
    rating: 5,
  },
  {
    quote: "His clarity, communication, and speed are unmatched. Highly recommended for startups.",
    author: "David Chen",
    role: "CEO, AppVenture",
    rating: 5,
  },
  {
    quote: "Mohamed delivered a cross-platform app that exceeded expectations. His technical expertise and product thinking are exceptional.",
    author: "Emily Rodriguez",
    role: "Product Lead, InnovateLabs",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4 animate-fade-in">
          What <span className="gradient-text">Clients Say</span>
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
          Real feedback from founders and product leaders worldwide
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card glow-effect rounded-2xl p-8 relative group hover:scale-105 transition-all duration-300 animate-fade-in flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/20 group-hover:text-primary/30 transition-colors" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-foreground/90 text-base mb-6 leading-relaxed relative z-10 flex-1">
                "{testimonial.quote}"
              </p>
              
              <div className="border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
