import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
import { navItems } from '../utils';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='h-[80px] w-full fixed flex items-center justify-center z-[99999]'>
            <div className='h-[60px] mx-[70px] w-full shadow-lg bg-[#525AA0] rounded-[15px] flex items-center justify-between px-6 relative'>
                {/* Desktop view */}
                <a href='/' className='hover:scale-105'>
                    <img className='object-cover w-[112px] h-[27px]' src={logo} alt="logo" />
                </a>
                <div className='hidden lg:flex gap-x-10'>
                    {navItems.map((item) => (
                        <div key={item.id} className='cursor-pointer hover:scale-105'>
                            <h3 className='text-white font-medium text-[0.88rem] leading-[14px]'>{item.title}</h3>
                        </div>
                    ))}
                </div>
                <div className='hidden lg:flex gap-x-4'>
                    <button className='text-[#ffffff] text-[0.88rem] font-medium hover:scale-95'>Log In</button>
                    <button className='text-[#202229] text-[0.88rem] bg-[#ffffff] px-4 py-4 rounded-[16px] font-medium leading-[14px] hover:scale-95'>Join Now</button>
                </div>

                {/* Mobile view */}
                <div className='lg:hidden cursor-pointer hover:scale-95' onClick={() => setSidebarOpen(true)}>
                    <Menu size={32} className='text-white' />
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 lg:hidden h-full w-[70vw] bg-[#525AA0] transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className='p-6 flex flex-col'>
                    <div className='flex justify-end'>
                        <X size={32} className='text-white cursor-pointer' onClick={() => setSidebarOpen(false)} />
                    </div>
                    <div className='mt-10 flex flex-col items '>
                        {navItems.map((item) => (
                            <div key={item.id} className='cursor-pointer hover:scale-105 mb-4'>
                                <h3 className='text-white font-medium text-[0.88rem] leading-[14px]'>{item.title}</h3>
                            </div>
                        ))}
                        <div className='flex w-full pt-10 gap-x-3'>
                        <button className='w-full text-[#ffffff] text-[0.88rem] font-medium hover:scale-95  border px-4 py-2 rounded-[16px]'>Log In</button>
                        <button className='w-full text-[#202229] text-[0.88rem] bg-[#ffffff] px-4 py-2 rounded-[16px] font-medium leading-[14px] hover:scale-95'>Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
