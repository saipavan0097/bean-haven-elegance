import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { offers } from "./data";

export function Offers() {
  return (
    <section className="bg-dark-panel relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -right-24 top-10 size-96 rounded-full bg-gold/12 blur-3xl"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Special Offers"
          title="Seasonal specials worth"
          accent="a second cup"
          description="Rotating promotions for regulars, early risers and anyone who takes their beans home."
          tone="dark"
        />

        <ul className="mt-16 grid gap-8 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <Reveal as="li" key={offer.title} delay={i * 100}>
              <article className="glass group flex h-full flex-col rounded-[1.75rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/50">
                <span className="eyebrow text-gold/85">{offer.period}</span>
                <h3 className="mt-4 font-display text-3xl text-cream">{offer.title}</h3>
                <p className="text-gold-gradient mt-2 font-display text-4xl">{offer.discount}</p>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-cream/70">
                  {offer.description}
                </p>
                <Button asChild variant="ivory" size="sm" className="mt-8 self-start">
                  <a href="#reserve">
                    Claim offer
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Button>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
