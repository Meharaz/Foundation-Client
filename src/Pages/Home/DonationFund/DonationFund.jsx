import React from 'react';
import { Link } from 'react-router';

const donationFunds = [
    {
        id: 1,
        title: "General Fund",
        image: "/src/assets/all_imag/all_imag/sylhet/sylhet_flood-1.jpg",
        description: "Your contribution to the general fund allows us to respond immediately where the need is greatest, covering urgent relief and operational costs."
    },
    {
        id: 2,
        title: "Zakat Fund",
        image: "/src/assets/all_imag/all_imag/medical equip_dist/medical equip_dist-2.JPG",
        description: "Contributions to the general fund support our administrative costs and various social development initiatives."
    }
];

const DonationFunds = () => {
    return (
        <section className="py-20 bg-gray-50 px-4">
            <div className="max-w-5xl mx-auto text-center">
                {/* Header Section */}
                <div className="mb-12">
                    <h2 className="text-4xl font-extrabold text-emerald-950 mb-3">
                        Donation Funds
                    </h2>
                    <p className="text-emerald-700 italic font-medium tracking-wide">
                        Let's Make Change Together
                    </p>
                    <div className="w-24 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Centered Cards Container */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 lg:gap-12">
                    {donationFunds.map((fund) => (
                        <div
                            key={fund.id}
                            className="group bg-white max-w-sm w-full rounded-3xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
                        >
                            {/* Image with Zoom Effect */}
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={fund.image}
                                    alt={fund.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-emerald-900 mb-4 transition-colors group-hover:text-emerald-600">
                                    {fund.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-8 min-h-20">
                                    {fund.description}
                                </p>

                                {/* Donate Button */}
                               <Link to={"/Donation"}>
                                <button className="w-full py-3.5 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300 transition-all duration-300 active:scale-95">
                                    Donate Now
                                </button>
                               </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DonationFunds;