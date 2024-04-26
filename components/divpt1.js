import { useMemo } from "react";

const Divpt1 = ({
  divpx5,
  rolesControl,
  userRolesPrivateMetrics,
  resourceLevelSharing,
  propWidth,
}) => {
  const errorHandlerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="flex-1 rounded-2xl bg-whitesmoke flex flex-col items-start justify-start pt-8 px-0 pb-[43.1px] gap-[95.2px] text-left text-lgi-8 text-black font-noto-sans-carian mq450:gap-[48px]">
      <img
        className="self-stretch h-[60px] relative max-w-full overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src={divpx5}
      />
      <div
        className="w-[265.1px] flex flex-row items-start justify-start py-0 px-8 box-border"
        style={errorHandlerStyle}
      >
        <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
          <div className="relative leading-[27px]">{rolesControl}</div>
          <div className="self-stretch h-10 relative text-mid leading-[23px] font-light font-abeezee text-darkgray-100 flex items-center shrink-0">
            <span>
              <p className="m-0">{userRolesPrivateMetrics}</p>
              <p className="m-0">{resourceLevelSharing}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Divpt1;
