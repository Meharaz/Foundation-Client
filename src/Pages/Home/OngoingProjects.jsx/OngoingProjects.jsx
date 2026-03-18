import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router';

const OngoingProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetching from public/projects.json
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.ongoing_projects))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-emerald-900">Ongoing Activities</h2>
          <button className="text-emerald-700 font-semibold hover:underline">
            View All →
          </button>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={25}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="project-swiper pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400x250?text=Project+Image'; }}
                  />
                  <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Ongoing
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col ">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <Link to={"/Projects"}>
                  <button className="group flex items-center justify-center w-full py-3 px-4 border-2 border-emerald-600 text-emerald-700 font-bold rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300">
                    See Details
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OngoingProjects;