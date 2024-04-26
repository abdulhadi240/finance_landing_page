const Divpx = () => {
  return (
    <footer className="self-stretch flex flex-row items-start justify-start pt-[47px] px-12 pb-[84px] gap-[154.2px] text-left text-mini text-silver font-noto-sans-carian border-t-[1px] border-solid border-gainsboro lg:flex-wrap lg:gap-[77px] lg:justify-center lg:pl-6 lg:pr-6 lg:box-border mq750:gap-[39px] mq450:gap-[19px] mq450:pt-[31px] mq450:pb-[55px] mq450:box-border">
      <div className="flex flex-col items-start justify-start gap-[26.8px] text-darkgray-100 font-abeezee">
        <img
          className="w-8 h-8 relative overflow-hidden shrink-0"
          alt=""
          src="/link--svg-1.svg"
        />
        <div className="flex flex-row items-end justify-start gap-[5.8px]">
          <div className="flex flex-col items-start justify-end pt-0 px-0 pb-0.5">
            <div className="h-[60px] relative leading-[22.5px] font-light flex items-center shrink-0">
              <span>
                <p className="m-0">© Steep Analytics</p>
                <p className="m-0">Stockholm, Sweden</p>
                <p className="m-0">We don't use cookies</p>
              </span>
            </div>
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0"
            alt=""
            src="/svg-2.svg"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-[16px]">
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/link--svg-2.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
            <img
              className="w-4 h-[13px] relative overflow-hidden shrink-0"
              alt=""
              src="/link--svg-3.svg"
            />
          </div>
          <img
            className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
            alt=""
            src="/link--svg-4.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start py-0 pr-[62.7px] pl-0 gap-[20px]">
        <div className="w-[80.3px] relative tracking-[1.5px] leading-[22.5px] uppercase flex items-center">
          Explore
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px] text-base text-black font-abeezee">
          <div className="h-4 relative leading-[24px] font-light flex items-center shrink-0 min-w-[66.9px]">
            Overview
          </div>
          <div className="h-4 relative leading-[24px] font-light flex items-center shrink-0 min-w-[105.1px]">
            Semantic layer
          </div>
          <div className="w-[49.1px] h-4 relative leading-[24px] font-light flex items-center shrink-0">
            Pricing
          </div>
          <div className="h-4 relative leading-[24px] font-light flex items-center shrink-0 min-w-[76.2px]">
            Databases
          </div>
          <div className="h-4 relative leading-[24px] font-light flex items-center shrink-0 min-w-[87.3px]">
            Demo mode
          </div>
        </div>
      </div>
      <div className="w-[167.8px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[20px]">
        <div className="w-[107.1px] relative tracking-[1.5px] leading-[22.5px] uppercase flex items-center">
          Resources
        </div>
        <div className="flex flex-col items-start justify-start gap-[24px] text-base text-black font-abeezee">
          <div className="h-4 relative leading-[24px] font-light flex items-center shrink-0 min-w-[32.2px]">
            Blog
          </div>
          <div className="h-4 relative leading-[24px] font-light flex items-center shrink-0 min-w-[71.1px]">
            Download
          </div>
          <div className="h-4 relative leading-[24px] font-light flex items-center shrink-0 min-w-[81.8px]">
            Help center
          </div>
          <div className="h-4 relative leading-[24px] font-light flex items-center shrink-0 min-w-[82px]">
            What's new
          </div>
          <div className="h-4 relative leading-[24px] font-light flex items-center shrink-0 min-w-[58.3px]">
            Security
          </div>
          <div className="w-[39px] h-4 relative leading-[24px] font-light flex items-center shrink-0">
            Legal
          </div>
        </div>
      </div>
      <div className="w-[117.3px] flex flex-col items-start justify-start gap-[20px]">
        <div className="relative tracking-[1.5px] leading-[22.5px] uppercase inline-block min-w-[85.1px]">
          Company
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-black font-abeezee">
          <div className="h-4 relative leading-[24px] font-light flex items-center shrink-0 min-w-[42.1px]">
            About
          </div>
          <div className="h-4 relative leading-[24px] font-light flex items-center shrink-0 min-w-[56.7px]">
            Support
          </div>
          <div className="self-stretch h-4 relative leading-[24px] font-light flex items-center shrink-0">
            Request a demo
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Divpx;
