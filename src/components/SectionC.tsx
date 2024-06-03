import mark from "../assets/mark.png";
import avatar from "../assets/avater2.png";
import groove from "../assets/groovehq.png";
import left from "../assets/left.png";
import right from "../assets/right.png";
import grooveQ from "../assets/grooveQ.png"
import curveup from "../assets/curveup.svg"

const SectionC = () => {
  return (
    <div className="relative bg-[#202229] min-h-screen flex flex-col pb-16">
      <img className="w-full absolute top-0 left-0 right-0" src={curveup} alt="top curve" />
      <img
        className=" w-[100px] h-[100px] absolute z-[99] top-1 right-5"
        src={mark}
        alt="Quote mark at top page"
      />

      <div className="hidden text-white md:grid grid-cols-1 md:grid-cols-2 z-[99] pt-32 px-10  lg:px-28">
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-bold text-[1.5rem] md:leading-[34px] lg:leading-[64px] md:text-[2rem] pt-4 md:pt-8 lg:text-[3.5rem] flex flex-col items-center">
            <span className=" ">
              How it worked <br /> for Jason
              <img
                src={avatar}
                alt="image-icon"
                className="rounded-full inline-block w-[35px] h-[35px] md:w-[57px] md:h-[57px] ml-2 mr-2"
              />
              at
            </span>
          </h3>
          <img src={groove} alt="Groove icon" />

          <p className="font-normal text-[1.2rem] md:text-[1.4rem] pt-10 text-gray-300">
            Zwilt enabled us to deliver on time and they’ve <br /> been heavy
            hitters in our corner since.
          </p>

          <div className="flex gap-x-4 pt-6">
            <button>
              <img className="w-[35px] h-[35px] md:w-[49px] md:h-[49px]" src={left} alt="direction" />
            </button>
            <button>
              <img className="w-[35px] h-[35px] md:w-[49px] md:h-[49px]" src={right} alt="direction" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-10">
            <div className="flex items-center gap-4">
                <img className="w-[78px] h-[78px] md:w-[98px] md:h-[98px]" src={grooveQ} alt="groove image" />
                <div>
                    <h3 className="font-semibold text-[1.8rem] md:text-[2.13rem] leading-[44px]">Jason Makki</h3>
                    <p className="text-[1rem] leading-[18px] font-medium text-gray-500">Engineer at GROOVE</p>
                    <p  className="text-[1rem] leading-[18px] font-medium text-gray-500">San Francisco</p>
                </div>
            </div>

            <p className="font-normal text-[1.1rem] md:text-[1.4rem] leading-[32px] text-gray-300 pt-16">Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.</p>
            
        </div>
      </div>


      {/* Mobile  */}
      <div className="flex flex-col justify-center items-center md:hidden px-4 w-full max-w-xs mx-auto overflow-hidden">
      <div className="text-white grid grid-cols-1 z-[99] pt-24 px-10 ">
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-bold text-[1.5rem] md:leading-[34px] lg:leading-[64px] md:text-[2rem] pt-4 md:pt-8 lg:text-[3.5rem] flex flex-col items-center">
            <span className=" ">
              How it worked <br /> for Jason
              <img
                src={avatar}
                alt="image-icon"
                className="rounded-full inline-block w-[35px] h-[35px] md:w-[57px] md:h-[57px] ml-2 mr-2"
              />
              at
            </span>
          </h3>
          <img className="pt-2 h-10" src={groove} alt="Groove icon" />

          <p className="font-normal text-[0.8rem] pt-10 text-gray-300">
            Zwilt enabled us to deliver on time and they’ve been heavy
            hitters in our corner since.
          </p>

          <div className="flex gap-x-4 pt-6">
            <button>
              <img className="w-[30px] h-[30px]" src={left} alt="direction" />
            </button>
            <button>
              <img className="w-[30px] h-[30px]" src={right} alt="direction" />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-start justify-start pt-10">
            <div className="flex items-center gap-4">
                <img className="w-[60px] h-[60px]" src={grooveQ} alt="groove image" />
                <div>
                    <h3 className="font-semibold text-[1.1rem]">Jason Makki</h3>
                    <p className="text-[.7rem] leading-[18px] font-medium text-gray-500">Engineer at GROOVE</p>
                    <p  className="text-[.7rem] leading-[18px] font-medium text-gray-500">San Francisco</p>
                </div>
            </div>

            <p className="font-normal text-[.8rem] md:text-[1.4rem] leading-[32px] text-gray-300 pt-6">Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they’ve been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they’ve been heavy hitters.</p>
            
        </div>
      </div>
      </div>
    </div>
  );
};

export default SectionC;
