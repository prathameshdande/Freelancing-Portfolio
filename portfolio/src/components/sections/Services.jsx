import React from "react";
import {
  MonitorSmartphone,
  Database,
  Cloud,
  LayoutTemplate,
  Zap,
  Cpu,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const Services = () => {
  const services = [
    {
      icon: MonitorSmartphone,
      title: "Full-Stack Web Development",
      desc: "End-to-end web applications using MERN stack, Next.js and modern tools.",
      color: "text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      icon: Database,
      title: "Web3 & Blockchain Development",
      desc: "Decentralized applications, smart contracts and wallet integrations on Solana.",
      color:
        "text-orange-500 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-400",
    },
    {
      icon: Cloud,
      title: "API Development & Integration",
      desc: "Building secure RESTful APIs and third-party integrations.",
      color:
        "text-purple-600 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-400",
    },
    {
      icon: LayoutTemplate,
      title: "UI/UX & Frontend Development",
      desc: "Responsive, accessible and pixel-perfect interfaces that convert.",
      color: "text-pink-500 bg-pink-50 dark:bg-pink-900/20 dark:text-pink-400",
    },
    {
      icon: Zap,
      title: "Performance & Optimization",
      desc: "Speed up your app and optimize performance for scale.",
      color:
        "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400",
    },
    {
      icon: Cpu,
      title: "Deployment & DevOps",
      desc: "CI/CD, cloud deployment, and server management on AWS, Vercel, etc.",
      color: "text-sky-500 bg-sky-50 dark:bg-sky-900/20 dark:text-sky-400",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-6 md:px-12 bg-[#fafafa] dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Services I Offer"
          subtitle="High-quality solutions tailored to your needs"
          align="left"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all group">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${s.color}`}>
                <s.icon size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6 h-16">
                {s.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
                Learn more{" "}
                <ArrowRight
                  size={16}
                  className="ml-1 transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
