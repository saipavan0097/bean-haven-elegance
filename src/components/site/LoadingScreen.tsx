import { useEffect, useState } from "react";
import { Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1100);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "fixed inset-0 z-[100] grid place-items-center bg-espresso transition-all duration-700",
        visible ? "visible opacity-100" : "invisible opacity-0",
      )}
    >
      <div className="text-center">
        <span className="mx-auto flex size-16 animate-bean-pulse items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
          <Coffee className="size-7" />
        </span>
        <p className="mt-5 font-display text-2xl text-cream">Bean Haven</p>
        <span className="eyebrow mt-2 block text-gold/70">Roasting your welcome</span>
      </div>
    </div>
  );
}