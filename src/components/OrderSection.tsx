const OrderSection = () => {
  return (
    <section id="order" className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
      
      <div className="container-max relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Ready to <span className="text-gradient">Order</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Fresh sourdough pizza delivered to your door from any outlet.
          </p>

          {/* TODO: Replace placeholder URLs with actual restaurant deep links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

          <p className="text-muted-foreground/70 text-xs mt-4">
            (Will be connected to your official order links)
          </p>

          <p className="text-muted-foreground text-sm mt-4">
            Also available for dine-in and takeaway.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
