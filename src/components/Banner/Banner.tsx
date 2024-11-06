import { GradientSeparator } from "../GradientSeparator";

type Props = {
  children: React.ReactNode;
};

export const Banner = ({ children }: Props) => {
  return (
    <section>
      <div className="w-full h-[62px] flex justify-center items-center text-center uppercase font-secondary text-sm bg-gray-2 text-gray-6 font-medium tracking-[0.07em]">
        <div>{children}</div>
      </div>
      <GradientSeparator />
    </section>
  );
};
