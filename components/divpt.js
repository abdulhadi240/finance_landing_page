import { useMemo } from "react";

const Divpt = ({
  divpx5,
  joins,
  defineJoinsAsABasisFor,
  metrics,
  propWidth,
  propFlex,
  propMinWidth,
  propAlignSelf,
}) => {
  const subroutineIntegratorStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const conditionSplittingStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const joinsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const defineJoinsAsContainerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className="w-[300px] rounded-2xl bg-whitesmoke flex flex-col items-start justify-start pt-8 px-0 pb-[43px] box-border gap-[118px] text-left text-xl text-black font-noto-sans-carian mq450:gap-[59px]">
      <img
        className="self-stretch h-[60px] relative max-w-full overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={divpx5}
      />
      <div
        className="w-[258.6px] flex flex-row items-start justify-start py-0 px-8 box-border"
        style={subroutineIntegratorStyle}
      >
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[5px]"
          style={conditionSplittingStyle}
        >
          <div
            className="relative leading-[27px] inline-block min-w-[46.9px] mq450:text-base mq450:leading-[22px]"
            style={joinsStyle}
          >
            {joins}
          </div>
          <div
            className="self-stretch h-10 relative text-mid leading-[23px] font-light font-abeezee text-darkgray-100 flex items-center shrink-0"
            style={defineJoinsAsContainerStyle}
          >
            <span>
              <p className="m-0">{defineJoinsAsABasisFor}</p>
              <p className="m-0">{metrics}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divpt;
