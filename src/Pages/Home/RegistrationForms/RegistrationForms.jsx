import React from 'react';
import { BiSolidDonateBlood } from 'react-icons/bi';
import { FaHeart, FaHandsHelping} from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";

const RegistrationForms = () => {
  return (
    <section className="py-20 bg-base-100 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">Join Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us through any of the following methods and play your part in 
            serving humanity in need.
          </p>
        </div>

        {/* The Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Regular Donor (Full Width Top) */}
          <div className="md:col-span-3">
            <div className="group cursor-pointer rounded-[40px] border-2 border-dashed border-emerald-500 p-2 transition-all hover:scale-[1.01]">
              <div className="bg-emerald-600 rounded-[35px] py-16 flex flex-col items-center justify-center text-white shadow-xl group-hover:bg-emerald-700 transition-colors">
                <FaHeart className="text-6xl mb-4 animate-pulse" />
                <span className="text-3xl font-bold tracking-tight">Regular Donor</span>
              </div>
            </div>
          </div>

          {/* 2. Lifetime Donor & Member */}
          <div className="group cursor-pointer rounded-[40px] border-2 border-dashed border-blue-400 p-2 transition-all hover:scale-105">
            <div className="bg-blue-500 h-72 rounded-[35px] flex flex-col items-center justify-center text-white p-6 shadow-lg group-hover:bg-blue-600 transition-colors">
              <HiOutlineBadgeCheck className="text-7xl mb-4" />
              <span className="text-xl font-bold text-center leading-tight">
                Lifetime & Donor <br /> Member
              </span>
            </div>
          </div>

          {/* 3. Volunteer */}
          <div className="group cursor-pointer rounded-[40px] border-2 border-dashed border-amber-400 p-2 transition-all hover:scale-105">
            <div className="bg-amber-500 h-72 rounded-[35px] flex flex-col items-center justify-center text-white p-6 shadow-lg group-hover:bg-amber-600 transition-colors">
              <FaHandsHelping className="text-7xl mb-4" />
              <span className="text-xl font-bold">Volunteer</span>
            </div>
          </div>

          {/* 4. Career */}
          <div className="group cursor-pointer rounded-[40px] border-2 border-dashed border-purple-400 p-2 transition-all hover:scale-105">
            <div className="bg-purple-600 h-72 rounded-[35px] flex flex-col items-center justify-center text-white p-6 shadow-lg group-hover:bg-purple-700 transition-colors">
              <BiSolidDonateBlood className="text-6xl mb-4" />
              <span className="text-xl font-bold">Blood Donor</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RegistrationForms;