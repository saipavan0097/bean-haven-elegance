import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <span className={cn("eyebrow", tone === "dark" ? "text-gold" : "text-caramel")}>
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 text-4xl leading-tight sm:text-5xl",
          tone === "dark" ? "text-cream" : "text-espresso",
        )}
      >
        {title} {accent ? <span className="text-gold-gradient italic">{accent}</span> : null}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "dark" ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
