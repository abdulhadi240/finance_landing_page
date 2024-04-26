const FrameComponent6 = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[18.1px] pr-0 pl-px box-border max-w-full shrink-0 text-left text-9xl text-black font-noto-sans-carian">
      <div className="w-[1200px] flex flex-row items-start justify-start gap-[20px] max-w-full mq1050:flex-wrap">
        <div className="flex-1 rounded-xl box-border flex flex-row items-start justify-start py-[67px] pr-10 pl-12 gap-[67.5px] min-w-[468px] max-w-full border-[1px] border-solid border-gray-600 mq750:flex-wrap mq750:gap-[34px] mq750:pl-6 mq750:box-border mq750:min-w-full mq450:gap-[17px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[25.5px] px-0 pb-0 box-border min-w-[235px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[13px]">
              <h2 className="m-0 w-[261px] relative text-inherit leading-[27px] font-normal font-inherit flex items-center mq450:text-3xl mq450:leading-[22px]">
                Steep in 60 seconds
              </h2>
              <div className="self-stretch h-[43px] relative text-lg leading-[25px] font-light font-abeezee text-slategray flex items-center shrink-0">
                <span>
                  <p className="m-0">
                    Learn about Steep and how it can change the
                  </p>
                  <p className="m-0">way your organization works with data.</p>
                </span>
              </div>
            </div>
          </div>
          <img
            className="h-[138px] w-[200px] relative mq750:flex-1"
            loading="lazy"
            alt=""
            src="/divhidden.svg"
          />
        </div>
        <div className="w-[460px] rounded-2xl box-border flex flex-col items-start justify-start pt-[37px] px-8 pb-[39px] gap-[18.4px] min-w-[459.99999999999994px] max-w-full border-[1px] border-solid border-gray-600 mq750:min-w-full mq1050:flex-1">
          <div className="w-[137.9px] flex flex-row items-start justify-start py-0 pr-px pl-[1.1px] box-border">
            <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
              <img
                className="h-[32.8px] w-[32.8px] relative"
                loading="lazy"
                alt=""
                src="/clip-path-group.svg"
              />
              <div className="flex flex-col items-start justify-start pt-[1.4px] px-0 pb-0">
                <img
                  className="w-[30.6px] h-[30.6px] relative"
                  loading="lazy"
                  alt=""
                  src="/vector.svg"
                />
              </div>
              <img
                className="h-[33.5px] w-[28.5px] relative min-h-[34px]"
                loading="lazy"
                alt=""
                src="/clip-path-group-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
            <h2 className="m-0 h-8 relative text-inherit leading-[32px] font-normal font-inherit flex items-center shrink-0 max-w-full mq450:text-3xl mq450:leading-[26px]">
              Join the semantic movement
            </h2>
            <div className="self-stretch h-[43px] relative text-lg leading-[25px] font-light font-abeezee text-slategray flex items-center shrink-0">
              <span>
                <p className="m-0">
                  Steep supports the latest semantic API:s from dbt
                </p>
                <p className="m-0">and Cube.</p>
              </span>
            </div>
          </div>
          <button className="cursor-pointer pt-[9px] pb-1.5 pr-[5px] pl-[13px] bg-[transparent] w-[127.8px] rounded-lg box-border flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gainsboro hover:bg-lightgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray-100">
            <div className="flex-1 relative text-base leading-[21px] font-noto-sans-carian text-gray-400 text-center">
              Learn more →
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
