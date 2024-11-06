import { BRAND_NAME } from "../../constants";
import { GradientSeparator } from "../GradientSeparator";
import brandNameLogo from "/brand-name-logo.svg";

export const Footer = () => {
  return (
    <footer>
      <GradientSeparator />
      <div className="text-brownish-5 bg-gray-2 flex justify-center py-6">
        <div className="w-page-container flex items-center gap-[71px]">
          <div className="flex items-center shrink-0 gap-6">
            <img src={brandNameLogo} alt={`${BRAND_NAME} logo`} />
            <div className="font-semibold font-primary tracking-[0.07em] text-2xl/[1.33]">
              {BRAND_NAME}
            </div>
          </div>
          <div className="text-2xs/tight tracking-[0.07em] font-secondary">
            © 2024 <b>{BRAND_NAME}</b> All rights reserved. Unauthorized use or copying of this
            brand is strictly prohibited. No part of this website may be reproduced, distributed, or
            transmitted in any form or by any means, including photocopying, recording, or other
            electronic or mechanical methods, without the prior written permission of{" "}
            <b>{BRAND_NAME}</b>, except in the case of brief quotations embodied in critical reviews
            and certain other non-commercial uses permitted by copyright law.
          </div>
        </div>
      </div>
    </footer>
  );
};
