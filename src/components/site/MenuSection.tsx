import { useMemo, useState } from "react";
import { Bean, CakeSlice, ChefHat, Coffee, Eye, Milk, Plus, Sandwich, ShoppingBag, Snowflake, Sparkles, Star, X } from "lucide-react";
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
  sandwich: Sandwich,
};

function ProductDetails({ product }: { product: MenuProduct }) {
  const badge = product.badge ?? (product.popular ? "Best Seller" : "Premium");

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-4">
        <span className="menu-badge">{badge}</span>
        <span className="shrink-0 font-menu-display text-2xl italic text-menu-gold">{product.price}</span>
      </div>
      <h3 className="mt-5 font-menu-display text-3xl leading-none text-menu-ink">{product.name}</h3>
      <div className="mt-3 flex items-center gap-2 text-xs text-menu-muted" aria-label={`${product.rating} out of 5 stars`}>
        <span className="flex gap-0.5 text-menu-gold">
          {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="size-3 fill-current" />)}
        </span>
        <span>{product.rating.toFixed(1)}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-menu-muted">{product.description}</p>
    </div>
  );
}

function EditorialCard({ product, index, onQuickView }: { product: MenuProduct; index: number; onQuickView: (product: MenuProduct) => void }) {
  const imageFirst = index % 2 === 0;

  return (
    <Reveal delay={index * 90}>
      <article className="group grid h-full overflow-hidden rounded-lg border border-menu-gold/20 bg-menu-surface shadow-menu-paper transition-all duration-500 hover:-translate-y-1.5 hover:border-menu-gold/55 hover:shadow-menu-hover sm:grid-cols-2">
        <div className={cn("relative min-h-56 overflow-hidden bg-menu-panel", imageFirst ? "sm:order-1" : "sm:order-2")}>
          <img src={product.image} alt={`${product.name} at Bean Haven`} width={800} height={800} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-menu-soft-veil" />
        </div>
        <div className={cn("flex flex-col p-6 sm:p-7", imageFirst ? "sm:order-2" : "sm:order-1")}>
          <ProductDetails product={product} />
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            <Button variant="outlineGold" size="sm" onClick={() => onQuickView(product)}><Eye /> Quick View</Button>
            <Button variant="gold" size="sm" onClick={() => toast.success(`${product.name} added to your order`)}><ShoppingBag /> Order Now</Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("signature");
  const [quickView, setQuickView] = useState<MenuProduct | null>(null);
  const products = useMemo(
    () => menuProducts.filter((product) => product.category === activeCategory),
    [activeCategory],
  );
  const recommendation = menuProducts.find((product) => product.name === "Bean Haven Signature");

  return (
    <section id="menu" className="overflow-hidden bg-menu-paper py-24 text-menu-ink sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="menu-kicker"><Sparkles /> Bean Haven collection</span>
          <h2 className="mt-6 font-menu-display text-6xl leading-[0.92] sm:text-8xl lg:text-9xl">
            Our <em className="font-light text-menu-gold">Menu</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-menu-sans text-sm leading-7 text-menu-muted sm:text-base">A considered collection of small-batch coffee, delicate desserts and kitchen-made bites.</p>
        </Reveal>

        {recommendation ? (
          <Reveal className="mt-16 sm:mt-24">
            <article className="group grid overflow-hidden rounded-lg border border-menu-gold/40 bg-menu-noir shadow-menu-luxe lg:grid-cols-[1.3fr_0.7fr]">
              <div className="relative min-h-[22rem] overflow-hidden sm:min-h-[32rem]">
                <img src={recommendation.image} alt={`${recommendation.name}, chef recommendation`} width={1200} height={800} loading="lazy" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-menu-feature-veil" />
                <span className="menu-badge absolute left-6 top-6 sm:left-8 sm:top-8"><ChefHat className="size-3.5" /> Chef Recommendation</span>
              </div>
              <div className="flex flex-col justify-center p-8 text-menu-cream sm:p-12">
                <span className="menu-kicker">The house ritual</span>
                <h3 className="mt-6 font-menu-display text-5xl leading-[0.95] sm:text-6xl">{recommendation.name}</h3>
                <p className="mt-6 max-w-md text-sm leading-7 text-menu-cream/65">{recommendation.description} Presented tableside with a cacao-dusted praline.</p>
                <div className="mt-9 flex items-center justify-between gap-5 border-t border-menu-gold/25 pt-7">
                  <span className="font-menu-display text-3xl italic text-menu-gold">{recommendation.price}</span>
                  <Button variant="gold" onClick={() => toast.success(`${recommendation.name} added to your order`)}><Plus /> Add to order</Button>
                </div>
              </div>
            </article>
          </Reveal>
        ) : null}

        <Reveal>
          <div className="mx-auto mb-14 mt-20 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-menu-gold/25 bg-menu-surface p-1.5 shadow-menu-paper [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Menu categories">
            {menuCategories.map((category) => {
              const Icon = categoryIcons[category.icon];
              const active = category.id === activeCategory;
              return (
                <Button key={category.id} type="button" role="tab" aria-selected={active} variant="ghost" size="sm" onClick={() => setActiveCategory(category.id)} className={cn("relative h-10 shrink-0 rounded-full px-4 text-[0.68rem] uppercase tracking-[0.12em]", active ? "bg-menu-noir text-menu-cream hover:bg-menu-noir hover:text-menu-cream" : "text-menu-muted hover:bg-menu-wash hover:text-menu-ink")}>
                  <Icon className="size-4" /> {category.label}
                </Button>
              );
            })}
          </div>
        </Reveal>

        <div key={activeCategory} className="animate-menu-enter grid auto-rows-fr gap-6 lg:grid-cols-2">
          {products.map((product, index) => <EditorialCard key={product.name} product={product} index={index} onQuickView={setQuickView} />)}
        </div>

        <p className="mt-16 text-center font-menu-display text-xl italic text-menu-gold">Ethically sourced. Composed with care. Made fresh for every order.</p>
      </div>

      {quickView ? (
        <div role="dialog" aria-modal="true" aria-label={`${quickView.name} details`} className="fixed inset-0 z-[80] grid place-items-center bg-menu-noir/90 p-4 backdrop-blur-md" onClick={() => setQuickView(null)}>
          <article className="relative grid w-full max-w-3xl overflow-hidden rounded-lg border border-menu-gold/35 bg-menu-paper shadow-menu-luxe sm:grid-cols-2" onClick={(event) => event.stopPropagation()}>
            <img src={quickView.image} alt={quickView.name} width={800} height={800} className="aspect-square size-full object-cover" />
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <Button variant="ghost" size="icon" aria-label="Close quick view" className="absolute right-3 top-3" onClick={() => setQuickView(null)}><X /></Button>
              <span className="menu-kicker">Barista selection</span>
              <h3 className="mt-4 font-menu-display text-4xl text-menu-ink">{quickView.name}</h3>
              <p className="mt-4 text-sm leading-7 text-menu-muted">{quickView.description}</p>
              <div className="mt-6 flex items-center justify-between border-t border-menu-gold/25 pt-5">
                <span className="font-menu-display text-3xl italic text-menu-gold">{quickView.price}</span>
                <span className="flex items-center gap-1 text-sm text-menu-gold"><Star className="size-4 fill-current" /> {quickView.rating.toFixed(1)}</span>
              </div>
              <Button variant="gold" className="mt-7" onClick={() => toast.success(`${quickView.name} added to your order`)}><Plus /> Order Now</Button>
            </div>
          </article>
        </div>
      ) : null}
    </section>
  );
}
