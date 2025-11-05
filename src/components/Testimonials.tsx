import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Mohamed was seamless — he turned our idea into a fully functional product in weeks.",
    author: "Sarah Johnson",
    role: "Founder, TechStart",
  },
  {
    quote: "His clarity, communication, and speed are unmatched. Highly recommended for startups.",
    author: "David Chen",
    role: "CEO, AppVenture",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          What <span className="gradient-text">Clients Say</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card glow-effect rounded-2xl p-8 relative group hover:scale-105 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-primary/20 group-hover:text-primary/30 transition-colors" />
              
              <p className="text-foreground/90 text-lg mb-6 leading-relaxed relative z-10">
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
