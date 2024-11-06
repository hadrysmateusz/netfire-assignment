import { Outlet } from "react-router-dom";
import { DiscountCodeBanner } from "../components/DiscountCodeBanner";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const Root = () => {
  return (
    <>
      <DiscountCodeBanner />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};
