import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import SocialLinks from '@/components/SocialLinks';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="gradient-bg animate-gradient min-h-screen">
      <AnimatedBackground />
      <main>
        <Hero />
        <SocialLinks />
        <Stats />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
