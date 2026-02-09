const StickyMobileOrder = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-sm border-t border-border p-3 animate-fade-in">
      <div className="flex gap-2">
        <a
          href="https://www.swiggy.com/city/mumbai/lil-gamby-pizza-shop-andheri-west-rest948334"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn-primary text-center text-sm py-3"
        >
          Order on Swiggy
        </a>
        <a
          href="https://www.zomato.com/mumbai/lil-gamby-goregaon-west"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 btn-outline text-center text-sm py-3"
        >
          Order on Zomato
        </a>
      </div>
    </div>
  );
};

export default StickyMobileOrder;
