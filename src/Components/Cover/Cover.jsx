import React from 'react';
import AboutBg from '../../assets/all_imag/AboutBg.jpg'
const Cover = ({img, title, shortDetail }) => {
    return (
        <div className='mb-10'>
            <div className="hero h-96" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{shortDetail}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;