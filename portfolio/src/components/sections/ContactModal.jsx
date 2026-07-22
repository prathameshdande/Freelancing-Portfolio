import React, { useEffect, useCallback, useMemo, useRef } from "react";
import { X, Mail, Download, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const CONTACT_ITEMS = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    subtitle: "+91 8530698705",
    icon: FaWhatsapp,
    href: "https://wa.me/918530698705?text=Hi%20Prathamesh,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    ariaLabel: "Contact via WhatsApp",
    color:
      "text-green-600 bg-green-50 dark:text-green-400 dark:bg-green-950/50",
  },
  {
    id: "email",
    title: "Email",
    subtitle: "prathameshdande7@gmail.com",
    icon: Mail,
    href: "mailto:prathameshdande7@gmail.com?subject=Project Inquiry",
    ariaLabel: "Send an email",
    color: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/50",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    subtitle: "Let's Connect",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/prathamesh-dande-a2b14a32b",
    ariaLabel: "Connect on LinkedIn",
    color: "text-blue-700 bg-blue-50 dark:text-blue-400 dark:bg-blue-950/50",
  },
  {
    id: "github",
    title: "GitHub",
    subtitle: "View My Projects",
    icon: FaGithub,
    href: "https://github.com/prathameshdande",
    ariaLabel: "View GitHub profile",
    color: "text-slate-700 bg-slate-100 dark:text-slate-400 dark:bg-slate-800",
  },
  {
    id: "resume",
    title: "Resume",
    subtitle: "Download Resume",
    icon: Download,
    href: "/Prathamesh_Dande_Resume.pdf",
    ariaLabel: "Download resume (PDF)",
    color:
      "text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-950/50",
    download: true,
  },
];

const ContactCard = React.memo(({ item }) => {
  const Icon = item.icon;

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      download={item.download || false}
      aria-label={item.ariaLabel || `Contact via ${item.title}`}
      className="group rounded-2xl border border-slate-200 dark:border-slate-700 p-3 sm:p-4 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-slate-800">
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-2 sm:mb-3 ${item.color || "bg-violet-100 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400"}`}>
        <Icon size={20} className="sm:size-24" />
      </div>

      <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white">
        {item.title}
      </h4>

      <p className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs mt-0.5 sm:mt-1 line-clamp-1">
        {item.subtitle}
      </p>

      <div className="mt-3 sm:mt-4 flex justify-end">
        <ArrowUpRight
          size={16}
          className="text-slate-400 dark:text-slate-600 group-hover:text-violet-600 dark:group-hover:text-violet-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
          aria-hidden="true"
        />
      </div>
    </a>
  );
});

ContactCard.displayName = "ContactCard";

const InfoCard = React.memo(({ icon: Icon, title, value, className = "" }) => (
  <div className="space-y-0.5 sm:space-y-1">
    <h4 className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
      {Icon && (
        <Icon
          size={12}
          className="sm:size-14 text-violet-500 dark:text-violet-400"
        />
      )}
      {title}
    </h4>
    <p
      className={`text-slate-500 dark:text-slate-400 text-xs sm:text-sm ${className}`}>
      {value}
    </p>
  </div>
));

InfoCard.displayName = "InfoCard";

const ContactModal = ({ isOpen, onClose, onSuccess }) => {
  const modalRef = useRef(null);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    },
    [onClose],
  );

  const handleOutsideClick = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!isOpen) return;

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      const scrollYRestore = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollYRestore) {
        window.scrollTo(0, parseInt(scrollYRestore || "0", 10) * -1);
      }

      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, handleKeyDown, handleOutsideClick]);

  const contactCards = useMemo(
    () =>
      CONTACT_ITEMS.map((item) => <ContactCard key={item.id} item={item} />),
    [],
  );

  const infoItems = useMemo(
    () => [
      {
        id: "response-time",
        icon: null,
        title: "Response Time",
        value: "Usually within 24 hours.",
      },
      {
        id: "location",
        icon: null,
        title: "Location",
        value: "Pune, Maharashtra, India",
      },
      {
        id: "looking-for",
        icon: null,
        title: "Looking For",
        value: "MERN • React • Next.js • Web3",
      },
    ],
    [],
  );

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-md p-2 sm:p-4 transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title">
      <div
        ref={modalRef}
        className="relative w-full max-w-6xl h-[90vh] sm:h-[85vh] md:h-[80vh] max-h-[700px] overflow-hidden rounded-2xl sm:rounded-[28px] bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 animate-[fadeIn_.25s_ease]"
        role="document">
        {/* Close Button - Better positioning for mobile */}
        <button
          onClick={onClose}
          className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 z-20 p-1.5 sm:p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
          aria-label="Close modal">
          <X size={18} className="sm:size-20 text-slate-900 dark:text-white" />
        </button>

        <div className="grid lg:grid-cols-[1fr_1.4fr] h-full">
          {/* Left Column - Info */}
          <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-r border-slate-200 dark:border-slate-800 p-4 sm:p-6 lg:p-8 flex flex-col justify-between overflow-hidden">
            <div className="flex-1 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-emerald-50 dark:bg-emerald-950/50 px-2.5 sm:px-3 py-1 sm:py-1.5 text-emerald-700 dark:text-emerald-400 text-[10px] sm:text-xs font-medium border border-emerald-200 dark:border-emerald-800 self-start">
                <CheckCircle2
                  size={12}
                  className="sm:size-14 text-emerald-500"
                />
                Available for Work
              </span>

              <h2
                id="contact-modal-title"
                className="text-xl sm:text-2xl lg:text-3xl font-bold mt-3 sm:mt-4 text-slate-900 dark:text-white">
                Let's Work Together
              </h2>

              <p className="mt-2 sm:mt-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                I'm available for freelance projects, internships, full-time
                opportunities, and collaborations.
              </p>

              <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-2 sm:gap-4">
                {infoItems.map((item) => (
                  <InfoCard
                    key={item.id}
                    title={item.title}
                    value={item.value}
                    className={item.className}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-950 dark:to-indigo-950 border border-violet-200 dark:border-violet-800 p-3 sm:p-4 mt-3 sm:mt-4 flex-shrink-0">
              <h3 className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                <span className="text-lg sm:text-xl">💡</span>
                Have an idea?
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                Let's build something amazing together.
              </p>
            </div>
          </div>

          {/* Right Column - Contact Options */}
          <div className="overflow-y-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-slate-900">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Contact Options
            </h3>

            {/* Grid - Responsive columns */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2 sm:gap-3">
              {contactCards}
            </div>

            <div className="mt-4 sm:mt-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 p-3 sm:p-4">
              <h3 className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg">🚀</span>
                Ready to start?
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-xs mt-0.5 leading-relaxed">
                Reach out through any platform above. Always excited to discuss
                new ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
