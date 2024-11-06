import { DiscountCodeBanner } from "../components/DiscountCodeBanner";
import { ExampleSection } from "../components/ExampleSection";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navbar } from "../components/Navbar";

export const Root = () => {
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
