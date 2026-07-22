const projects = [
  {
    id: 1,
    featured: true,
    title: "GigFlow",
    subtitle: "Freelance Marketplace",
    description:
      "A full-stack freelance marketplace where clients post gigs, freelancers bid, and hiring is managed securely through JWT authentication.",
    image: "/projects/gigflow.png",
    preview: "/projects/gigflow.mp4",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
    features: [
      "Authentication",
      "Role-based Dashboard",
      "Real-time Bidding",
      "Responsive UI",
    ],
    stats: {
      duration: "3 Months",
      team: "Solo",
      commits: "180+",
      status: "Live",
    },
    gradient: ["from-violet-600", "to-cyan-500"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    featured: true,
    title: "Second Brain",
    subtitle: "Knowledge Management",
    description:
      "A productivity application that stores YouTube videos, tweets, notes, and links with secure authentication and intelligent organization.",
    image: "/projects/secondbrain.png",
    preview: "/projects/secondbrain.mp4",
    tech: ["React", "TypeScript", "Express", "MongoDB", "Tailwind"],
    features: ["Authentication", "Shared Collections", "Search", "REST APIs"],
    stats: {
      duration: "2 Months",
      team: "Solo",
      commits: "150+",
      status: "Live",
    },
    gradient: ["from-emerald-500", "to-teal-500"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    featured: true,
    title: "Token Launchpad",
    subtitle: "Solana Web3",
    description:
      "Launch SPL tokens on Solana with wallet integration, minting, metadata management, and on-chain transactions.",
    image: "/projects/tokenlaunchpad.png",
    preview: "/projects/tokenlaunchpad.mp4",
    tech: ["React", "Solana", "Web3.js", "Tailwind"],
    features: ["Wallet Adapter", "Mint Tokens", "Metadata", "On-chain"],
    stats: {
      duration: "1.5 Months",
      team: "Solo",
      commits: "200+",
      status: "Live",
    },
    gradient: ["from-fuchsia-500", "to-violet-500"],
    github: "#",
    live: "#",
  },
];

export default projects;
