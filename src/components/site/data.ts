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
import menuTea from "@/assets/menu-tea.jpg";

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
  { id: "espresso", label: "Espresso Bar", icon: "bean" },
  { id: "milk", label: "Latte Collection", icon: "milk" },
  { id: "cold", label: "Cold Coffee", icon: "snowflake" },
  { id: "desserts", label: "Desserts", icon: "cake" },
  { id: "snacks", label: "Gourmet Bites", icon: "sandwich" },
] as const;

export type MenuCategory = (typeof menuCategories)[number]["id"];

export type MenuProduct = {
  name: string;
  category: MenuCategory;
  description: string;
  price: string;
  image: string;
  badge?: "Best Seller" | "Chef Special" | "New" | "Premium";
  popular?: boolean;
  vegetarian?: boolean;
  spice?: 1 | 2 | 3;
};

export const menuProducts: MenuProduct[] = [
  { name: "Bean Haven Signature", category: "signature", description: "House espresso, jaggery caramel and velvet cream crowned with cocoa.", price: "₹295", image: mocha, popular: true, vegetarian: true },
  { name: "Classic Cappuccino", category: "signature", description: "A precise balance of rich espresso, steamed milk and satin microfoam.", price: "₹245", image: cappuccino, popular: true, vegetarian: true },
  { name: "Caramel Latte", category: "signature", description: "Double ristretto with burnt caramel and silken whole milk.", price: "₹285", image: latte, popular: true, vegetarian: true },
  { name: "Vanilla Latte", category: "signature", description: "Madagascar vanilla, house espresso and softly textured milk.", price: "₹275", image: latte, vegetarian: true },
  { name: "Hazelnut Latte", category: "signature", description: "Toasted hazelnut praline folded into a fragrant double shot.", price: "₹285", image: cappuccino, vegetarian: true },
  { name: "Espresso", category: "espresso", description: "A concentrated pull with dark cocoa, citrus and caramel depth.", price: "₹165", image: espresso, vegetarian: true },
  { name: "Double Espresso", category: "espresso", description: "Two full-bodied shots for a longer, more resonant finish.", price: "₹205", image: espresso, vegetarian: true },
  { name: "Americano", category: "espresso", description: "Double espresso opened with soft filtered water.", price: "₹195", image: americano, vegetarian: true },
  { name: "Macchiato", category: "espresso", description: "Espresso marked with a spoon of lustrous milk foam.", price: "₹215", image: espresso, vegetarian: true },
  { name: "Flat White", category: "milk", description: "Velvety microfoam poured over a deep double ristretto.", price: "₹245", image: latte, popular: true, vegetarian: true },
  { name: "Café Mocha", category: "milk", description: "Single-origin cocoa, espresso and steamed milk with chocolate curls.", price: "₹295", image: mocha, vegetarian: true },
  { name: "Spanish Latte", category: "milk", description: "A luscious condensed-milk latte with cinnamon warmth.", price: "₹285", image: cappuccino, vegetarian: true },
  { name: "Cold Brew", category: "cold", description: "Eighteen-hour steeped Ethiopian coffee served over clear ice.", price: "₹265", image: coldbrew, popular: true, vegetarian: true },
  { name: "Iced Latte", category: "cold", description: "Chilled espresso, fresh milk and hand-cut ice.", price: "₹255", image: coldbrew, vegetarian: true },
  { name: "Mocha Frappe", category: "cold", description: "Whipped chocolate espresso with cream and dark cocoa.", price: "₹325", image: mocha, vegetarian: true },
  { name: "Vanilla Cold Coffee", category: "cold", description: "Creamy cold coffee perfumed with real vanilla bean.", price: "₹295", image: coldbrew, vegetarian: true },
  { name: "Tiramisu", category: "desserts", description: "Espresso-soaked sponge layered with mascarpone and cocoa.", price: "₹345", image: menuDesserts, popular: true, vegetarian: true },
  { name: "Chocolate Brownie", category: "desserts", description: "Dark chocolate brownie with a molten centre and sea salt.", price: "₹285", image: menuDesserts, popular: true, vegetarian: true },
  { name: "Cheesecake", category: "desserts", description: "Baked vanilla cheesecake with a seasonal berry compote.", price: "₹325", image: menuDesserts, vegetarian: true },
  { name: "Chocolate Lava Cake", category: "desserts", description: "Warm cacao cake with a flowing ganache heart.", price: "₹355", image: menuDesserts, vegetarian: true },
  { name: "Butter Croissant", category: "bakery", description: "A flaky, cultured-butter croissant baked throughout the morning.", price: "₹195", image: menuBakery, popular: true, vegetarian: true },
  { name: "Garlic Bread", category: "bakery", description: "Sourdough toasted with confit garlic and garden herbs.", price: "₹215", image: menuBakery, vegetarian: true },
  { name: "Blueberry Muffin", category: "bakery", description: "Tender vanilla crumb filled with macerated blueberries.", price: "₹185", image: menuBakery, vegetarian: true },
  { name: "Chocolate Muffin", category: "bakery", description: "Deep cocoa muffin studded with Belgian chocolate.", price: "₹195", image: menuBakery, vegetarian: true },
  { name: "Veg Sandwich", category: "snacks", description: "Garden vegetables, cheddar and mustard on toasted sourdough.", price: "₹265", image: menuSnacks, vegetarian: true, spice: 1 },
  { name: "Grilled Paneer Sandwich", category: "snacks", description: "Tandoori paneer, mint chutney and pickled onion in sourdough.", price: "₹325", image: menuSnacks, popular: true, vegetarian: true, spice: 2 },
  { name: "French Fries", category: "snacks", description: "Crisp skin-on fries with smoked salt and house aioli.", price: "₹225", image: menuSnacks, vegetarian: true, spice: 1 },
  { name: "Garlic Toast", category: "snacks", description: "Charred sourdough with roasted garlic butter and parsley.", price: "₹195", image: menuSnacks, vegetarian: true, spice: 1 },
  { name: "Veg Wrap", category: "snacks", description: "Grilled vegetables, hummus and crisp leaves in a warm flatbread.", price: "₹295", image: menuSnacks, vegetarian: true, spice: 2 },
  { name: "Masala Tea", category: "tea", description: "Assam tea simmered with ginger and Bean Haven's whole-spice blend.", price: "₹165", image: menuTea, popular: true, vegetarian: true },
  { name: "Green Tea", category: "tea", description: "Delicate whole leaves with a clean, quietly floral finish.", price: "₹155", image: menuTea, vegetarian: true },
  { name: "Lemon Tea", category: "tea", description: "Bright black tea with fresh lemon and wildflower honey.", price: "₹165", image: menuTea, vegetarian: true },
  { name: "Earl Grey", category: "tea", description: "Fine black tea scented with Calabrian bergamot.", price: "₹175", image: menuTea, vegetarian: true },
];

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
    title: "Fresh Beans",
    description: "Roasted in-house every 48 hours and never poured beyond day fourteen.",
  },
  {
    icon: "barista",
    title: "Expert Baristas",
    description: "SCA-certified team, three national latte-art finalists behind the bar.",
  },
  {
    icon: "ambience",
    title: "Cozy Ambience",
    description: "Walnut panelling, low brass light and vinyl jazz at a conversational volume.",
  },
  {
    icon: "wifi",
    title: "Free WiFi",
    description: "Gigabit fibre, outlets at every table and a quiet-focus back room.",
  },
  {
    icon: "fast",
    title: "Fast Service",
    description: "Average ninety seconds from order to cup, even at the morning peak.",
  },
  {
    icon: "organic",
    title: "Organic Ingredients",
    description: "Certified organic beans, local dairy and syrups made in our own kitchen.",
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
