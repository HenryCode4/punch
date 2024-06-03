import { useState } from "react";
import avatar from "../assets/image-icon.png";
import vector from "../assets/Vector.png";
import { departmentList } from "../utils";
import union from "../assets/Union.png";

const Main = () => {
  const [tab, setTab] = useState(0);

  // Convert the departmentList object to an array of values
  const departments = Object.values(departmentList);

  return (
    <div className="pt-[80px] bg-[#ffffff] flex flex-col justify-center items-center relative pb-36">
      {/* Heading  */}
      <h1 className="font-bold text-[1.2rem] leading-[24px] md:leading-[34px] lg:leading-[64px] md:text-[2rem] pt-4 md:pt-8 lg:text-[3.5rem] flex flex-col items-center">
        <span className=" flex items-center">
          Finding the right fit
          <img
            src={avatar}
            alt="image-icon"
            className="inline-block w-[68px] h-[43px] ml-2"
          />
          has
        </span>

        <span className="flex items-center">never been easier.</span>
      </h1>

      {/* paragraph */}
      <p className="pt-6 text-[0.9rem] lg:text-[1.4rem] font-normal lg:leading-[32px] text-center">
        With our rigorous pre-vetting process, you'll never have to <br /> worry
        about finding the ideal candidate ever again.
      </p>

      {/* search input */}
      <div className="flex justify-between bg-[#ffffff] border-[#f0f0f0] w-[300px] lg:w-[570px] border-[1.5px] pl-4 h-[50px] md:h-[74px] rounded-[15px] mt-8">
        <div className="flex items-center gap-x-1 md:flex-grow">
          <p className="font-semibold text-[1rem] leading-[16px] hidden md:block">
            Looking for{" "}
          </p>
          <input
            className="outline-none font-medium text-[16px] leading-[16px] text-[#959595] md:flex-grow"
            placeholder="design |"
            type="text"
          />
        </div>
          <button className="bg-[#FFBE2E] h-[50px] md:h-[74px] w-[50px] md:w-[74px] rounded-[15px] flex justify-center items-center">
            <img src={vector} alt="vector icon" />
          </button>
      </div>

      {/* Department tab */}
      <div className="bg-[#f8f8f8] flex justify-center items-center mt-8 mb-8 rounded-[15px]">
        <div className="flex flex-col py-2 px-6 w-full">
          <div className="flex justify-center bg-[#D2D2D2] w-full max-w-[343px] mx-auto rounded-[15px]">
            <button
              onClick={() => setTab(0)}
              className={`px-4 py-2 text-[0.7rem] md:text-[1rem] text-center leading-[23px] ${
                tab === 0
                  ? "font-semibold bg-[#c7f4c2] rounded-[15px]"
                  : "font-medium text-[#202229]"
              }`}
            >
              IT & Development
            </button>
            <button
              onClick={() => setTab(1)}
              className={`px-4 py-2 text-[0.7rem] md:text-[1rem] text-center leading-[23px] ${
                tab === 1
                  ? "font-semibold bg-[#c7f4c2] rounded-[15px]"
                  : "font-medium text-[#202229]"
              }`}
            >
              Design and Creative
            </button>
          </div>

          {tab === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-y-2 gap-x-44">
              {departments.map((department, index) => (
                <p
                  key={index}
                  className="text-left text-[0.9rem] font-normal text-[#959595] hover:text-black hover:font-medium cursor-pointer"
                >
                  {department}
                </p>
              ))}

              <p className="font-medium text-[#202229] text-[1rem] cursor-pointer">
                Explore More
              </p>
            </div>
          )}

          {tab === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 gap-y-2 gap-x-44">
              {departments.map((department, index) => (
                <p
                  key={index}
                  className="text-left text-[0.9rem] font-normal text-[#959595] hover:text-black hover:font-medium cursor-pointer"
                >
                  {department}
                </p>
              ))}

              <p className="font-medium text-[#202229] text-[1rem] cursor-pointer">
                Explore More
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-0 right-0 left-0">
        <img className="object-cover w-[100%]" src={union} alt="bottom image" />
      </div>
    </div>
  );
};

export default Main;
