import firstNew from "../assets/firstNew.png";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import join from "../assets/join.png";
import group from "../assets/group1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group3.png";

const SectionE = () => {
  return (
    <div className="relative bg-[#ffffff] flex flex-col pt-4 md:pt-16 pb-16">
      <div className="flex flex-col items-center  z-[999] px-10  lg:px-28">
        <h3 className="font-bold text-[1.4rem] md:text-[3.2rem] leading-[64px]">
          Start your journey today.
        </h3>

        <div className="relative flex flex-col items-start w-full">
          <img
            className="hidden md:block absolute top-0 inset-0 h-[334px] w-full"
            src={firstNew}
            alt="section image"
          />

          <div className="w-full flex justify-between relative z-[999] pt-6 md:pt-16 pl-2">
            <div className="flex pr-2 overflow-hidden">
              <img
                className="w-[35px] h-[35px] md:w-[51px] md:h-[61px]"
                src={one}
                alt="Label number image"
              />
              <div className="pl-3">
                <h3 className="font-semibold text-[1.2rem] md:text-[2.1rem] leading-[23px] md:leading-[44px]">
                  Find your next star <br /> performer.
                </h3>
                <p className="font-normal text-[0.8rem] md:text-[1rem] leading-[24px] pt-4 pb-4">
                  Explore the vast Zwilt marketplace to find the candidate{" "}
                  <br />
                  that meets your needs.
                </p>
                <div className="flex items-center gap-x-2">
                  <button>
                    <img className="w-[35px] h-[35px] md:w-[49px] md:h-[49px]" src={join} alt="join button image" />
                  </button>
                  <span className="font-medium text-[0.7rem] md:text-[0.9rem] leading-[12px]">
                    Join Now
                  </span>
                </div>
              </div>
            </div>


              {/* Right side image  */}
              <div className="absolute top-2 right-4 transform -rotate-2 hidden md:block">
                <img className="w-[250px] h-[290px] object-cover" src={group} alt="" />
              </div>
          </div>
        </div>


        <div className="relative flex flex-col items-start w-full mt-6">
          <img
            className="hidden md:block absolute top-0 inset-0 h-[334px] w-full"
            src={frame2}
            alt="section image"
          />

          <div className="w-full flex justify-between relative z-[999] pt-16 pl-2">
            <div className="flex pr- overflow-hidden">
              <img
                className="w-[35px] h-[35px] md:w-[51px] md:h-[61px] pr-2"
                src={two}
                alt="Label number image"
              />
              <div className="pl-3">
              <h3 className="font-semibold text-[1.2rem] md:text-[2.1rem] leading-[23px] md:leading-[44px]">
                Evaluate to your <br /> heart’s content.
                </h3>
                <p className="font-normal text-[0.8rem] md:text-[1rem] leading-[24px] pt-4 pb-4">
                Assess the candidate through work history, transparent <br /> tests and video interviews.
                </p>
                <div className="flex items-center gap-x-2">
                  <button>
                    <img className="w-[35px] h-[35px] md:w-[49px] md:h-[49px]" src={join} alt="join button image" />
                  </button>
                  <span className="font-medium text-[0.7rem] md:text-[0.9rem] leading-[12px]">
                  Browse More
                  </span>
                </div>
              </div>
            </div>


              {/* Right side image  */}
              <div className="absolute top-2 right-4 transform -rotate-2 hidden md:block">
                <img className="w-[250px] h-[290px] object-cover" src={group2} alt="" />
              </div>
          </div>
        </div>

        <div className="relative flex flex-col items-start w-full mt-6">
          <img
            className="hidden md:block absolute top-0 inset-0 h-[334px] w-full"
            src={frame3}
            alt="section image"
          />

          <div className="w-full flex justify-between relative z-[999] pt-16 pl-2">
            <div className="flex pr-2 overflow-hidden">
              <img
                className="w-[35px] h-[35px] md:w-[51px] md:h-[61px] pr-2"
                src={three}
                alt="Label number image"
              />
              <div className="pl-3">
              <h3 className="font-semibold text-[1.2rem] md:text-[2.1rem] leading-[23px] md:leading-[44px]">
                Start building <br /> your team.
                </h3>
                <p className="font-normal text-[0.8rem] md:text-[1rem] leading-[24px] pt-4 pb-4">
                Onboard your candidate right away and start <br /> creating the next big thing.
                </p>
                <div className="flex items-center gap-x-2">
                  <button>
                    <img className="w-[35px] h-[35px] md:w-[49px] md:h-[49px]" src={join} alt="join button image" />
                  </button>
                  <span className="font-medium text-[0.7rem] md:text-[0.9rem] leading-[12px]">
                    Join Now
                  </span>
                </div>
              </div>
            </div>


              {/* Right side image  */}
              <div className="absolute top-2 right-4 transform -rotate-2 hidden md:block">
                <img className="w-[250px] h-[290px] object-cover" src={group3} alt="" />
              </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default SectionE;
