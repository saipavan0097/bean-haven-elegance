import { ArrowRight, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { menuProducts } from "./data";

const featuredNames = [
  "Espresso",
  "Caramel Latte",
  "Cold Brew",
  "Café Mocha",
  "Vanilla Latte",
  "Flat White",
];

export function FeaturedDrinks() {
  const drinks = featuredNames
    .map((name) => menuProducts.find((product) => product.name === name))
    .filter((drink) => drink !== undefined);

  return (
    <section className="bg-dark-panel overflow-hidden py-24 sm:py-32" aria-labelledby="featured-coffee-title">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow text-gold">Featured Coffee</span>
            <h2 id="featured-coffee-title" className="mt-4 max-w-2xl text-5xl leading-none text-cream sm:text-6xl">
              The pours defining <span className="text-gold-gradient italic">our season</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-7 text-cream/65">
            Six bar favourites, each dialled in daily and finished with the quiet precision of our roast team.
          </p>
        </Reveal>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {drinks.map((drink, index) => (
            <Reveal as="li" key={drink.name} delay={index * 70}>
              <article className="group relative min-h-80 overflow-hidden rounded-2xl border border-cream/15 shadow-lift">
                <img
                  src={drink.image}
                  alt={`${drink.name} at Bean Haven`}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="bg-menu-card-veil absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-1 text-xs text-gold">
                      <Star className="size-3.5 fill-current" /> {drink.rating.toFixed(1)}
                    </span>
                    <span className="font-display text-xl italic text-gold">{drink.price}</span>
                  </div>
                  <h3 className="mt-3 text-3xl text-cream">{drink.name}</h3>
                  <Button asChild variant="ivory" size="sm" className="mt-5">
                    <a href="#menu">Explore <ArrowRight /></a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}