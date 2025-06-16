const typedText = document.querySelector(".typing");
const words = ["Frontend Developer", "UI Designer", "Web Developer","youtuber"];
let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    letterIndex--;
    typedText.textContent = currentWord.substring(0, letterIndex);
  } else {
    letterIndex++;
    typedText.textContent = currentWord.substring(0, letterIndex);
  }

  if (!isDeleting && letterIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});


const skills = [
  "HTML", "CSS", "JavaScript", "React", "Vue", "Angular", "Node.js", "Express", "MongoDB", "SQL",
  "Python", "Java", "C++", "Tailwind CSS", "Bootstrap", "SASS", "Git", "GitHub", "TypeScript", "Next.js",
  "Redux", "jQuery", "Firebase", "MySQL", "PostgreSQL", "REST API", "GraphQL", "Docker", "Figma", "Photoshop",
  "Illustrator", "UI/UX", "Agile", "SCRUM", "Vite", "Webpack", "ESLint", "Prettier", "npm", "yarn",
  "Framer Motion", "Three.js", "GSAP", "Socket.io", "Linux", "AWS", "Vercel", "Netlify", "Heroku", "Responsive Design",
  "SEO", "Testing", "Jest", "Cypress", "Mocha", "Chai", "Babel", "Nginx", "CI/CD", "GCP",
  // ... continue up to 200 if needed
];

const grid = document.getElementById("skillsGrid");

skills.forEach(skill => {
  const div = document.createElement("div");
  div.className = "skill";
  div.textContent = skill;
  grid.appendChild(div);
});



const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive portfolio using HTML, CSS, JS with glowing effects.",
    link: "#"
  },
  {
    title: "E-Commerce Template",
    description: "Frontend for an e-commerce store using React and styled components.",
    link: "#"
  },
  {
    title: "Blog UI Design",
    description: "A blog website interface with animations and a modern layout.",
    link: "#"
  },
  {
    title: "Weather App",
    description: "A real-time weather app using OpenWeather API and vanilla JS.",
    link: "#"
  },
  {
    title: "To-Do List App",
    description: "The app allows users to add, delete, and mark-as-complete tasks. The data can be saved to the browser's local storage.",
    link: "#"
  },
  {
    title: "Expense Tracker App",
    description: "A simple web app that lets users add their income and expenses, and calculate the balance. Data can be saved using localStorage.",
    link: "#"
  },
  {
    title: "Quiz App",
    description: "A multiple-choice quiz app in which there is a list of questions and the user has to answer them. The score is also displayed.",
    link: "#"
  },
  {
    title: "Typing Speed Test",
    description: "A typing test app that allows users to type some text and then measures their speed (WPM) and accuracy",
    link: "#"
  },
  {
    title: " Digital Clock",
    description: "A live digital clock that updates every second. Includes Date, Time, and AM/PM.",
    link: "#"
  },
  {
    title: "BMI Calculator",
    description: "A Body Mass Index calculator where users can enter their height and weight to see their BMI and its meaning (Underweight, Normal, Overweight).",
    link: "#"
  },
  {
    title: "Random Quote Generator",
    description: "This app shows random motivational quotes on a button click. You can use API or your own quotes array.",
    link: "#"
  },
  {
    title: "Currency Converter",
    description: "An app that allows users to convert from one currency to another. Exchange rate data comes from an API.",
    link: "#"
  },
  {
    title: "Memory Game",
    description: "A simple card-matching game where users have to find two identical images/icons. Time and scoring can also be added.",
    link: "#"
  },
  {
    title: "Password Generator",
    description: "Generates a strong password by taking input from the user (length, use of symbols/numbers/caps etc.). There may also be a clipboard copy option.",
    link: "#"
  },
  {
    title: " Stopwatch / Timer App",
    description: "A simple stopwatch that can start, stop and reset. You can also add lap times.",
    link: "#"
  },
  {
    title: "Text-to-Speech Converter",
    description: "Whatever text the user types, it is audible with the help of the browser's Web Speech API.",
    link: "#"
  },
  {
    title: "Drum Kit (Virtual Instrument App)",
    description: "Keyboard presses or button clicks play different sounds like drums, snare, hi-hat, etc. Fun and interactive.",
    link: "#"
  },
  {
    title: "Dark Mode Toggle",
    description: "Create a system to switch between light and dark mode in a website or app, and save the user's preference in localStorage.",
    link: "#"
  },
  {
    title: "Notes App",
    description: "User can create, save, delete short notes. Can work with LocalStorage or IndexedDB.",
    link: "#"
  },
  {
    title: " Movie Search App (OMDB API)",
    description: "The user searches for any movie name, and with the help of OMDB API the movie poster, rating, and details are shown.",
    link: "#"
  },
  {
    title: "Drawing App (Canvas API)",
    description: "Create a simple drawing app using HTML5 Canvas with options to choose brush color, size, and clear screen.",
    link: "#"
  }
];

const projectList = document.getElementById("projectList");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3 class="project-title">${project.title}</h3>
    <p class="project-description">${project.description}</p>
    <a href="${project.link}" class="project-link" target="_blank">View Project</a>
  `;
  projectList.appendChild(card);
});



document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";

  setTimeout(() => {
    status.textContent = "Message sent successfully!";
    this.reset();
  }, 1500);
});
