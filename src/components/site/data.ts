import espresso from "@/assets/espresso.jpg";
import cappuccino from "@/assets/cappuccino.jpg";
import latte from "@/assets/latte.jpg";
import mocha from "@/assets/mocha.jpg";
import americano from "@/assets/americano.jpg";
import coldbrew from "@/assets/coldbrew.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import p1 from "@/assets/person-1.jpg";
import p2 from "@/assets/person-2.jpg";
import p3 from "@/assets/person-3.jpg";
import p4 from "@/assets/person-4.jpg";
import menuDesserts from "@/assets/menu-desserts.jpg";
import menuBakery from "@/assets/menu-bakery.jpg";
import menuSnacks from "@/assets/menu-snacks.jpg";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 18, suffix: "+", label: "Years Experience" },
  { value: 42, suffix: "K", label: "Happy Customers" },
  { value: 24, suffix: "", label: "Coffee Varieties" },
  { value: 380, suffix: "+", label: "Daily Visitors" },
];

export const menu = [
  {
    name: "Espresso",
    price: "$3.50",
    image: espresso,
    note: "Signature",
    description:
      "A concentrated 25-second pull of our Haven house blend — dense crema, dark cocoa and a long caramel finish.",
  },
  {
    name: "Cappuccino",
    price: "$4.25",
    image: cappuccino,
    note: "Classic",
    description:
      "Equal thirds of espresso, steamed milk and velvet microfoam, finished with hand-poured latte art.",
  },
  {
    name: "Latte",
    price: "$4.75",
    image: latte,
    note: "Guest Favourite",
    description:
      "Silky whole milk layered over a double ristretto for a rounded, gently sweet cup with hazelnut warmth.",
  },
  {
    name: "Mocha",
    price: "$5.25",
    image: mocha,
    note: "Indulgent",
    description:
      "Single-origin espresso, 70% Valrhona chocolate and lightly whipped cream with a bittersweet drizzle.",
  },
  {
    name: "Americano",
    price: "$3.75",
    image: americano,
    note: "Pure",
    description:
      "Two shots lengthened with soft filtered water — clean, bright and built for slow morning reading.",
  },
  {
    name: "Cold Brew",
    price: "$5.00",
    image: coldbrew,
    note: "18h Steeped",
    description:
      "Coarse-ground Ethiopian beans steeped for eighteen hours over ice for a smooth, low-acid pour.",
  },
];

export const menuCategories = [
  { id: "signature", label: "Signature Coffee", icon: "coffee" },
  { id: "filter", label: "South Indian Filter Coffee", icon: "filter" },
  { id: "cold", label: "Cold Coffee", icon: "snowflake" },
  { id: "tea", label: "Tea", icon: "leaf" },
  { id: "hotmilk", label: "Hot Milk", icon: "milk" },
  { id: "shakes", label: "Milkshakes", icon: "shake" },
  { id: "mojitos", label: "Mojitos", icon: "citrus" },
  { id: "lassi", label: "Fresh Lassi", icon: "glass" },
  { id: "sandwiches", label: "Sandwiches", icon: "sandwich" },
  { id: "snacks", label: "Snacks", icon: "cookie" },
  { id: "momos", label: "Momos", icon: "soup" },
  { id: "corn", label: "Corn", icon: "wheat" },
  { id: "desserts", label: "Desserts", icon: "cake" },
] as const;

export type MenuCategory = (typeof menuCategories)[number]["id"];

export type MenuSize = { label: "Small" | "Medium" | "Large"; volume: string; delta: number };

export type MenuReview = { name: string; rating: number; date: string; comment: string };

