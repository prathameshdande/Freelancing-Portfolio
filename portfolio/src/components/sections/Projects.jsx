import React from "react";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";

const Projects = () => {
  const projects = [
    {
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Digital Heroes - Performance App",
      tags: ["Next.js", "Tailwind CSS", "PostgreSQL"],
      desc: "Performance analytics dashboard for digital heroes to track and improve productivity.",
    },
    {
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "GigFlow - Freelance Marketplace",
      tags: ["MERN Stack", "Socket.io", "JWT"],
      desc: "Full-stack freelance platform with real-time bids, hiring system and chat.",
    },
    {
      img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Solana Token Launchpad",
      tags: ["Solana", "SPL Token", "Web3.js"],
      desc: "Token launchpad dApp with pool creation, vesting and on-chain transactions.",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 px-6 md:px-12 bg-[#fafafa] dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <SectionHeading title="Featured Projects" align="left" />
          <Button variant="outline" className="text-xs mb-12">
            View All Projects <ArrowRight size={14} className="ml-1" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-violet-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-3">
                  {p.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
                  {p.desc}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors">
                  View Case Study <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
