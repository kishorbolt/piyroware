export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  description: string;
}

export interface PrincipleItem {
  title: string;
  description: string;
}

export const COMPANY_INFO = {
  name: "PIYROWARE",
  businessType: "Software Development & Artificial Intelligence Company",
  tagline: "Software Development & AI Solutions",
  email: "piyroware@gmail.com",
  phone: "+91 94887 93023",
  phoneTel: "tel:+919488793023",
  whatsappNumber: "919488793023",
  whatsappUrl: "https://wa.me/919488793023",
  location: "Tamil Nadu, India",
  year: 2026,
};

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Custom software applications designed around real business and user requirements.",
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "Modern, responsive and high-performance web applications.",
  },
  {
    number: "03",
    title: "AI & Machine Learning",
    description:
      "Intelligent systems using machine learning, deep learning and AI technologies.",
  },
  {
    number: "04",
    title: "AI-Powered Applications",
    description:
      "Software enhanced with intelligent automation, computer vision, natural language processing and AI-driven workflows.",
  },
  {
    number: "05",
    title: "Backend & API Development",
    description:
      "Secure APIs, authentication, databases and scalable backend systems.",
  },
  {
    number: "06",
    title: "Digital Solutions",
    description:
      "Purpose-built software experiences that transform ideas into usable digital products.",
  },
];

export const EXPERTISE_CAPABILITIES = [
  {
    title: "Artificial Intelligence",
    description: "Developing intelligent computational systems and automated reasoning models.",
  },
  {
    title: "Machine Learning",
    description: "Predictive modeling, data classification, and pattern recognition algorithms.",
  },
  {
    title: "Deep Learning",
    description: "Multi-layered neural architectures for complex data synthesis and feature extraction.",
  },
  {
    title: "Computer Vision",
    description: "Real-time visual processing, automated feature detection, and optical measurement.",
  },
  {
    title: "Web Applications",
    description: "Responsive, accessible, and fast full-stack web platforms built with modern frameworks.",
  },
  {
    title: "Backend Engineering",
    description: "High-throughput server architectures, event queues, and modular service communication.",
  },
  {
    title: "API Development",
    description: "RESTful endpoints, real-time WebSockets, and secure API gateways with granular authorization.",
  },
  {
    title: "Database Systems",
    description: "Relational schemas, document datastores, and optimized query execution layers.",
  },
  {
    title: "Cloud-ready Architecture",
    description: "Containerized environments, scalable microservices, and reliable cloud deployments.",
  },
  {
    title: "Automation",
    description: "Workflow streamlining, programmatic data parsing, and repetitive task reduction.",
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "Understand",
    description: "Analyzing the problem domain, identifying core objectives, and establishing clear technical requirements.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Architecting the technical foundation, choosing data schemas, and mapping the delivery roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description: "Creating clean user flows, component hierarchies, and intuitive interaction systems.",
  },
  {
    number: "04",
    title: "Build",
    description: "Writing clean, maintainable code with strict typing, rigorous logic, and modern conventions.",
  },
  {
    number: "05",
    title: "Launch",
    description: "Deploying to production infrastructure, verifying latency, and ensuring continuous reliability.",
  },
  {
    number: "06",
    title: "Improve",
    description: "Monitoring operational metrics and enhancing capabilities as system demands evolve.",
  },
];

export const WHY_PRINCIPLES: PrincipleItem[] = [
  {
    title: "Purposeful Engineering",
    description: "Technology built around actual problems.",
  },
  {
    title: "Modern Architecture",
    description: "Clean and maintainable software systems.",
  },
  {
    title: "Intelligent Solutions",
    description: "AI applied where it creates meaningful value.",
  },
  {
    title: "User-Centered Experiences",
    description: "Interfaces designed for clarity and usability.",
  },
];