export type MenuProduct = {
  name: string;
  slug: string;
  category: MenuCategory;
  categoryLabel: string;
  description: string;
  price: string;
  basePrice: number;
  image: string;
  badge?: "Best Seller" | "Chef Special" | "New" | "Premium";
  popular?: boolean;
  vegetarian?: boolean;
  spice?: 1 | 2 | 3;
  beverage: boolean;
  rating: number;
  ingredients: string[];
  roast: string;
  strength: 1 | 2 | 3 | 4 | 5;
  sizes: MenuSize[];
  story: string;
  brewing: string;
  flavorNotes: string[];
  calories: number;
  allergens: string[];
  pairing: string;
  reviews: MenuReview[];
};

type CategoryProfile = {
  beverage: boolean;
  roast: string;
  strength: 1 | 2 | 3 | 4 | 5;
  ingredients: string[];
  brewing: string;
  flavorNotes: string[];
  calories: number;
  allergens: string[];
  pairing: string;
};

const categoryProfiles: Record<MenuCategory, CategoryProfile> = {
  signature: {
    beverage: true,
    roast: "Medium-dark · Haven house blend",
    strength: 4,
    ingredients: ["Double shot house espresso", "Steamed whole milk", "House syrup", "Cocoa dust"],
    brewing: "Pulled at 9 bar for 27 seconds on our lever machine, then finished with milk textured to 62°C for a glossy, dense microfoam.",
    flavorNotes: ["Dark cocoa", "Burnt caramel", "Toasted hazelnut"],
    calories: 210,
    allergens: ["Milk"],
    pairing: "Butter Croissant or a slice of Tiramisu",
  },
  filter: {
    beverage: true,
    roast: "Dark · Chikmagalur peaberry with 20% chicory",
    strength: 5,
    ingredients: ["Chikmagalur peaberry", "Roasted chicory", "Full-cream milk", "Palm jaggery or cane sugar"],
    brewing: "Slow-dripped through a brass filter for twelve minutes, then pulled metre-high between dabarah and tumbler for a natural froth.",
    flavorNotes: ["Roasted chicory", "Jaggery", "Dark caramel"],
    calories: 140,
    allergens: ["Milk"],
    pairing: "Butter Corn Cup or a Masala Toast",
  },
  cold: {
    beverage: true,
    roast: "Light-medium · Ethiopian Guji lot",
    strength: 3,
    ingredients: ["Coarse-ground Ethiopian coffee", "Cold filtered water", "Fresh milk", "Hand-cut ice"],
    brewing: "Steeped for eighteen hours at 4°C, then filtered twice for a clean, low-acid concentrate poured over clear ice.",
    flavorNotes: ["Ripe berry", "Cane sugar", "Cold cocoa"],
    calories: 160,
    allergens: ["Milk"],
    pairing: "Cheesecake or a Paneer Tikka Sandwich",
  },
  tea: {
    beverage: true,
    roast: "Not applicable · Assam & Darjeeling leaf",
    strength: 3,
    ingredients: ["Whole-leaf tea", "Fresh ginger", "Green cardamom", "Filtered water"],
    brewing: "Leaves steeped at a precise temperature for their grade — 95°C for black teas, 80°C for greens — then strained to order.",
    flavorNotes: ["Malty leaf", "Warm spice", "Honeyed finish"],
    calories: 70,
    allergens: [],
    pairing: "Masala Fries or Classic Veg Momos",
  },
  hotmilk: {
    beverage: true,
    roast: "Not applicable · slow-simmered milk",
    strength: 1,
    ingredients: ["A2 full-cream milk", "Kashmiri saffron", "Almonds", "Organic turmeric"],
    brewing: "Simmered gently for twenty minutes in brass with whole spices, then frothed by hand just before serving.",
    flavorNotes: ["Saffron", "Toasted almond", "Warm cardamom"],
    calories: 230,
    allergens: ["Milk", "Tree nuts"],
    pairing: "Chocolate Brownie",
  },
  shakes: {
    beverage: true,
    roast: "Not applicable · hand-spun",
    strength: 1,
    ingredients: ["Fresh whole milk", "Artisanal ice cream", "Seasonal fruit or chocolate", "Whipped cream"],
    brewing: "Hand-spun to order on a vintage mixer, poured into a chilled glass and finished with fresh whipped cream.",
    flavorNotes: ["Creamy vanilla", "Rich cocoa", "Ripe fruit"],
    calories: 420,
    allergens: ["Milk", "May contain nuts"],
    pairing: "Peri Peri Fries",
  },
  mojitos: {
    beverage: true,
    roast: "Not applicable · zero-proof bar",
    strength: 1,
    ingredients: ["Fresh mint", "Hand-pressed lime", "Cane sugar", "Sparkling water", "Crushed ice"],
    brewing: "Mint and lime gently muddled to release their oils, layered with crushed ice and topped with chilled sparkling water.",
    flavorNotes: ["Bright citrus", "Cool mint", "Light fizz"],
    calories: 110,
    allergens: [],
    pairing: "Crispy Corn or Fried Momos",
  },
  lassi: {
    beverage: true,
    roast: "Not applicable · house-set curd",
    strength: 1,
    ingredients: ["House-set curd", "Alphonso mango or rose", "Saffron", "Pistachio"],
    brewing: "Our curd is set overnight, then churned by hand with fruit and served chilled in a clay kulhad.",
    flavorNotes: ["Tangy curd", "Ripe mango", "Floral saffron"],
    calories: 260,
    allergens: ["Milk", "Tree nuts"],
    pairing: "Grilled Paneer Sandwich",
  },
  sandwiches: {
    beverage: false,
    roast: "Not applicable · kitchen-made",
    strength: 1,
    ingredients: ["Sourdough baked in-house", "Seasonal vegetables", "Aged cheddar", "Herb butter"],
    brewing: "Assembled to order and pressed on a cast-iron grill until golden, then finished with house aioli.",
    flavorNotes: ["Toasted grain", "Garden herb", "Smoked salt"],
    calories: 340,
    allergens: ["Wheat", "Milk"],
    pairing: "Cold Brew or an Iced Latte",
  },
  snacks: {
    beverage: false,
    roast: "Not applicable · kitchen-made",
    strength: 1,
    ingredients: ["Farm potatoes", "Cold-pressed oil", "House spice blend", "Garlic aioli"],
    brewing: "Double-cooked for a crisp shell and soft centre, then tossed in our house spice blend at the pass.",
    flavorNotes: ["Crisp", "Smoky spice", "Garlic"],
    calories: 310,
    allergens: ["Eggs (aioli)"],
    pairing: "Classic Mint Mojito",
  },
  momos: {
    beverage: false,
    roast: "Not applicable · hand-folded",
    strength: 1,
    ingredients: ["Hand-rolled wheat wrappers", "Cabbage & carrot", "Spring onion", "Fiery tomato chutney"],
    brewing: "Folded by hand each morning, steamed in bamboo baskets for nine minutes and served with roasted tomato chutney.",
    flavorNotes: ["Garlic", "Spring onion", "Chilli heat"],
    calories: 280,
    allergens: ["Wheat", "Soy"],
    pairing: "Lemon Iced Tea or a Mojito",
  },
  corn: {
    beverage: false,
    roast: "Not applicable · kitchen-made",
    strength: 1,
    ingredients: ["Sweet American corn", "Salted butter", "Chaat masala", "Fresh lime"],
    brewing: "Steamed kernels tossed in brown butter and spices in a hot pan, finished with lime at the table.",
    flavorNotes: ["Sweet corn", "Brown butter", "Tangy spice"],
    calories: 190,
    allergens: ["Milk"],
    pairing: "Filter Coffee or Masala Chai",
  },
  desserts: {
    beverage: false,
    roast: "Not applicable · patisserie",
    strength: 2,
    ingredients: ["Belgian chocolate", "Mascarpone", "Free-range eggs", "Cultured butter", "Cane sugar"],
    brewing: "Made fresh each morning in our open pastry kitchen and rested to serving temperature before plating.",
    flavorNotes: ["Dark cocoa", "Vanilla cream", "Brown butter"],
    calories: 380,
    allergens: ["Milk", "Eggs", "Wheat", "May contain nuts"],
    pairing: "Espresso or Cold Brew",
  },
};

