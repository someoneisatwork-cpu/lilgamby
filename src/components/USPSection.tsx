import { Clock, Utensils, Truck } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "48-Hour Sourdough",
    description: "Our dough ferments for 48 hours, creating the perfect chewy, flavourful crust that's easier to digest.",
  },
  {
    icon: Utensils,
    title: "Open Till 4 AM",
    description: "Craving pizza at 2 AM? We've got you covered. Perfect for late-night hunger pangs.",
  },
  {
    icon: Truck,
    title: "Dine-In & Delivery",
    description: "Enjoy at our cozy spot or get it delivered hot to your door via Swiggy & Zomato.",
  },
];

const USPSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-12 text-foreground">
          Why <span className="text-gradient">Lil Gamby</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-glow rounded-xl p-8 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;
