import { Reveal } from "@/components/Reveal";
import founderPortrait from "@/assets/founder.jpg";

const journey = [
  {
    number: "01",
    title: "Source with intention",
    text: "We build lasting relationships with growers who care for their land, nurture each harvest and know every lot by name.",
  },
  {
    number: "02",
    title: "Roast for character",
    text: "Small batches are developed slowly, tasting for the sweetness and clarity that make each origin unmistakably itself.",
  },
  {
    number: "03",
    title: "Brew by hand",
    text: "Our baristas dial in every cup and make room for the small rituals that turn a quick coffee into a moment of calm.",
  },
];

const craftNotes = [
  ["Bean sourcing", "Traceable lots, selected for expressive flavour and thoughtful growing practices."],
  ["Roasting process", "A gentle, measured roast that honours the character already present in each bean."],
  ["Brewing craft", "Freshly ground, carefully weighed and finished by baristas who take the time to get it right."],
  ["Customer experience", "Warm hospitality, considered details and a table that feels like yours."],
  ["Sustainability", "Seasonal menus, reusable serviceware and closer partnerships that help reduce waste."],
];

export function BrandStory() {
  return (
    <>
      <section id="founder" className="overflow-hidden bg-dark-panel py-24 text-cream sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="relative mx-auto w-full max-w-lg">
            <div className="absolute -bottom-4 -right-4 hidden h-2/3 w-2/3 rounded-[2rem] border border-gold/40 sm:block" aria-hidden="true" />
            <img
              src={founderPortrait}
              alt="Illustrative café founder portrait placeholder, ready to be replaced with Sai Pavan Rali's portrait"
              width={1024}
              height={1280}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-lift"
            />
            <span className="absolute bottom-5 left-5 rounded-full border border-cream/20 bg-espresso/75 px-4 py-2 text-xs text-cream backdrop-blur-md">
              Founder portrait placeholder · Replace anytime
            </span>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow text-gold">A note from our founder</span>
            <h2 className="mt-5 font-display text-5xl leading-[1.05] text-cream sm:text-6xl">
              Meet the founder<span className="text-gold">.</span>
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.16em] text-gold/85">Sai Pavan Rali · Founder &amp; Creative Director</p>
            <p className="mt-8 max-w-2xl text-base leading-8 text-cream/75">
              Bean Haven began with a simple belief: a thoughtfully made cup can make an ordinary day feel generous. Sai Pavan Rali imagined a neighbourhood café where specialty coffee meets the warmth of being truly welcomed — where origins have a story, the barista knows their craft, and every guest has room to linger.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-cream/75">
              That idea grew into a roastery and lounge shaped by curiosity, hospitality and care. From choosing expressive beans to remembering a familiar order, we still measure our work by the moments people carry with them when they leave.
            </p>
            <div className="mt-9 border-l border-gold/60 pl-5 font-display text-2xl italic leading-snug text-cream sm:text-3xl">
              Every cup is an invitation to stay a little longer.
            </div>
          </Reveal>
        </div>
      </section>

      <section id="philosophy" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="eyebrow text-caramel">Our philosophy</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-espresso sm:text-5xl">
              Good coffee begins long before the first pour.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              We follow the bean from thoughtful sourcing to the final cup, bringing the same patience to every step and the same welcome to every table.
            </p>
          </Reveal>

          <div id="coffee-journey" className="mt-14 grid gap-7 border-t border-border pt-8 md:grid-cols-3 md:gap-10">
            {journey.map((step, index) => (
              <Reveal key={step.number} delay={index * 90}>
                <article className="h-full border-b border-border pb-7 md:border-b-0 md:border-l md:pl-7">
                  <span className="font-display text-3xl italic text-gold">{step.number}</span>
                  <h3 className="mt-4 font-display text-2xl text-espresso">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="coffee-craft" className="bg-secondary/55 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow text-caramel">From origin to welcome</span>
            <h2 className="mt-4 font-display text-4xl leading-tight text-espresso sm:text-5xl">The details are the difference.</h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              Our craft is a collection of considered choices: respect for the people behind each harvest, a careful roast, a precise brew and a space that makes everyone feel at home.
            </p>
          </Reveal>
          <div className="divide-y divide-border border-y border-border">
            {craftNotes.map(([title, text], index) => (
              <Reveal key={title} delay={index * 55}>
                <article className="grid gap-2 py-5 sm:grid-cols-[minmax(10rem,0.7fr)_1.3fr] sm:gap-8">
                  <h3 className="font-display text-xl text-espresso">{title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}