const reviewPool: Omit<MenuReview, "rating">[] = [
  { name: "Ananya Sharma", date: "March 2026", comment: "Genuinely the most considered cup in the city — it tastes exactly the same every visit." },
  { name: "Marcus Lindqvist", date: "February 2026", comment: "Beautifully balanced and served at the right temperature. The presentation alone is worth the price." },
  { name: "Yuna Park", date: "February 2026", comment: "My standing order. Rich without being heavy, and the staff remember how I like it." },
  { name: "Rohit Menon", date: "January 2026", comment: "Brought a client here and they ordered a second one immediately. Quietly excellent." },
];

const sizeLadder: MenuSize[] = [
  { label: "Small", volume: "180 ml", delta: -30 },
  { label: "Medium", volume: "240 ml", delta: 0 },
  { label: "Large", volume: "320 ml", delta: 45 },
];

const plateLadder: MenuSize[] = [
  { label: "Small", volume: "Single portion", delta: -35 },
  { label: "Medium", volume: "Regular plate", delta: 0 },
  { label: "Large", volume: "Sharing plate", delta: 60 },
];

const slugify = (value: string) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

type BaseProduct = Pick<MenuProduct, "name" | "category" | "description" | "price" | "image" | "badge" | "popular" | "vegetarian" | "spice">;

