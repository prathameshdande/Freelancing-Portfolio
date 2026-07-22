import React from "react";
import { Zap, Mail } from "lucide-react";
import { Github, Linkedin, Twitter } from "../common/SocialIcons";

const Footer = () => (
  <footer className="bg-white dark:bg-slate-900 pt-16 pb-8 px-6 md:px-12 border-t border-slate-100 dark:border-slate-800 transition-colors duration-200">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
      <div className="lg:col-span-2">
        <div className="flex items-center gap-2 text-violet-600 font-bold text-xl mb-4">
          <Zap className="fill-violet-600" size={24} />
          <span className="text-slate-900 dark:text-white">FreelancePro</span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
          Building fast, secure and scalable digital products that drive real
          results.
        </p>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
          Quick Links
        </h4>
        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
          <li>
            <a
              href="#home"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Services
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
          Services
        </h4>
        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
          <li>
            <a
              href="#"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Web Development
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Web3 Development
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              API Integration
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              UI/UX Design
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              DevOps
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-slate-900 dark:text-white mb-4">
          Connect
        </h4>
        <ul className="space-y-3 text-sm text-slate-500 dark:text-slate-400">
          <li>
            <a
              href="#"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-xs text-slate-400 dark:text-slate-500">
        © 2026 FreelancePro. All rights reserved.
      </p>
      <div className="flex items-center gap-4 text-slate-400 dark:text-slate-500">
        <a
          href="#"
          className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
          <Github size={18} />
        </a>
        <a
          href="#"
          className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
          <Linkedin size={18} />
        </a>
        <a
          href="#"
          className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
          <Twitter size={18} />
        </a>
        <a
          href="#"
          className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
          <Mail size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
