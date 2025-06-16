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
