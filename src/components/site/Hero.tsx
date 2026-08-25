import { ArrowDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImage}
        alt="The Bean Haven bar at golden hour with brass lamps and a steaming espresso machine"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="bg-hero-veil absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-32 sm:px-8">
        <div className="max-w-3xl animate-fade-up">
          <span className="glass eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 text-gold">
            <Star className="size-3.5 fill-gold text-gold" aria-hidden />
            Small-batch roastery since 2008
          </span>

          <h1 className="mt-7 text-5xl leading-[1.03] text-cream sm:text-7xl lg:text-8xl">
            Fresh Coffee.
            <span className="text-gold-gradient block italic">Fresh Moments.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Slow-roasted single origins, poured by award-winning baristas in a walnut-and-brass
            lounge built for lingering. Every cup at Bean Haven is brewed to order, never rushed.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="gold" size="xl">
              <a href="#menu">Order Now</a>
            </Button>
            <Button asChild variant="ivory" size="xl">
              <a href="#reserve">Book a Table</a>
            </Button>
          </div>

          <dl className="mt-14 flex flex-wrap gap-x-12 gap-y-6 border-t border-cream/15 pt-8">
            {[
              ["4.9/5", "Guest rating"],
              ["24", "Coffee varieties"],
              ["90 sec", "Average serve time"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-3xl text-gold">{value}</dt>
                <dd className="eyebrow mt-1 text-cream/60">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to our story"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-cream/70 transition-colors hover:text-gold sm:flex"
      >
        <span className="eyebrow">Scroll</span>
        <span className="flex size-11 animate-float items-center justify-center rounded-full border border-cream/30">
          <ArrowDown className="size-4" aria-hidden />
        </span>
      </a>
    </section>
  );
}
