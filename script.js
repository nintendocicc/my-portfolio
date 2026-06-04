function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("fname").value.trim();
  alert(
    "Thank you for contacting me, " + name + "! I'll get back to you soon. 😊",
  );
  event.target.reset();
}

const socialLinks = {
  linkedin: "https://ph.linkedin.com/in/juliannaleilacastillo",
  github: "https://github.com/nintendocicc",
};

const projects = [
  {
    title: "Polymart",
    year: 2025,
    roles: ["UI/UX Designer", "Front-End Developer"],
    description:
      "A simple multi-page blog built with HTML and CSS as a school activity. Includes articles, a sidebar, and a contact page.",
    href: "https://github.com/",
    images: [
      {
        src: "https://placehold.co/600x220/4a7c5e/fdfaf4?text=Project+1",
        alt: "Screenshot of the Personal Blog Website home page",
      },
      {
        src: "https://placehold.co/600x220/658c74/fdfaf4?text=Project+1+Photo+2",
        alt: "Screenshot of the Personal Blog Website article page",
      },
    ],
  },
  {
    title: "Tugma",
    year: 2025,
    roles: ["UI/UX Designer", "Front-End Developer"],
    description:
      "A responsive landing page for a fictional coffee shop, featuring a hero section, menu table, and a working inquiry form.",
    href: "https://github.com/",
    images: [
      {
        src: "https://placehold.co/600x220/c9581a/fdfaf4?text=Project+2",
        alt: "Screenshot of the Product Landing Page hero section",
      },
      {
        src: "https://placehold.co/600x220/d27a3d/fdfaf4?text=Project+2+Photo+2",
        alt: "Screenshot of the Product Landing Page menu section",
      },
      {
        src: "https://placehold.co/600x220/9d4f14/fdfaf4?text=Project+2+Photo+3",
        alt: "Screenshot of the Product Landing Page inquiry form",
      },
    ],
  },
  {
    title: "PhilAssist",
    year: 2025,
    roles: ["UI/UX Designer", "Front-End Developer"],
    description:
      "An interactive multiple-choice quiz app built with vanilla JavaScript. Tracks score and displays results at the end.",
    href: "https://github.com/",
    images: [
      {
        src: "https://placehold.co/600x220/2e4a6b/fdfaf4?text=Project+3",
        alt: "Screenshot of the JavaScript Quiz App question screen",
      },
      {
        src: "https://placehold.co/600x220/405f84/fdfaf4?text=Project+3+Photo+2",
        alt: "Screenshot of the JavaScript Quiz App results screen",
      },
      {
        src: "https://placehold.co/600x220/1f3349/fdfaf4?text=Project+3+Photo+3",
        alt: "Screenshot of the JavaScript Quiz App score summary",
      },
      {
        src: "https://placehold.co/600x220/546d8a/fdfaf4?text=Project+3+Photo+4",
        alt: "Screenshot of the JavaScript Quiz App answer review",
      },
    ],
  },
  {
    title: "BaraBara",
    year: 2026,
    roles: ["UI/UX Designer", "Front-End Developer"],
    description:
      "A pure-CSS drawing of a sunset scene made entirely with div elements and CSS styling for a class activity.",
    href: "https://github.com/",
    images: [
      {
        src: "https://placehold.co/600x220/7a5e2e/fdfaf4?text=Project+4",
        alt: "Screenshot of the CSS Art sunset scene",
      },
    ],
  },
];

function renderProjectMedia(images) {
  const limitedImages = images.slice(0, 4);
  const countClass = `project-media--${limitedImages.length}`;

  return `
    <div class="project-media ${countClass}">
      ${limitedImages
        .map(
          (image, index) => `
            <img
              src="${image.src}"
              alt="${image.alt}"
              loading="lazy"
            />
          `,
        )
        .join("")}
    </div>
  `;
}

function renderProjects() {
  const gallery = document.querySelector("[data-project-gallery]");
  if (!gallery) return;

  gallery.innerHTML = projects
    .map(
      (project) => `
        <a class="gallery-card" href="${project.href}" target="_blank" rel="noopener">
          ${renderProjectMedia(project.images)}
          <figcaption>
            <div class="project-heading">
              <h4>${project.title}</h4>
              <span class="project-meta-year">${project.year}</span>
            </div>
            <div class="project-role-pills">
              ${project.roles
                .map((role) => `<span class="project-role-pill">${role}</span>`)
                .join("")}
            </div>
            <p>${project.description}</p>
            <span class="card-link-hint">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              View Project
            </span>
          </figcaption>
        </a>
      `,
    )
    .join("");
}

function applySocialLinks() {
  document.querySelectorAll("[data-social-link]").forEach((link) => {
    const social = link.getAttribute("data-social-link");
    if (socialLinks[social]) {
      link.href = socialLinks[social];
    }
  });
}

renderProjects();
applySocialLinks();

/* --- Highlight active nav link on scroll --- */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 80) current = sec.id;
  });
  navLinks.forEach((link) => {
    link.style.color = "";
    link.style.borderBottomColor = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "var(--accent)";
      link.style.borderBottomColor = "var(--accent)";
    }
  });
});
