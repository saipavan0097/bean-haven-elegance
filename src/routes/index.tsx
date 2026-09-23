import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { MenuSection } from "@/components/site/MenuSection";
import { Offers } from "@/components/site/Offers";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { WhyUs } from "@/components/site/WhyUs";
import { Reservation } from "@/components/site/Reservation";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FeaturedDrinks } from "@/components/site/FeaturedDrinks";
import { LoadingScreen } from "@/components/site/LoadingScreen";

const title = "Bean Haven — Small-Batch Coffee Roastery & Lounge";
const description =
  "Slow-roasted single origins poured by award-winning baristas in a walnut-and-brass lounge. Explore the Bean Haven menu, gallery and book your table on Wilder Lane.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CafeOrCoffeeShop",
          name: "Bean Haven",
          description,
          servesCuisine: "Coffee",
          priceRange: "$$",
          telephone: "+44 20 7946 0132",
          email: "hello@beanhaven.coffee",
          address: {
            "@type": "PostalAddress",
            streetAddress: "42 Wilder Lane, Aldgate",
            addressLocality: "London",
            postalCode: "EC3N 1AB",
            addressCountry: "GB",
          },
          openingHours: [
            "Mo-Th 07:00-21:00",
            "Fr 07:00-23:00",
            "Sa 08:00-23:00",
            "Su 08:00-18:00",
          ],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1284",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <LoadingScreen />
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <FeaturedDrinks />
        <Offers />
        <Gallery />
        <WhyUs />
        <Testimonials />
        <Reservation />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
