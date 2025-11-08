import profilePhoto from '@/assets/profile-photo.jpg';

const AboutMe = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="glass-card glow-effect rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-xl opacity-50 animate-glow-pulse" />
              <img 
                src={profilePhoto} 
                alt="Mohamed Aimane Skhairi"
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-3xl object-cover border-2 border-primary/30 shadow-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              More Than Just Code — <span className="gradient-text">A Partner Who Understands Product Vision</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                With over 8 years of experience and 30+ successful projects worldwide, I've helped founders transform ambitious ideas into real, scalable digital products that users love.
              </p>
              <p>
                I don't just write code — I partner with you to understand your vision, solve complex problems, and deliver apps that work seamlessly across iOS, Android, Web, and even Wearables.
              </p>
              <p>
                From refining your idea to launching a market-ready product, I guide you every step — with strategy, design, and execution that deliver results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
