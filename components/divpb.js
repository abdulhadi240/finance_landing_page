const Divpb = () => {
  return (
    <div className="self-stretch rounded-3xl bg-honeydew flex flex-col items-end justify-start pt-20 px-0 pb-0 box-border gap-[74px] max-w-full text-center text-42xl-4 text-black font-georgia mq750:gap-[37px] mq750:pt-[34px] mq750:box-border mq1050:pt-[52px] mq1050:box-border mq450:gap-[18px]">
      <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[527.2px] flex flex-col items-end justify-start gap-[31px] max-w-full mq750:gap-[15px]">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[2.7px] pl-[3px]">
            <div className="flex-1 relative leading-[64px] mq1050:text-30xl mq1050:leading-[51px] mq450:text-18xl mq450:leading-[38px]">
              <p className="m-0">
                <span className="font-georgia">{`A BI `}</span>
                <i className="font-georgia">system</i>
                <span> for the</span>
              </p>
              <p className="m-0">whole organization</p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[4px] max-w-full text-3xl text-darkseagreen font-abeezee">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[3.7px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[236px] max-w-full">
                <h3 className="m-0 self-stretch h-[22px] relative text-inherit leading-[29px] font-light font-inherit flex items-center justify-center shrink-0 mq450:text-lg mq450:leading-[23px]">{`All your metrics in one place with the `}</h3>
              </div>
              <button className="cursor-pointer py-0.5 px-2 bg-[transparent] w-[160.8px] rounded-md box-border flex flex-row items-start justify-start whitespace-nowrap border-[1px] border-solid border-darkseagreen hover:bg-gray-700 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-300">
                <div className="flex-1 relative text-base-5 leading-[19px] font-light font-abeezee text-darkseagreen text-center">
                  semantic layer
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
              <h3 className="m-0 w-[140.2px] relative text-inherit leading-[22px] font-light font-inherit flex items-center justify-center shrink-0 mq450:text-lg mq450:leading-[23px]">
                Learn more →
              </h3>
            </div>
          </div>
        </div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/systempng@2x.png"
      />
    </div>
  );
};

export default Divpb;
