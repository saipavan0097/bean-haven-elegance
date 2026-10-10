import { describe, expect, it } from "bun:test";
import { menuCategories, menuProducts, testimonials } from "./data";

describe("Phase 4 café menu", () => {
  it("includes all 13 requested café categories", () => {
    expect(menuCategories.map((category) => category.label)).toEqual([
      "Signature Coffee",
      "South Indian Filter Coffee",
      "Cold Coffee",
      "Tea",
      "Hot Milk",
      "Milkshakes",
      "Mojitos",
      "Fresh Lassi",
      "Sandwiches",
      "Snacks",
      "Momos",
      "Corn",
      "Desserts",
    ]);
  });

  it("has at least one complete product in every category", () => {
    for (const category of menuCategories) {
      const products = menuProducts.filter((product) => product.category === category.id);
      expect(products.length).toBeGreaterThan(0);
      expect(products.every((product) =>
        product.ingredients.length > 0 &&
        product.image.length > 0 &&
        product.story.length > 0 &&
        product.brewing.length > 0 &&
        product.flavorNotes.length > 0 &&
        product.calories > 0 &&
        product.price.startsWith("₹") &&
        product.rating >= 4.8 &&
        product.rating <= 5
      )).toBe(true);
    }
  });

  it("gives every listed product a distinct detail-page slug", () => {
    const slugs = menuProducts.map((product) => product.slug);
    expect(new Set(slugs).size).toBe(menuProducts.length);
  });

  it("keeps guest testimonial ratings within 4.8–5.0", () => {
    expect(testimonials.length).toBeGreaterThan(0);
    expect(testimonials.every((review) => review.rating >= 4.8 && review.rating <= 5)).toBe(true);
  });
});