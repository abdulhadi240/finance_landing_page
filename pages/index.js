import FrameComponent7 from "../components/frame-component7";
import FrameComponent6 from "../components/frame-component6";
import Divpb from "../components/divpb";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import DivbgSecondaryBackground from "../components/divbg-secondary-background";
import FrameComponent from "../components/frame-component";
import Divpx from "../components/divpx";
import Link from "next/link";

const Frame = () => {
  return (
    <div className="w-full h-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[21.6px] px-[39.7px] pb-[57.2px] box-border gap-[78px] leading-[normal] tracking-[normal] text-center text-base text-white font-noto-sans-carian mq750:gap-[39px] mq1050:h-auto mq450:gap-[19px]">
      <div className="mt-[-126px] w-[127.1px] flex flex-row items-start justify-end py-0 px-2 box-border">
        <div className="flex-1 rounded-4xs bg-gray-500 flex flex-row items-start justify-start pt-[15.5px] pb-[16.5px] pr-[10.1px] pl-4 whitespace-nowrap">
          <Link href='https://ml-client-git-demi-abdulhadi240s-projects.vercel.app/dashboard'><div className="flex-1 relative leading-[16px]">Get started</div></Link>
        </div>
      </div>
      <FrameComponent7 />
      <FrameComponent6 />
      <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[50px] box-border gap-[10px] max-w-full shrink-0 text-center text-[32.8px] text-black font-georgia lg:pb-[21px] lg:box-border mq750:pb-5 mq750:box-border">
        <img
          className="relative self-stretch object-cover max-w-full max-h-full overflow-hidden"
          loading="lazy"
          alt=""
          src="/analysisforeveryonepng@2x.png"
        />
        <div className="self-stretch rounded-2xl bg-whitesmoke flex flex-col items-center justify-start pt-[76px] px-5 pb-[84px] box-border gap-[23px] max-w-full mq450:pt-[49px] mq450:pb-[55px] mq450:box-border">
          <i className="w-[726.1px] relative leading-[44px] flex items-center max-w-full mq1050:text-7xl mq1050:leading-[35px] mq450:text-xl mq450:leading-[26px]">
            <span className="w-full">
              <p className="m-0">
                “Steep has quickly become the go-to place for any
              </p>
              <p className="m-0">
                member of the organisation. It's easy to use yet
              </p>
              <p className="m-0">powerful enough for prompt insights”</p>
            </span>
          </i>
          <div className="w-[726.4px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full text-xl text-slategray font-abeezee">
            <div className="h-[47px] w-[243.3px] relative leading-[27px] font-light flex items-center shrink-0 mq450:text-base mq450:leading-[22px]">
              <span className="w-full">
                <p className="m-0">Filip Ausmaa</p>
                <p className="m-0">Head of Analytics @ Frever</p>
              </span>
            </div>
          </div>
        </div>
      </section>
      <FrameComponent2 />
      <section className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[50px] box-border gap-[64px] max-w-full shrink-0 text-center text-[61.9px] text-black font-georgia lg:pb-[21px] lg:box-border mq750:gap-[32px] mq750:pb-5 mq750:box-border mq450:gap-[16px]">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-1.5 pr-5 pl-[21px] box-border max-w-full">
          <div className="w-[562.8px] flex flex-col items-start justify-start gap-[30px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[52px] pl-[51.2px] box-border max-w-full mq750:pl-[25px] mq750:pr-[26px] mq750:box-border">
              <img
                className="h-[410px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/onetoolpng@2x.png"
              />
            </div>
            <div className="self-stretch relative leading-[64px] mq1050:text-31xl mq1050:leading-[51px] mq450:text-18xl mq450:leading-[38px]">
              <p className="m-0">Everything you need</p>
              <p className="m-0">
                <i>in one tool</i>
              </p>
            </div>
          </div>
        </div>
        <FrameComponent1 />
        <DivbgSecondaryBackground />
      </section>
      <section className="self-stretch flex flex-col items-end justify-start gap-[128px] max-w-full shrink-0 lg:gap-[64px] mq750:gap-[32px] mq450:gap-[16px]">
        <FrameComponent />
        <Divpx />
      </section>
    </div>
  );
};

export default Frame;
