import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./data";

export function Faq() {
  return (
    <section id="faq" className="bg-secondary/60 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Everything you might"
          accent="want to ask"
          description="Still curious? Our team answers messages within a couple of hours."
        />

        <Reveal className="mt-14">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6 shadow-soft transition-colors data-[state=open]:border-gold/50"
              >
                <AccordionTrigger className="py-5 text-left font-display text-lg text-espresso hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
