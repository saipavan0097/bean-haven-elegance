import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a contact number")
    .max(24)
    .regex(/^[0-9+()\-\s]+$/, "Phone can only contain digits and + ( ) -"),
  guests: z.coerce.number().int().min(1, "At least one guest").max(40, "Call us for 40+ guests"),
  date: z.string().min(1, "Please pick a date"),
  time: z.string().min(1, "Please pick a time"),
  message: z.string().trim().max(600, "Please keep notes under 600 characters"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

export function Reservation() {
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [confirmedName, setConfirmedName] = useState<string | null>(null);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form));
    const parsed = schema.safeParse(raw);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();
      setConfirmedName(parsed.data.name.split(" ")[0] ?? parsed.data.name);
      toast.success("Table requested", {
        description: `Thank you, ${parsed.data.name.split(" ")[0]} — we'll confirm your table by email within the hour.`,
      });
    }, 900);
  };

  const field = (name: keyof Errors) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1.5 text-xs text-destructive">
        {errors[name]}
      </p>
    ) : null;

  return (
    <section id="reserve" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="overflow-hidden rounded-[2.25rem] border border-border bg-card shadow-lift">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-dark-panel relative p-10 sm:p-12">
              <span className="eyebrow text-gold">Reservations</span>
              <h2 className="mt-4 text-4xl leading-tight text-cream">
                Reserve your <span className="text-gold-gradient italic">corner</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-cream/70">
                Tables are held for ninety minutes. Tell us the occasion and we will have the right
                seat, the right roast and — if you ask — a candle waiting.
              </p>
              <ul className="mt-10 space-y-4 text-sm text-cream/75">
                <li>Confirmation by email within the hour</li>
                <li>Groups of up to 40 for private evenings</li>
                <li>Free cancellation up to 2 hours before</li>
              </ul>
              <CalendarCheck
                className="absolute bottom-8 right-8 size-24 text-gold/15"
                aria-hidden
              />
            </div>

            <form onSubmit={onSubmit} noValidate className="p-8 sm:p-12">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Amelia Hartwell"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className="mt-2 h-11 rounded-xl"
                  />
                  {field("name")}
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className="mt-2 h-11 rounded-xl"
                  />
                  {field("email")}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="+1 415 555 0132"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="mt-2 h-11 rounded-xl"
                  />
                  {field("phone")}
                </div>
                <div>
                  <Label htmlFor="guests">Guests</Label>
                  <Input
                    id="guests"
                    name="guests"
                    type="number"
                    min={1}
                    max={40}
                    defaultValue={2}
                    aria-invalid={!!errors.guests}
                    aria-describedby={errors.guests ? "guests-error" : undefined}
                    className="mt-2 h-11 rounded-xl"
                  />
                  {field("guests")}
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    aria-invalid={!!errors.date}
                    aria-describedby={errors.date ? "date-error" : undefined}
                    className="mt-2 h-11 rounded-xl"
                  />
                  {field("date")}
                </div>
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    aria-invalid={!!errors.time}
                    aria-describedby={errors.time ? "time-error" : undefined}
                    className="mt-2 h-11 rounded-xl"
                  />
                  {field("time")}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={600}
                    placeholder="Birthday brunch — a quiet table by the window would be perfect."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className="mt-2 rounded-xl"
                  />
                  {field("message")}
                </div>
              </div>

              {confirmedName ? (
                <div role="status" className="mt-8 rounded-xl border border-gold/35 bg-gold/10 p-4 text-sm leading-6 text-espresso">
                  Thank you, {confirmedName}. Your request is in — confirmation will arrive by email within the hour.
                </div>
              ) : null}
              <Button type="submit" variant="espresso" size="xl" disabled={submitting} className="mt-5 w-full transition-transform duration-300 hover:-translate-y-1">
                {submitting ? "Sending request…" : "Reserve Table"}
              </Button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
