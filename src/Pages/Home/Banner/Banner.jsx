import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router';

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    // Fetch the JSON from the public folder
    useEffect(() => {
        fetch('/banner.json') // Looking at the root of your deployed site
            .then((res) => res.json())
            .then((data) => setBannerData(data))
            .catch((err) => console.error("Could not load banner data:", err));
    }, []);

    const customRenderThumbs = () => {
        return bannerData.map((banner) => (
            <img 
                key={banner.id} 
                src={banner.image} 
                alt="thumbnail" 
                className="rounded-lg object-cover h-10"
            />
        ));
    };

    if (bannerData.length === 0) return <div className="h-96 flex items-center justify-center text-emerald-900">Loading...</div>;

    return (
        <div className="bg-gray-50 py-6 md:py-10">
            <div className="max-w-7xl mx-auto px-4">
                <Carousel 
                    autoPlay={true} 
                    infiniteLoop={true} 
                    showArrows={true}
                    showStatus={false} 
                    showThumbs={true} 
                    renderThumbs={customRenderThumbs}
                    interval={5000}
                    className="overflow-hidden rounded-[40px] shadow-2xl border border-white"
                >
                    {bannerData.map((banner) => (
                        <div key={banner.id} className="relative h-125 md:h-162.5">
                            <div
                                className="h-full w-full"
                                style={{
                                    backgroundImage: `url(${banner.image})`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-emerald-950/80 via-emerald-900/40 to-transparent"></div>

                                <div className="relative h-full flex items-center justify-start px-8 md:px-20 text-left">
                                    <div className="max-w-2xl">
                                        <div className="inline-block bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-lg">
                                            Official Foundation
                                        </div>

                                        <h2 className="text-xl md:text-2xl font-medium text-emerald-100 mb-2">
                                           مؤسسة ألور ديشا
                                        </h2>
                                        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
                                            Alor Disha <br />
                                            <span className="text-emerald-400">Foundation</span>
                                        </h1>

                                        <p className="text-lg md:text-xl text-gray-200 italic mb-8 border-l-4 border-emerald-500 pl-4">
                                            "Man For Mankind"
                                        </p>

                                        <div className="mb-10">
                                            <h3 className="text-2xl font-bold text-amber-300 mb-2">{banner.title}</h3>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                                {banner.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-4">
                                            <Link to="/Donation" className="btn btn-md md:btn-lg bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-2xl px-8 shadow-lg transition-transform hover:-translate-y-1">
                                                Donate Now
                                            </Link>
                                            <Link to="/About" className="btn btn-md md:btn-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border-white/20 rounded-2xl px-8">
                                                Our Story
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            <style>{`
                .carousel .thumbs-wrapper { margin: 20px 0 !important; display: flex; justify-content: center; }
                .carousel .thumb { border: 4px solid transparent !important; border-radius: 15px !important; overflow: hidden; transition: all 0.3s ease; background: none !important; }
                .carousel .thumb.selected { border: 4px solid #10b981 !important; transform: scale(1.1); }
                .carousel .control-arrow { width: 60px !important; height: 60px !important; top: 50% !important; transform: translateY(-50%) !important; background: rgba(255, 255, 255, 0.1) !important; border-radius: 50% !important; margin: 0 20px !important; backdrop-filter: blur(5px); }
                .carousel .control-arrow:hover { background: rgba(16, 185, 129, 0.8) !important; }
            `}</style>
        </div>
    );
};

export default Banner;