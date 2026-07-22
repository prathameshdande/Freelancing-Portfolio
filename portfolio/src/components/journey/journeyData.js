import {
  GraduationCap,
  Code2,
  Blocks,
  Rocket,
  Brain,
  Briefcase,
  Award,
  Star,
  TrendingUp,
} from "lucide-react";

const journey = [
  {
    id: 1,
    year: "2024",
    title: "Bachelor of Computer Science",
    subtitle:
      "Graduated with strong programming fundamentals and a passion for building digital solutions.",
    icon: GraduationCap,
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500",
    achievements: ["Academic Excellence", "Project Based Learning"],
  },
  {
    id: 2,
    year: "2025",
    title: "Started MERN Development",
    subtitle:
      "Built multiple full-stack applications using React, Node.js, Express, and MongoDB.",
    icon: Code2,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-500",
    achievements: ["10+ Full Stack Apps", "REST APIs"],
  },
  {
    id: 3,
    year: "2025",
    title: "Started Web3 Development",
    subtitle:
      "Worked on Solana Wallet Adapter, SPL Tokens, and blockchain projects.",
    icon: Blocks,
    color: "from-orange-500 to-pink-500",
    bgColor: "bg-orange-500",
    achievements: ["Solana Integration", "SPL Tokens"],
  },
  {
    id: 4,
    year: "2026",
    title: "Built GigFlow",
    subtitle:
      "Production-ready freelance marketplace with real-time bidding and authentication.",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500",
    achievements: ["Real-time Bidding", "JWT Auth"],
  },
  {
    id: 5,
    year: "2026",
    title: "Built Second Brain",
    subtitle:
      "Knowledge management platform using React, TypeScript, and MongoDB.",
    icon: Brain,
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500",
    achievements: ["TypeScript", "Shared Collections"],
  },
  {
    id: 6,
    year: "2026",
    title: "Open To Work",
    subtitle:
      "Looking for Full Stack / MERN / Web3 opportunities where I can contribute and grow.",
    icon: Briefcase,
    color: "from-indigo-500 to-blue-500",
    bgColor: "bg-indigo-500",
    achievements: ["Available Now", "Remote & On-site"],
  },
];

export default journey;
