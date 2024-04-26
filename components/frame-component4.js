const FrameComponent4 = () => {
  return (
    <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-2.5 box-border gap-[100px] max-w-full text-center text-42xl-4 text-black font-georgia mq750:gap-[50px] mq450:gap-[25px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[663.9px] flex flex-col items-end justify-start gap-[30px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
            <div className="w-[486.4px] relative leading-[64px] flex items-center shrink-0 mq1050:text-30xl mq1050:leading-[51px] mq450:text-18xl mq450:leading-[38px]">
              <span className="w-full">
                <p className="m-0">Analysis made for</p>
                <p className="m-0">
                  <i>everyone</i>
                </p>
              </span>
            </div>
          </div>
          <h3 className="m-0 self-stretch relative text-5xl leading-[32px] font-light font-abeezee text-slategray mq450:text-lgi mq450:leading-[26px]">
            Explore metrics directly. Go deeper with multi-layered analysis.
          </h3>
        </div>
      </div>
      <div className="self-stretch h-[684.7px] rounded-2xl bg-whitesmoke flex flex-row items-start justify-start py-11 px-[72px] box-border gap-[72px] max-w-full text-left text-8xl-6 lg:pl-9 lg:pr-9 lg:box-border mq750:gap-[36px] mq750:pt-[29px] mq750:pb-[29px] mq750:box-border mq450:gap-[18px]">
        <div className="w-[295.9px] flex flex-col items-start justify-start pt-[115.9px] px-0 pb-0 box-border mq750:pt-[75px] mq750:box-border mq1050:hidden">
          <div className="self-stretch flex flex-col items-start justify-start gap-[36px] mq450:gap-[18px]">
            <div className="w-[278.2px] flex flex-col items-start justify-start gap-[11px]">
              <div className="relative leading-[32px] inline-block min-w-[96px] mq450:text-3xl mq450:leading-[26px]">
                Explore
              </div>
              <div className="self-stretch h-[68px] relative text-lg leading-[25px] font-light font-abeezee text-gray-800 flex items-center shrink-0">
                <span>
                  <p className="m-0">Intuitive analysis for all roles.</p>
                  <p className="m-0">All the visualizations you need built</p>
                  <p className="m-0">natively for the semantic layer.</p>
                </span>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-mid text-darkgray-100 font-abeezee">
              <div className="self-stretch flex flex-row items-start justify-start py-[9px] px-[19px] text-gray-400 border-l-[3px] border-solid border-gray-400">
                <div className="relative leading-[17px] font-light inline-block min-w-[32.2px]">
                  Line
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[9px] px-[19px] border-l-[3px] border-solid border-gray-900">
                <div className="w-[35.3px] relative leading-[17px] font-light flex items-center shrink-0">
                  Bars
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-[9px] px-[19px] border-l-[3px] border-solid border-gray-900">
                <div className="relative leading-[17px] font-light inline-block min-w-[84.5px]">
                  Breakdown
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-row items-start justify-start py-[9px] px-[19px] border-l-[3px] border-solid border-gray-900">
                  <div className="relative leading-[17px] font-light inline-block min-w-[63.5px]">
                    Combos
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[9px] px-[19px] border-l-[3px] border-solid border-gray-900">
                  <div className="relative leading-[17px] font-light inline-block min-w-[73.4px]">
                    Functions
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-[9px] px-[19px] border-l-[3px] border-solid border-gray-900">
                  <div className="w-[39.7px] relative leading-[17px] font-light flex items-center shrink-0">
                    Rank
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[596.7px] flex-1 relative rounded-xl max-w-[calc(100%_-_368px)] flex items-center justify-center">
          <img
            className="h-full flex-1 overflow-hidden object-contain absolute left-[0px] top-[20px] w-full [transform:scale(1.067)] mq1050:max-w-full"
            loading="lazy"
            alt=""
            src="/explorelinespng@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
