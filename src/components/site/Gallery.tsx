import { useCallback, useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "./SectionHeading";
import { gallery } from "./data";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: number) => setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <section id="gallery" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Inside the"
          accent="Haven"
          description="Brass, walnut and steam — a look at the room, the roast and the people who fill both."
        />

        <ul className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {gallery.map((img, i) => (
            <Reveal
              as="li"
              key={img.alt}
              delay={i * 70}
              className={cn(i === 0 || i === 5 ? "lg:col-span-2 lg:row-span-1" : "")}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Open image: ${img.alt}`}
                className="group relative block size-full overflow-hidden rounded-[1.5rem] shadow-soft transition-shadow duration-500 hover:shadow-lift"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  width={1000}
                  height={1000}
                  loading="lazy"
                  className="aspect-square size-full object-cover transition-transform duration-[900ms] group-hover:scale-115"
                />
                <span className="absolute inset-0 bg-espresso/0 transition-colors duration-500 group-hover:bg-espresso/45" />
                <span className="glass absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 rounded-full p-3.5 text-cream opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <Expand className="size-5" aria-hidden />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-espresso/95 p-4 backdrop-blur-md"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10"
          >
            <X className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-3 flex size-12 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 sm:left-8"
          >
            <ChevronLeft className="size-6" />
          </button>
          <figure onClick={(e) => e.stopPropagation()} className="max-w-4xl">
            <img
              src={gallery[index].src}
              alt={gallery[index].alt}
              width={1000}
              height={1000}
              className="max-h-[78vh] w-full rounded-3xl object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-cream/70">
              {gallery[index].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-3 flex size-12 items-center justify-center rounded-full border border-cream/25 text-cream transition-colors hover:bg-cream/10 sm:right-8"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