const baseProducts: BaseProduct[] = [
  // Signature Coffee (includes espresso bar & latte collection)
  { name: "Bean Haven Signature", category: "signature", description: "House espresso, jaggery caramel and velvet cream crowned with cocoa.", price: "₹295", image: mocha, popular: true, vegetarian: true, badge: "Chef Special" },
  { name: "Classic Cappuccino", category: "signature", description: "A precise balance of rich espresso, steamed milk and satin microfoam.", price: "₹245", image: cappuccino, popular: true, vegetarian: true },
  { name: "Caramel Latte", category: "signature", description: "Double ristretto with burnt caramel and silken whole milk.", price: "₹285", image: latte, popular: true, vegetarian: true },
  { name: "Vanilla Latte", category: "signature", description: "Madagascar vanilla, house espresso and softly textured milk.", price: "₹275", image: latte, vegetarian: true },
  { name: "Hazelnut Latte", category: "signature", description: "Toasted hazelnut praline folded into a fragrant double shot.", price: "₹285", image: cappuccino, vegetarian: true },
  { name: "Espresso", category: "signature", description: "A concentrated pull with dark cocoa, citrus and caramel depth.", price: "₹165", image: espresso, vegetarian: true },
  { name: "Americano", category: "signature", description: "Double espresso opened with soft filtered water.", price: "₹195", image: americano, vegetarian: true },
  { name: "Flat White", category: "signature", description: "Velvety microfoam poured over a deep double ristretto.", price: "₹245", image: latte, popular: true, vegetarian: true },
  { name: "Café Mocha", category: "signature", description: "Single-origin cocoa, espresso and steamed milk with chocolate curls.", price: "₹295", image: mocha, vegetarian: true },
  // South Indian Filter Coffee
  { name: "Kumbakonam Degree Coffee", category: "filter", description: "The legendary first-decoction brew with fresh cow's milk, served frothing in brass.", price: "₹145", image: filterImg, popular: true, vegetarian: true, badge: "Best Seller" },
  { name: "Mylapore Jaggery Filter", category: "filter", description: "Chicory-rich decoction sweetened with palm jaggery for a deep, molasses finish.", price: "₹165", image: filterImg, vegetarian: true, badge: "Chef Special" },
  { name: "Malnad Black Filter", category: "filter", description: "Strong, milk-free decoction with a hint of cardamom — pure Malnad tradition.", price: "₹135", image: filterImg, vegetarian: true },
  { name: "Iced Filter Kaapi", category: "filter", description: "Our classic decoction poured over ice and sweetened milk for hot afternoons.", price: "₹185", image: filterImg, vegetarian: true, badge: "New" },
  // Cold Coffee
  { name: "Cold Brew", category: "cold", description: "Eighteen-hour steeped Ethiopian coffee served over clear ice.", price: "₹265", image: coldbrew, popular: true, vegetarian: true },
  { name: "Iced Latte", category: "cold", description: "Chilled espresso, fresh milk and hand-cut ice.", price: "₹255", image: coldbrew, vegetarian: true },
  { name: "Mocha Frappe", category: "cold", description: "Whipped chocolate espresso with cream and dark cocoa.", price: "₹325", image: mocha, vegetarian: true, badge: "Premium" },
  { name: "Vanilla Cold Coffee", category: "cold", description: "Creamy cold coffee perfumed with real vanilla bean.", price: "₹295", image: coldbrew, vegetarian: true },
  // Tea
  { name: "Royal Masala Chai", category: "tea", description: "Assam CTC simmered with ginger, cardamom, clove and fresh milk.", price: "₹125", image: teaImg, popular: true, vegetarian: true, badge: "Best Seller" },
  { name: "Darjeeling First Flush", category: "tea", description: "Delicate muscatel spring leaf from a single Darjeeling estate.", price: "₹195", image: teaImg, vegetarian: true, badge: "Premium" },
  { name: "Kashmiri Kahwa", category: "tea", description: "Green tea with saffron, cinnamon and crushed almonds.", price: "₹185", image: teaImg, vegetarian: true },
  { name: "Lemon Honey Ginger Tea", category: "tea", description: "Bright black tea with wild honey, lemon and fresh ginger.", price: "₹145", image: teaImg, vegetarian: true },
  // Hot Milk
  { name: "Kesar Badam Milk", category: "hotmilk", description: "Saffron and almond milk simmered slowly in brass.", price: "₹195", image: hotmilkImg, popular: true, vegetarian: true, badge: "Chef Special" },
  { name: "Golden Turmeric Latte", category: "hotmilk", description: "Haldi, black pepper and ginger in creamy steamed milk.", price: "₹185", image: hotmilkImg, vegetarian: true },
  { name: "Belgian Hot Chocolate", category: "hotmilk", description: "54% Belgian chocolate melted into whole milk with a marshmallow crown.", price: "₹245", image: mocha, vegetarian: true, badge: "Premium" },
  // Milkshakes
  { name: "Belgian Chocolate Shake", category: "shakes", description: "Dark Belgian chocolate hand-spun with vanilla ice cream.", price: "₹275", image: shakeImg, popular: true, vegetarian: true, badge: "Best Seller" },
  { name: "Lotus Biscoff Shake", category: "shakes", description: "Caramelised Biscoff crumb blended with cream and milk.", price: "₹295", image: shakeImg, vegetarian: true, badge: "New" },
  { name: "Alphonso Mango Shake", category: "shakes", description: "Ratnagiri Alphonso pulp with chilled milk and vanilla.", price: "₹265", image: lassiImg, vegetarian: true },
  { name: "Strawberry Cream Shake", category: "shakes", description: "Mahabaleshwar strawberries spun with cream and vanilla bean.", price: "₹265", image: shakeImg, vegetarian: true },
  // Mojitos
  { name: "Classic Mint Mojito", category: "mojitos", description: "Garden mint, lime and cane sugar topped with sparkling water.", price: "₹195", image: mojitoImg, popular: true, vegetarian: true, badge: "Best Seller" },
  { name: "Blue Lagoon Mojito", category: "mojitos", description: "Blue curaçao syrup, lime and mint over crushed ice.", price: "₹215", image: mojitoImg, vegetarian: true },
  { name: "Watermelon Basil Mojito", category: "mojitos", description: "Fresh watermelon pressed with basil and a squeeze of lime.", price: "₹225", image: mojitoImg, vegetarian: true, badge: "New" },
  { name: "Kala Khatta Mojito", category: "mojitos", description: "Tangy black plum syrup with chaat masala and mint.", price: "₹205", image: mojitoImg, vegetarian: true },
  // Fresh Lassi
  { name: "Alphonso Mango Lassi", category: "lassi", description: "House-set curd churned with Alphonso mango and saffron.", price: "₹195", image: lassiImg, popular: true, vegetarian: true, badge: "Best Seller" },
  { name: "Rose Pistachio Lassi", category: "lassi", description: "Gulkand, rose water and slivered pistachio in thick curd.", price: "₹205", image: lassiImg, vegetarian: true, badge: "Chef Special" },
  { name: "Punjabi Sweet Lassi", category: "lassi", description: "Thick, sweet and topped with a layer of fresh malai.", price: "₹165", image: lassiImg, vegetarian: true },
  { name: "Masala Chaas", category: "lassi", description: "Spiced buttermilk with roasted cumin, ginger and coriander.", price: "₹125", image: lassiImg, vegetarian: true },
  // Sandwiches
  { name: "Grilled Paneer Tikka Sandwich", category: "sandwiches", description: "Tandoori paneer, mint chutney and pickled onion in sourdough.", price: "₹325", image: menuSnacks, popular: true, vegetarian: true, spice: 2, badge: "Best Seller" },
  { name: "Bombay Masala Toast", category: "sandwiches", description: "Spiced potato, beetroot and green chutney, grilled until crisp.", price: "₹245", image: menuSnacks, vegetarian: true, spice: 2 },
  { name: "Pesto Mozzarella Melt", category: "sandwiches", description: "Basil pesto, fresh mozzarella and roasted tomatoes on focaccia.", price: "₹345", image: menuSnacks, vegetarian: true, spice: 1, badge: "Premium" },
  { name: "Club Veg Sandwich", category: "sandwiches", description: "Triple-decker with garden vegetables, cheddar and mustard.", price: "₹295", image: menuSnacks, vegetarian: true, spice: 1 },
  // Snacks
  { name: "Peri Peri Fries", category: "snacks", description: "Skin-on fries dusted with smoky peri peri and garlic aioli.", price: "₹225", image: menuSnacks, popular: true, vegetarian: true, spice: 2, badge: "Best Seller" },
  { name: "Truffle Parmesan Fries", category: "snacks", description: "Crisp fries with truffle oil, parmesan and parsley.", price: "₹295", image: menuSnacks, vegetarian: true, spice: 1, badge: "Premium" },
  { name: "Cheese Garlic Bread", category: "snacks", description: "Sourdough toasted with confit garlic, herbs and mozzarella.", price: "₹235", image: menuBakery, vegetarian: true, spice: 1 },
  { name: "Butter Croissant", category: "snacks", description: "A flaky, cultured-butter croissant baked throughout the morning.", price: "₹195", image: menuBakery, vegetarian: true },
  // Momos
  { name: "Classic Veg Momos", category: "momos", description: "Hand-folded dumplings with cabbage, carrot and spring onion.", price: "₹195", image: momosImg, popular: true, vegetarian: true, spice: 1, badge: "Best Seller" },
  { name: "Paneer Cheese Momos", category: "momos", description: "Soft paneer and molten cheese in a silky steamed wrapper.", price: "₹235", image: momosImg, vegetarian: true, spice: 1 },
  { name: "Tandoori Fried Momos", category: "momos", description: "Crisp-fried momos tossed in smoky tandoori masala.", price: "₹245", image: momosImg, vegetarian: true, spice: 3, badge: "Chef Special" },
  { name: "Schezwan Pan Momos", category: "momos", description: "Pan-tossed in fiery Schezwan sauce with peppers and sesame.", price: "₹255", image: momosImg, vegetarian: true, spice: 3 },
  // Corn
  { name: "Butter Masala Corn", category: "corn", description: "Sweet corn tossed in brown butter, chaat masala and lime.", price: "₹155", image: cornImg, popular: true, vegetarian: true, spice: 1, badge: "Best Seller" },
  { name: "Crispy Chilli Corn", category: "corn", description: "Golden fried kernels with chilli, garlic and spring onion.", price: "₹215", image: cornImg, vegetarian: true, spice: 2 },
  { name: "Cheese Corn Cup", category: "corn", description: "Steamed corn folded through a warm three-cheese sauce.", price: "₹185", image: cornImg, vegetarian: true, spice: 1, badge: "New" },
  // Desserts
  { name: "Tiramisu", category: "desserts", description: "Espresso-soaked sponge layered with mascarpone and cocoa.", price: "₹345", image: menuDesserts, popular: true, vegetarian: true, badge: "Chef Special" },
  { name: "Chocolate Brownie", category: "desserts", description: "Dark chocolate brownie with a molten centre and sea salt.", price: "₹285", image: menuDesserts, popular: true, vegetarian: true, badge: "Best Seller" },
  { name: "Cheesecake", category: "desserts", description: "Baked vanilla cheesecake with a seasonal berry compote.", price: "₹325", image: menuDesserts, vegetarian: true },
  { name: "Chocolate Lava Cake", category: "desserts", description: "Warm cacao cake with a flowing ganache heart.", price: "₹355", image: menuDesserts, vegetarian: true, badge: "Premium" },
  { name: "Blueberry Muffin", category: "desserts", description: "Tender vanilla crumb filled with macerated blueberries.", price: "₹185", image: menuBakery, vegetarian: true, badge: "New" },
];

