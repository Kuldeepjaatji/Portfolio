const skillsContainer = document.getElementById("skillsContainer");

for (let i = 1; i <= 200; i++) {
  const skillDiv = document.createElement("div");
  skillDiv.className = "skill-card";
  skillDiv.innerText = `Skill ${i}`;
  skillsContainer.appendChild(skillDiv);
}
