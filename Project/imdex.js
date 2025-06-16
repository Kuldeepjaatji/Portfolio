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
