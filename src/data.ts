import {
  Mail,
  Phone,
  Github,
  Linkedin,
  FileCode2,
  Database,
  BarChart,
  Terminal,
  BookOpen,
  Award,
  Trophy,
  BrainCircuit,
  Lock,
  Library,
  MailWarning
} from "lucide-react";

export const personalInfo = {
  name: "Karthik Dasari",
  title: "Data Analyst & AI/ML Engineer",
  about:
    "Passionate AI & Machine Learning Engineer and Data Analyst with a strong foundation in Python, SQL, and data-driven technologies. I build intelligent solutions to solve real-world problems and continuously explore emerging technologies in AI and Machine Learning.",
  contacts: [
    {
      label: "LinkedIn",
      value: "dasari-karthik-840862340",
      url: "https://www.linkedin.com/in/dasari-karthik-840862340/",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: "karthik-codes-hub",
      url: "https://github.com/karthik-codes-hub",
      icon: Github,
    },
    {
      label: "Email",
      value: "dasarikarthik80@gmail.com",
      url: "mailto:dasarikarthik80@gmail.com",
      icon: Mail,
    },
    {
      label: "Phone",
      value: "+91 9705078585",
      url: "tel:9705078585",
      icon: Phone,
    },
  ],
};

export const skills = [
  { name: "Python", category: "Programming", level: "Core Skill", details: ["NumPy", "Pandas", "Scikit-learn", "TensorFlow"] },
  { name: "C", category: "Programming", level: "Familiar", details: ["Data Structures", "Algorithms"] },
  { name: "C++", category: "Programming", level: "Experienced", details: ["OOP", "STL"] },
  { name: "SQL", category: "Database", level: "Core Skill", details: ["PostgreSQL", "Queries", "CTEs", "Joins"] },
  { name: "PostgreSQL", category: "Database", level: "Experienced", details: ["Schema Design", "Optimization"] },
  { name: "Excel", category: "Data Tools", level: "Experienced", details: ["Pivot Tables", "VLOOKUP", "Macros"] },
  { name: "PowerBI", category: "Data Tools", level: "Core Skill", details: ["DAX", "Data Modeling", "Dashboards"] },
  { name: "HTML", category: "Web", level: "Experienced", details: ["Semantic HTML", "Accessibility"] },
  { name: "CSS", category: "Web", level: "Experienced", details: ["Flexbox", "Grid", "Responsive Design"] },
];

export const education = [
  {
    degree: "B.Tech, CSE AI & ML",
    institution: "Marwadi University | Gujarat",
    period: "Currently 3rd year",
    score: "Current CGPA: 9.0",
    bgImage: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800",
    coursework: ["Machine Learning", "Data Structures", "DBMS", "Computer Networks", "Artificial Intelligence"]
  },
  {
    degree: "Intermediate, MPC",
    institution: "Krishnavani Junior College | Khammam",
    period: "2022 - 2024",
    score: "Percentage: 95%",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800",
  },
  {
    degree: "CBSE",
    institution: "Sree Vidyanikethan High School | Khammam",
    period: "2021 - 2022",
    score: "Percentage: 85%",
    bgImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800",
  },
];

export const projects = [
  {
    title: "Email Spam Classifier",
    description:
      "Developed an automated Email Spam Classification System using Machine Learning and NLP to identify spam, promotional, and potentially fraudulent emails. Implemented text preprocessing, feature extraction, Naïve Bayes classification, and batch processing to efficiently classify multiple emails.",
    technologies: [
      "Python",
      "NLP",
      "NLTK",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Flask",
    ],
    link: "https://github.com/karthik-codes-hub/Email-Spam-Classifier",
    icon: MailWarning,
    bgImage: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Password Generator",
    description:
      "Developed a secure password generator using Python that creates strong and randomized passwords based on user-defined length. The system combines uppercase and lowercase letters, numbers, and special characters to generate unique and secure passwords.",
    technologies: ["Python", "Random Module"],
    link: "https://karthik-codes-hub.github.io/Password-generator/",
    icon: Lock,
    bgImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Brain Tumor Detection",
    description:
      "Developed a Deep Learning-based Brain Tumor Detection System to classify MRI images based on the presence of brain tumors. Implemented image preprocessing, data augmentation, CNN-based classification, and ResNet50 transfer learning using TensorFlow and Keras.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "CNN",
      "ResNet50",
      "NumPy",
      "OpenCV",
      "Matplotlib",
    ],
    link: "https://github.com/karthik-codes-hub/Brain-Tumor-Detection",
    icon: BrainCircuit,
    bgImage: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Library Management System",
    description:
      "Developed a Personal Library Management System in Python to efficiently organize and manage book records. Implemented features such as adding, deleting, searching, and sorting books, providing a simple and efficient solution for maintaining a digital library.",
    technologies: ["Python", "Data Structures", "File Handling"],
    link: "https://github.com/karthik-codes-hub/My-Personal-Library-Manager-A-console-App-to-Organize-and-Track-Your-Books-Using-Python",
    icon: Library,
    bgImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800",
  },
];

export const whatIDo = [
  {
    title: "Machine Learning",
    description: "Build and train ML models for real-world problems.",
    icon: BrainCircuit,
  },
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights.",
    icon: BarChart,
  },
  {
    title: "AI Solutions",
    description: "Explore intelligent systems using modern AI technologies.",
    icon: Terminal,
  },
  {
    title: "Python Development",
    description: "Build practical applications and data-driven solutions using Python.",
    icon: FileCode2,
  },
];

export const currentlyExploring = [
  "Generative AI",
  "Retrieval Augmented Generation",
  "Advanced SQL",
  "Deep Learning",
  "Data Analytics"
];

export const certificates = [
  "Azure Fundamentals | Microsoft",
  "Linux Essentials | Cisco Academy",
  "Java Foundations | Oracle",
  "Introduction to Python | Infosys",
  "Designing Thinking | Infosys",
  "Problem Solving Using Computational Thinking | University of Michigan",
  "ChatGPT For everyone | ChatGPT",
  "C++ Essentials | Cisco Academy",
  "Prompt Engineering for Everyone | IBM",
  "Introduction to Retrieval Augmented Generation | IBM Skill Build",
];

export const achievements = [
  {
    title:
      "Published a patent on Inverse Reinforcement Learning for AI-Guided Post-Surgical Recovery Plans",
    link: "https://www.quickcompany.in/patents/202521093607-3d47",
    bgImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Student Ambassador | Let's Upgrade",
    link: null,
    bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Student Ambassador | Smarted Innovations",
    link: null,
    bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
  },
];
