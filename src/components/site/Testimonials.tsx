import { useEffect, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "./data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setActive((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section
      id="reviews"
      className="bg-dark-panel relative overflow-hidden py-24 sm:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title="What our guests"
          accent="keep saying"
          tone="dark"
        />

        <div className="relative mt-14 overflow-hidden">
          <ul
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {testimonials.map((t) => (
              <li key={t.name} className="w-full shrink-0 px-1 sm:px-3">
                <figure className="glass rounded-[2rem] border-gold/15 p-8 shadow-lift transition-transform duration-500 hover:-translate-y-1 sm:p-12">
                  <Quote className="size-9 text-gold/70" aria-hidden />
                  <blockquote className="mt-6 font-display text-2xl leading-relaxed text-cream sm:text-3xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      width={512}
                      height={512}
                      loading="lazy"
                      className="size-14 rounded-full border-2 border-gold/50 object-cover"
                    />
                    <div>
                      <p className="text-cream">{t.name}</p>
                      <p className="text-sm text-cream/60">{t.role}</p>
                    </div>
                    <div className="ml-auto flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="size-4 fill-gold text-gold" aria-hidden />
                      ))}
                    </div>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Previous review"
            onClick={() => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)}
            className="flex size-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex items-center gap-2.5">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                aria-label={`Show review from ${t.name}`}
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === active ? "w-10 bg-gold" : "w-4 bg-cream/30 hover:bg-cream/60",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next review"
            onClick={() => setActive((i) => (i + 1) % testimonials.length)}
            className="flex size-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
