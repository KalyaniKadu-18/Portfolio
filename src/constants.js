import htmlLogo from "./assets/techlogo/html.png";
import cssLogo from "./assets/techlogo/css.png";
import javascriptLogo from "./assets/techlogo/javascript.png";
import reactjsLogo from "./assets/techlogo/reactjs.png";
import tailwindcssLogo from "./assets/techlogo/tailwindcss.png";
import bootstrapLogo from "./assets/techlogo/bootstrap.png";
import nodejsLogo from "./assets/techlogo/nodejs.png";
import expressjsLogo from "./assets/techlogo/express.png";
import mysqlLogo from "./assets/techlogo/mysql.png";
import mongodbLogo from "./assets/techlogo/mongodb.png";
import cLogo from "./assets/techlogo/c.png";
import javaLogo from "./assets/techlogo/java.png";
import pythonLogo from "./assets/techlogo/python.png";
import gitLogo from "./assets/techlogo/git.png";
import githubLogo from "./assets/techlogo/github.png";
import postmanLogo from "./assets/techlogo/postman.png";
import vercelLogo from "./assets/techlogo/vercel.png";
import vscodeLogo from "./assets/techlogo/vscode.png";
import MongoCompassLogo from "./assets/techlogo/mc.png";
import DevconsLogo from "./assets/techlogo/devcons.jpeg";
import thapa from "./assets/techlogo/thapa.png";
import resto from "./assets/techlogo/resto.jpg";
import hotel from "./assets/techlogo/hotel.png";
import contact from "./assets/techlogo/contact.webp";
import dpu from "./assets/techlogo/dpu.png";
import pdea from "./assets/techlogo/pdea.png";
import clg from "./assets/techlogo/clg.jpeg";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Vs code", logo: vscodeLogo },
      { name: "Compass", logo: MongoCompassLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: DevconsLogo,
    role: "Fullstack Developer Intern",
    company: "Devcons Software Pvt Ltd",
    date: "8 Feb 2025 - 8 May 2025",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: dpu,
    school: "Dr D Y Patil Arts, Commerce, Science College ,Pune",
    date: "June 2022 - July 2025",
    grade: "8.64 CGPA",
    desc: "I have completed my Bsc CS in Computer Science from SPPU University, Pune. During my time at DPU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at SPPU University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "BSC - Computer Science",
  },
  {
    id: 1,
    img: clg,
    school: "Nutan College, Sane Chowk, Pune",
    date: "June 2021 - Aug 2022",
    grade: "83.17%",
    desc: "I completed my class 12 education from Nutan College, Sane Chowk, Pune under the HSC board, where I studied Physics, Chemistry, and Mathematics (PCMB) with Information Technology",
    degree: "HSC(XII) - PCMB with Information Technology",
  },
  {
    id: 2,
    img: pdea,
    school: "Nageshwar Vidyalay Chikhali , Pune",
    date: "june 2019 - March 2020",
    grade: "92%",
    desc: "I completed my class 10'th education from Nutan College, Sane Chowk, Pune under the SSC board, where I studied Science, Mathematics,and languages",
    degree: "SSC(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Thapa Store- Ecommerce website",
    image: thapa,
    description:
      "A responsive e-commerce app with product filtering by category and price. Includes cart functionality for adding/removing items, offering a seamless shopping experience. Built with React and modern web technologies.",
    tags: ["HTML", "Module CSS", "JavaScript", "React JS"],
    github: "https://github.com/KalyaniKadu-18/ECommerce-Store-Website",
  },
  {
    id: 1,
    title: "Hotel Booking - Fullstack Project",
    description:
      "A full-stack Hotel Booking web application built using React and Tailwind CSS for a responsive frontend, and MERN (MongoDB, Express.js, Node.js) for a robust backend. It allows users to browse, book, and manage hotel reservations with authentication, secure APIs, and real-time booking status updates. Clean UI ensures seamless user experience.",
    image: hotel,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "JavaScript",
    ],
    github: "https://github.com/KalyaniKadu-18/Hotel-Booking-FullStack-Project",
  },
  {
    id: 2,
    title: "Restaurant App Backend",
    description:
      "A scalable backend application designed to efficiently manage restaurants, menu categories, food items, and user interactions. Built with Node.js, Express.js, and MongoDB, it provides RESTful APIs to support operations such as user authentication, restaurant and menu management, and order processing",
    image: resto,
    tags: ["API", "MaongoDb", "JavaScript", "Nodejs", "Express js"],
    github: "https://github.com/KalyaniKadu-18/RestaurantBackend",
  },
  {
    id: 3,
    title: "Contact Management",
    description:
      " Contact Management built with Node.js, Express, and MongoDB. It provides features for user registration, login, and secure contact management through token-based authentication. Users can add, view, update, and delete their contacts.",
    image: contact,
    tags: ["Expressjs", "Node.js", "Postman", "MongoDb"],
    github: "https://github.com/KalyaniKadu-18/contact-management-system",
  },
];