export const menuProducts: MenuProduct[] = baseProducts.map((product, index) => {
  const profile = categoryProfiles[product.category];
  const basePrice = Number(product.price.replace(/[^0-9]/g, ""));
  const rating = Number((4.7 + (index % 3) * 0.1).toFixed(1));

  return {
    ...product,
    slug: slugify(product.name),
    categoryLabel: menuCategories.find((category) => category.id === product.category)?.label ?? "Menu",
    basePrice,
    rating,
    beverage: profile.beverage,
    ingredients: profile.ingredients,
    roast: profile.roast,
    strength: profile.strength,
    sizes: profile.beverage ? sizeLadder : plateLadder,
    story: `${product.name} began as a staff experiment behind the Bean Haven bar and stayed on the menu by popular demand. ${product.description} Every serve is built to order, weighed to the gram and finished by hand so the last mouthful tastes like the first.`,
    brewing: profile.brewing,
    flavorNotes: profile.flavorNotes,
    calories: profile.calories,
    allergens: profile.allergens,
    pairing: profile.pairing,
    reviews: reviewPool.map((review, reviewIndex) => ({
      ...review,
      rating: reviewIndex === 3 ? 4 : 5,
    })).slice(0, 3 + (index % 2)),
  };
});

export const findMenuProduct = (slug: string) =>
  menuProducts.find((product) => product.slug === slug);

