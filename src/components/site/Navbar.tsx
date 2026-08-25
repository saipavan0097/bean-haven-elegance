import { useEffect, useState } from "react";
import { Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "./data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-espresso/92 shadow-lift backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full border border-gold/50 bg-gold/15 text-gold transition-transform duration-500 group-hover:rotate-12">
            <Coffee className="size-5" aria-hidden />
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl tracking-wide text-cream">Bean Haven</span>
            <span className="eyebrow block text-[0.55rem] text-gold/80">Roastery &amp; Lounge</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-cream/80 transition-colors hover:text-gold after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Button asChild variant="gold" size="lg" className="hidden sm:inline-flex">
            <a href="#reserve">Book a Table</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={cn(
          "overflow-hidden bg-espresso/97 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="space-y-1 px-6 pb-6 pt-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-cream/85 transition-colors hover:bg-cream/8 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button asChild variant="gold" size="lg" className="w-full">
              <a href="#reserve" onClick={() => setOpen(false)}>
                Book a Table
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
