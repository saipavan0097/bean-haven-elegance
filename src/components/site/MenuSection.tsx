import { useMemo, useState } from "react";
import {
  Bean,
  CakeSlice,
  Check,
  ChevronRight,
  Coffee,
  Croissant,
  Flame,
  Leaf,
  Milk,
  Plus,
  Sandwich,
  Snowflake,
  Sparkles,
  Star,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  menuCategories,
  menuProducts,
  type MenuCategory,
  type MenuProduct,
} from "./data";

const categoryIcons = {
  coffee: Coffee,
  bean: Bean,
  milk: Milk,
  snowflake: Snowflake,
  cake: CakeSlice,
  croissant: Croissant,
  sandwich: Sandwich,
  leaf: Leaf,
};

const favoriteNames = [
  "Bean Haven Signature",
  "Caramel Latte",
  "Cold Brew",
  "Chocolate Brownie",
];

function ProductDetails({ product }: { product: MenuProduct }) {
  return (
    <>
      <div className="flex min-w-0 items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            {product.popular ? (
              <span className="menu-badge"><Star className="size-3 fill-current" /> Popular</span>
            ) : null}
            {product.vegetarian ? (
              <span className="menu-veg" aria-label="Vegetarian"><span /></span>
            ) : null}
            {product.spice ? (
              <span className="flex items-center gap-0.5 text-menu-gold" aria-label={`Spice level ${product.spice} of 3`}>
                {Array.from({ length: product.spice }).map((_, index) => <Flame key={index} className="size-3.5 fill-current" />)}
              </span>
            ) : null}
          </div>
          <h3 className="font-menu-display text-2xl leading-tight text-menu-cream">{product.name}</h3>
        </div>
        <p className="shrink-0 font-menu-display text-2xl italic text-menu-gold">{product.price}</p>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-menu-cream/58">{product.description}</p>
    </>
  );
}

