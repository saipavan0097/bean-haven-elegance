import { Bean, GraduationCap, Armchair, Sprout, Timer, Leaf } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { features } from "./data";

const icons: Record<string, LucideIcon> = {
  beans: Bean,
  barista: GraduationCap,
  ambience: Armchair,
  origin: Sprout,
  fast: Timer,
  organic: Leaf,
};

export function WhyUs() {
  return (
    <section className="bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Six reasons regulars"
          accent="come back daily"
          description="Bean Haven is engineered around the details most cafés overlook."
        />

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = icons[f.icon] ?? Bean;
            return (
              <Reveal as="li" key={f.title} delay={i * 70}>
                <article className="group h-full rounded-[1.75rem] border border-border bg-card p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-lift">
                  <span className="flex size-14 items-center justify-center rounded-2xl bg-gold/15 text-caramel transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-gold group-hover:text-accent-foreground">
                    <Icon className="size-6 transition-transform duration-500 group-hover:-rotate-6" aria-hidden />
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-espresso">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
