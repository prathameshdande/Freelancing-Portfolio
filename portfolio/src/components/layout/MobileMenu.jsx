import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { X, Download } from "lucide-react";

export default function MobileMenu({ open, setOpen, links }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />

          {/* Menu Drawer */}
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
            className="
              fixed
              top-0
              right-0
              h-full
              w-80
              bg-white
              dark:bg-slate-950
              shadow-2xl
              z-50
              p-8
              flex
              flex-col
            ">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl text-slate-900 dark:text-white">
                Menu
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Close menu">
                <X size={24} className="text-slate-700 dark:text-slate-300" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="mt-12 flex flex-col gap-8">
              {links.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  spy
                  smooth
                  duration={700}
                  offset={-80}
                  activeClass="text-violet-600 dark:text-violet-400"
                  onClick={() => setOpen(false)}
                  className="
                    cursor-pointer
                    text-2xl
                    font-medium
                    text-slate-700
                    dark:text-slate-300
                    transition-colors
                    hover:text-violet-600
                    dark:hover:text-violet-400
                  ">
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="../../assets/Prathamesh_Dande_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                mt-auto
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                px-6
                py-4
                text-white
                font-medium
                shadow-lg
                transition-all
                hover:scale-105
                hover:shadow-xl
              ">
              <Download size={18} />
              Download Resume
            </a>

            {/* Footer */}
            <p className="mt-6 text-xs text-center text-slate-500 dark:text-slate-400">
              © 2024 Prathamesh Dande
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
