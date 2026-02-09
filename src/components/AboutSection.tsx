import aboutImage from "@/assets/sourdough-dough.jpg";
import interiorImage from "@/assets/pizzeria-interior.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-display text-4xl md:text-5xl text-foreground">
              About <span className="text-gradient">Lil Gamby</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Great pizza starts with patience. Our sourdough ferments for 48 hours, giving it that chewy-crispy texture and rich flavour.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Whether you're grabbing a late-night slice or dining in with friends at our Goregaon West spot — every pizza is made fresh with quality ingredients.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="text-center">
                <div className="font-display text-4xl text-primary">48</div>
                <div className="text-muted-foreground text-sm">Hours Fermented</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-display text-4xl text-primary">4AM</div>
                <div className="text-muted-foreground text-sm">Late Night Open</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="font-display text-4xl text-primary">100%</div>
                <div className="text-muted-foreground text-sm">Crafted Fresh</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={aboutImage}
              alt="Handcrafted sourdough being prepared"
              className="rounded-xl w-full h-64 object-cover"
            />
            <img
              src={interiorImage}
              alt="Lil Gamby pizzeria interior"
              className="rounded-xl w-full h-64 object-cover mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
