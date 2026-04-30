import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/ayush.png';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';


export const assets = {
  profileImg,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];


export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js', 'Nest.js', 'TypeScript', 'JavaScript']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis']
  },
  {
    title: 'Mobile Development',
    icon: FaMobileAlt,
    description: 'Building cross-platform mobile applications with modern tools.',
    tags: ['React Native', 'Expo', 'NativeWind CSS']
  },
  {
    title: 'Cloud & DevOps',
    icon: FaCloud,
    description: 'Deploying and managing applications in cloud environments.',
    tags: ['Docker', 'CI/CD', 'Vercel', 'Render', 'Neon DB', 'MongoDB Atlas']
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Postman', 'Figma', 'Jest', 'Claude.ai', 'Antigravity', 'Chat GPT']
  }
];



export const projects = [
  {
    title: "CarFix",
    description: `Developed a MERN-based platform for car repair services, spare
parts purchase, and 24/7 roadside assistance.
Implemented secure authentication, real-time service booking, and
user/vehicle tracking .`,
    image: projectImg1,
    tech: ["React","Tailwind CSS" , "Node.js","Express.js", "MongoDB Atlas","Render"],
    icons: [FaReact, FaNodeJs, FaDatabase, ],
    demo: "https://carfix1.onrender.com/",
    code: "https://github.com/06ayushyadav/carfix1",
  },
  {
    title: "Work Finder",
      description: `Developed a full-stack job-seeking MERN application with user
  authentication and job posting features .`,
    image: projectImg2,
    tech: ["React","Tailwind CSS" , "Node.js","Express.js", "MongoDB Atlas","Render"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://appjob-o3ho.onrender.com/",
    code: "https://github.com/06ayushyadav/appjob",
  },
  {
    title: "Todo List",
    description: "This is Todo List for day-to-day activity , developed using mern stack . This will use your browser localstorage for crud operation . ",
    image: projectImg3,
    tech: ["React","Tailwind CSS" ,"Netlify"],
    icons: [FaReact, FaDatabase],
    demo: "https://todolistbyayush.netlify.app/",
    code: "https://github.com/06ayushyadav/todolist",
  },
  {
    title: "Currency Converter",
    description: `Developed a web-based currency converter using HTML, CSS, and
JavaScript.`,
    image: projectImg4,
    tech: ['HTML','CSS','JavaScript'],
    icons: [FaReact, FaCloud],
    demo: "https://currencyconvertebyayush.netlify.app/",
    code: "https://github.com/06ayushyadav/Currency-Converter",
  }
];


export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
