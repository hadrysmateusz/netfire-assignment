import { DiscountCodeBanner } from "../DiscountCodeBanner";
import { ExampleSection } from "../ExampleSection";
import { Footer } from "../Footer";
import { Hero } from "../Hero";
import { Navbar } from "../Navbar";

export const App = () => {
  return (
    <>
      <DiscountCodeBanner />
      <Navbar />
      <Hero />
      <ExampleSection />
      <Footer />
    </>
  );
};
