import { Star } from "lucide-react";

const reviews = [
  {
    text: "Loved the flavours and the sourdough base. The pizza was well-cooked, rich, and extremely satisfying. Great ambience too.",
    author: "Dine-in Customer",
  },
  {
    text: "Tried their special chicken pizza along with sides — everything was flavourful and perfectly balanced. A fun place to hang out.",
    author: "Local Customer",
  },
  {
    text: "Fantastic late-night spot. The pizza arrived hot, fresh, and packed with taste. Definitely ordering again.",
    author: "Delivery Customer",
  },
];

const ReviewsSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-max">
        <h2 className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground">
          What People <span className="text-gradient">Say</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 text-lg">
          Don't just take our word for it.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="card-glow rounded-xl p-6 md:p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-4">
                "{review.text}"
              </blockquote>
              <p className="text-muted-foreground text-sm">
                — {review.author}
              </p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-center text-sm mt-8 italic">
          Reviews based on customer feedback from Google and Zomato. Displayed here for demonstration purposes.
        </p>
      </div>
    </section>
  );
};

export default ReviewsSection;
