const DivbgSecondaryBackground = () => {
  return (
    <div className="self-stretch rounded-2xl bg-gray-100 flex flex-col items-center justify-start pt-[161.8px] px-5 pb-[93.6px] box-border gap-[121.4px] max-w-full text-center text-base text-black font-abeezee mq750:gap-[61px] mq750:pt-[105px] mq750:pb-[61px] mq750:box-border mq450:gap-[30px]">
      <div className="w-[700px] flex flex-row items-start justify-center py-0 pr-[3px] pl-0 box-border max-w-full">
        <div className="w-[213.7px] flex flex-row items-start justify-between gap-[20px]">
          <img
            className="h-[51.7px] w-[51.7px] relative"
            alt=""
            src="/clip-path-group-2.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[2.3px] px-0 pb-0">
            <img
              className="w-[48.2px] h-[48.2px] relative"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <img
            className="self-stretch w-[44.9px] relative max-h-full min-h-[53px]"
            alt=""
            src="/clip-path-group-3.svg"
          />
        </div>
      </div>
      <div className="w-[700px] flex flex-col items-center justify-start pt-[92px] px-5 pb-[106px] box-border relative gap-[44px] min-h-[330px] max-w-full mq750:gap-[22px]">
        <div className="w-[453.1px] h-10 relative leading-[24px] font-light flex items-center shrink-0 max-w-full">
          <span className="w-full">
            <p className="m-0">
              Steep supports the latest semantic API:s from dbt and Cube.
            </p>
            <p className="m-0">
              Keep your metric definitions in one place and version-controlled.
            </p>
          </span>
        </div>
        <div className="w-[453.1px] flex flex-row items-start justify-center max-w-full">
          <button className="cursor-pointer [border:none] pt-[15.5px] pb-[16.5px] pr-[9.8px] pl-4 bg-gray-400 w-[133.8px] rounded-4xs flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-darkslategray-100">
            <div className="flex-1 relative text-base leading-[16px] font-noto-sans-carian text-white text-center">
              Learn more →
            </div>
          </button>
        </div>
        <h1 className="!m-[0] h-[147px] absolute top-[-90px] right-[114.5px] text-41xl leading-[64px] font-normal font-georgia flex items-center mq1050:text-29xl mq1050:leading-[51px] mq450:text-17xl mq450:leading-[38px]">
          <span>
            <p className="m-0">Join the semantic</p>
            <p className="m-0">movement</p>
          </span>
        </h1>
        <img
          className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
          loading="lazy"
          alt=""
          src="/joinssparklessvg.svg"
        />
      </div>
    </div>
  );
};

export default DivbgSecondaryBackground;
