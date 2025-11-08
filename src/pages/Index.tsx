import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import SocialLinks from '@/components/SocialLinks';
import AboutMe from '@/components/AboutMe';
import Expertise from '@/components/Expertise';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="gradient-bg animate-gradient min-h-screen">
      <AnimatedBackground />
      <main>
        <Hero />
        <SocialLinks />
        <AboutMe />
        <Expertise />
        <Stats />
        <Projects />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
