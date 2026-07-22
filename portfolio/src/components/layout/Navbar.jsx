import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Download } from "lucide-react";
import { Link } from "react-scroll";

import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

const links = [
  {
    name: "About",
    to: "about",
  },
  {
    name: "Projects",
    to: "projects",
  },
  {
    name: "Skills",
    to: "skills",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{
          y: -100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        className="fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div
            className={`transition-all duration-500
            ${
              scrolled
                ? "rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-2xl border border-slate-200 dark:border-slate-700"
                : "bg-transparent"
            }`}>
            <div className="flex h-16 items-center justify-between px-6">
              {/* Logo */}
              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                href="/"
                className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    from-violet-600
                    via-indigo-500
                    to-cyan-500
                    text-lg
                    font-bold
                    text-white
                    shadow-lg
                  ">
                  P
                </div>

                <div>
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                    Prathamesh
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Full Stack Developer
                  </p>
                </div>
              </motion.a>

              {/* Navigation Links */}
              <div className="hidden lg:flex items-center gap-10">
                {links.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    spy
                    smooth
                    duration={700}
                    offset={-90}
                    activeClass="text-violet-600 dark:text-violet-400"
                    className="
                      group
                      cursor-pointer
                      relative
                      font-medium
                      text-slate-700
                      dark:text-slate-300
                      transition-colors
                      hover:text-violet-600
                      dark:hover:text-violet-400
                    ">
                    {item.name}
                    <span
                      className="
                        absolute
                        left-0
                        -bottom-2
                        h-[2px]
                        w-0
                        bg-violet-600
                        dark:bg-violet-400
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </Link>
                ))}
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4">
                <ThemeToggle />

                <a
                  href="/Prathamesh_Dande_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    hidden
                    lg:flex
                    items-center
                    gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-600
                    to-cyan-500
                    px-5
                    py-3
                    text-white
                    shadow-lg
                    transition
                    hover:scale-105
                    hover:shadow-xl
                  ">
                  <Download size={18} />
                  Resume
                </a>

                <button
                  onClick={() => setOpen(true)}
                  className="lg:hidden text-slate-700 dark:text-slate-300"
                  aria-label="Open menu">
                  <Menu size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} setOpen={setOpen} links={links} />
    </>
  );
}
