import {
  NEW_CUSTOMER_DISCOUNT_CODE,
  NEW_CUSTOMER_DISCOUNT_PERCDENT,
} from "../../config/constants";
import { Banner } from "../Banner";

export const DiscountCodeBanner = () => {
  return (
    <Banner>
      New customers get {NEW_CUSTOMER_DISCOUNT_PERCDENT}% off! Use code{" "}
      <span className="text-accent-blue">{NEW_CUSTOMER_DISCOUNT_CODE}</span>
    </Banner>
  );
};
