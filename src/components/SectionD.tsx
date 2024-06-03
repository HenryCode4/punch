import play from "../assets/play.png";
import blue from "../assets/blue.png";
import curveblack from "../assets/curveblack.png";

const SectionD = () => {
  return (
    <div className="relative bg-[#ffffff] min-h-screen flex flex-col pb-16 z-[99]">
      <img className="absolute top-0 left-0" src={curveblack} alt="top curve" />

      {/* Heading  */}
      <div className="flex flex-col items-start  z-[999] pt-32 px-10  lg:px-28">
        <h1 className="font-bold text-[1.3rem] leading-[32px] md:text-[3.2rem] md:leading-[64px]">
          How we ensure you’re <br /> in good hands.
        </h1>

        <p className="font-normal text-[1rem] md:text-[1.4rem] text-gray-700 leading-[32px] pt-6">
          With our comprehensive screening process, we hand-pick highly <br />{" "}
          skilled candidates so you can onboard them in a matter of days.
        </p>

        <div className="border-[1px] rounded-[7px] border-[#f0f0f0] flex items-center gap-x-4 px-4 py-2 mt-6 w-full md:w-[635px] shadow-md">
          <img src={play} alt="" />
          <p className="font-semibold text-[1rem] text-[#202229] leading-[17px]">
            Step 1:{" "}
            <span className="font-normal text-[1rem] leading-[17px] text-gray-500">
              Resume Screening
            </span>
          </p>
        </div>

        <div className="border-[1px] rounded-[7px] border-[#f0f0f0] flex flex-col items-start gap-x-4 px-4 py-2 mt-2 w-full md:w-[635px] shadow-md">
          <div className="flex items-center gap-x-4">
            <img src={blue} alt="playlist" />
            <p className="font-semibold text-[1rem] text-[#202229] leading-[17px]">
            Step 2:{" "}
            <span className="font-normal text-[1rem] leading-[17px] text-gray-500">
              Video Interview
            </span>
          </p>
          </div>

          <p className="font-normal text-[1rem] text-gray-600 pt-4">Candidates are assessed through skill based questions in a virtual setting. <br />Allowing you to gauge personality and cultural fit.</p>
        </div>

        <div className="border-[1px] rounded-[7px] border-[#f0f0f0] flex items-center gap-x-4 px-4 py-2 mt-6 w-full md:w-[635px] shadow-md">
          <img src={play} alt="" />
          <p className="font-semibold text-[1rem] text-[#202229] leading-[17px]">
            Step 3:{" "}
            <span className="font-normal text-[1rem] leading-[17px] text-gray-500">
              Technical Evaluation
            </span>
          </p>
        </div>

        <div className="border-[1px] rounded-[7px] border-[#f0f0f0] flex items-center gap-x-4 px-4 py-2 mt-6 w-full md:w-[635px] shadow-md">
          <img src={play} alt="" />
          <p className="font-semibold text-[1rem] text-[#202229] leading-[17px]">
            Step 4:{" "}
            <span className="font-normal text-[1rem] leading-[17px] text-gray-500">
              Application Review
            </span>
          </p>
        </div>

        <div className="border-[1px] rounded-[7px] border-[#f0f0f0] flex items-center gap-x-4 px-4 py-2 mt-6 w-full md:w-[635px] shadow-md">
          <img src={play} alt="" />
          <p className="font-semibold text-[1rem] text-[#202229] leading-[17px]">
            Step 5:{" "}
            <span className="font-normal text-[1rem] leading-[17px] text-gray-500">
              Lets get to work
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionD;
