import Divpt1 from "./divpt1";
import Divpt from "./divpt";

const FrameComponent1 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-end py-0 px-14 box-border max-w-full text-left text-lgi-8 text-black font-noto-sans-carian lg:pl-7 lg:pr-7 lg:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[16px] max-w-full lg:flex-wrap">
          <div className="flex-[0.8961] rounded-2xl bg-oldlace flex flex-col items-start justify-start pt-[104px] px-8 pb-0 box-border relative gap-[15px] min-w-[400px] max-w-full lg:flex-1 mq750:pt-[68px] mq750:box-border mq750:min-w-full">
            <img
              className="w-12 h-12 absolute !m-[0] top-[32px] left-[32px] overflow-hidden shrink-0"
              alt=""
              src="/svg-1.svg"
            />
            <div className="w-[275.1px] flex flex-col items-start justify-start gap-[5px]">
              <div className="relative leading-[27px] whitespace-nowrap">
                Powerful mobile app
              </div>
              <div className="self-stretch h-10 relative text-mid leading-[23px] font-light font-abeezee text-darkgray-200 flex items-center shrink-0">
                <span>
                  <p className="m-0">All the features of the desktop app in</p>
                  <p className="m-0">your pocket</p>
                </span>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-0 px-1 box-border max-w-full">
              <img
                className="w-[388px] relative max-h-full overflow-hidden shrink-0 object-cover max-w-full"
                loading="lazy"
                alt=""
                src="/mobileapppng@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[15.9px] min-w-[400px] max-w-full lg:flex-1 mq750:min-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq750:flex-wrap">
              <Divpt1
                divpx5="/divpx5.svg"
                rolesControl={`Roles & control`}
                userRolesPrivateMetrics="User roles, private metrics,"
                resourceLevelSharing="resource-level sharing"
              />
              <Divpt1
                divpx5="/divpx5-1.svg"
                rolesControl={`Share & export`}
                userRolesPrivateMetrics="Share charts and deep links,"
                resourceLevelSharing="export data to sheets"
                propWidth="279.6px"
              />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[16px] text-lgi-7 mq750:flex-wrap">
              <div className="flex-1 rounded-2xl bg-whitesmoke flex flex-col items-start justify-start pt-8 px-0 pb-[43px] gap-[103.3px] mq450:gap-[52px]">
                <img
                  className="self-stretch h-[52px] relative max-w-full overflow-hidden shrink-0 object-cover"
                  loading="lazy"
                  alt=""
                  src="/divpx5-2@2x.png"
                />
                <div className="w-[285px] flex flex-row items-start justify-start py-0 px-8 box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                    <div className="relative leading-[27px]">
                      Version-control
                    </div>
                    <div className="self-stretch h-10 relative text-mid leading-[23px] font-light font-abeezee text-darkgray-100 flex items-center shrink-0">
                      <span>
                        <p className="m-0">Define metrics in your dbt</p>
                        <p className="m-0">project and connect to Steep.</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-2xl bg-whitesmoke flex flex-col items-start justify-start pt-8 px-0 pb-[45px] gap-[93.3px] text-xl mq450:gap-[47px]">
                <img
                  className="self-stretch h-[60px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/divpx5-3.svg"
                />
                <div className="w-[286.9px] flex flex-row items-start justify-start py-0 px-8 box-border">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                    <div className="w-[122px] relative leading-[27px] flex items-center mq450:text-base mq450:leading-[22px]">
                      Team spaces
                    </div>
                    <div className="self-stretch h-10 relative text-mid leading-[23px] font-light font-abeezee text-darkgray-100 flex items-center shrink-0">
                      <span>
                        <p className="m-0">Create a space for each team</p>
                        <p className="m-0">and organize content.</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[16px] max-w-full text-xl">
          <Divpt
            divpx5="/divpx5-4.svg"
            joins="Joins"
            defineJoinsAsABasisFor="Define joins as a basis for"
            metrics="metrics"
          />
          <Divpt
            divpx5="/divpx5-5.svg"
            joins="Custom SQL"
            defineJoinsAsABasisFor="Custom calculations for"
            metrics="bespoke metrics"
            propWidth="unset"
            propFlex="unset"
            propMinWidth="115px"
            propAlignSelf="unset"
          />
          <div className="flex-1 rounded-2xl bg-honeydew overflow-hidden flex flex-col items-start justify-start pt-8 px-0 pb-[43px] box-border min-w-[400px] max-w-full mq750:min-w-full">
            <img
              className="self-stretch h-[178px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/visuzlizationspng@2x.png"
            />
            <div className="w-[305.6px] flex flex-row items-start justify-start py-0 px-8 box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                <div className="relative leading-[27px] inline-block min-w-[128px] mq450:text-base mq450:leading-[22px]">
                  Visualizations
                </div>
                <div className="self-stretch h-10 relative text-mid leading-[23px] font-light font-abeezee text-gray-200 flex items-center shrink-0">
                  <span>
                    <p className="m-0">Line, bar, rank, combos, targets,</p>
                    <p className="m-0">big number, widgets</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
