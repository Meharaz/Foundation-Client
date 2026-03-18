import React, { useState, useEffect } from 'react';

import { FaHeartbeat, FaClock, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/Service.json')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error("Error loading services:", err));
    }, []);

    return (
        <section className="py-20 bg-gray-50 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-4">Our Services</h2>
                    <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
                    <p className="mt-6 text-gray-600">Quick and transparent humanitarian support at your fingertips.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="bg-white rounded-[35px] shadow-sm border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="relative h-52">
                                <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold text-emerald-700 shadow-sm">
                                    {service.category}
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">{service.title}</h3>
                                <div className="flex items-center gap-2 text-emerald-600 text-sm mb-4 font-medium">
                                    <FaClock /> {service.availability}
                                </div>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                                    {service.short_description}
                                </p>

                                {/* Redirects to request page with service name in URL or state */}
                                <Link
                                    to={`/request-service?serviceName=${encodeURIComponent(service.title)}`}
                                    className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-full w-full group"
                                >
                                    Request Service <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;