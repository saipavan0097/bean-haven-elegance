import { Plus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { menu } from "./data";

export function MenuSection() {
  return (
    <section id="menu" className="bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Menu"
          title="Crafted cup by cup,"
          accent="never in batches"
          description="Six house classics pulled on our brass two-group machine, each dialled in daily against the morning's roast."
        />

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {menu.map((item, i) => (
            <Reveal as="li" key={item.name} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.name} served at Bean Haven`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
                  />
                  <span className="glass eyebrow absolute left-4 top-4 rounded-full px-3 py-1.5 text-cream">
                    {item.note}
                  </span>
                </div>
                <div className="p-7">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-2xl text-espresso">{item.name}</h3>
                    <p className="font-display text-2xl text-gold">{item.price}</p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                  <Button variant="outlineGold" size="sm" className="mt-6">
                    <Plus className="size-4" aria-hidden />
                    Add to order
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
