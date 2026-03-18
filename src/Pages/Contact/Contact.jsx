import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Cover from '../../Components/Cover/Cover';
import img from '../../assets/all_imag/AboutBg.jpg'
import MapPreview from '../../Components/GoogleMap/GoogleMap';

const Contact = () => {
    return (
        <div>
            {/* <Cover
                title={"Contact Us"}
                img={img}
            /> */}
            <section className=" bg-gray-50 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-4">
                            Contact Us
                        </h2>
                        <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-gray-600 max-w-xl mx-auto">
                            Have questions or want to support our cause? Reach out to us and we’ll get back to you as soon as possible.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row bg-white rounded-[45px] shadow-xl overflow-hidden border border-gray-100">

                        {/* Left Side: Contact Info */}
                        <div className="w-full lg:w-2/5 bg-emerald-900 p-10 md:p-14 text-white flex flex-col justify-between">
                            <div>
                                <h3 className="text-3xl font-bold mb-8">Contact Information</h3>
                                <p className="text-emerald-100/70 mb-12">
                                    Fill out the form and our team will guide you on how you can contribute to the foundation.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-6 group">
                                        <div className="w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <FaPhoneAlt size={20} />
                                        </div>
                                        <div>
                                            <p className="text-emerald-200 text-sm uppercase tracking-widest font-bold">Call Us</p>
                                            <p className="text-xl font-semibold">+880 1841-006642</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 group">
                                        <div className="w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <FaEnvelope size={20} />
                                        </div>
                                        <div>
                                            <p className="text-emerald-200 text-sm uppercase tracking-widest font-bold">Email Us</p>
                                            <p className="text-xl font-semibold">adfoundation40@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-6 group">
                                        <div className="w-12 h-12 bg-emerald-800 rounded-full flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <FaMapMarkerAlt size={20} />
                                        </div>
                                        <div>
                                            <p className="text-emerald-200 text-sm uppercase tracking-widest font-bold">Location</p>
                                            <p className="text-xl font-semibold">Alkaran, Kotowali, Chattogram, Bangladesh</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Subtle decorative circles */}
                            <div className="mt-12 opacity-20 hidden md:block">
                                <div className="w-24 h-24 border-4 border-white rounded-full -ml-10 -mb-10"></div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="w-full lg:w-3/5 p-10 md:p-14 bg-white">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control w-full">
                                    <label className="label text-gray-700 font-bold">First Name</label>
                                    <input type="text" placeholder="John" className="input input-bordered w-full rounded-xl focus:outline-emerald-500" />
                                </div>

                                <div className="form-control w-full">
                                    <label className="label text-gray-700 font-bold">Last Name</label>
                                    <input type="text" placeholder="Doe" className="input input-bordered w-full rounded-xl focus:outline-emerald-500" />
                                </div>

                                <div className="form-control w-full md:col-span-2">
                                    <label className="label text-gray-700 font-bold">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="input input-bordered w-full rounded-xl focus:outline-emerald-500" />
                                </div>

                                <div className="form-control w-full md:col-span-2">
                                    <label className="label text-gray-700 font-bold">Message</label>
                                    <textarea className="ms-2 textarea textarea-bordered h-32 rounded-xl focus:outline-emerald-500" placeholder="How can we help you?"></textarea>
                                </div>

                                <div className="md:col-span-2 pt-4">
                                    <button className="btn btn-lg bg-emerald-600 hover:bg-emerald-700 border-none text-white w-full md:w-auto px-12 rounded-full shadow-lg shadow-emerald-100 flex items-center gap-3">
                                        Send Message
                                        <FaPaperPlane size={16} />
                                    </button>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
            <MapPreview />
        </div>
    );
};

export default Contact;