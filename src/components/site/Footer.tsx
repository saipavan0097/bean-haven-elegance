import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Coffee, Github, Instagram, Linkedin, Mail, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navLinks, hours } from "./data";

const emailSchema = z.string().trim().email().max(255);

export function Footer() {
  const [email, setEmail] = useState("");

  const subscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setEmail("");
    toast.success("You're on the list", {
      description: "Your free coffee coupon is on its way, with our monthly roast letter.",
    });
  };

  return (
    <footer className="bg-espresso pt-20 text-cream/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 pb-16 lg:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full border border-gold/50 bg-gold/15 text-gold">
                <Coffee className="size-5" aria-hidden />
              </span>
              <span className="font-display text-xl text-cream">Bean Haven</span>
            </a>
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              A small-batch roastery and lounge on Wilder Lane, pouring unhurried coffee since 2008.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h3 className="eyebrow text-gold">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="eyebrow text-gold">Opening Hours</h3>
            <ul className="mt-5 space-y-3 text-sm">
              {hours.map((h) => (
                <li key={h.day}>
                  <span className="block text-cream/90">{h.day}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-gold">Newsletter</h3>
            <p className="mt-5 text-sm leading-relaxed">
              Join the roast letter and receive a free coffee coupon with your welcome email.
            </p>
            <form onSubmit={subscribe} className="mt-5 flex gap-2">
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <Input
                id="newsletter"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                maxLength={255}
                className="h-11 rounded-full border-cream/20 bg-cream/8 text-cream placeholder:text-cream/40"
              />
              <Button type="submit" variant="gold" size="icon" aria-label="Subscribe">
                <Send className="size-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/12 py-7 text-xs sm:flex-row">
          <p>© {new Date().getFullYear()} Bean Haven Roastery. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#faq" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#faq" className="transition-colors hover:text-gold">
              Terms
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-cream/12 py-6 text-xs sm:flex-row">
          <p className="text-cream/55">Designed &amp; Developed by <span className="text-gold">Sai Pavan Rali</span></p>
          <div className="flex items-center gap-2">
            {[
              { label: "GitHub", href: "https://github.com/saipavan0097", Icon: Github },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/saipavanrali/", Icon: Linkedin },
              { label: "Instagram", href: "https://instagram.com/saipavanrali", Icon: Instagram },
              { label: "Email", href: "mailto:saipavanvizag601@gmail.com", Icon: Mail },
              { label: "WhatsApp", href: "https://wa.me/917661930097", Icon: MessageCircle },
            ].map(({ label, href, Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} aria-label={`${label} — Sai Pavan Rali`} className="flex size-9 items-center justify-center rounded-full border border-cream/15 text-cream/55 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:text-gold">
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
