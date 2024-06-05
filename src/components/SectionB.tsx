import bgImage from "../assets/Rectangle.png";
import time from "../assets/time.png";
import profile from "../assets/profile.png";
import category from "../assets/category.png";
import shopify from "../assets/shopify.png";
import magento from "../assets/magnito.png";
import dataScientist from "../assets/data sicentist.png";
import webFlow from "../assets/webflow.png";
import dotnet from "../assets/dotnet.png";
import arrow from "../assets/arrow.png";
import arrow2 from "../assets/arror2.png";
import figma from "../assets/fig.png";
import ps from "../assets/ps.png";
import unreal from "../assets/unreal.png";
import cinema from "../assets/cenima.png";
import ai from "../assets/ai.png";
import explore from "../assets/explore.png";

export const devs = [
  {
    icon: time,
    title: "999 Skills",
  },
  {
    icon: category,
    title: "45 Sub categories",
  },
  {
    icon: profile,
    title: "1011 Profiles",
  },
];
export const devsIt = [
  {
    icon: shopify,
    title: "Shopify Developer",
  },
  {
    icon: magento,
    title: "Magento Developer",
  },
  {
    icon: dataScientist,
    title: "Data Scientist",
  },
  {
    icon: webFlow,
    title: "Webflow Developer",
  },
  {
    icon: dotnet,
    title: "DotNet Developer",
  },
];
export const designIt = [
  {
    icon: figma,
    title: "UX Designer",
  },
  {
    icon: ps,
    title: "Graphics Designer",
  },
  {
    icon: ai,
    title: "Illustration Artist",
  },
  {
    icon: unreal,
    title: "Unreal Engine",
  },
  {
    icon: cinema,
    title: "Cinema 4D",
  },
];

