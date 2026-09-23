import React, { useMemo, useState } from "react";
import { ExternalLink, Search, ArrowUpRight, Star, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    title: "Hushe Bandhu Jewellers",
    description:
      "A luxury jewellery platform & management system with live gold/silver rates, interactive calculator, and direct WhatsApp enquiry.",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200",
    category: "Full Stack",
    featured: true,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/prathameshdande",
    live: "https://hushe-bandhu-jewellers.netlify.app/",
  },
  {
    id: 2,
    title: "Second Brain",
    description:
      "A productivity application that lets users save, organize and share YouTube, Twitter and web resources securely.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
    category: "Full Stack",
    featured: true,
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/prathameshdande",
    live: "#",
  },
  {
    id: 3,
    title: "GigFlow",
    description:
      "Freelance marketplace with authentication, gig management, bidding system and hiring workflow.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200",
    category: "Full Stack",
    featured: true,
    technologies: ["React", "Node", "MongoDB", "JWT", "Socket.io"],
    github: "https://github.com/prathameshdande",
    live: "https://gigflow-rqw1.vercel.app",
  },
  {
    id: 4,
    title: "Token Launchpad",
    description:
      "Web3 application for creating SPL Tokens and deploying Solana token launchpads.",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200",
    category: "Web3",
    featured: false,
    technologies: ["Solana", "Web3.js", "SPL Token", "React"],
    github: "https://github.com/prathameshdande",
    live: "https://solana-token-launchpad-five.vercel.app/",
  },
  {
    id: 5,
    title: "Course Selling Platform",
    description:
      "Course marketplace with admin dashboard, authentication and payment-ready architecture.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    category: "Backend",
    featured: false,
    technologies: ["Node", "Express", "MongoDB", "JWT"],
    github: "https://github.com/prathameshdande",
    live: "#",
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "Web3"];

const ProjectsGallery = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("All");

  const filteredProjects = useMemo(() => {
    return projectData.filter((project) => {
      const categoryMatch = selected === "All" || project.category === selected;
      const searchMatch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [search, selected]);

  // Handle escape key
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="min-h-screen py-8 px-4 flex items-start justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-w-7xl bg-[#FCFCFD] dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 md:p-8 my-8 max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 z-10"
            aria-label="Close projects gallery"
          >
            <X size={24} className="text-slate-900 dark:text-white" />
          </button>

          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-flex items-center rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 px-4 py-2 text-sm font-medium">
              Portfolio
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-6 text-slate-900 dark:text-white">
              My Projects
            </h1>

            <p className="max-w-2xl mx-auto mt-5 text-slate-500 dark:text-slate-400">
              A collection of projects showcasing full-stack development, modern
              frontend engineering and Web3 applications.
            </p>
          </div>

          {/* Search & Filters */}
          <div className="flex flex-col md:flex-row gap-4 justify-between mb-10">
            <div className="relative w-full md:w-80">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects..."
                className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 py-3 pl-11 pr-4 outline-none focus:border-violet-400 dark:focus:border-violet-500 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setSelected(item)}
                  className={`rounded-xl px-5 py-2 text-sm transition ${
                    selected === item
                      ? "bg-violet-600 text-white"
                      : "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-violet-300 dark:hover:border-violet-600 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300"
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover"
                  />

                  {project.featured && (
                    <div className="absolute top-5 left-5 rounded-full bg-white dark:bg-slate-900 px-3 py-1 text-xs font-semibold flex items-center gap-2 shadow">
                      <Star size={14} className="text-yellow-500" />
                      Featured
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                        {project.category}
                      </p>
                      <h2 className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                        {project.title}
                      </h2>
                    </div>
                    <ArrowUpRight
                      size={24}
                      className="text-slate-400 dark:text-slate-500 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition"
                    />
                  </div>

                  <p className="mt-5 text-slate-500 dark:text-slate-400 leading-7">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 dark:bg-slate-700 px-3 py-1 text-xs text-slate-600 dark:text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-8">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 rounded-xl bg-violet-600 text-white py-3 flex justify-center items-center gap-2 hover:bg-violet-700 transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-slate-200 dark:border-slate-700 px-5 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition"
                    >
                      <FaGithub
                        size={20}
                        className="text-slate-700 dark:text-slate-300"
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24">
              <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300">
                No projects found
              </h2>
              <p className="mt-3 text-slate-500 dark:text-slate-400">
                Try another search or category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGallery;
