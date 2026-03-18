import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaClock, FaCalendarAlt, FaTimes } from 'react-icons/fa';

const Projects = () => {
    const [projectsData, setProjectsData] = useState({ ongoing_projects: [], planned_projects: [] });
    const [activeTab, setActiveTab] = useState('ongoing');
    const [selectedProject, setSelectedProject] = useState(null);

    // Fetching from the public folder
    useEffect(() => {
        fetch('/projects.json') // Assumes file is in public/projects.json
            .then((res) => res.json())
            .then((data) => setProjectsData(data))
            .catch((err) => console.error("Error fetching projects:", err));
    }, []);

    const displayProjects = activeTab === 'ongoing'
        ? projectsData.ongoing_projects
        : projectsData.planned_projects;

    return (
        <section className="py-20 bg-gray-50 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 mb-4">
                        Our <span className="text-emerald-700">Projects</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full mb-8"></div>

                    {/* Tabs Switcher */}
                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setActiveTab('ongoing')}
                            className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'ongoing' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-emerald-900 border border-emerald-100 hover:bg-emerald-50'}`}
                        >
                            Ongoing Projects
                        </button>
                        <button
                            onClick={() => setActiveTab('planned')}
                            className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'planned' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-emerald-900 border border-emerald-100 hover:bg-emerald-50'}`}
                        >
                            Planned Projects
                        </button>
                    </div>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayProjects.map((project) => (
                        <div
                            key={project.id}
                            className="bg-white rounded-[35px] overflow-hidden shadow-sm border border-gray-100 group hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative h-60 overflow-hidden">
                                <img
                                    src={project.image.replace('../src/', '/')} // Fixes relative paths from your JSON
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => e.target.src = "https://via.placeholder.com/400x300?text=Project+Image"}
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="badge badge-emerald bg-emerald-600 text-white border-none p-4 rounded-full font-bold">
                                        {activeTab === 'ongoing' ? <FaClock className="mr-2" /> : <FaCalendarAlt className="mr-2" />}
                                        {activeTab === 'ongoing' ? 'Ongoing' : 'Planned'}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-3 line-clamp-1">{project.title}</h3>
                                <p className="text-gray-600 mb-6 line-clamp-2 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="flex items-center gap-2 text-emerald-700 font-bold group-hover:gap-4 transition-all"
                                >
                                    View Details <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- Project Details Modal (Popup) --- */}
                {selectedProject && (
                    <div className="modal modal-open">
                        <div className="modal-box max-w-4xl p-0 rounded-[40px] overflow-hidden bg-white">
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-5 right-5 z-10 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-colors"
                            >
                                <FaTimes size={20} />
                            </button>

                            <div className="flex flex-col md:flex-row">
                                <div className="md:w-1/2 h-64 md:h-auto">
                                    <img
                                        src={selectedProject.image.replace('../src/', '/')}
                                        className="w-full h-full object-cover"
                                        alt={selectedProject.title}
                                    />
                                </div>
                                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-2">Project Overview</span>
                                    <h3 className="text-3xl font-extrabold text-emerald-950 mb-4">{selectedProject.title}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-8">
                                        {selectedProject.description}
                                    </p>
                                    <div className="flex flex-col gap-4">
                                        <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-full px-8">
                                            Donate to this Project
                                        </button>
                                        <button onClick={() => setSelectedProject(null)} className="btn btn-ghost rounded-full">
                                            Close Window
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-backdrop bg-emerald-950/40" onClick={() => setSelectedProject(null)}></div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;