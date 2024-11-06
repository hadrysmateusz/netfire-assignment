import { SectionBadge } from "../SectionBadge";

export const ExampleSection = () => {
  return (
    <section className="w-full font-primary flex justify-center items-center pt-[61px] pb-[71px] bg-gray-1">
      <div className="page-container flex justify-center items-center flex-col">
        <SectionBadge size="md" textColorClass="text-gray-4">
          Example section
        </SectionBadge>
        <p className="font-semibold text-3xl/[1.26em] color-white text-gray-4 mt-8 mb-[41px] tracking-tighter text-center">
          Lorem{" "}
          <span className="bg-main-gradient-3 bg-clip-text text-transparent">
            ipsum dolor sit amet consectetur adipiscing elit etiam molestie ex vel
          </span>{" "}
          massa lacinia ultricies. Suspendisse lobortis vehicula eros, sed sodales eros mollis eget.
          Morbi vitae libero in nunc sodales.
        </p>
        <div className="uppercase tracking-[0.07em] text-brownish-7 font-semibold font-secondary text-sm underline underline-offset-2 cursor-pointer hover:text-brownish-5">
          See more
        </div>
      </div>
    </section>
  );
};
