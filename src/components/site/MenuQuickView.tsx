import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Leaf, ShoppingBag, Star, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { MenuProduct } from "./data";

export function StrengthMeter({ value, tone = "light" }: { value: number; tone?: "light" | "dark" }) {
  return (
    <span className="flex items-center gap-1" aria-label={`Strength ${value} of 5`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Flame
          key={index}
          className={cn(
            "size-3.5",
            index < value
              ? "fill-current text-menu-gold"
              : tone === "dark"
                ? "text-menu-cream/25"
                : "text-menu-muted/35",
          )}
        />
      ))}
    </span>
  );
}

export function MenuQuickView({
  product,
  onClose,
}: {
  product: MenuProduct;
  onClose: () => void;
}) {
  const fallback = product.sizes[1] ?? product.sizes[0]!;
  const [size, setSize] = useState(fallback.label);
  const active = product.sizes.find((option) => option.label === size) ?? fallback;
  const price = product.basePrice + active.delta;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} quick view`}
      className="fixed inset-0 z-[80] grid place-items-center overflow-y-auto bg-menu-noir/90 p-4 backdrop-blur-md animate-menu-enter"
      onClick={onClose}
    >
      <article
        className="relative grid w-full max-w-4xl overflow-hidden rounded-2xl border border-menu-gold/35 bg-menu-paper shadow-menu-luxe sm:grid-cols-2"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative min-h-64 overflow-hidden bg-menu-panel">
          <img
            src={product.image}
            alt={product.name}
            width={800}
            height={800}
            className="size-full object-cover sm:absolute sm:inset-0"
          />
          <div className="absolute inset-0 bg-menu-soft-veil" />
          <span className="menu-badge absolute left-4 top-4">{product.categoryLabel}</span>
        </div>

        <div className="flex flex-col p-6 sm:p-9">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close quick view"
            className="absolute right-3 top-3 text-menu-ink hover:bg-menu-wash"
            onClick={onClose}
          >
            <X />
          </Button>

          <span className="menu-kicker">Barista selection</span>
          <h3 className="mt-3 font-menu-display text-4xl leading-none text-menu-ink">{product.name}</h3>
          <div className="mt-3 flex items-center gap-3 text-xs text-menu-muted">
            <span className="flex items-center gap-1 text-menu-gold">
              <Star className="size-3.5 fill-current" /> {product.rating.toFixed(1)}
            </span>
            {product.vegetarian ? (
              <span className="flex items-center gap-1 text-menu-muted">
                <Leaf className="size-3.5 text-menu-gold" /> Vegetarian
              </span>
            ) : null}
          </div>
          <p className="mt-4 text-sm leading-7 text-menu-muted">{product.description}</p>

          <dl className="mt-5 space-y-3 border-t border-menu-gold/20 pt-5 text-sm">
            <div className="flex flex-wrap gap-x-3">
              <dt className="min-w-24 text-menu-muted">Ingredients</dt>
              <dd className="flex-1 text-menu-ink">{product.ingredients.join(" · ")}</dd>
            </div>
            <div className="flex flex-wrap gap-x-3">
              <dt className="min-w-24 text-menu-muted">Roast level</dt>
              <dd className="flex-1 text-menu-ink">{product.roast}</dd>
            </div>
            <div className="flex flex-wrap items-center gap-x-3">
              <dt className="min-w-24 text-menu-muted">Strength</dt>
              <dd className="flex-1">
                <StrengthMeter value={product.strength} />
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <span className="text-xs uppercase tracking-[0.18em] text-menu-muted">Size</span>
            <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label="Size options">
              {product.sizes.map((option) => (
                <button
                  key={option.label}
                  type="button"
                  aria-pressed={option.label === size}
                  onClick={() => setSize(option.label)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs transition-all duration-300",
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

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-menu-gold/20 pt-6">
            <span className="font-menu-display text-3xl italic text-menu-gold">₹{price}</span>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outlineGold" size="sm">
                <Link to="/menu/$slug" params={{ slug: product.slug }} onClick={onClose}>
                  View Details <ArrowRight />
                </Link>
              </Button>
              <Button
                variant="gold"
                size="sm"
                onClick={() => toast.success(`${active.label} ${product.name} added to your cart — ₹${price}`)}
              >
                <ShoppingBag /> Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
