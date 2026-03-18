import React from 'react';
import { FaBullseye, FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';

const GoalsAndObjectives = () => {
  const data = [
    {
      id: 1,
      icon: <FaBullseye />,
      title: "Our Primary Goal",
      description: "To build a self-reliant, moral, and educated society by addressing poverty and providing long-term humanitarian infrastructure."
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      title: "Key Objectives",
      description: "Implementing innovative services like Korbani and Zakat management with maximum transparency and professional dedication."
    },
    {
      id: 3,
      icon: <FaRocket />,
      title: "Future Mission",
      description: "Focusing on building educational institutions, hospitals, and media organizations for sustainable national development."
    },
    {
      id: 4,
      icon: <FaHandshake />,
      title: "Strategic Impact",
      description: "Working collectively with professionals across all sectors to ensure humanitarian aid reaches every corner of the nation."
    }
  ];

  return (
    <section className=" bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Matches Principles & Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-4">
            Goals & Objectives
          </h2>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto italic">
            "Strategic vision aimed at sustainable social transformation."
          </p>
        </div>

        {/* Grid Container - Matches Principles & Values Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-10 rounded-[35px] shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group flex flex-col items-center text-center"
            >
              {/* Icon Container - Exactly like Principles */}
              <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 text-4xl mb-6 transition-all duration-300 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoalsAndObjectives;