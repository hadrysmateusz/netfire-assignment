export const ExampleSection = () => {
  return (
    <section className="w-full font-primary flex justify-center items-center pt-[61px] pb-[71px] bg-gray-1">
      <div className="w-page-container flex justify-center items-center flex-col">
        <div className="uppercase text-gray-4 rounded-[14px] border border-brownish-6 bg-gray-2 bg-opacity-[19%] w-max h-[53px] px-[22px] flex items-center text-xs mb-8 tracking-[0.07em] font-medium">
          Example section
        </div>
        <p className="font-semibold text-3xl/[1.26em] color-white text-gray-4 pb-[41px] tracking-tighter text-center">
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