const SectionB = () => {
  return (
    <div className="relative bg-[#edefff] flex flex-col pt-16 pb-16">
      <img
        className="absolute -top-6 object-cover w-[100%]"
        src={bgImage}
        alt="section Image"
      />

      {/* Desktop  */}
      <div className="md:flex flex-col hidden">
        <h2 className="font-bold leading-[24px] md:leading-[34px] text-[1.2rem] md:text-[2rem] lg:text-[3.2rem] lg:leading-[64px] text-center relative z-10">
          Your one-stop marketplace for finding <br /> the talent your business
          needs.
        </h2>

        <div className="flex flex-col relative z-10 pt-8">
          {/* Developers  section*/}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-10  lg:px-28 pt-10">
            <div className="flex flex-col">
              <h3 className="font-medium text-[1.1rem] md:text-[1.2rem] lg:text-[1.5rem] leading-[34px]">
                Find Dev and IT professionals to{" "}
                <br className="hidden lg:block" />
                scale your business.
              </h3>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {devs.map((dev, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={dev.icon}
                      alt={dev.title}
                      className="w-[16px] h-[18px]"
                    />
                    <p className="text-[1rem] font-normal">{dev.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col bg-white mt-4 px-6 py-3 rounded-[7px]">
              <h4 className="font-medium text-[1rem] pb-4 leading-[23px]">
                IT & Development
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {devsIt.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="rounded-full bg-[#f6f6f6] p-2 flex justify-center items-center w-12 h-12">
                      <img
                        className="w-6 h-6"
                        src={item.icon}
                        alt="department icon"
                      />
                    </div>
                    <p className="text-center text-sm">
                      {item.title.split(" ").map((word, i) => (
                        <span key={i} className="block">
                          {word}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}

                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-[#f6f6f6] p-2 flex justify-center items-center w-12 h-12">
                    <img src={arrow} alt="direction" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Designers  section*/}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center px-10  lg:px-28 pt-10">
            <div className="flex flex-col">
              <h3 className="font-medium text-[1.1rem] md:text-[1.2rem] lg:text-[1.5rem] leading-[34px]">
                Explore Creative individuals with a{" "}
                <br className="hidden lg:block" /> keen eye for detail.
              </h3>

              <div className="grid grid-cols-2 gap-4 mt-4">
                {devs.map((dev, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <img
                      src={dev.icon}
                      alt={dev.title}
                      className="w-[16px] h-[18px]"
                    />
                    <p className="text-[1rem] font-normal">{dev.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col bg-white mt-4 px-6 py-3 rounded-[7px]">
              <h4 className="font-medium text-[1rem] pb-4 leading-[23px]">
                Design & Creative
              </h4>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-[#f6f6f6] p-2 flex justify-center items-center w-12 h-12">
                    <img src={arrow2} alt="direction" />
                  </div>
                </div>

                {designIt.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="rounded-full bg-[#f6f6f6] p-2 flex justify-center items-center w-12 h-12">
                      <img
                        className="w-6 h-6"
                        src={item.icon}
                        alt="department icon"
                      />
                    </div>
                    <p className="text-center text-sm">
                      {item.title.split(" ").map((word, i) => (
                        <span key={i} className="block">
                          {word}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Explore more  */}
          <div className="flex space-x-10 flex-row items-center px-10  lg:px-28 pt-10">
            <div className="flex items-center gap-3 cursor-pointer w-[50%]">
              <img
                className="w-[50px] h-[50px] lg:w-[74px] lg:h-[74px]"
                src={explore}
                alt="explore more"
              />
              <p className="lg:text-[1.4rem] font-medium leading-[18px]">
                Explore More
              </p>
            </div>

            <div className="w-[50%] pl-[13px]">
              <p className="text-[#202229] font-bold lg:text-[1.4rem] leading-[32px]">
                30 more{" "}
                <span className="text-[#202229]/80 font-normal leading-[32px]">
                  to explore
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile  */}

      <div className="flex flex-col justify-center items-center md:hidden px-4 w-full max-w-xs mx-auto overflow-hidden">
        <h2 className="font-bold leading-[24px] text-[1.2rem] text-center relative z-10">
          Your one-stop marketplace for finding the talent your business needs.
        </h2>

        <div className="flex flex-col relative z-10 pt-2 ">
          {/* Developers section */}
          <div className="flex flex-col pt-10 w-full">
            <div className="flex flex-col w-full">
              <h3 className="font-medium text-[.9rem] leading-[20px]">
                Find Dev and IT professionals to
                <br className="hidden lg:block" />
                scale your business.
              </h3>

              <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                {devs.map((dev, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      src={dev.icon}
                      alt={dev.title}
                      className="w-[10px] h-[12px]"
                    />
                    <p className="text-[.7rem] font-normal">{dev.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col bg-white mt-4 px-4 py-3 rounded-[7px] w-full">
              <h4 className="font-medium text-[.8rem] pb-4 leading-[23px]">
                IT & Development
              </h4>

              <div className="grid grid-cols-2 gap-4 w-full">
                {devsIt.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="rounded-full bg-[#f6f6f6] p-2 flex justify-center items-center w-12 h-12">
                      <img
                        className="w-6 h-6"
                        src={item.icon}
                        alt="department icon"
                      />
                    </div>
                    <p className="text-center text-[.6rem]">
                      {item.title.split(" ").map((word, i) => (
                        <span key={i} className="block">
                          {word}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}

                <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-[#f6f6f6] p-2 flex justify-center items-center w-12 h-12">
                    <img src={arrow} alt="direction" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Designers section */}
          <div className="flex flex-col pt-10 w-full">
            <div className="flex flex-col w-full">
              <h3 className="font-medium text-[.9rem] leading-[20px]">
                Explore Creative individuals with a
                <br className="hidden lg:block" />
                keen eye for detail.
              </h3>

              <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                {devs.map((dev, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <img
                      src={dev.icon}
                      alt={dev.title}
                      className="w-[10px] h-[12px]"
                    />
                    <p className="text-[.7rem] font-normal">{dev.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col bg-white mt-4 px-4 py-3 rounded-[7px] w-full">
              <h4 className="font-medium text-[.8rem] pb-4 leading-[23px]">
                Design & Creative
              </h4>

              <div className="grid grid-cols-2 gap-4 w-full">
              <div className="flex flex-col items-center space-y-2">
                  <div className="rounded-full bg-[#f6f6f6] p-2 flex justify-center items-center w-12 h-12">
                    <img src={arrow2} alt="direction" />
                  </div>
                </div>
                {designIt.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2"
                  >
                    <div className="rounded-full bg-[#f6f6f6] p-2 flex justify-center items-center w-12 h-12">
                      <img
                        className="w-6 h-6"
                        src={item.icon}
                        alt="department icon"
                      />
                    </div>
                    <p className="text-center text-[.6rem]">
                      {item.title.split(" ").map((word, i) => (
                        <span key={i} className="block">
                          {word}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}

                
              </div>
            </div>
          </div>

          {/* Explore more */}
          <div className="flex space-x-4 items-center pt-10 w-full">
            <div className="flex items-center gap-3 cursor-pointer w-[50%]">
              <img
                className="w-[40px] h-[40px]"
                src={explore}
                alt="explore more"
              />
              <p className="text-[.8rem] font-medium leading-[18px]">
                Explore More
              </p>
            </div>

            <div className="w-[50%] pl-[13px]">
              <p className="text-[#202229] font-bold text-[.8rem] leading-[32px]">
                30 more{" "}
                <span className="text-[#202229]/80 font-normal leading-[32px]">
                  to explore
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionB;
