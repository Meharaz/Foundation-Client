import React from 'react';
import { 
  FaHeart, FaFlag, FaUsers, FaShieldAlt, FaBalanceScale, 
  FaHandHoldingHeart, FaBookOpen, FaPalette, FaHandsHelping, 
  FaCheckDouble, FaLightbulb, FaBuilding, FaPray 
} from 'react-icons/fa';

const PrinciplesAndValues = () => {
  const values = [
    {
      id: 1,
      icon: <FaPray />,
      title: "Service as Worship",
      description: "Service to humanity is service to the Creator – kindness is worship and humanity is the family of Allah."
    },
    {
      id: 2,
      icon: <FaFlag />,
      title: "Patriotism & Faith",
      description: "Patriotism is part of faith; working for the progress of Bangladesh is a national and spiritual duty."
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: "Collective Effort",
      description: "Working with teachers, doctors, engineers, and businessmen from all walks of life to serve humanity."
    },
    {
      id: 4,
      icon: <FaBalanceScale />,
      title: "Inclusive Service",
      description: "Rising above group, class, or community divisions, focusing solely on service to the nation and people."
    },
    {
      id: 5,
      icon: <FaShieldAlt />,
      title: "Transparency",
      description: "Ensuring accountability through receipt-based income and voucher-based expenditure."
    },
    {
      id: 6,
      icon: <FaHandHoldingHeart />,
      title: "Zakat Management",
      description: "Managing Zakat and General Funds responsibly to support poverty alleviation with maximum transparency."
    },
    {
      id: 7,
      icon: <FaBookOpen />,
      title: "Educational Focus",
      description: "Prioritizing education as the foundation of an enlightened society, focusing on religious and general knowledge."
    },
    {
      id: 8,
      icon: <FaPalette />,
      title: "Cultural Harmony",
      description: "Promoting tolerance and healthy values to free society from prejudice and indecency."
    },
    {
      id: 9,
      icon: <FaHandsHelping />,
      title: "Planned Donations",
      description: "Serving the underprivileged through relief distribution and long-term humanitarian initiatives."
    },
    {
      id: 10,
      icon: <FaCheckDouble />,
      title: "Ethical Integrity",
      description: "Commitment to honesty, integrity, and ethical practices in all organizational activities."
    },
    {
      id: 11,
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Introducing innovative services like Korbani Service to support people in need and remittance workers."
    },
    {
      id: 12,
      icon: <FaBuilding />,
      title: "Long-term Vision",
      description: "Focusing on building educational institutions, hospitals, and media organizations for development."
    },
    {
      id: 13,
      icon: <FaHeart />,
      title: "Compassion",
      description: "Carrying out all programs with professionalism, dedication, and compassion towards Allah’s creation.",
      fullWidth: true // Special flag for the last item
    }
  ];

  return (
    <section className=" pb-10 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-4">
            Principles & Values
          </h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto italic">
            "Guided by faith, driven by humanity, and committed to transparency."
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((item) => (
            <div 
              key={item.id} 
              className={`bg-white p-8 rounded-[35px] shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group flex flex-col items-center text-center ${
                item.fullWidth ? 'lg:col-span-3 lg:max-w-md lg:mx-auto' : ''
              }`}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 text-3xl mb-6 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesAndValues;