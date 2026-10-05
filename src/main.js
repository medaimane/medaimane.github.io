import { site } from "./data.js";

const canonicalUrl = `${site.url.replace(/\/$/, "")}/`;
document.querySelector('link[rel="canonical"]').href = canonicalUrl;
document.querySelector('meta[property="og:url"]').content = canonicalUrl;
document.querySelector('meta[property="og:image"]').content = `${canonicalUrl}og-image.svg`;
document.querySelector('meta[name="twitter:image"]').content = `${canonicalUrl}og-image.svg`;
const personSchema = document.querySelector('script[type="application/ld+json"]');
const person = JSON.parse(personSchema.textContent);
person.url = canonicalUrl;
personSchema.textContent = JSON.stringify(person);

const render = (selector, items, template) => {
  const element = document.querySelector(selector);
  if (element) element.innerHTML = items.map(template).join("");
};

render("#proof-grid", site.proof, (item) => `<div class="proof-item"><strong>${item.value}</strong><span>${item.label}</span></div>`);
render("#capability-grid", site.capabilities, (item) => `<article class="capability-item"><span class="item-number">${item.number}</span><h3>${item.title}</h3><p>${item.description}</p><span class="item-detail">${item.detail}</span></article>`);
render("#principle-list", site.principles, (item) => `<article class="principle-item"><span class="item-number">${item.number}</span><h3>${item.title}</h3><p>${item.description}</p></article>`);
render("#engagements", site.engagements, (item) => `<article class="engagement-item"><span class="item-number">${item.number}</span><div><h3>${item.title}</h3><p>${item.description}</p></div><span class="engagement-arrow" aria-hidden="true">↗</span></article>`);

const socialMarkup = (item, compact = false) => compact
  ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.name}<span aria-hidden="true">↗</span></a>`
  : `<a class="social-item" href="${item.url}" target="_blank" rel="noopener noreferrer"><span class="social-name">${item.name}</span><span class="social-description">${item.description}</span><span class="social-arrow" aria-hidden="true">↗</span></a>`;
render("#social-list", site.socials, (item) => socialMarkup(item));
render("#footer-social", site.socials, (item) => socialMarkup(item, true));

const projectList = document.querySelector("#project-list");
const workNote = document.querySelector("#work-note");
if (site.projects.length) {
  projectList.innerHTML = site.projects.map((project) => `<article class="project-item"><span class="item-number">${project.category}</span><h3>${project.title}</h3><p>${project.description}</p><div class="project-meta">${project.technologies.map((technology) => `<span>${technology}</span>`).join("")}</div>${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">View project ↗</a>` : ""}</article>`).join("");
  workNote.hidden = true;
}

const emailLink = document.querySelector("#email-link");
const emailNote = document.querySelector("#email-note");
if (site.email) {
  emailLink.href = `mailto:${site.email}`;
} else {
  emailLink.setAttribute("aria-disabled", "true");
  emailLink.addEventListener("click", (event) => event.preventDefault());
  emailNote.hidden = false;
  emailNote.textContent = "Email contact details will be added soon.";
}

document.querySelector("#year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  toggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
  nav.classList.toggle("is-open", !expanded);
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
  }
});
