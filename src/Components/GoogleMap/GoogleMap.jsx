import React from 'react';
import { FaMapMarkedAlt, FaExternalLinkAlt, FaDirections } from 'react-icons/fa';

const MapPreview = () => {
    // This is the specific coordinates/view for Chowdhury Tower, Chittagong
    const mapLocationQuery = "Chowdhury+Tower+6+Huseyn+Shaheed+Suhrawardy+Rd+Chittagong";
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapLocationQuery}`;

    return (
        <section className="py-10 bg-white px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header - Matching your Principles/Goals style */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-emerald-950 mb-4">Our Location</h2>
                    <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-center bg-gray-50 p-6 md:p-10 rounded-[45px] border border-gray-100 shadow-sm">

                    {/* Left: Map Visual Area */}
                    <div className="w-full lg:w-2/3 relative group cursor-pointer overflow-hidden rounded-[35px] shadow-lg aspect-video lg:aspect-auto lg:h-112.5">
                        {/* Map Placeholder Image - Using a stylized map texture or screenshot */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                            style={{
                                backgroundImage: `url('https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/91.8335,22.3330,15,0/1000x600?access_token=YOUR_MAPBOX_TOKEN_OPTIONAL')`,
                                backgroundColor: '#e5e7eb' // Fallback color
                            }}
                        >
                            {/* If you don't have an API key, use a high-quality placeholder image of a map */}
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                                alt="Map Background"
                                className="w-full h-full object-cover opacity-40 grayscale"
                            />
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-linier-to-t from-emerald-950/60 to-transparent"></div>

                        {/* Floating Marker Effect */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center text-white shadow-2xl animate-bounce mb-4">
                                <FaMapMarkedAlt size={30} />
                            </div>
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-emerald bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-full px-8 shadow-xl"
                            >
                                Open in Google Maps
                            </a>
                        </div>
                    </div>

                    {/* Right: Address Details */}
                    <div className="w-full lg:w-1/3 space-y-6">
                        <div className="bg-white p-8 rounded-[35px] shadow-sm border border-emerald-50">
                            <h3 className="text-2xl font-bold text-emerald-950 mb-4 flex items-center gap-2">
                                Office Address
                            </h3>
                            <div className="space-y-4 text-gray-600">
                                <p className="font-semibold text-emerald-800 text-lg">
                                    Chowdhury Tower Apartments
                                </p>
                                <p className="leading-relaxed">
                                    Alor Disha Foundation, <br /> Ground Floor, Shop # 16 & 17,<br />
                                    6 Huseyn Shaheed Suhrawardy Rd,<br />
                                    Chittagong 4100, Bangladesh
                                </p>
                                <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                                    <a
                                        href={googleMapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-emerald-700 font-bold hover:underline"
                                    >
                                        <FaDirections /> Get Directions
                                    </a>
                                    <p className="text-sm italic text-gray-400">
                                        * Visitors are welcome during office hours (9 AM - 6 PM).
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact Box */}
                        <div className="bg-emerald-900 p-8 rounded-[35px] text-white">
                            <p className="text-emerald-200 text-sm uppercase tracking-widest font-bold mb-2">Need Help?</p>
                            <p className="text-lg font-medium mb-4">Can't find our office? Call us for assistance.</p>
                            <p className="text-2xl font-bold">+880 1841-006642</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MapPreview;