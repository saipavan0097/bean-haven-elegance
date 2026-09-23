import { Reveal } from "@/components/Reveal";
import { useReveal, useCountUp } from "@/hooks/use-reveal";
import aboutImage from "@/assets/about.jpg";
import { stats } from "./data";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.4);
  const count = useCountUp(value, visible);

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <p className="font-display text-4xl text-espresso">
        {count}
        <span className="text-gold">{suffix}</span>
      </p>
      <p className="eyebrow mt-2 text-muted-foreground">{label}</p>
    </div>
  );
}

export function About() {
  const timeline = [
    ["2008", "Six seats, one roaster, one uncompromising house blend."],
    ["2016", "Direct partnerships began with family farms across three origins."],
    ["Today", "A seventy-seat haven, still roasting every batch beneath the same roof."],
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="absolute -left-4 -top-4 hidden size-40 rounded-3xl border border-gold/40 lg:block" />
          <img
            src={aboutImage}
            alt="A Bean Haven barista pouring latte art into a cream cup"
            width={1200}
            height={1408}
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
          />
          <div className="glass-light absolute -bottom-8 left-6 right-6 rounded-2xl p-5 shadow-soft sm:left-10 sm:right-auto sm:w-64">
            <p className="font-display text-2xl text-espresso">Roasted on site</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Every batch cupped by hand before it reaches the bar.
            </p>
          </div>
        </Reveal>

        <div>
          <span className="eyebrow text-caramel">Our Story</span>
          <h2 className="mt-4 text-4xl leading-tight text-espresso sm:text-5xl">
            A corner roastery that grew into a{" "}
            <span className="text-gold-gradient italic">neighbourhood ritual</span>
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Bean Haven began in 2008 as a six-seat counter on Wilder Lane, with one drum roaster
              and a stubborn belief that great coffee deserves an unhurried room. Eighteen years
              later the roaster still runs every Tuesday morning, and the counter has grown into a
              walnut-panelled lounge that seats seventy.
            </p>
            <p>
              We buy directly from eleven family farms across Ethiopia, Colombia and Sumatra, paying
              above Fair Trade for lots we cup ourselves. Our baristas train for six weeks before
              their first solo shift — because the difference between good and unforgettable is
              measured in seconds and grams.
            </p>
          </div>

          <ol className="mt-9 border-l border-gold/40 pl-6">
            {timeline.map(([year, copy]) => (
              <li key={year} className="relative pb-6 last:pb-0">
                <span className="absolute -left-[1.7rem] top-1.5 size-2.5 rounded-full border-2 border-background bg-gold shadow-gold" />
                <p className="eyebrow text-caramel">{year}</p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
