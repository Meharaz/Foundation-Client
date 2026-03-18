import React, { useState } from 'react';
import { FaHeart, FaHandHoldingHeart, FaUserShield, FaMobileAlt, FaUser, FaPhoneAlt, FaMapMarkerAlt, FaCheckCircle, FaHandsHelping, FaMoon } from 'react-icons/fa';
import useWhatsAppPayment from '../../hooks/useWhatsAppPayment';

const Donation = () => {
    const [selectedAmount, setSelectedAmount] = useState(1000);
    const [fundType, setFundType] = useState('General'); // 'General' or 'Zakat'
    const [donorInfo, setDonorInfo] = useState({ name: '', mobile: '', address: '' });
    const [showModal, setShowModal] = useState(false);
    const { makePayment } = useWhatsAppPayment();

    const amounts = [500, 1000, 2000, 5000];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDonorInfo(prev => ({ ...prev, [name]: value }));
    };

    const handleDonationSubmit = (e) => {
        e.preventDefault();
        if (!donorInfo.name || !donorInfo.mobile) {
            alert("Please provide your Name and Mobile number.");
            return;
        }

        makePayment({
            amount: selectedAmount,
            donorName: donorInfo.name,
            donorMobile: donorInfo.mobile,
            donorAddress: donorInfo.address,
            serviceName: `${fundType} Fund` // Clearly labels the fund in WhatsApp
        });
        
        setShowModal(true);
    };

    return (
        <section className="py-20 bg-gray-50 px-4 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-emerald-950 mb-4 uppercase tracking-tight">
                        Choose Your <span className="text-emerald-600">Impact</span>
                    </h2>
                    <div className="w-24 h-2 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* 1. FUND TYPE SELECTION */}
                        <div className="bg-white p-8 md:p-10 rounded-[45px] shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                                <FaHandsHelping className="text-emerald-600" />
                                Select Donation Fund
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button 
                                    onClick={() => setFundType('General')}
                                    className={`p-6 rounded-3xl border-2 flex items-center gap-4 transition-all ${fundType === 'General' ? 'border-emerald-600 bg-emerald-50' : 'border-gray-100 hover:border-emerald-200'}`}
                                >
                                    <div className={`p-3 rounded-2xl ${fundType === 'General' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                        <FaHeart size={24} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-lg text-emerald-950">General Charity</p>
                                        <p className="text-xs text-gray-500 italic">Sadaqah & Welfare projects</p>
                                    </div>
                                </button>

                                <button 
                                    onClick={() => setFundType('Zakat')}
                                    className={`p-6 rounded-3xl border-2 flex items-center gap-4 transition-all ${fundType === 'Zakat' ? 'border-emerald-600 bg-emerald-50' : 'border-gray-100 hover:border-emerald-200'}`}
                                >
                                    <div className={`p-3 rounded-2xl ${fundType === 'Zakat' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                                        <FaMoon size={24} />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-bold text-lg text-emerald-950">Zakat Fund</p>
                                        <p className="text-xs text-gray-500 italic">Strictly for Shariah-eligible recipients</p>
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* 2. Donor Information Form */}
                        <div className="bg-white p-8 md:p-10 rounded-[45px] shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                                <FaUser className="text-emerald-600" />
                                Donor Information
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label font-bold text-gray-700">Full Name</label>
                                    <input name="name" onChange={handleInputChange} type="text" placeholder="e.g. Abdullah Hasan" className="input input-bordered w-full rounded-2xl focus:outline-emerald-500" required />
                                </div>
                                <div className="form-control">
                                    <label className="label font-bold text-gray-700">Mobile Number</label>
                                    <input name="mobile" onChange={handleInputChange} type="tel" placeholder="01XXXXXXXXX" className="input input-bordered w-full rounded-2xl focus:outline-emerald-500" required />
                                </div>
                                <div className="form-control md:col-span-2">
                                    <label className="label font-bold text-gray-700">Address (Optional)</label>
                                    <input name="address" onChange={handleInputChange} type="text" placeholder="Area, City" className="input input-bordered w-full rounded-2xl focus:outline-emerald-500" />
                                </div>
                            </div>
                        </div>

                        {/* 3. Amount Selection */}
                        <div className="bg-white p-8 md:p-10 rounded-[45px] shadow-sm border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                                <FaHandHoldingHeart className="text-emerald-600" />
                                Choose Amount
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                {amounts.map((amount) => (
                                    <button key={amount} onClick={() => setSelectedAmount(amount)} className={`py-4 rounded-2xl font-bold text-xl transition-all border-2 ${selectedAmount === amount ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg' : 'bg-white border-gray-100 text-gray-500 hover:border-emerald-200'}`}>
                                        ৳{amount}
                                    </button>
                                ))}
                            </div>
                            <input type="number" placeholder="Other Amount" className="input input-bordered input-lg w-full rounded-2xl focus:outline-emerald-500 text-xl font-bold" onChange={(e) => setSelectedAmount(e.target.value)} />
                        </div>
                    </div>

                    {/* RIGHT COLUMN: SUMMARY */}
                    <div className="lg:sticky lg:top-24">
                        <div className="bg-emerald-950 rounded-[45px] p-10 text-white shadow-2xl overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full -mr-16 -mt-16"></div>
                            
                            <h3 className="text-3xl font-bold mb-6">Summary</h3>
                            <div className="space-y-4 py-6 border-y border-emerald-900">
                                <div className="flex justify-between">
                                    <span className="text-emerald-200/60">Selected Fund:</span>
                                    <span className="font-bold text-amber-400 uppercase tracking-widest">{fundType}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-emerald-200/60">Total Amount:</span>
                                    <span className="text-3xl font-black text-emerald-400">৳{selectedAmount || 0}</span>
                                </div>
                            </div>
                            <button 
                                onClick={handleDonationSubmit}
                                className="btn btn-lg w-full bg-emerald-500 text-emerald-950 hover:bg-emerald-400 border-none rounded-full font-bold mt-8 shadow-xl transition-all hover:scale-105"
                            >
                                <FaMobileAlt /> Pay with bKash
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Modal remains the same as previous response */}
        </section>
    );
};

export default Donation;