import React from 'react';
import { FaFacebook, FaYoutube, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router';
import Logo from '../Logo/Logo';

const Footer = () => {
    return (
        <footer className="bg-emerald-950 text-emerald-50">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                
                {/* Column 1: Brand & Mission */}
                <div className="flex flex-col items-center md:items-start space-y-6">
                    <div className="w-40 brightness-0 invert">
                        <Logo />
                    </div>
                    <p className="text-emerald-100/70 leading-relaxed text-sm max-w-sm">
                        Alor Disha Foundation is dedicated to creating an enlightened and prosperous society 
                        through education, healthcare, and humanitarian services. "Man for Mankind."
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-500 transition-colors shadow-lg">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-500 transition-colors shadow-lg">
                            <FaYoutube size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center hover:bg-emerald-500 transition-colors shadow-lg">
                            <FaInstagram size={20} />
                        </a>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-white font-bold text-lg mb-6 border-b-2 md:border-b-0 md:border-l-4 border-emerald-500 px-2 md:px-0 md:pl-3 pb-1 md:pb-0">
                        Quick Explorer
                    </h3>
                    <ul className="space-y-4 text-emerald-100/80 font-medium">
                        <li><Link to="/About" className="hover:text-emerald-400 transition-colors">About Our Journey</Link></li>
                        <li><Link to="/Service" className="hover:text-emerald-400 transition-colors">Humanitarian Services</Link></li>
                        <li><Link to="/Projects" className="hover:text-emerald-400 transition-colors">Ongoing Projects</Link></li>
                        <li><Link to="/Donation" className="hover:text-emerald-400 transition-colors">Donation Funds</Link></li>
                        <li><Link to="/Contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-white font-bold text-lg mb-6 border-b-2 md:border-b-0 md:border-l-4 border-emerald-500 px-2 md:px-0 md:pl-3 pb-1 md:pb-0">
                        Get In Touch
                    </h3>
                    <ul className="space-y-5 text-emerald-100/80">
                        <li className="flex items-start gap-3 justify-center md:justify-start">
                            <FaMapMarkerAlt className="mt-1 text-emerald-500 shrink-0" />
                            <span className="text-sm">Alor Disha Foundation, Ground Floor, Shop # 16 & 17,
                                    6 Huseyn Shaheed Suhrawardy Rd,
                                    Chittagong 4100, Bangladesh</span>
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <FaPhoneAlt className="text-emerald-500 shrink-0" />
                            <span className="text-sm">+880 1841-006642</span>
                        </li>
                        <li className="flex items-center gap-3 justify-center md:justify-start">
                            <FaEnvelope className="text-emerald-500 shrink-0" />
                            <span className="text-sm">adfoundation40@gmail.com</span>
                        </li>
                    </ul>
                    <div className="mt-8">
                        <Link to="/Donation" className="btn btn-sm bg-emerald-600 border-none text-white hover:bg-emerald-500 rounded-full px-6">
                            Donate Now
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="border-t border-white/5 bg-emerald-950/80 py-6 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider text-emerald-100/40">
                    <p>© {new Date().getFullYear()} ALOR DISHA FOUNDATION. ALL RIGHTS RESERVED.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;