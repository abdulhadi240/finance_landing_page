const FrameComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-42xl-8 text-black font-georgia">
      <div className="w-[556.8px] flex flex-col items-end justify-start gap-[24px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[20.2px] pl-5 box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 px-[58px] box-border max-w-full mq750:pl-[29px] mq750:pr-[29px] mq750:box-border">
              <img
                className="h-[400px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
            </div>
            <div className="self-stretch relative leading-[64px] mq1050:text-30xl mq1050:leading-[51px] mq450:text-18xl mq450:leading-[38px]">
              Get started for free
            </div>
          </div>
        </div>
        <h3 className="m-0 self-stretch h-6 relative text-5xl leading-[32px] font-light font-abeezee text-slategray flex items-center justify-center shrink-0 mq450:text-lgi mq450:leading-[26px]">
          Play around with it first. Pay and add your team later.
        </h3>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="w-[298.7px] flex flex-row items-start justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] pt-[15.5px] pb-[16.5px] pr-[10.1px] pl-4 bg-gray-500 rounded-4xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-200">
              <div className="relative text-base leading-[16px] font-noto-sans-carian text-white text-center inline-block min-w-[85px]">
                Get started
              </div>
            </button>
            <button className="cursor-pointer pt-3.5 pb-[15px] pr-[11px] pl-4 bg-[transparent] flex-1 rounded-4xs flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-gainsboro hover:bg-lightgray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightgray-100">
              <div className="flex-1 relative text-base leading-[16px] font-noto-sans-carian text-gray-400 text-center">
                Request a demo →
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
