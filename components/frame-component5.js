import Divflex from "./divflex";

const FrameComponent5 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full text-center text-15xl-3 text-black font-georgia lg:flex-wrap">
      <Divflex
        defineOncepng="/defineoncepng@2x.png"
        defineOnceUseEverywhere="Define once, use everywhere"
        buildASystemWhereAllVisua="Build a system where all visualizations are powered by centralized"
        definitionsNoMoreRepeatin="definitions. No more repeating yourself."
      />
      <div className="flex-1 rounded-2xl box-border flex flex-col items-start justify-end py-[65px] px-[37px] gap-[15px] min-w-[435px] min-h-[680px] max-w-full text-15xl-5 border-[1px] border-solid border-gray-900 lg:flex-1 lg:min-h-[auto] mq750:min-w-full">
        <div className="w-[500px] h-[250px] relative overflow-hidden shrink-0 hidden max-w-full" />
        <div className="self-stretch flex flex-row items-start justify-center">
          <div className="w-[412.1px] relative leading-[42px] flex items-center justify-center shrink-0 mq1050:text-9xl mq1050:leading-[34px] mq450:text-2xl mq450:leading-[25px]">
            Create a common language
          </div>
        </div>
        <div className="self-stretch h-[43px] relative text-lg leading-[25px] font-light font-abeezee text-slategray flex items-center shrink-0">
          <span>
            <p className="m-0">
              Document and organize all your metrics. Create one place where
              everyone
            </p>
            <p className="m-0">can go to explore and consume metrics.</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
