import Link from "next/link";

const FrameComponent7 = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[18px] box-border gap-[20px] max-w-full shrink-0 text-center text-49xl-2 text-gray-400 font-georgia">
      <div className="box-border flex flex-row items-start self-stretch justify-start max-w-full py-0 pl-5 pr-7">
        <header className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] text-left text-base text-black font-noto-sans-carian">
          <div className="w-[711px] flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border max-w-full">
            <div className="flex justify-between gap-10">
              <div className="">
                <div className=" gap-[27.2px] mq1050:hidden">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[2.2px]">
                    <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                      <img
                        className="w-2.5 h-2.5 relative overflow-hidden shrink-0"
                        alt=""
                        src="/svg.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="h-8 w-[110px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/link--svg.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[15.2px] max-w-full text-center text-gray-400 mq750:hidden">
            <button className="cursor-pointer [border:none]  p-3 bg-gray-400 rounded-lg flex  text-center  whitespace-nowrap hover:bg-darkslategray-100">
              <Link href='https://ml-client-git-demi-abdulhadi240s-projects.vercel.app/dashboard'><div className="relative text-base leading-[21px] font-noto-sans-carian text-white text-center inline-block min-w-[85px]">
                Get started
              </div></Link>
            </button>
          </div>
        </header>
      </div>
      <div className="self-stretch rounded-3xl bg-gray-100 flex flex-col items-end justify-start pt-12 px-[35px] pb-0 box-border gap-[16px] max-w-full lg:pt-[31px] lg:box-border mq750:pt-5 mq750:box-border">
        <div className="flex flex-row items-start self-stretch justify-center max-w-full">
          <div className="w-[591.5px] flex flex-col items-start justify-start gap-[17.4px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[19px] pl-[18.6px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-center pt-12 px-5 pb-[18.6px] box-border relative max-w-full">
                <div className="w-[349.4px] relative leading-[62px] flex items-center shrink-0 mq1050:text-36xl mq1050:leading-[50px] mq450:text-22xl mq450:leading-[37px]">
                  <span className="w-full">
                    <p className="m-0">Make sense</p>
                    <p className="m-0">
                      <i>common</i>
                    </p>
                  </span>
                </div>
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full z-[1]"
                  loading="lazy"
                  alt=""
                  src="/sparklessvg.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[6.6px] box-border gap-[8px] max-w-full text-5xl text-slategray font-abeezee">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[37px] pl-[37.3px] box-border max-w-full">
                <h3 className="m-0 flex-1 relative text-inherit leading-[24px] font-light font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                  {`Steep is a modern analytics platform `}
                  <span className="[text-decoration:underline]">
                    powered by
                  </span>
                </h3>
              </div>
              <h3 className="m-0 self-stretch h-6 relative text-inherit leading-[32px] font-light font-inherit flex items-center shrink-0 mq450:text-lgi mq450:leading-[26px]">
                <span>
                  <span className="[text-decoration:underline]">metrics</span>{" "}
                  that changes how companies use data together.
                </span>
              </h3>
            </div>
            <div className="flex flex-row items-start self-stretch justify-center px-5 py-0">
              <div className="w-[298.7px] flex flex-row items-start justify-start gap-[16px]">
                <button className="cursor-pointer [border:none] pt-[15.5px] pb-[16.5px] pr-[10.1px] pl-4 bg-gray-500 rounded-4xs flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-200">
                <Link href='https://ml-client-git-demi-abdulhadi240s-projects.vercel.app/dashboard'><div className="relative text-base leading-[21px] font-noto-sans-carian text-white text-center inline-block min-w-[85px]">
                    Get started
                  </div>
                  </Link>
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
        <img
          className="relative self-stretch object-contain max-w-full max-h-full overflow-hidden"
          loading="lazy"
          alt=""
          src="/heropng@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent7;
