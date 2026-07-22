import {
  GraduationCap,
  BookOpen,
  Rocket,
  Code2,
  Award,
  Users,
  Zap,
  Brain,
  Target,
} from "lucide-react";

import {FaGithub } from "react-icons/fa";

const highlights = [
  {
    title: "Open Source",
    icon: FaGithub,
    description:
      "Actively using Git & GitHub to manage and publish projects with clean commit history.",
    gradient: "from-slate-600 to-gray-700",
  },
  {
    title: "Education",
    icon: GraduationCap,
    description:
      "Bachelor's in Computer Science with MCA in progress. Strong foundation in programming.",
    gradient: "from-violet-600 to-purple-500",
  },
  {
    title: "Continuous Learning",
    icon: BookOpen,
    description:
      "Daily DSA, System Design, and Full Stack development to stay current with industry trends.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Projects",
    icon: Rocket,
    description:
      "Built full-stack applications using MERN stack, Next.js, and Solana Web3.",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    title: "Problem Solving",
    icon: Code2,
    description:
      "Regularly practicing algorithms, data structures, and clean architecture principles.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    title: "Career Goal",
    icon: Award,
    description:
      "Seeking opportunities to build scalable production software and grow as an engineer.",
    gradient: "from-rose-500 to-red-500",
  },
];

export default highlights;
