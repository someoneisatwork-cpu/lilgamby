import heroImage from "@/assets/hero-pizza.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious sourdough pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max section-padding text-center md:text-left">
        <div className="max-w-2xl">
          <div className="inline-block mb-4 px-4 py-2 rounded-full border border-primary/50 bg-primary/10">
            <span className="text-primary font-medium text-sm tracking-wide">
              🍕 Now Open Till 4 AM
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6 text-foreground">
            <span className="text-gradient">48-Hour Sourdough</span>
            <br />
            Pizza
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Slow-fermented dough. Bold flavours. Late-night cravings sorted — one official website for all outlets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://www.swiggy.com/city/mumbai/lil-gamby-pizza-shop-andheri-west-rest948334"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center text-lg"
            >
              Order on Swiggy
            </a>
            <a
              href="https://www.zomato.com/mumbai/lil-gamby-goregaon-west"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center text-lg"
            >
              Order on Zomato
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
