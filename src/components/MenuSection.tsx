import { useState } from "react";
import menuWifey from "@/assets/menu-wifey.png";
import menuBangBang from "@/assets/menu-bangbang.png";
import menuMargherita from "@/assets/menu-margherita.jpg";
import menuPepperoni from "@/assets/menu-pepperoni.jpg";
import menuVeggie from "@/assets/menu-veggie.jpg";
import menuBbqChicken from "@/assets/menu-bbq-chicken.jpg";
import menuMeatLovers from "@/assets/menu-meat-lovers.jpg";
import menuTruffle from "@/assets/menu-truffle.jpg";

type MenuCategory = "pizza" | "sandwiches" | "pasta" | "sides" | "desserts" | "beverages";

interface MenuItem {
  name: string;
  subtitle?: string;
  description: string;
  price8?: number;
  price11?: number;
  price?: number;
  isVeg: boolean;
  isNonVeg?: boolean;
  image?: string;
}

interface MenuData {
  pizza: MenuItem[];
  sandwiches: MenuItem[];
  pasta: MenuItem[];
  sides: MenuItem[];
  desserts: MenuItem[];
  beverages: MenuItem[];
}

const menuData: MenuData = {
  pizza: [
    { name: "The Wifey", subtitle: "Classic Margherita Pizza", description: "Buffalo Mozzarella, Fresh Basil, Parmesan Cheese", price8: 315, price11: 525, isVeg: true, image: menuWifey },
    { name: "Santo Domingo", subtitle: "Mushroom & Jalapeno Pizza", description: "Jalapeño, Mushrooms", price8: 295, price11: 495, isVeg: true, image: menuVeggie },
    { name: "Ghas Pus", subtitle: "Exotic Vegetables Pizza", description: "Mushroom, Zucchini, Sun Dried Tomatoes, Bell Peppers, Broccoli", price8: 345, price11: 595, isVeg: true, image: menuVeggie },
    { name: "Bang Bang", subtitle: "Thai Chilli Cottage Cheese Pizza", description: "Thai Style Chili Cottage Cheese, Bell Peppers, Roasted Onions, Garlic", price8: 315, price11: 525, isVeg: true, image: menuBangBang },
    { name: "Pesto Zesto", subtitle: "Pesto Pizza", description: "Basil Pesto Base, Roasted Garlic, Cherry Tomatoes, Black Olives", price8: 295, price11: 495, isVeg: true, image: menuVeggie },
    { name: "Farzi Texan", subtitle: "BBQ Paneer Pizza", description: "BBQ Tomato Base, Barbecue Cottage Cheese, Roasted Onions", price8: 315, price11: 525, isVeg: true, image: menuBbqChicken },
    { name: "Tamasha", subtitle: "Paneer Makhni Pizza", description: "Paneer Makhni, Makhni Sauce, Fresh Coriander & Onion", price8: 315, price11: 525, isVeg: true, image: menuMargherita },
    { name: "The Revolver", subtitle: "Spicy Chicken Pizza", description: "Homemade Hot Sauce Base, Mexican Macha Spiced Chicken, Fresh Jalapenos", price8: 345, price11: 595, isVeg: false, image: menuMeatLovers },
    { name: "Gully Boy", subtitle: "Jerk Chicken Pizza", description: "Jamaican Jerk Chicken, Crispy Spinach", price8: 345, price11: 595, isVeg: false, image: menuBbqChicken },
    { name: "The Cowgirl", subtitle: "BBQ Chicken Pizza", description: "BBQ Tomato Base, Barbecue Chicken, Roasted Onions", price8: 345, price11: 595, isVeg: false, image: menuBbqChicken },
    { name: "Dhamaka", subtitle: "Chicken Makhni Pizza", description: "Chicken Makhni, Makhni Sauce, Fresh Coriander & Onion", price8: 345, price11: 595, isVeg: false, image: menuMeatLovers },
    { name: "Double Down", subtitle: "Pork Pepperoni Pizza", description: "Smoked Pepperoni", price8: 495, price11: 695, isVeg: false, image: menuPepperoni },
    { name: "Carnitas", subtitle: "Pork Overload Pizza", description: "Homemade Hot Sauce Base, Pulled Pork, Belgian Ham, Pepperoni", price8: 495, price11: 695, isVeg: false, image: menuMeatLovers },
  ],
  sandwiches: [
    { name: "Bangkok Fiesta", subtitle: "Thai Chilli Cottage Cheese", description: "Thai Basil Cottage Cheese, Birds Eye Chilli, Crispy Onion, Brioche Bread", price: 395, isVeg: true },
    { name: "Mushroom Mayhem", subtitle: "Mushroom & Mozzarella", description: "Buffalo Mozzarella, Mushroom, Charred Onions, Rucola, Sundried Tomato, Brioche", price: 395, isVeg: true },
    { name: "Notorious P.I.G.", subtitle: "Chorizo and Bacon", description: "Chorizo, Bacon, Belgian Ham, Mozzarella Cheese, Rucola, Panuozzo Bread", price: 495, isVeg: false },
    { name: "The Bandra Boy", subtitle: "Chicken Chipotle", description: "Chargrilled Chicken, Housemade Hot BBQ Sauce, Sour Cream, Pickled Onion, Tomato, Iceberg, Panuozzo Bread", price: 395, isVeg: false },
    { name: "Shut The Cluck Up", subtitle: "Fried Chicken Burger", description: "Crunchy Batter Fried Chicken, Housemade Naga Viper Chilli Dust, House Slaw & Pickles with Honey Chilli & Ranch Dip, Brioche Bread", price: 495, isVeg: false },
  ],
  pasta: [
    { name: "Mamarosa", subtitle: "Pink Sauce Pasta - Fusilli", description: "Fusilli, Creamy Tomato Sauce, Parmesan Cheese", price: 425, isVeg: true },
    { name: "Plata Verde", subtitle: "Pesto Pasta - Spaghetti", description: "Spaghetti, Roasted Garlic & Basil Pesto, Slow Cooked Mushroom, Parmesan Cheese", price: 445, isVeg: true },
  ],
  sides: [
    { name: "Pull Me Apart Cheesy Garlic Bread", description: "Freshly baked with melted cheese", price: 225, isVeg: true },
    { name: "Peri Peri Fries", description: "Crispy fries with peri peri seasoning", price: 275, isVeg: true },
    { name: "Truffle Fries", description: "Premium truffle oil drizzled fries", price: 395, isVeg: true, image: menuTruffle },
    { name: "Gorilla Chicken Tenders", description: "Crispy chicken tenders", price: 325, isVeg: false },
    { name: "Buffalo Chicken Wings", description: "Spicy buffalo sauce wings", price: 395, isVeg: false },
  ],
  desserts: [
    { name: "The Matilda Chocolate Cake", description: "Rich chocolate cake", price: 245, isVeg: true },
    { name: "The Nutcracker", description: "Hazelnut Praline, Chocolate Sponge, Hazelnut Mousse, Caramel Sauce", price: 295, isVeg: true },
  ],
  beverages: [
    { name: "Iced Tea", description: "Peach / Lemon", price: 195, isVeg: true },
    { name: "Shakes", description: "Chocolate / Mango / Strawberry", price: 245, isVeg: true },
    { name: "Aerated Drinks", description: "Coke / Fanta / Sprite / Diet Coke / Coke Zero", price: 40, isVeg: true },
  ],
};

