import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to build a cross-platform app?",
    answer: "Typically 4-12 weeks depending on complexity. Simple MVPs can launch in 4-6 weeks, while feature-rich apps with AI integration, complex backends, and wearable support take 8-12 weeks. I provide clear timelines during our discovery phase.",
  },
  {
    question: "Do you only work with React Native, or other frameworks too?",
    answer: "I specialize in React Native and Expo for cross-platform development, which allows one codebase to run on iOS, Android, Web, and Wearables. This approach saves time and budget while maintaining native performance. For specific cases, I can also work with native Swift/Kotlin or web frameworks.",
  },
  {
    question: "What's included in your development process?",
    answer: "Everything from discovery to launch: strategy planning, UI/UX design, full development, QA testing, app store deployment, and post-launch support. You'll get regular updates, clear communication, and a product that's ready to scale from day one.",
  },
  {
    question: "Can you help with AI integration and backend setup?",
    answer: "Absolutely. I specialize in integrating AI features (like GPT, custom models, or ML APIs) and building scalable backends using Supabase, Firebase, or custom Node.js/Cloudflare solutions. Whether it's real-time data, authentication, or serverless functions, I've got you covered.",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Questions? <span className="gradient-text">I've Got Answers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions founders ask before starting a project.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass-card rounded-3xl p-6 md:p-8 glow-effect animate-fade-in" style={{ animationDelay: '100ms' }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left font-heading font-semibold text-lg md:text-xl text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
