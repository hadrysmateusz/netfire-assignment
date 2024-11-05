import { GradientSeparator } from "../GradientSeparator";

type Props = {
  children: React.ReactNode;
};

export const Banner = ({ children }: Props) => {
  /* TODO: vertical padding doesn't reflect the exact values in design (use arbitrary value or modify theme) */
  return (
    <section>
      <div className="w-full py-6 text-center uppercase font-secondary text-sm bg-gray-2 text-gray-6 font-medium tracking-[0.07em] ">
        {children}
      </div>
      <GradientSeparator />
    </section>
  );
};