const categories: { key: MenuCategory; label: string; icon: string }[] = [
  { key: "pizza", label: "Pizza", icon: "🍕" },
  { key: "sandwiches", label: "Sandwiches & Burgers", icon: "🍔" },
  { key: "pasta", label: "Pasta", icon: "🍝" },
  { key: "sides", label: "Sides", icon: "🍟" },
  { key: "desserts", label: "Desserts", icon: "🍰" },
  { key: "beverages", label: "Beverages", icon: "🥤" },
];

const VegIndicator = ({ isVeg }: { isVeg: boolean }) => (
  <span
    className={`inline-block w-4 h-4 rounded-sm border-2 ${
      isVeg ? "border-green-500" : "border-red-500"
    } flex items-center justify-center`}
  >
    <span
      className={`w-2 h-2 rounded-full ${
        isVeg ? "bg-green-500" : "bg-red-500"
      }`}
    />
  </span>
);

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("pizza");

  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container-max">
        <h2 className="font-display text-4xl md:text-6xl text-center mb-4 text-foreground tracking-wider">
          Our <span className="text-gradient">Menu</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8 text-lg">
          48-hour fermented sourdough base. Made with love till 4 AM.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
              style={{
                boxShadow: activeCategory === cat.key ? "var(--shadow-glow)" : "none",
              }}
            >
              <span className="mr-1">{cat.icon}</span>
              <span className="hidden sm:inline">{cat.label}</span>
              <span className="sm:hidden">{cat.label.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Pizza Size Header */}
        {activeCategory === "pizza" && (
          <div className="flex justify-end mb-4 pr-4 text-sm md:text-base text-muted-foreground font-semibold">
            <span className="w-16 text-center">8"</span>
            <span className="w-16 text-center">11"</span>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid gap-3 md:gap-4">
          {menuData[activeCategory].map((item, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-4 md:p-5 border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-3 md:gap-4">
                {/* Food Image */}
                {item.image && (
                  <div className="shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border-2 border-primary/20"
                    />
                  </div>
                )}
                
                <VegIndicator isVeg={item.isVeg} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
                        {item.name}
                      </h3>
                      {item.subtitle && (
                        <p className="text-primary text-sm font-medium mt-0.5">
                          {item.subtitle}
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex gap-2 text-right shrink-0">
                      {item.price8 && item.price11 ? (
                        <>
                          <span className="text-primary font-bold text-lg w-16 text-center">
                            ₹{item.price8}
                          </span>
                          <span className="text-primary font-bold text-lg w-16 text-center">
                            ₹{item.price11}
                          </span>
                        </>
                      ) : (
                        <span className="text-primary font-bold text-lg">
                          ₹{item.price}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-muted-foreground text-sm">
          <p>*Thin Crust Base Can Be Provided Upon Request</p>
          <p className="mt-1">Government Taxes as Applicable</p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;