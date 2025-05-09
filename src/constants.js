// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import jupLogo from './assets/tech_logo/jupitar.png';
import kaggLogo from './assets/tech_logo/kaggle.png';

// Experience Section Logo's
import mindeLogo from './assets/company_logo/md.png';
import eveLogo from './assets/company_logo/ev1.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/everest.jpg';
import bsaLogo from './assets/education_logo/morning.jpg';

// Project Section Logo's
import emailLogo from './assets/work_logo/mail.jpg'; // Corrected relative path
import smspLogo from './assets/work_logo/sms.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import webverLogo from './assets/work_logo/web_dig.png';
import imagehostitalLogo from './assets/work_logo/hop1.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++(oop)', logo: cppLogo },
      { name: 'Java(basics)', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'jupitar', logo: jupLogo },
      { name: 'kaggle', logo: kaggLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: mindeLogo,
    role: "MERNSTACK Intern",
    company: "Mindrisers Institute of Technology",
    date: " 2monts April 2024",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 2,
    img: eveLogo,
    role: "Frontend Intern",
    company: "",
    date: "1monts 2024",
    desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Figma",
      "Material UI",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Everest Engineering College Affiliated from Pokhara University",
    date: "Sept 2021 - July 2025",
    // grade: "",
    desc: "During my Bachelor's in Computer Engineering at Everest Engineering College, affiliated with Pokhara University, I embarked on an exciting and transformative journey. My time at Everest laid a strong academic foundation, where I studied key subjects such as Data Structures, Algorithms, Operating Systems, Computer Networks, Database Management Systems, Web Technologies, and Software Engineering.Beyond academics, I actively participated in technical workshops, coding competitions, and project exhibitions, which helped me sharpen my practical skills. Working on various projects, including web development and software design, allowed me to apply theoretical knowledge to real-world scenarios. Group projects and seminars taught me the value of teamwork, communication, and leadership.The supportive learning environment, experienced faculty, and vibrant student community at Everest Engineering College played a significant role in my overall development. It was during these years that I discovered my passion for programming, problem-solving, and continuous learning. The experiences, friendships, and knowledge gained at Everest Engineering College have been instrumental in shaping my path toward becoming a computer engineering professional.",
    degree: "Bachelor of Engineering  - BE",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "MORNING GORY SECONDARY SCHOOL",
    desc: "I completed my 10+2 . Throughout my studies, I was immersed in a variety of subjects .",
    degree: "HSEB -( Science)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Email Spam Detection",
    description:
      "This project develops an email spam detection system using machine learning to classify emails as spam or non-spam. By applying techniques like tokenization, stopword removal, and feature extraction from email content, the system trains models such as Naive Bayes, SVM, and Decision Trees. The goal is to provide an efficient way to filter unwanted emails, improving user experience and enhancing security. Performance is evaluated based on accuracy and other key metrics.",
    image: emailLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "pandas python"],
    github: "",
  },
  {
    id: 1,
    title: "Student Management System",
    description:
      "A Student Management System (SMS) is a digital platform used by educational institutions to efficiently handle all aspects of student data and academic activities. This system is designed to automate and simplify tasks such as student registration, attendance monitoring, timetable scheduling, examination management, and grade recording. With a student management system, administrators can easily manage student information, teachers can track academic performance, and students can access their own records and updates. It reduces paperwork, minimizes human errors, and ensures smoother communication between the institution and its students.",
    image: smspLogo,
    tags: ["HTML", "CSS", "JavaScript", "ReactJS", "NodeJS", "MongoDB"],
    github: "",
  },

  {
    id: 2,
    title: "Hospital Management System (HMS)",
    description:
      "A Hospital Management System (HMS) is software that helps manage hospital operations like patient registration, doctor scheduling, billing, pharmacy, laboratory, and staff management. It streamlines processes, improves patient care, ensures data security, reduces paperwork, and enhances overall hospital efficiency.",
    image: imagehostitalLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "pandas python"],
    github: "",
  },
  {
    id: 3,
    title: "Movie Recommendation App",
    description:
      "This project is a movie recommendation app that suggests movies to users based on their preferences. By using algorithms such as collaborative filtering or content-based filtering, the app can suggest movies that match the user's viewing history and ratings. It uses a combination of front-end technologies such as React, HTML, and CSS along with backend technologies to provide dynamic recommendations, improving the user experience. The app can integrate with movie APIs to get real-time data and is designed to be responsive for a seamless user interface.",
    image: movierecLogo,
    tags: ["ReactJS", "NodeJS", "MongoDB", "Movie API"],
    github: "",
  },
  {
    id: 3,
    title: "Website Design",
    description:
      "In this project, I designed and developed a responsive website, utilizing modern web technologies such as ReactJS, HTML5, CSS3,Next.js,MOngodb, js, and Bootstrap. The website includes key features such as a contact form, project portfolio, client testimonials, and service descriptions. I focused on creating an intuitive and user-friendly experience, ensuring that the website is fully responsive across different screen sizes and devices. I also integrated interactive elements using JavaScript for enhanced user engagement.",
    image: webverLogo,
    tags: ["ReactJS", "HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "",
  },
];

