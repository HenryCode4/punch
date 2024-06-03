import join from "../assets/join.png";
import riskImage from "../assets/riskImage.png";
import orangeCurve from "../assets/orangeCurve.svg";

const SectionH = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-[#f5f6ff] min-h-screen flex flex-col pt-16 pb-20 z-[99]">
      <div className="grid lg:grid-cols-3 px-10  lg:pl-28">
        <div className=" flex flex-col justify-center items-start">
          <h1 className="font-bold text-[1.7rem] leading-[30px] md:text-[3rem] md:leading-[64px]">
            Why choose
            <br /> Zwilt?
          </h1>
          <p className="font-normal text-[0.9rem] md:text-[1.377rem] pt-6 pb-6 md:pt-0">
            We take complex hiring
            <br /> processes - and simplify them.
            <br /> Connecting you to the world’s <br /> highly qualified talent
            pool.
          </p>
        </div>

        <div className="col-span-2 pl-6 py-4 rounded-lg bg-white shadow-lg">
          <div className="flex gap-x-8">
            <div className="">
              <h3 className="font-bold text-[1.7rem] leading-[34px] md:text-[3rem] md:leading-[64px] pb-4 flex-nowrap">
                Onboard without <br /> the risk.
              </h3>
              <div className="flex flex-col">
                <div className="flex items-start gap-x-2">
                  <div className="w-3 h-1 rounded-full bg-gray-500 flex-shrink-0 mt-2" />
                  <p className="text-[0.8rem] md:text-[1.1rem] font-normal leading-[1.5]">
                    We pick the best for you to select.
                  </p>
                </div>
                <div className="flex items-start gap-x-2 mt-2">
                  <div className="w-3 h-1 rounded-full bg-gray-500 flex-shrink-0 mt-2" />
                  <p className="text-[0.8rem] md:text-[1.1rem] font-normal leading-[1.5]">
                    Thousands of vetted candidates in dozens of categories.
                  </p>
                </div>
                <div className="flex items-start gap-x-2 mt-2">
                  <div className="w-3 h-1 rounded-full bg-gray-500 flex-shrink-0 mt-2" />
                  <p className="text-[0.8rem] md:text-[1.1rem] font-normal leading-[1.5]">
                    Risk-free resource swapping for the best fit.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-x-2 py-8">
                <img
                  className="w-[40px] h-[40px]"
                  src={join}
                  alt="direction to learn more"
                />
                <p className="text-[0.8rem] md:text-[1.377rem] font-medium leading-[18px]">
                  Learn More
                </p>
              </div>
            </div>

            {/* Risk image  */}

            <img
              className="object-cover h-[509px] hidden lg:block"
              src={riskImage}
              alt="risk image portray"
            />
          </div>
        </div>
      </div>

      <img
        className="absolute bottom-0 right-0 left-0 w-screen"
        src={orangeCurve}
        alt="bottom curve"
      />
    </div>
  );
};

export default SectionH;
