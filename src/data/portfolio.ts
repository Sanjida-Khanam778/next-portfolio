
import projectFirst from "../assets/projects/first.png";
import projectSecond from "../assets/projects/third.png";
import projectThird from "../assets/projects/second.png";
import projectFourth from "../assets/projects/fourth.png";

export const portfolioData = {
  personalInfo: {
    name: "Sanjida Khanam",
    title: "Frontend Developer",
    email: "sanjida.ice.778@gmail.com",
    location: "Dhaka, Bangladesh",
    phone: "+8801684796286",
    linkedin: "https://www.linkedin.com/in/sanjida-khanam-ice", // Inferred pattern or needs update
    github: "https://github.com/Sanjida-Khanam778", // Inferred pattern or needs update
    objective: "Passionate web developer focused on building responsive and scalable applications. Experienced in frontend development with a strong performance focus. Committed to continuous learning, innovation, and modern development practices."
  },
  skills: {
    frontend: ["JavaScript", "TypeScript", "React.js", "Redux", "HTML", "CSS", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    tools: ["Git", "GitHub", "Firebase", "Netlify", "Vercel", "DigitalOcean"],
    interpersonal: ["Effective communication", "Teamwork", "Time management"]
  },
  experience: [
    {
      role: "Jr. Frontend Developer",
      company: "Joint Venture AI",
      companyUrl: "https://jointventure.ai", // Placeholder
      period: "April 2025 - Present", // Note: This date is in the future based on the user prompt (2025), but standardizing.
      description: [
        "Translated complex UI/UX designs from Figma into pixel-perfect, reusable React components using Tailwind CSS, resulting in a 30% reduction in development time for new features.",
        "Collaborated with backend developers to integrate REST APIs, ensuring seamless data flow and functionality for features like user authentication and dynamic content rendering"
      ]
    },
    {
      role: "Industrial Attachment",
      company: "Bangladesh Japan Information Technology Limited (BJIT)",
      period: "1 week",
      description: ["1 week industrial training at BJIT, Dhaka"]
    }
  ],
  projects: [
    {
      id: "martin-travel",
      title: "Martin Travel",
      image: projectFourth,
      description: "This platform is an AI-powered travel planning solution designed to simplify and enhance the entire travel experience. It helps users discover destinations, plan trips, and make informed travel decisions based on their preferences, budget, and travel goals.",
      tech: ["React.js", "React Router", "Redux", "RTK Query", "Firebase", "Tailwind CSS", "Stripe"],
      features: [
        "Personalized travel planning guided by AI.",
        "Creates detailed day-by-day travel itineraries.",
        "Provides hotel and accommodation recommendations based on budget and preferences."
      ],
      links: {
        live: "https://mtravel.ai",
        website: "https://github.com/Sanjida-Khanam778/martin-landing-page",
        admin_dashboard: "https://github.com/Sanjida-Khanam778/martin-admin-dashboard.git"
      },
      challenges: "Faced challenges with payment integration and user engagement strategies.",
      improvements: "Planning to implement a better payment gateway and improve task automation."
    },
    {
      id: "click-cash",
      title: "Click Cash",
      image: projectFirst,
      description: "A micro-tasking and earning platform connecting workers and buyers for small online jobs with seamless payments.",
      tech: ["React.js", "React Router", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "Stripe"],
      features: [
        "Complete & Earn: Workers complete tasks and earn money.",
        "Post & Hire: Buyers post tasks and hire workers.",
        "Secure Payments: Coin-to-cash conversion with safe transactions."
      ],
      links: {
        live: "https://click-cash-9fbe3.web.app",
        client: "https://github.com/Sanjida-Khanam778/click-cash-client",
        server: "https://github.com/Sanjida-Khanam778/click-cash-server"
      },
      challenges: "Faced challenges with payment integration and user engagement strategies.",
      improvements: "Planning to implement a better payment gateway and improve task automation."
    },
    {
      id: "electrocare",
      title: "ElectroCare",
      image: projectSecond,
      description: "A service-sharing platform connecting users with professionals for reliable and efficient electronic repairs and maintenance.",
      tech: ["React.js", "React Router", "React Tooltip", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
      features: [
        "Users can explore various services added by different service providers.",
        "Service providers can add, update, and delete their services.",
        "Service providers can update the service status based on the progress of servicing."
      ],
      links: {
        live: "https://movie-portal-8bfdb.web.app",
        client: "https://github.com/Sanjida-Khanam778/electronics-repair-client",
        server: "https://github.com/Sanjida-Khanam778/electronics-repair-server"
      },
      challenges: "Faced responsive design issues and animation performance problems.",
      improvements: "Planning to add a blog section and more interactive animations."
    },
    {
      id: "movie-portal",
      title: "Movie Portal",
      image: projectThird,
      description: "A platform for discovering, reviewing, and exploring movies with an engaging user experience.",
      tech: ["JavaScript", "React.js", "Tailwind CSS", "Swal", "Node.js", "Express.js", "Firebase"],
      features: [
        "Explore movies with details such as release year, duration, poster, rating, etc.",
        "Logged-in users can add movies with details to the platform.",
        "Search & Filter: Find movies by genre, release year, or popularity."
      ],
      links: {
        live: "https://movie-portal-8bfdb.web.app",
        client: "https://github.com/Sanjida-Khanam778/movie-portal-client",
        server: "https://github.com/Sanjida-Khanam778/movie-portal-server"
      },
      challenges: "Implementing JWT token for authentication.",
      improvements: "Planning to add end-to-end encryption."
    }
  ],
  education: [
    {
      degree: "B.Sc in Information and Communication Engineering (ICE)",
      institution: "Noakhali Science and Technology University",
      period: "2019 - 2024",
      grade: "CGPA: 3.63"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Siddheswari Girls' College",
      period: "Passing Year: 2017",
      grade: ""
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Motijheel Govt. Girls High School",
      period: "Passing Year: 2015",
      grade: ""
    }
  ]
}