export const offers = [
  {
    title: "Sunrise Ritual",
    discount: "30% Off",
    period: "Weekdays · 7–9 AM",
    description:
      "Any espresso-based drink with a warm butter croissant, brewed before the city wakes up.",
  },
  {
    title: "Haven Bean Club",
    discount: "Save $24",
    period: "Monthly Membership",
    description:
      "Twelve handcrafted coffees a month, priority table booking and first access to micro-lot roasts.",
  },
  {
    title: "Autumn Reserve",
    discount: "Seasonal",
    period: "Limited · 200 bags",
    description:
      "Our maple-cask aged Colombian lot, poured as a flat white or taken home as whole bean.",
  },
];

export const gallery = [
  { src: g1, alt: "Freshly roasted coffee beans spilling from a burlap sack" },
  { src: g2, alt: "Velvet armchairs in a warm corner of the Bean Haven lounge" },
  { src: g3, alt: "Golden croissants served beside a cup of coffee" },
  { src: g4, alt: "Brass espresso machine group head extracting coffee" },
  { src: g5, alt: "Guests laughing together around a cafe table" },
  { src: g6, alt: "Bean Haven storefront glowing warmly at dusk" },
];

export const testimonials = [
  {
    name: "Amelia Hartwell",
    role: "Architect",
    avatar: p1,
    rating: 5,
    quote:
      "The flat white here ruined every other cafe for me. It arrives at exactly the right temperature, every single time, and the room feels like a private library.",
  },
  {
    name: "Marcus Lindqvist",
    role: "Food Writer",
    avatar: p2,
    rating: 5,
    quote:
      "I've reviewed sixty roasteries this year. Bean Haven is the only one where the baristas could talk me through the farm, the altitude and the drying method without a note.",
  },
  {
    name: "Yuna Park",
    role: "Product Designer",
    avatar: p3,
    rating: 5,
    quote:
      "My whole team works from the back banquette on Thursdays. Fast Wi-Fi, real power outlets, and a cold brew that carries you straight through the afternoon.",
  },
  {
    name: "Daniel Okafor",
    role: "Musician",
    avatar: p4,
    rating: 5,
    quote:
      "It's the small things — warm cups, brass details, jazz kept just below conversation level. I booked a table for my album listening night and they made it feel like an event.",
  },
];

