import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  Coffee,
  Croissant,
  Flame,
  Leaf,
  ShoppingBag,
  Sparkles,
  Star,
  Thermometer,
  TriangleAlert,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/site/Footer";
import { StrengthMeter } from "@/components/site/MenuQuickView";
import { findMenuProduct, menuProducts } from "@/components/site/data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu/$slug")({
  loader: ({ params }) => {
    const product = findMenuProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Unavailable — Bean Haven" }, { name: "robots", content: "noindex" }],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} — Bean Haven`;
    const description = `${product.description} ${product.price} at Bean Haven, served with ${product.pairing}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: MenuNotFound,
  component: ProductPage,
});

function MenuNotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-menu-paper px-6 text-center text-menu-ink">
      <div>
        <h1 className="font-menu-display text-5xl">We couldn&apos;t find that item</h1>
        <p className="mt-4 text-menu-muted">It may have rotated off the seasonal menu.</p>
        <Button asChild variant="gold" className="mt-8">
          <Link to="/">Back to the menu</Link>
        </Button>
      </div>
    </div>
  );
}

function DetailRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Coffee;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-menu-gold/20 bg-menu-surface p-5 shadow-menu-paper transition-all duration-500 hover:-translate-y-1 hover:border-menu-gold/50 hover:shadow-menu-hover">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-menu-gold/35 text-menu-gold">
        <Icon className="size-4" />
      </span>
      <div>
        <span className="text-[0.62rem] uppercase tracking-[0.2em] text-menu-muted">{label}</span>
        <p className="mt-1 text-sm leading-6 text-menu-ink">{children}</p>
      </div>
    </div>
  );
}

function ProductPage() {
  const { product } = Route.useLoaderData();
  const fallback = product.sizes[1] ?? product.sizes[0]!;
  const [size, setSize] = useState(fallback.label);
  const active = product.sizes.find((option) => option.label === size) ?? fallback;
  const price = product.basePrice + active.delta;
  const related = menuProducts
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-menu-paper text-menu-ink">
      <header className="sticky top-0 z-40 border-b border-menu-gold/20 bg-menu-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-3 text-menu-ink">
            <span className="flex size-9 items-center justify-center rounded-full border border-menu-gold/45 text-menu-gold">
              <Coffee className="size-4" />
            </span>
            <span className="font-menu-display text-xl">Bean Haven</span>
          </Link>
          <Button asChild variant="outlineGold" size="sm">
            <Link to="/" hash="menu">
              <ArrowLeft /> Back to menu
            </Link>
          </Button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:py-20">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-menu-gold/25 bg-menu-panel shadow-menu-luxe">
              <img
                src={product.image}
                alt={product.name}
                width={1000}
                height={1000}
                className="aspect-square size-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-menu-soft-veil" />
              <span className="menu-badge absolute left-5 top-5">
                {product.badge ?? (product.popular ? "Best Seller" : "Premium")}
              </span>
            </div>
          </Reveal>

          <Reveal delay={120} className="flex flex-col justify-center">
            <span className="menu-kicker">
              <Sparkles /> {product.categoryLabel}
            </span>
            <h1 className="mt-5 font-menu-display text-5xl leading-[0.95] sm:text-7xl">{product.name}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-menu-muted">
              <span className="flex items-center gap-1.5 text-menu-gold">
                <Star className="size-4 fill-current" /> {product.rating.toFixed(1)}
                <span className="text-menu-muted">({product.reviews.length} reviews)</span>
              </span>
              <StrengthMeter value={product.strength} />
              {product.vegetarian ? (
                <span className="flex items-center gap-1.5">
                  <Leaf className="size-4 text-menu-gold" /> Vegetarian
                </span>
              ) : null}
            </div>
            <p className="mt-5 max-w-xl text-base leading-8 text-menu-muted">{product.description}</p>

            <div className="mt-7">
              <span className="text-xs uppercase tracking-[0.18em] text-menu-muted">Choose a size</span>
              <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Size options">
                {product.sizes.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    aria-pressed={option.label === size}
                    onClick={() => setSize(option.label)}
                    className={cn(
                      "rounded-full border px-5 py-2.5 text-xs transition-all duration-300",
                      option.label === size
                        ? "border-menu-gold bg-menu-noir text-menu-cream"
                        : "border-menu-gold/30 text-menu-muted hover:border-menu-gold/60 hover:text-menu-ink",
                    )}
                  >
                    {option.label}
                    <span className="ml-1.5 opacity-60">{option.volume}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-5 border-t border-menu-gold/25 pt-7">
              <span className="font-menu-display text-4xl italic text-menu-gold">₹{price}</span>
              <Button
                variant="gold"
                onClick={() => toast.success(`${active.label} ${product.name} added to your cart — ₹${price}`)}
              >
                <ShoppingBag /> Add to Cart
              </Button>
              <Button asChild variant="outlineGold">
                <Link to="/" hash="reserve">
                  Book a table
                </Link>
              </Button>
            </div>
          </Reveal>
        </section>

        <section className="bg-menu-noir py-16 text-menu-cream sm:py-20">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <Reveal>
              <span className="menu-kicker">The story</span>
              <h2 className="mt-5 font-menu-display text-4xl leading-tight sm:text-5xl">
                Behind the <em className="font-light text-menu-gold">cup</em>
              </h2>
              <p className="mt-6 text-sm leading-8 text-menu-cream/70 sm:text-base">{product.story}</p>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <Reveal>
            <h2 className="font-menu-display text-4xl sm:text-5xl">
              Everything <em className="font-light text-menu-gold">inside</em>
            </h2>
          </Reveal>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal delay={60}>
              <DetailRow icon={Coffee} label="Ingredients">
                {product.ingredients.join(", ")}
              </DetailRow>
            </Reveal>
            <Reveal delay={120}>
              <DetailRow icon={Thermometer} label="Brewing method">
                {product.brewing}
              </DetailRow>
            </Reveal>
            <Reveal delay={180}>
              <DetailRow icon={Sparkles} label="Flavor notes">
                {product.flavorNotes.join(" · ")}
              </DetailRow>
            </Reveal>
            <Reveal delay={240}>
              <DetailRow icon={Flame} label="Calories">
                Approximately {product.calories} kcal per {active.label.toLowerCase()} serve.
              </DetailRow>
            </Reveal>
            <Reveal delay={300}>
              <DetailRow icon={TriangleAlert} label="Allergens">
                {product.allergens.length ? product.allergens.join(", ") : "No declared allergens."}
              </DetailRow>
            </Reveal>
            <Reveal delay={360}>
              <DetailRow icon={Croissant} label="Recommended pairing">
                {product.pairing}
              </DetailRow>
            </Reveal>
          </div>
        </section>

        <section className="bg-menu-wash py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="font-menu-display text-4xl sm:text-5xl">
                What guests <em className="font-light text-menu-gold">say</em>
              </h2>
            </Reveal>
            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              {product.reviews.map((review, index) => (
                <Reveal key={review.name} delay={index * 100}>
                  <figure className="flex h-full flex-col rounded-2xl border border-menu-gold/20 bg-menu-surface p-6 shadow-menu-paper transition-all duration-500 hover:-translate-y-1.5 hover:border-menu-gold/50 hover:shadow-menu-hover">
                    <span className="flex gap-0.5 text-menu-gold">
                      {Array.from({ length: review.rating }).map((_, star) => (
                        <Star key={star} className="size-3.5 fill-current" />
                      ))}
                    </span>
                    <blockquote className="mt-4 flex-1 text-sm leading-7 text-menu-muted">
                      &ldquo;{review.comment}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 border-t border-menu-gold/20 pt-4 text-sm text-menu-ink">
                      {review.name}
                      <span className="block text-xs text-menu-muted">{review.date}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {related.length ? (
          <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
            <Reveal>
              <h2 className="font-menu-display text-4xl sm:text-5xl">
                You may also <em className="font-light text-menu-gold">like</em>
              </h2>
            </Reveal>
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 100}>
                  <Link
                    to="/menu/$slug"
                    params={{ slug: item.slug }}
                    className="group block h-full overflow-hidden rounded-2xl border border-menu-gold/20 bg-menu-surface shadow-menu-paper transition-all duration-500 hover:-translate-y-1.5 hover:border-menu-gold/55 hover:shadow-menu-hover"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-menu-panel">
                      <img
                        src={item.image}
                        alt={item.name}
                        width={800}
                        height={600}
                        loading="lazy"
                        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-3 p-5">
                      <span className="font-menu-display text-2xl text-menu-ink">{item.name}</span>
                      <span className="font-menu-display text-xl italic text-menu-gold">{item.price}</span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}
      </main>

      <Footer />
    </div>
  );
}
