const partners = [
  "Google Analytics",
  "Google 360",
  "Google Tag Manager",
  "Google Cloud Platform",
  "Salesforce",
  "Google Meridian",
  "Optimizely",
  "Appsflyer",
  "PowerBI",
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Parceiros e Ferramentas
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold mt-4">
            Tecnologias que Dominamos
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partners.map((partner) => (
            <div
              key={partner}
              className="px-6 py-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-muted-foreground font-medium text-sm md:text-base hover:text-foreground transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
