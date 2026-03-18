import React from 'react';
import logo from '../../../assets/ad-logo.png'

const Logo = () => {
    return (
        <div className='flex justify-items-center h-12 w-48 gap-2'>
            <img src={logo} alt="" className='w-full' />
            <p className='mt-auto font-bold text-red-700'>Alor Disha Foundation</p>
        </div>
    );
};

export default Logo;