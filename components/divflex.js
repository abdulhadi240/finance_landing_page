import { useMemo } from "react";

const Divflex = ({
  defineOncepng,
  defineOnceUseEverywhere,
  buildASystemWhereAllVisua,
  definitionsNoMoreRepeatin,
  propFlex,
  propPadding,
  propOverflow,
  propPadding1,
  propFlex1,
  propWidth,
  propDisplay,
}) => {
  const divflex1Style = useMemo(() => {
    return {
      flex: propFlex,
      padding: propPadding,
      overflow: propOverflow,
    };
  }, [propFlex, propPadding, propOverflow]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const defineOnceUseStyle = useMemo(() => {
    return {
      flex: propFlex1,
      width: propWidth,
      display: propDisplay,
    };
  }, [propFlex1, propWidth, propDisplay]);

  return (
    <div
      className="flex-[0.8822] rounded-2xl box-border flex flex-col items-start justify-start pt-[39px] px-[72px] pb-[63px] gap-[14.5px] min-w-[435px] max-w-full text-center text-15xl-3 text-black font-georgia border-[1px] border-solid border-gray-900 lg:flex-1 mq750:pt-[25px] mq750:px-9 mq750:pb-[41px] mq750:box-border mq750:min-w-full"
      style={divflex1Style}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-8 pl-[31.8px] box-border max-w-full">
        <img
          className="h-[460px] flex-1 relative max-w-full overflow-hidden object-cover"
          loading="lazy"
          alt=""
          src={defineOncepng}
        />
      </div>
      <div
        className="self-stretch flex flex-row items-start justify-start py-0 pr-[47px] pl-[46.6px] mq750:pl-[23px] mq750:pr-[23px] mq750:box-border"
        style={frameDivStyle}
      >
        <div
          className="flex-1 relative leading-[42px] mq1050:text-8xl mq1050:leading-[34px] mq450:text-2xl mq450:leading-[25px]"
          style={defineOnceUseStyle}
        >
          {defineOnceUseEverywhere}
        </div>
      </div>
      <div className="self-stretch h-[43px] relative text-lg leading-[25px] font-light font-abeezee text-slategray flex items-center shrink-0">
        <span>
          <p className="m-0">{buildASystemWhereAllVisua}</p>
          <p className="m-0">{definitionsNoMoreRepeatin}</p>
        </span>
      </div>
    </div>
  );
};

export default Divflex;
