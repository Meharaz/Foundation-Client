import React from 'react';
import Cover from '../../Components/Cover/Cover';
import img from '../../assets/all_imag/AboutBg.jpg'
import PrinciplesAndValues from '../../Components/PrinciplesAndValues/PrinciplesAndValues';
import GoalsAndObjectives from '../../Components/Goals/GoalsAndObjectives';

const About = () => {
    return (
        <div>
            <Cover
                title={"About Us"}
                img={img}
            />
            <div className="hero bg-white py-16 px-4">
                <div className="hero-content max-w-7xl flex-col lg:flex-row gap-12 p-0">

                    <div className="w-full lg:basis-1/2">
                        <div className="bg-emerald-950 rounded-2xl p-2 shadow-2xl">
                            <p className="text-2xl text-center font-bold text-amber-100 mb-4">
                                Documentary Video
                            </p>
                            {/* Responsive Iframe Wrapper */}
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/ySWg2Iy6NlI?si=FuqJyGeoP7YBj2OO"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Text (Equal 50% width on large screens) */}
                    <div className="w-full lg:basis-1/2 space-y-6">
                        <h1 className="text-4xl md:text-5xl text-emerald-950 font-extrabold leading-tight">
                            Alor Disha <span className="text-emerald-700">Foundation</span>
                        </h1>
                        <div className="w-20 h-1.5 bg-emerald-500 rounded-full"></div>

                        <div className="text-gray-700 text-lg leading-relaxed space-y-4">
                            <p>
                                Alor Disha Foundation is a non-profit social organization established in 2024 with the slogan
                                <span className="font-bold text-emerald-800"> “Man for Mankind.”</span> It was founded by a
                                group of enlightened and dedicated professionals including teachers, doctors, engineers,
                                journalists, bankers, lawyers, and entrepreneurs.
                            </p>
                            <p>
                                The foundation is committed to creating a humane, enlightened, and prosperous society by
                                prioritizing education, healthcare, and humanitarian services. It operates with complete
                                transparency, following a strict receipt-based income and voucher-based expenditure system.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <PrinciplesAndValues />
            <GoalsAndObjectives />
        </div>
    );
};

export default About;