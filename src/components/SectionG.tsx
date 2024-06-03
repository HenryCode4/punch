import footerImg from '../assets/footeImg.png'
import movedown from '../assets/movedown.png'
import logo from '../assets/logo.png'

const SectionG = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#0C0C0c] to-[#202229] min-h-screen flex flex-col pt-2 md:pt-8">
        <div className='bg-[#0C0C0c] h-[4px] w-full absolute -top-[2px] right-0 left-0' />
      <img className='absolute top-0 object-cover px-10  lg:px-28' src={footerImg} alt="background image" />
      
      <div className="relative flex flex-col items-center px-10  lg:px-28">
            <h3 className='text-[#FFFFFF]  md:pt-6 text-[1.1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[3rem] font-semibold text-center'>
            Need a job done, and done <br /> well? Get started
            </h3>

            <img className='object-cover w-[30px] h-[30px] sm:w-[45px] sm:h-[45px] md:w-[53px] md:h-[53px] lg:w-[73px] lg:h-[73px] mt-1 sm:mt-6' src={movedown} alt="down direction icon" />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 pt-16 md:pt-48 md:pb-32 px-10  lg:px-28'>
        <div className='flex flex-col items-start'>
            <img className='w-[120px] h-[29px] object-cover' src={logo} alt="app logo" />

            <p className='pt-6 text-[#ffffff]/50 text-[0.9rem] leading-[22px]'>We take complex hiring processes - and <br /> simplify them. Connecting you to the world’s <br /> highly qualified talent pool.</p>

            <h4 className='pt-8 text-[1rem] text-white/50'>LINKS AND REDIRECTS</h4>

            <div className='flex gap-2 pt-4'>
                <button className='bg-[#292b34] text-white text-[0.9rem] font-medium leading-[12px] rounded-full px-8 py-3'>Hire now</button>
                <button className='bg-[#292b34] text-white text-[0.9rem] font-medium leading-[12px] rounded-full px-8 py-3'> Apply now</button>
            </div>
        </div>

        <div className='col-span-2 pt-6 md:pt-0'>
            <h1 className='text-[1.5rem] md:text-[2.5rem] text-white font-semibold leading-[35px] md:leading-[44px]'>Connecting the right people to the right businesses.</h1>

            <div className='grid grid-cols-4 pt-10 md:pt-16 gap-x-10'>
                <div className='flex flex-col gap-y-4 items-start'>
                    <h4 className='font-semibold text-[0.9rem] leading-[32px] text-[white]/40'>PLATFORM</h4>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>Find Work</p>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>Find Talent</p>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>Categories</p>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>About Us</p>
                </div>
                <div className='flex flex-col gap-y-4 items-start'>
                    <h4 className='font-semibold text-[0.9rem] leading-[32px] text-[white]/40'>CATEGORIES</h4>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>Data Science</p>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>IT & Networking</p>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>Web & Mobile</p>
                </div>
                <div className='flex flex-col gap-y-4 items-start'>
                    <h4 className='font-semibold text-[0.9rem] leading-[32px] text-[white]/40'>HELP</h4>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>FAQ's</p>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>Contact Us</p>
                </div>
                <div className='flex flex-col gap-y-4 items-start'>
                    <h4 className='font-semibold text-[0.9rem] leading-[32px] text-[white]/40'>GET IN TOUCH @</h4>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>Instagram</p>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>LinkedIn</p>
                    <p className='font-normal text-[0.8rem] md:text-[1.13rem] leading-[24px] text-white'>Twitter</p>
                </div>
            </div>
        </div>
      </div>

        {/* footer  */}
        
      <div className='flex items-center justify-between px-10  lg:px-28  py-3 border-t border-gray-700'>
        <h4 className='font-medium text-[0.7rem] md:text-[1rem] text-white/70 leading-[31px]'>
        All rights reserved  by Zwilt
        </h4>

        <div className='flex gap-x-4'>
            <p className='text-[0.7rem] md:text-[1rem] text-white/50 font-medium leading-[20px] border-b'>Privacy Policy</p>
            <p className='text-[0.7rem] md:text-[1rem] text-white/50 font-medium leading-[20px] border-b'>Terms and Conditions</p>
        </div>
      </div>

    </div>
  )
}

export default SectionG