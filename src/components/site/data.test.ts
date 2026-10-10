import { menuCategories, menuProducts, testimonials } from "./data";

const assert = (condition: boolean, message: string) => {
  if (!condition) throw new Error(message);
};

const expectedCategories = [
  "Signature Coffee", "South Indian Filter Coffee", "Cold Coffee", "Tea", "Hot Milk",
  "Milkshakes", "Mojitos", "Fresh Lassi", "Sandwiches", "Snacks", "Momos", "Corn", "Desserts",
];
assert(JSON.stringify(menuCategories.map((category) => category.label)) === JSON.stringify(expectedCategories), "Expected all 13 requested café categories.");

for (const category of menuCategories) {
  const products = menuProducts.filter((product) => product.category === category.id);
  assert(products.length > 0, `${category.label} must contain at least one menu item.`);
  assert(products.every((product) =>
    product.ingredients.length > 0 &&
    product.image.length > 0 &&
    product.story.length > 0 &&
    product.brewing.length > 0 &&
    product.flavorNotes.length > 0 &&
    product.calories > 0 &&
    product.price.startsWith("₹") &&
    product.rating >= 4.8 &&
    product.rating <= 5
  ), `${category.label} products must have complete content, rupee pricing and 4.8–5.0 ratings.`);
}

const slugs = menuProducts.map((product) => product.slug);
assert(new Set(slugs).size === menuProducts.length, "Every menu item must have a distinct details page.");
assert(testimonials.length > 0 && testimonials.every((review) => review.rating >= 4.8 && review.rating <= 5), "Guest review ratings must remain in the requested 4.8–5.0 range.");
console.log(`Phase 4 menu checks passed for ${menuProducts.length} items in ${menuCategories.length} categories.`);