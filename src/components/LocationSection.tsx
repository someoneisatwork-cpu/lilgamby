import { MapPin, Phone, Clock, IndianRupee } from "lucide-react";

const LocationSection = () => {
  return (
    <section id="location" className="section-padding bg-background">
      <div className="container-max">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground">
          Find <span className="text-gradient">Us</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
          Come visit our cozy spot in Goregaon West.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="card-glow rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">
                  Ekta Tripolis, Shop 11, Siddharth Nagar,<br />
                  Goregaon West, Mumbai
                </p>
              </div>
            </div>

            <div className="card-glow rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">Phone</h3>
                <a 
                  href="tel:+917718834963" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 77188 34963
                </a>
              </div>
            </div>

            <div className="card-glow rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground">
                  12:00 PM – 12:00 AM<br />
                  12:00 AM – 4:00 AM
                </p>
              </div>
            </div>

            <div className="card-glow rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <IndianRupee className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl text-foreground mb-2">Average Cost</h3>
                <p className="text-muted-foreground">
                  ₹500 for two
                </p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="card-glow rounded-xl overflow-hidden h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8019774665746!2d72.84853!3d19.16416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7e8c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sGoregaon%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lil Gamby Pizza Shop Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
