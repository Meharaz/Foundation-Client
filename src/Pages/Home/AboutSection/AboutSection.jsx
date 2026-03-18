import React from 'react';
import chairman from '../../../assets/Chairman.png'

const AboutSection = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={chairman}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
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
                    <button className="btn btn-dash btn-info">Honorable Members</button>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;