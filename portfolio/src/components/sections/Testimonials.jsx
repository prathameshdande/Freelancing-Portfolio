import React from "react";
import { Quote, Star } from "lucide-react";
import SectionHeading from "../common/SectionHeading";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Prathamesh delivered a fantastic product beyond my expectations. Great communication and highly skilled!",
      name: "Rohan M.",
      role: "Founder, StartupX",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      text: "He understood the requirements perfectly and completed the project on time. Highly recommended!",
      name: "Sneha K.",
      role: "Product Manager",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
    {
      text: "Excellent developer! The code quality and attention to detail is top-notch. Will work again!",
      name: "Arjun P.",
      role: "CTO, InnovateX",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-white dark:bg-slate-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="What Clients Say" align="left" />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#fafafa] dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700">
              <Quote
                size={24}
                className="text-violet-300 dark:text-violet-600 mb-4"
              />
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-8 h-20">
                "{t.text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white">
                      {t.name}
                    </h4>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      {t.role}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={12}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
