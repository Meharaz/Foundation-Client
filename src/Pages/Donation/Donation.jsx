import React, { useState } from 'react';
import { FaHeart, FaHandHoldingHeart, FaUserShield, FaCreditCard, FaMobileAlt, FaUniversity } from 'react-icons/fa';

const Donation = () => {
    const [selectedAmount, setSelectedAmount] = useState(1000);
    const amounts = [500, 1000, 2000, 5000];

    return (
        <section className="py-20 bg-gray-50 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-4">
                        Support Our <span className="text-emerald-700">Cause</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                        Your contributions help us provide food, education, and medical support
                        to those in need. Every penny counts.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

                    {/* Left Column: Selection Area (2/3 width) */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* 1. Choose Amount */}
                        <div className="bg-white p-8 md:p-12 rounded-[45px] shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                                <FaHandHoldingHeart className="text-emerald-600" />
                                Select Donation Amount
                            </h3>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {amounts.map((amount) => (
                                    <button
                                        key={amount}
                                        onClick={() => setSelectedAmount(amount)}
                                        className={`py-4 rounded-2xl font-bold text-xl transition-all border-2 ${selectedAmount === amount
                                                ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg'
                                                : 'bg-white border-gray-200 text-gray-600 hover:border-emerald-300'
                                            }`}
                                    >
                                        ৳{amount}
                                    </button>
                                ))}
                            </div>

                            <div className="form-control">
                                <label className="label font-bold text-gray-700">Custom Amount (BDT)</label>
                                <input
                                    type="number"
                                    placeholder="Enter other amount"
                                    className="input input-bordered input-lg rounded-2xl focus:outline-emerald-500 text-2xl font-bold"
                                    onChange={(e) => setSelectedAmount(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* 2. Payment Methods */}
                        <div className="bg-white p-8 md:p-12 rounded-[45px] shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                                <FaCreditCard className="text-emerald-600" />
                                Payment Method
                            </h3>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="border-2 border-emerald-50 rounded-3xl p-6 flex flex-col items-center gap-3 cursor-pointer hover:border-emerald-500 transition-all bg-emerald-50/30">
                                    <FaMobileAlt className="text-3xl text-emerald-700" />
                                    <span className="font-bold">Mobile Banking</span>
                                    <span className="text-xs text-gray-500 text-center">(bKash, Nagad, Rocket)</span>
                                </div>
                                <div className="border-2 border-gray-100 rounded-3xl p-6 flex flex-col items-center gap-3 cursor-pointer hover:border-emerald-500 transition-all">
                                    <FaCreditCard className="text-3xl text-emerald-700" />
                                    <span className="font-bold">Card Payment</span>
                                    <span className="text-xs text-gray-500 text-center">(Visa, MasterCard)</span>
                                </div>
                                <div className="border-2 border-gray-100 rounded-3xl p-6 flex flex-col items-center gap-3 cursor-pointer hover:border-emerald-500 transition-all">
                                    <FaUniversity className="text-3xl text-emerald-700" />
                                    <span className="font-bold">Bank Transfer</span>
                                    <span className="text-xs text-gray-500 text-center">(Direct Deposit)</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Summary & Trust */}
                    <div className="space-y-6">
                        <div className="bg-emerald-900 rounded-[45px] p-10 text-white shadow-2xl">
                            <FaHeart className="text-4xl mb-6 text-emerald-400" />
                            <h3 className="text-3xl font-bold mb-4">Donation Summary</h3>
                            <div className="space-y-4 py-6 border-y border-emerald-800">
                                <div className="flex justify-between">
                                    <span>Selected Amount:</span>
                                    <span className="font-bold">৳{selectedAmount || 0}</span>
                                </div>
                                <div className="flex justify-between text-emerald-300">
                                    <span>Processing Fee:</span>
                                    <span>৳0.00</span>
                                </div>
                            </div>
                            <div className="flex justify-between py-6 text-2xl font-bold">
                                <span>Total:</span>
                                <span>৳{selectedAmount || 0}</span>
                            </div>
                            <button className="btn btn-lg w-full bg-white text-emerald-900 hover:bg-emerald-50 border-none rounded-full font-bold shadow-xl">
                                Donate Now
                            </button>
                        </div>

                        <div className="bg-white p-8 rounded-[40px] border border-gray-100 flex items-start gap-4 shadow-sm">
                            <FaUserShield className="text-4xl text-emerald-600 shrink-0" />
                            <div>
                                <h4 className="font-bold text-gray-800">Secure Donation</h4>
                                <p className="text-sm text-gray-500">Your information is encrypted and handled with 100% transparency.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Donation;