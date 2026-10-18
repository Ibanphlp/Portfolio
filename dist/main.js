"use strict";
function renderSkill(skill) {
    const container = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("div");
    const level = document.createElement("div");
    container.className = "skill";
    img.className = "skill-icon";
    img.src = `${skill.icon}`;
    name.className = "skill-name";
    name.textContent = `${skill.name}`;
    level.className = "skill-level";
    level.textContent = `${skill.level}`;
    container.appendChild(img);
    container.appendChild(name);
    container.appendChild(level);
    return container;
}
const skills = [
    { name: "Python", icon: "assets/python.webp", level: "Intermediate" },
    { name: "C", icon: "assets/c.webp", level: "Beginner" },
    { name: "HTML", icon: "assets/html.png", level: "Expert" },
    { name: "CSS", icon: "assets/css.png", level: "Intermediate" },
    { name: "TypeScript", icon: "assets/ts.webp", level: "Beginner" },
    { name: "JavaScript", icon: "assets/js.png", level: "Beginner" },
    { name: "Git/GitHub", icon: "assets/git.webp", level: "Expert" },
    { name: "Figma", icon: "assets/figma.webp", level: "Expert" },
    { name: "Swift", icon: "assets/swift.png", level: "Beginner" },
    { name: "SQL", icon: "assets/sql.png", level: "Intermediate" },
    { name: "Bash", icon: "assets/bash.webp", level: "Expert" },
];
const skillsList = document.querySelector("#skills-grid");
skills.forEach(skill => skillsList?.appendChild(renderSkill(skill)));
// Fetch the current year and build a p displaying it
function renderYear(currentYear) {
    const yearP = document.createElement("p");
    yearP.className = "footer-p";
    yearP.textContent = `© ${currentYear} Iban Philippe - All right reserved.`;
    return yearP;
}
const currentYear = new Date().getFullYear();
const yearP = document.querySelector("#year-footer");
if (yearP) {
    yearP.appendChild(renderYear(currentYear));
}
// form script
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput?.value ?? "";
    const message = `Thank you ${name}, your message has been sent.`;
    showPopup(message); // calling the popup function with the message that has to appear on it
});
// popup message
function showPopup(message) {
    const overlay = document.createElement("div");
    overlay.className = "dark-bg";
    overlay.innerHTML = `
        <div class="confirmation-popup">
            <h1>Message sent</h1>
            <p></p>
            <button type="button">OK</button>
        </div>
    `;
    overlay.querySelector("p").textContent = message; // message build before
    overlay.querySelector("button").addEventListener("click", () => overlay.remove());
    document.body.appendChild(overlay);
}
// Retreiving all the elemnts needed
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const fullscreenMenu = document.getElementById("fullscreen-menu");
const menuLinks = document.querySelectorAll(".menu-links a");
// Open and close functions
function openMenu() {
    fullscreenMenu?.classList.add("open");
}
function closeMenu() {
    fullscreenMenu?.classList.remove("open");
}
// The event listeners
openBtn?.addEventListener("click", openMenu);
closeBtn?.addEventListener("click", closeMenu);
menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
