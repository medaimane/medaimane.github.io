import { Building2 } from 'lucide-react';

const clients = [
  { name: 'TechStart Inc.', industry: 'SaaS' },
  { name: 'HealthSync', industry: 'HealthTech' },
  { name: 'FinPro Solutions', industry: 'FinTech' },
  { name: 'EcoCommerce', industry: 'E-commerce' },
  { name: 'FitLife App', industry: 'Wellness' },
  { name: 'DataFlow AI', industry: 'AI/ML' },
  { name: 'SmartHome Labs', industry: 'IoT' },
  { name: 'CryptoVault', industry: 'Blockchain' },
];

const SocialLinks = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
          Trusted by Founders <span className="gradient-text">Worldwide 🌍</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-5xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="glass-card glow-effect rounded-2xl p-6 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex flex-col items-center text-center space-y-2">
                <Building2 className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
                <h3 className="font-heading font-semibold text-foreground">
                  {client.name}
                </h3>
                <p className="text-xs text-muted-foreground">{client.industry}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-lg">
          ❤️ Grateful you're here — let's build something amazing together
        </p>
      </div>
    </section>
  );
};

export default SocialLinks;
