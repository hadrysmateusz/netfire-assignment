import { forwardRef } from "react";

export const Timer = forwardRef<HTMLDivElement, object>((_, ref) => {
  return (
    <div ref={ref} className="font-bold text-brownish-2 w-12 min-w-12 text-left">
      00:00
    </div>
  );
});
