import React from 'react';
import { FaGraduationCap, FaHandHoldingMedical } from 'react-icons/fa';

const Kind = () => {
    return (
        <section className="py-10 mx-auto font-sans text-center">
            {/* Main Heading */}
            {/* <h2 className="text-4xl font-bold text-teal-900 mb-12">
                For the Ummah, With the Sunnah
            </h2> */}

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">

                {/* Card 1: Education */}
                <div className="flex flex-col items-center  md:pt-0">
                    <div className="text-yellow-600 mb-4">
                        {/* Graduation Cap Icon */}
                        <FaGraduationCap className='text-5xl text-green-700'/>
                    </div>
                    <h3 className="text-2xl font-bold text-teal-900 mb-4">Good Education</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        Establishing Madrasas with an integrated syllabus of Deeni (religious) and general education; founding various general and technical institutions including schools, colleges, and universities; alongside taking initiatives for non-formal education.
                    </p>
                </div>

                {/* Card 2: Service */}
                <div className="flex flex-col items-center px-6 pt-8 md:pt-0">
                    <div className="text-yellow-600 mb-4">
                        {/* Helping Hands Icon */}
                       <FaHandHoldingMedical className='text-5xl text-green-700'/>
                    </div>
                    <h3 className="text-2xl font-bold text-teal-900 mb-4">Good Health</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">
                        Empowering the underprivileged to become self-reliant, providing relief and rehabilitation for flood victims, installing tube wells and water filtration systems, planting trees, distributing winter clothing and Iftar, and running various humanitarian activities including Qurbani for all.
                    </p>
                </div>



            </div>

            {/* Call to Action Button */}
            <div className="mt-12">
                <button className="bg-[#008a45] hover:bg-green-700 text-white font-semibold py-3 px-8 rounded flex items-center justify-center mx-auto transition duration-300">
                    Learn More <span className="ml-2">→</span>
                </button>
            </div>
        </section>
    );
};

export default Kind;