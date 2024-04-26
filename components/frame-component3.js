import Divflex from "./divflex";

const FrameComponent3 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-2.5 box-border gap-[20px] max-w-full text-center text-15xl-5 text-black font-georgia lg:flex-wrap">
      <Divflex
        defineOncepng="/flexibilitypng@2x.png"
        defineOnceUseEverywhere="All roles can play"
        buildASystemWhereAllVisua="Make it easy for anyone to analyse using metrics - no SQL or training"
        definitionsNoMoreRepeatin="needed. Help any team to answer their own questions."
        propFlex="0.9233"
        propPadding="31px 59px 67px 60px"
        propOverflow="hidden"
        propPadding1="unset"
        propFlex1="unset"
        propWidth="260.1px"
        propDisplay="flex"
      />
      <div className="flex-1 rounded-2xl box-border overflow-hidden flex flex-col items-start justify-end pt-[464px] pb-[67px] pr-[37.4px] pl-9 gap-[18px] min-w-[435px] max-w-full border-[1px] border-solid border-gray-900 lg:flex-1 mq750:pt-[302px] mq750:pb-11 mq750:box-border mq750:min-w-full">
        <div className="self-stretch flex flex-row items-start justify-center">
          <div className="relative leading-[42px] mq1050:text-9xl mq1050:leading-[34px] mq450:text-2xl mq450:leading-[25px]">
            <p className="m-0">Easy for everyone.</p>
            <p className="m-0">Deep for experts.</p>
          </div>
        </div>
        <div className="self-stretch h-[43px] relative text-lg leading-[25px] font-light font-abeezee text-slategray flex items-center shrink-0">
          <span>
            <p className="m-0">
              With multi-layered analysis, experts get to insights faster.
              Combine metrics,
            </p>
            <p className="m-0">drill down and overlay functions.</p>
          </span>
        </div>
        <div className="w-[500px] h-[250px] relative overflow-hidden shrink-0 hidden max-w-full" />
      </div>
    </div>
  );
};

export default FrameComponent3;
