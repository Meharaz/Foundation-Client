import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Gallery = () => {
    // Using paths relative to your 'public' folder as requested
    const photos = [
        { id: 1, url: "/src/assets/all_imag/all_imag/sylhet/sylhet_flood-1.jpg" },
        { id: 2, url: "/src/assets/all_imag/all_imag/blanket_dist/blanket_dist-10.jpg" },
        { id: 3, url: "/src/assets/all_imag/all_imag/edu_equip_dist/edu_equip_dist-13.jpg" },
        { id: 4, url: "/src/assets/all_imag/all_imag/bm_dipo/bm_dipo-1.jpeg" },
        { id: 5, url: "/src/assets/all_imag/all_imag/agm/agm-2.jpeg" }, // Reuse for placeholder
        { id: 6, url: "/src/assets/all_imag/all_imag/blanket_dist/blanket_dist-11.jpg" }, // Reuse for placeholder
    ];

    return (
        <section className="py-20 bg-white px-4">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-4xl font-bold text-center text-emerald-950 mb-12">
                    Photos
                </h2>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className="group relative overflow-hidden rounded-4xl shadow-md aspect-4/3 cursor-pointer"
                        >
                            <img
                                src={photo.url}
                                alt="Foundation Activity"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found'; }}
                            />
                            {/* Subtle Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                <div className="flex justify-center mt-12">
                    <button className="btn btn-lg bg-emerald-600 hover:bg-emerald-700 text-white border-none px-10 rounded-full flex items-center gap-3 shadow-lg transition-all active:scale-95">
                        See More
                        <FaArrowRight className="text-lg" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Gallery;