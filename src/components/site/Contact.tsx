import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { hours } from "./data";

const socials = [
  { label: "Instagram", Icon: Instagram },
  { label: "Facebook", Icon: Facebook },
  { label: "Twitter", Icon: Twitter },
  { label: "YouTube", Icon: Youtube },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Come find us on"
          accent="Wilder Lane"
          description="Two minutes from Aldgate station, with the roaster running every Tuesday morning."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
          <Reveal className="space-y-5">
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              {[
                {
                  Icon: MapPin,
                  title: "Address",
                  lines: ["42 Wilder Lane, Aldgate", "London EC3N 1AB"],
                },
                {
                  Icon: Phone,
                  title: "Phone",
                  lines: ["+44 20 7946 0132", "Reservations & catering"],
                },
                {
                  Icon: Mail,
                  title: "Email",
                  lines: ["hello@beanhaven.coffee", "events@beanhaven.coffee"],
                },
              ].map(({ Icon, title, lines }) => (
                <li
                  key={title}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-caramel">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="eyebrow text-muted-foreground">{title}</p>
                    <p className="mt-2 text-espresso">{lines[0]}</p>
                    <p className="text-sm text-muted-foreground">{lines[1]}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-caramel" aria-hidden />
                <p className="eyebrow text-muted-foreground">Business Hours</p>
              </div>
              <ul className="mt-4 divide-y divide-border text-sm">
                {hours.map((h) => (
                  <li key={h.day} className="flex justify-between gap-4 py-2.5">
                    <span className="text-espresso">{h.day}</span>
                    <span className="text-muted-foreground">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#contact"
                  aria-label={`Bean Haven on ${label}`}
                  className="flex size-11 items-center justify-center rounded-full border border-border bg-card text-caramel shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-accent-foreground"
                >
                  <Icon className="size-5" aria-hidden />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-dark-panel relative flex h-full min-h-[26rem] flex-col items-center justify-center overflow-hidden rounded-[2rem] p-10 text-center shadow-lift">
              <div
                className="absolute inset-0 opacity-[0.14]"
                aria-hidden
                style={{
                  backgroundImage:
                    "linear-gradient(oklch(0.87 0.08 88 / 0.6) 1px, transparent 1px), linear-gradient(90deg, oklch(0.87 0.08 88 / 0.6) 1px, transparent 1px)",
                  backgroundSize: "46px 46px",
                }}
              />
              <span className="glass relative flex size-16 items-center justify-center rounded-full text-gold">
                <MapPin className="size-7" aria-hidden />
              </span>
              <p className="relative mt-6 font-display text-3xl text-cream">42 Wilder Lane</p>
              <p className="relative mt-2 max-w-xs text-sm text-cream/65">
                Interactive map loads here — tap for turn-by-turn directions from Aldgate station.
              </p>
              <a
                href="#contact"
                className="glass relative mt-8 rounded-full px-6 py-3 text-sm text-cream transition-colors hover:bg-cream hover:text-espresso"
              >
                Open in Maps
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