export const features = [
  {
    icon: "beans",
    title: "Freshly Roasted Beans",
    description: "Roasted in-house every 48 hours and never poured beyond day fourteen.",
  },
  {
    icon: "origin",
    title: "Single Origin Coffee",
    description: "Traceable micro-lots selected for clarity, sweetness and a distinct sense of place.",
  },
  {
    icon: "organic",
    title: "Organic Ingredients",
    description: "Certified organic beans, local dairy and syrups made in our own kitchen.",
  },
  {
    icon: "barista",
    title: "Experienced Baristas",
    description: "SCA-certified team, three national latte-art finalists behind the bar.",
  },
  {
    icon: "ambience",
    title: "Premium Ambience",
    description: "Walnut panelling, low brass light and vinyl jazz at a conversational volume.",
  },
  {
    icon: "fast",
    title: "Fast Service",
    description: "Average ninety seconds from order to cup, even at the morning peak.",
  },
] as const;

export const faqs = [
  {
    q: "Do I need a reservation?",
    a: "Walk-ins are always welcome, but weekends between 10 AM and 2 PM fill quickly. Reserving through the form below guarantees your table for ninety minutes.",
  },
  {
    q: "Which beans do you roast?",
    a: "We rotate three single origins — Ethiopian Guji, Colombian Huila and Sumatran Gayo — alongside our year-round Haven house blend. Every bag is roasted on site.",
  },
  {
    q: "Do you offer dairy-free and vegan options?",
    a: "Yes. Oat, almond, soy and coconut milks are available at no extra charge, and our pastry case always includes at least three vegan bakes.",
  },
  {
    q: "Can I work or study at Bean Haven?",
    a: "Absolutely. The back lounge is reserved for quiet work with gigabit Wi-Fi and power at every seat. We only ask that tables of one move to the bar during the weekend rush.",
  },
  {
    q: "Do you host private events?",
    a: "We host tastings, launches and small celebrations for up to forty guests after 6 PM. Mention your date in the reservation message and our events lead will call you back.",
  },
  {
    q: "Is there parking nearby?",
    a: "There is metered street parking on Wilder Lane and a covered garage two minutes away on Aldgate Street, free for the first hour with any purchase.",
  },
];

export const hours = [
  { day: "Monday – Thursday", time: "7:00 AM – 9:00 PM" },
  { day: "Friday", time: "7:00 AM – 11:00 PM" },
  { day: "Saturday", time: "8:00 AM – 11:00 PM" },
  { day: "Sunday", time: "8:00 AM – 6:00 PM" },
];
