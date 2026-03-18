import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Simulating a Database/API Fetch
    const fakeDB = [
      {
        id: 1,
        title: "Relief Activities for Flood-Affected People in Sylhet",
        date: "25 May 2024",
        image: "/src/assets/all_imag/all_imag/sylhet/sylhet_flood-1.jpg",
        category: "Relief"
      },
      {
        id: 2,
        title: "Winter Blanket Distribution Among the Needy",
        date: "10 Jan 2024",
        image: "/src/assets/all_imag/all_imag/blanket_dist/blanket_dist-10.jpg",
        category: "Social Welfare"
      },
      {
        id: 3,
        title: "Educational Equipment Distribution to Rural Students",
        date: "15 Mar 2024",
        image: "/src/assets/all_imag/all_imag/edu_equip_dist/edu_equip_dist-13.jpg",
        category: "Education"
      }
    ];

    setBlogs(fakeDB);
  }, []);

  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-emerald-950 mb-2">Our Blogs</h2>
            <div className="w-20 h-1.5 bg-emerald-500 rounded-full"></div>
          </div>
          <button className="hidden md:flex items-center gap-2 text-emerald-700 font-bold hover:text-emerald-800 transition-colors">
            View All Blogs <FaArrowRight />
          </button>
        </div>

        {/* Blog List Container */}
        <div className="flex flex-col gap-6">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="card card-side bg-white shadow-sm border border-gray-100 rounded-4xl overflow-hidden hover:shadow-md transition-shadow duration-300 flex-col md:flex-row h-auto md:h-52"
            >
              {/* Blog Image */}
              <figure className="w-full md:w-80 h-48 md:h-full">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=Blog+Image'; }}
                />
              </figure>

              {/* Blog Content */}
              <div className="card-body p-6 md:p-8 flex justify-center">
                <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm mb-2">
                  <FaCalendarAlt size={14} />
                  <span>{blog.date}</span>
                  <div className="badge badge-outline border-emerald-200 text-emerald-700 ml-4">
                    {blog.category}
                  </div>
                </div>
                
                <h3 className="card-title text-xl md:text-2xl font-bold text-gray-800 hover:text-emerald-700 cursor-pointer transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                <div className="card-actions justify-start mt-4">
                  <button className="text-emerald-700 font-bold text-sm flex items-center gap-1 hover:underline">
                    READ MORE <FaArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mt-10 md:hidden">
          <button className="btn btn-emerald bg-emerald-600 text-white rounded-full px-8">
            View All Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;