function FavoriteCard({ product, index }: { product: MenuProduct; index: number }) {
  return (
    <Reveal delay={index * 90}>
      <article className="group relative isolate min-h-[28rem] overflow-hidden border border-menu-gold/25 bg-menu-panel shadow-menu-luxe sm:min-h-[32rem]">
        <img src={product.image} alt={product.name} width={800} height={800} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-menu-card-veil" />
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 sm:p-8">
          <div className="mb-4 flex items-center justify-between">
            <span className="menu-badge"><Star className="size-3 fill-current" /> Customer favorite</span>
            <span className="font-menu-display text-2xl italic text-menu-gold">{product.price}</span>
          </div>
          <h3 className="font-menu-display text-3xl text-menu-cream">{product.name}</h3>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-menu-cream/68">{product.description}</p>
          <Button variant="gold" size="sm" className="mt-5" onClick={() => toast.success(`${product.name} added to your order`)}>
            <Plus /> Add to order
          </Button>
        </div>
      </article>
    </Reveal>
  );
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("signature");
  const products = useMemo(
    () => menuProducts.filter((product) => product.category === activeCategory),
    [activeCategory],
  );
  const favorites = favoriteNames
    .map((name) => menuProducts.find((product) => product.name === name))
    .filter((product): product is MenuProduct => Boolean(product));

  return (
    <section id="menu" className="overflow-hidden bg-menu-noir py-24 text-menu-cream sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="relative mx-auto max-w-4xl border border-menu-gold/25 bg-menu-panel px-6 py-14 text-center shadow-menu-luxe sm:px-12 sm:py-20">
          <span className="menu-corner left-0 top-0 border-l border-t" />
          <span className="menu-corner right-0 top-0 border-r border-t" />
          <span className="menu-corner bottom-0 left-0 border-b border-l" />
          <span className="menu-corner bottom-0 right-0 border-b border-r" />
          <span className="font-menu-sans text-xs uppercase tracking-[0.38em] text-menu-gold">Our Menu</span>
          <h2 className="mt-5 font-menu-display text-5xl leading-[0.95] text-menu-cream sm:text-7xl lg:text-8xl">
            Crafted with passion.<br /><em className="font-light text-menu-gold">Served with perfection.</em>
          </h2>
          <div className="mx-auto mt-9 h-px w-24 bg-menu-gold/55" />
          <div className="mt-10 grid grid-cols-1 divide-y divide-menu-gold/15 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[{ icon: Coffee, value: "40+", label: "Drinks" }, { icon: CakeSlice, value: "20", label: "Desserts" }, { icon: Star, value: "Since 2008", label: "Best Seller" }].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center justify-center gap-3 px-4 py-5 sm:py-0">
                <Icon className="size-5 text-menu-gold" />
                <div className="text-left"><strong className="block font-menu-display text-2xl font-normal">{value}</strong><span className="text-[0.65rem] uppercase tracking-[0.2em] text-menu-cream/45">{label}</span></div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mb-8 mt-24 flex items-end justify-between gap-6">
          <Reveal><span className="menu-kicker"><Sparkles /> Curated selection</span><h2 className="mt-3 font-menu-display text-4xl sm:text-6xl">Customer <em className="text-menu-gold">Favorites</em></h2></Reveal>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-menu-cream/48 md:block">The signatures our regulars return for, finished with impeccable detail.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {favorites.map((product, index) => <FavoriteCard key={product.name} product={product} index={index} />)}
        </div>

        <Reveal className="relative my-20 overflow-hidden border-y border-menu-gold/30 bg-menu-walnut px-6 py-9 sm:px-10">
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div><span className="menu-kicker">A little extra, on us</span><h2 className="mt-3 font-menu-display text-3xl sm:text-5xl">Buy 2 Coffees <span className="text-menu-gold">•</span> Get 1 Pastry at 50% OFF</h2></div>
            <Button asChild variant="gold" size="lg" className="shrink-0"><a href="#reserve">Order now <ChevronRight /></a></Button>
          </div>
        </Reveal>

        <Reveal>
          <div className="mb-10 flex gap-2 overflow-x-auto border-b border-menu-gold/20 pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Menu categories">
            {menuCategories.map((category) => {
              const Icon = categoryIcons[category.icon];
              const active = category.id === activeCategory;
              return (
                <button key={category.id} type="button" role="tab" aria-selected={active} onClick={() => setActiveCategory(category.id)} className={cn("relative flex shrink-0 items-center gap-2 px-4 py-4 text-xs uppercase tracking-[0.14em] transition-colors duration-300", active ? "text-menu-gold" : "text-menu-cream/45 hover:text-menu-cream")}>
                  <Icon className="size-4" /> {category.label}
                  <span className={cn("absolute inset-x-0 bottom-0 h-px origin-left bg-menu-gold transition-transform duration-500", active ? "scale-x-100" : "scale-x-0")} />
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={activeCategory} className="animate-menu-enter grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <article key={product.name} className="group overflow-hidden border border-menu-gold/18 bg-menu-glass shadow-menu-card transition-all duration-500 hover:-translate-y-1.5 hover:border-menu-gold/45 hover:shadow-menu-luxe">
              <div className="relative aspect-[16/11] overflow-hidden bg-menu-panel">
                <img src={product.image} alt={`${product.name} at Bean Haven`} width={800} height={800} loading="lazy" className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-menu-image-veil" />
                <span className="absolute bottom-4 right-4 font-menu-display text-2xl italic text-menu-gold">{product.price}</span>
              </div>
              <div className="p-6">
                <ProductDetails product={product} />
                <Button variant="gold" size="sm" className="mt-6 w-full" onClick={() => toast.success(`${product.name} added to your order`)}><Plus /> Add to order</Button>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-14 text-center font-menu-display text-lg italic text-menu-gold/65">Ethically sourced from high-altitude estates. Crafted fresh for every order.</p>
      </div>
    </section>
  );
}
