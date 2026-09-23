import { useEffect, useRef } from "react";
import { ArrowDown, ArrowRight, CalendarDays, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.jpg";

export function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const update = () => {
      image.style.transform = `translate3d(0, ${Math.min(window.scrollY * 0.14, 90)}px, 0) scale(1.08)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        ref={imageRef}
        src={heroImage}
        alt="The Bean Haven bar at golden hour with brass lamps and a steaming espresso machine"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full scale-[1.08] object-cover will-change-transform"
      />
      <div className="bg-hero-veil absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-36 sm:px-8 sm:pb-28 sm:pt-40">
        <div className="max-w-4xl animate-fade-up">
          <span className="glass eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 text-gold">
            <Star className="size-3.5 fill-gold text-gold" aria-hidden />
            Small-batch roastery since 2008
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl leading-[0.96] text-cream sm:text-7xl lg:text-8xl">
            Fresh Coffee.
            <span className="text-gold-gradient block italic">Fresh Moments.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-cream/75 sm:text-lg">
            Slow-roasted single origins, poured by award-winning baristas in a walnut-and-brass
            lounge built for lingering. Every cup at Bean Haven is brewed to order, never rushed.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild variant="gold" size="xl" className="group shadow-gold transition-transform duration-300 hover:-translate-y-1">
              <a href="#menu">Order Now <ArrowRight className="transition-transform group-hover:translate-x-1" /></a>
            </Button>
            <Button asChild variant="ivory" size="xl" className="group transition-transform duration-300 hover:-translate-y-1">
              <a href="#reserve"><CalendarDays className="transition-transform group-hover:rotate-6" /> Book a Table</a>
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
