const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "",
  title: "ST.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Satyam Tiwari",
  role: "Software Engineer",
  description: "",
  resume: "https://www.google.com",
  social: {
    linkedin: "https://linkedin.com/satyamtiwari98",
    github: "https://github.com/satyamtiwari98",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Short URL",
    description:
      "This is a simple URL shortening service built with the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    stack: ["MongoDB", "Express", "React", "NodeJS"],
    sourceCode: "https://github.com/satyamtiwari98/short-url",
    livePreview: "https://github.com/satyamtiwari98/short-url",
  },
  {
    name: "NetFlix__Clone_React",
    description: "This is a Netflix clone built with React",
    stack: ["ReactJS", "JavaScript", "HTML", "CSS"],
    sourceCode: "https://github.com/satyamtiwari98/NetFlix__Clone_React",
    livePreview: "https://github.com/satyamtiwari98/NetFlix__Clone_React",
  },
  {
    name: "Online Exam",
    description: "This is an Online Exam System built with PHP and MySQL.",
    stack: ["PHP", "Mysql", "Javascript"],
    sourceCode: "https://github.com/satyamtiwari98/OnlineExam",
    livePreview: "https://github.com/satyamtiwari98/OnlineExam",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "NodeJs",
  "ExpressJs",
  "MongoDB",
  "SASS",
  "Material UI",
  "Git",
  "CI/CD",
  "Jest",
  "Enzyme",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "satyam_tiwari@hotmail.com",
};

export { header, about, projects, skills, contact };
