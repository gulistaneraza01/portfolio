import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Gulistane Raza",
  initials: "GR",
  url: "https://github.com/gulistaneraza01",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description:
    "Full-Stack & DevOps Engineer specializing in scalable system design and intelligent automation. Experienced in developing microservices, event-driven systems, and cloud-native infrastructure leveraging modern DevOps and distributed architecture principles.",
  summary:
    "Driven to build scalable, resilient platforms through automation and cloud-native technologies. Actively exploring distributed systems, backend scalability, and infrastructure automation to engineer high-performance applications for real-world scale.",
  avatarUrl: "/me.png",

  skills: [
    // Core Languages
    { name: "Java", icon: "/java-default.svg" },
    { name: "Node.js", icon: "/nodejs-default.svg" },
    { name: "Javascript", icon: "/javascript-default.svg" },
    { name: "TypeScript", icon: "/typescript-default.svg" },
  
    // Architecture & System Design
    { name: "Microservices", icon: "/microservices.png" },
    { name: "Distributed Systems", icon: "/distributed.png" },
    { name: "Event-Driven Architecture", icon: "/iteration.png" },
  
    // Cloud & DevOps
    { name: "Docker", icon: "/docker-default.svg" },
    { name: "Kubernetes", icon: "/kubernetes-default.svg" },
    { name: "AWS", iconDark: "/aws-dark.svg", iconLight: "/aws-default.svg" },
    { name: "Terraform", icon: "/terraform-default.svg" },
    { name: "GitHub Actions", icon: "/github-actions-default.svg" },
  
    // Backend Frameworks & APIs
    { name: "Spring Boot", icon: "/spring-boot-default.svg" },
    {
      name: "Express",
      iconDark: "/expressjs-dark.svg",
      iconLight: "/expressjs-default.svg",
    },
    { name: "OAuth2 / OIDC / SSO", icon: "/oauth.svg" },
  
    // Databases & Streaming
    { name: "PostgreSQL", icon: "/postgresql-default.svg" },
    { name: "MongoDB", iconDark: "/mongodb-dark.svg", iconLight: "/mongodb-light.svg" },
    { name: "Redis", icon: "/redis-default.svg" },
    { name: "Apache Kafka", iconDark: "/apache-kafka-dark.svg", iconLight: "/apache-kafka-light.svg" },
  
    // Frontend (Supporting)
    { name: "React", icon: "/react-dark.svg" },
    { name: "React Query", icon: "/reactquery-default.svg" },
    { name: "Redux", icon: "/redux-default.svg" },
    { name: "Tailwind CSS", icon: "/tailwindcss-default.svg" },
  
    // AI Systems
    { name: "RAG Systems", iconDark: "/rag-dark.png", iconLight: "/rag-default.png" },
  
    // Developer Tools
    { name: "Git", icon: "/git-default.svg" },
    { name: "GitHub", iconDark: "/github-dark.svg", iconLight: "/github-default.svg" },
    { name: "Prisma", iconDark: "/prisma-dark.svg", iconLight: "/prisma-default.svg" },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "gulistaneraza01@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/gulistaneraza01",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/gulistaneraza",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/GulistaneRaza",
        icon: Icons.x,
        navbar: true,
      },
      Cal: {
        name: "Book a Call",
        url: "https://cal.com/gulistaneraza/30min",
        icon: Icons.calendar,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Intutr",
      badges: [],
      href: "https://intutr.com/",
      location: "On-site",
      title: "Software Engineer",
      logoUrl: "/intutr-logo.jpg",
      start: "November 2025",
      end: "Present",
      description:
        "• Implemented microservices and REST APIs using Java Spring Boot to handle high-volume data requests with optimized database interactions in PostgreSQL.\n• Integrated RAG and VectorDB for intelligent data retrieval, improving search efficiency and enabling contextual query responses.\n• Developed React-based interfaces for internal and client-facing dashboards, ensuring responsive design and seamless frontend-backend communication\n• Designed CI/CD pipelines using GitHub Actions to automate application build, testing, containerization, and deployment processes across environments",
    },
    {
      company: "Disciples Corporate",
      href: "https://imyls.courses.store/",
      badges: [],
      location: "Hybrid",
      title: "Data Analyst",
      logoUrl: "/disciplescorporate.png",
      start: "February 2025",
      end: "March 2025",
      description:
        "• Performed data cleaning, preprocessing, and exploratory data analysis using Python, Excel, and SQL; applied statistical methods to extract actionable insights from structured datasets.\n• Developed interactive dashboards and analytical reports using Power BI and Excel to support data-driven decision-making.",
    },
  ],
  education: [
    {
      school: "Jain University",
      href: "https://www.jainuniversity.ac.in/programs",
      degree: "Master of Computer Application",
      logoUrl: "/JGI-logo.png",
      start: "2025",
      end: "Present",
    },
    {
      school: "Don Bosco Institute of Technology",
      href: "https://dbimsca.edu.in/degree-colleges-in-bangalore-don-bosco-institute/best-bca-degree-colleges-in-bangalore-don-bosco-institute/",
      degree: "Bachelor of Computer Application",
      logoUrl: "/dbit-logo.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Huda National PU College",
      href: "https://hudainstitutions.in/",
      degree: "Pre-University Course",
      logoUrl: "/huda-nation-pu-logo.png",
      start: "2020",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Vercel — Platform Engineering System",
      href: "https://github.com/gulistaneraza01/vercel-clone",
      active: true,
      description:
        "Designed and built a Vercel-like deployment platform that automatically builds and hosts frontend applications from GitHub repositories using containerized build workers and cloud-based artifact delivery.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "AWS ECS",
        "AWS S3",
        "Docker",
        "Reverse Proxy",
        "Microservices",
        "CI/CD",
        "Cloud Architecture",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gulistaneraza01/vercel-clone",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // image: "/transcode-hls.png",
      video: "",
    },

    {
      title: "Cloud Video Transcoding & HLS Streaming Platform",
      href: "https://github.com/gulistaneraza01/video-transcoding",
      active: true,
      description:
        "Built a distributed video processing platform that asynchronously transcodes uploaded videos into adaptive bitrate HLS streams using queue-driven microservices and containerized FFmpeg workers.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "FFmpeg",
        "AWS S3",
        "AWS ECS",
        "AWS SQS",
        "Docker",
        "Event-Driven Architecture",
        "Distributed Systems",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gulistaneraza01/video-transcoding",
          icon: <Icons.github className="size-3" />,
        },
      ],
      // image: "/vercel.png",
      image: "",
      video: "",
    },

    {
      title: "Realtime Chat System ",
      href: "https://github.com/gulistaneraza01/Chat-App",
      active: true,
      description:
        "Developed a scalable real-time chat application powered by Kafka-based event streaming architecture supporting asynchronous messaging and horizontal scalability.",
      technologies: [
        "Node.js",
        "Kafka",
        "WebSockets",
        "Redis",
        "Microservices",
        "Event Streaming",
        "Distributed Messaging",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gulistaneraza01/Chat-App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "Learning Management System",
      href: "https://github.com/gulistaneraza01/LMS-app",
      active: true,
      description:
        "Full-stack LMS platform supporting video-based course delivery, authentication, payments, and role-based dashboards for instructors and students.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Stripe",
        "Clerk",
        "REST APIs",
        "Video Streaming",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gulistaneraza01/LMS-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "Spotify Streaming — Microservices Music Platform",
      href: "https://github.com/gulistaneraza01/spotify-clone-app",
      active: true,
      description:
        "Implemented a music streaming platform using microservices architecture with authentication, playlist management, media uploads, and Redis-powered caching.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "JWT",
        "Cloudinary",
        "Microservices",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gulistaneraza01/spotify-clone-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },

    {
      title: "E-Commerce Platform",
      href: "https://github.com/gulistaneraza01/E-Commerce",
      active: true,
      description:
        "Developed a scalable e-commerce application featuring product management, authentication, cart system, order processing, and payment integration.",
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Authentication",
        "Payment Integration",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/gulistaneraza01/E-Commerce",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "Smart India Hackathon (SIH)",
  //     dates: "August 25th - 26th, 2022",
  //     location: "India",
  //     description:
  //       "Represented 6-member team in designing IoT-based Sewage Problem Alert system, securing top finalist position among 30,000+ participating teams. Developed a comprehensive solution for real-time sewage monitoring and alerting.",
  //     image: "/SIH2.webp",
  //     links: [],
  //   },
  //   {
  //     title: "Hack JKLU",
  //     dates: "March 3rd - 4th, 2023",
  //     location: "India",
  //     description:
  //       "Conceptualised and prototyped Blockchain-based eVault system with 256-bit encryption, earning 3rd place recognition for innovation. Built a secure digital vault solution leveraging blockchain technology for enhanced data protection.",
  //     image: "/jklulogo.jpg",
  //     win: "3rd Place Winner",
  //     links: [],
  //   },
  // ],
} as const;
