import gold from '../assets/gold.png'
import curveright from '../assets/curveupright.svg'

const SectionF = () => {
  return (
    <div className="relative bg-[#f3f3f3] min-h-screen flex flex-col pt-16 pb-24 border-b-0">
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-[1.5rem] md:text-[3.2rem] leading-[64px]">
        Frequently asked questions
        </h3>

        <div className='flex flex-col pt-6 w-full'>
            <div className='w-full border'>
                <div className='flex w-full'>
                    <h4 className='w-[230px] text-center px-2 py-6 border-r font-semibold text-[1rem] md:text-[1.4rem] leading-[24px]'>General</h4>
                    <span className='w-[340px] text-center py-6'></span>
                    <p className='w-full py-6 md:px-20 text-[0.9rem] md:text-[1.3rem] leading-[24px] font-normal text-[#202229] px-1'>I want to work part-time, is that possible?</p>
                </div>
                <div className='w-full border flex'>
                  <span className='w-[230px] text-center py-6'></span>
                  <span className='w-[340px] text-center py-6'></span>
                <p className='w-full  text-start py-6 md:px-20 text-[0.9rem] md:text-[1.3rem] leading-[24px] font-normal text-[#202229] px-1'>How long are the average projects?</p>
                </div>
                <div className='w-full border flex bg-[#e8e8e8] relative'>
                  <span className='w-[230px] text-center py-6'></span>
                  <span className='w-[340px] text-center py-6'></span>
                <p className='w-full text-start py-6 md:px-20 text-[0.9rem] md:text-[1.3rem] leading-[24px] font-semibold text-[#202229] px-1'>How does the payment works?</p>
                <img className="hidden lg:block absolute top-7 right-10 object-cover" src={gold} alt="click direction" />
                </div>
                <div className='w-full border flex'>
                  <span className='w-[230px] text-center py-6'></span>
                  <span className='w-[340px] text-center py-6'></span>
                <p className='w-full text-start py-6 md:px-20 text-[0.9rem] md:text-[1.3rem] leading-[24px] font-normal text-[#202229] px-1'>How much can i earn?</p>
                </div>


                <div className='flex w-full'>
                    <h4 className='w-[230px] text-center py-6 border-r font-semibold text-[1rem] md:text-[1.4rem] leading-[24px]'>General</h4>
                    <h4 className='w-[340px] text-center py-6 border-r font-semibold text-[1rem] md:text-[1.4rem] leading-[24px]'>Joining Process</h4>
                    <p className='w-full py-6 md:px-20 text-[0.9rem] md:text-[1.3rem] leading-[24px] font-normal text-[#202229] px-1'>I want to work part-time, is that possible?</p>
                </div>
                <div className='w-full border flex'>
                  <span className='w-[230px] text-center py-6'></span>
                  <span className='w-[340px] text-center py-6'></span>
                <p className='w-full text-start py-6 md:px-20 text-[0.9rem] md:text-[1.3rem] leading-[24px] font-normal text-[#202229] px-1'>How long are the average projects?</p>
                </div>
                <div className='w-full border flex'>
                  <span className='w-[230px] text-center py-6'></span>
                  <span className='w-[340px] text-center py-6'></span>
                <p className='w-full py-6 md:px-20 text-[0.9rem] md:text-[1.3rem] text-start  leading-[24px] font-normal text-[#202229] px-1'>How long are the average projects?</p>
                </div>
                <div className='w-full border flex'>
                  <span className='w-[230px] text-center py-6'></span>
                  <span className='w-[340px] text-center py-6'></span>
                <p className='w-full py-6 md:px-20 text-[0.9rem] md:text-[1.3rem] text-start leading-[24px] font-normal text-[#202229] px-1'>How much can i earn?</p>
                </div>
            </div>
        </div>

    </div>

    <img className='w-full absolute bottom-0 right-0' src={curveright} alt="bottom curve" />
    </div>
  )
}

export default SectionF