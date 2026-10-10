import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { menuCategories, menuProducts, testimonials } from "./data";

const expectedCategories = [
  "Signature Coffee", "South Indian Filter Coffee", "Cold Coffee", "Tea", "Hot Milk",
  "Milkshakes", "Mojitos", "Fresh Lassi", "Sandwiches", "Snacks", "Momos", "Corn", "Desserts",
];
describe("Phase 4 café menu", () => {
  it("includes all requested categories", () => {
    assert.deepEqual(menuCategories.map((category) => category.label), expectedCategories);
  });

  it("provides complete, rated products in every category", () => {
    for (const category of menuCategories) {
      const products = menuProducts.filter((product) => product.category === category.id);
      assert.ok(products.length > 0, `${category.label} must contain at least one menu item.`);
      assert.ok(products.every((product) =>
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
  });

  it("gives every menu item a unique details page", () => {
    const slugs = menuProducts.map((product) => product.slug);
    assert.equal(new Set(slugs).size, menuProducts.length);
  });

  it("keeps all guest-review ratings between 4.8 and 5.0", () => {
    assert.ok(testimonials.length > 0);
    assert.ok(testimonials.every((review) => review.rating >= 4.8 && review.rating <= 5));
  });
});