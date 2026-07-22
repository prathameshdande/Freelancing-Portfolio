import React from "react";
import {
  Search,
  MapPin,
  PenTool,
  Code,
  CheckSquare,
  Cloud,
  LifeBuoy,
} from "lucide-react";

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Understand your requirements and project goals.",
      icon: Search,
      color: "text-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400",
    },
    {
      num: "02",
      title: "Planning",
      desc: "Create a roadmap and choose the right tech stack.",
      icon: MapPin,
      color:
        "text-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 dark:text-indigo-400",
    },
    {
      num: "03",
      title: "Design",
      desc: "Build user-friendly and responsive interfaces.",
      icon: PenTool,
      color: "text-pink-500 bg-pink-50 dark:bg-pink-900/20 dark:text-pink-400",
    },
    {
      num: "04",
      title: "Development",
      desc: "Develop clean, tested and scalable solutions.",
      icon: Code,
      color:
        "text-orange-500 bg-orange-50 dark:bg-orange-900/20 dark:text-orange-400",
    },
    {
      num: "05",
      title: "Testing",
      desc: "Thorough testing for bug-free and smooth performance.",
      icon: CheckSquare,
      color:
        "text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400",
    },
    {
      num: "06",
      title: "Deployment",
      desc: "Deploy to the cloud and make it production-ready.",
      icon: Cloud,
      color: "text-sky-500 bg-sky-50 dark:bg-sky-900/20 dark:text-sky-400",
    },
    {
      num: "07",
      title: "Support",
      desc: "Provide ongoing support and maintenance.",
      icon: LifeBuoy,
      color:
        "text-purple-500 bg-purple-50 dark:bg-purple-900/20 dark:text-purple-400",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-200">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          My Working Process
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mb-16">
          A simple and effective approach to deliver great results
        </p>

        <div className="relative">
          <div className="hidden md:block absolute top-8 left-10 right-10 h-0 border-t-2 border-dashed border-slate-200 dark:border-slate-700 -z-10"></div>

          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col items-center relative z-10 flex-1">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border-[6px] border-white dark:border-slate-800 shadow-sm ${step.color}`}>
                  <step.icon size={24} />
                </div>
                <div className="text-xs font-bold text-violet-600 dark:text-violet-400 mb-1">
                  {step.num}
                </div>
                <h3 className="font-bold text-slate-800 dark:text-white text-sm mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-[120px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
