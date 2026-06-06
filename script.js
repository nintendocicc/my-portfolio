async function handleSubmit(event) {
  // Prevent the default page reload
  event.preventDefault();

  const form = event.target;
  const name = document.getElementById("fname").value.trim();
  const formData = new FormData(form);

  // Optional: Change button text while sending to show it's working
  const submitBtn = form.querySelector(".btn-submit");
  const originalBtnText = submitBtn.innerText;
  submitBtn.innerText = "Sending...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      // If successful, show your custom alert and reset the form
      alert(
        "Thank you for contacting me, " +
          name +
          "! I'll get back to you soon. 😊",
      );
      form.reset();
    } else {
      // If Web3Forms returns an error
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    // If there is a network issue
    alert(
      "There was an error sending your message. Please check your connection.",
    );
  } finally {
    // Reset button text
    submitBtn.innerText = originalBtnText;
  }
}

const socialLinks = {
  linkedin: "https://ph.linkedin.com/in/juliannaleilacastillo",
  github: "https://github.com/nintendocicc",
};

const projects = [
  // {
  //   title: "Pasuyo",
  //   year: 2026,
  //   roles: ["UI/UX Designer", "Front-End Developer"],
  //   description:
  //     "A mobile app UI/UX design for an errand/delivery service, designed in Figma with user flows and interface mockups.",
  //   links: {
  //     figma:
  //       "https://www.figma.com/design/wBWgPDLydWkPMY9j5QgOfv/Pasuyo-App?node-id=0-1&t=OOGb9QuCtIAPmxGy-1",
  //   },
  //   images: [
  //     {
  //       src: "https://placehold.co/600x220/7a5e2e/fdfaf4?text=Project+4",
  //       alt: "Screenshot of the CSS Art sunset scene",
  //     },
  //   ],
  // },
  {
    title: "Takbo, Jusko!",
    year: 2026,
    roles: ["Game Designer", "Front-End Developer"],
    languages: ["GDScript"],
    description:
      "A 2D runner game built in Godot using GDScript, featuring an itch.io character art and gameplay mechanics.",
    links: {
      demo: "https://fvlsky.github.io/takbo-jusko/?fbclid=IwY2xjawSPkqFleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeAdUfS15iO-6xS1RWIB_NCU6mb3gIu-tDjdGPpOsWZsrjUo7RZnM-jVEA8Ww_aem_OPd-TA5bI8ONL81lkII49A",
      github: "https://github.com/FvlSky/takbo-jusko",
    },
    images: [
      {
        src: "photos/Takbo Jusko.png",
        alt: "Screenshot of the CSS Art sunset scene",
      },
    ],
  },
  {
    title: "Paws and Claws",
    year: 2026,
    roles: ["UI/UX Designer", "Front-End Developer"],
    languages: ["C#", "Tailwind CSS"],
    description:
      "A pet management system built with C# and Tailwind CSS, featuring registration, appointment scheduling, and pet records.",
    links: {
      figma:
        "https://www.figma.com/design/6DVulViT8UqeF4Afyikxfo/BaraBara-Lexical-Analyzer?node-id=7-60&t=5w9Om4WGCU06nAPo-1",
      document:
        "https://docs.google.com/spreadsheets/d/1qab3SSh72jaMS1rc8IuJkgpnMJ4eyACkihntIbScJIw/edit?gid=1666953109#gid=1666953109",
      github: "https://github.com/dazzlear/PawsAndClaws",
    },
    images: [
      {
        src: "photos/Paws and Claws_Register.png",
        alt: "Screenshot of the CSS Art sunset scene",
      },
    ],
  },
  {
    title: "Intrusion Prevention System",
    year: 2026,
    roles: ["UI/UX Designer", "Front-End Developer"],
    languages: ["React", "Tailwind CSS"],
    description:
      "A network security dashboard UI built with React and Tailwind CSS, visualizing threat detection and prevention logs.",
    links: {
      figma:
        "https://www.figma.com/design/qVChkNQ3HTn07Aa7kzDOov/AUTOMATA-PROJECT?node-id=1-3&t=Lz9dEDtcX733m4Z6-1",
      github: "https://github.com/RaiGZ971/Intrusion-Prevention-System",
    },
    images: [
      {
        src: "photos/IPS_Landing Page.png",
        alt: "Screenshot of the CSS Art sunset scene",
      },
    ],
  },
  {
    title: "BaraBara",
    year: 2026,
    roles: ["UI/UX Designer", "Front-End Developer"],
    languages: ["React", "Tailwind CSS"],
    description:
      "A lexical analyzer web app built with React and Tailwind CSS, designed to tokenize and analyze input strings.",
    links: {
      figma:
        "https://www.figma.com/design/6DVulViT8UqeF4Afyikxfo/BaraBara-Lexical-Analyzer?node-id=7-60&t=5w9Om4WGCU06nAPo-1",
      github: "https://github.com/RaiGZ971/BaraBara",
    },
    images: [
      {
        src: "photos/BaraBara_Landing Page.png",
        alt: "Screenshot of the CSS Art sunset scene",
      },
    ],
  },
  {
    title: "PhilAssist",
    year: 2025,
    roles: ["UI/UX Designer", "Front-End Developer"],
    languages: ["React", "Tailwind CSS"],
    description:
      "A government assistance information platform built with React and Tailwind CSS, helping Filipinos find relevant aid programs.",
    links: {
      github: "https://github.com/RaiGZ971/PhilAssist",
    },
    images: [
      {
        src: "photos/PhilAssist_Declaration of Dependents.png",
        alt: "Screenshot of the JavaScript Quiz App question screen",
      },
    ],
  },
  {
    title: "Tugma",
    year: 2025,
    roles: ["UI/UX Designer", "Front-End Developer"],
    description:
      "A job-matching platform UI designed for Filipino workers, featuring job browsing and application flows built with React and Tailwind CSS.",
    languages: ["React", "Tailwind CSS"],
    links: {
      document:
        "https://drive.google.com/file/d/1briXJUUYLc65ptjjnAHAEWvdDnS77RRk/view",
      github: "https://github.com/sheowl/tugma",
      demo: "",
    },
    images: [
      {
        src: "photos/Tugma_Browse Jobs.png",
        alt: "Screenshot of the Product Landing Page hero section",
      },
    ],
  },
  {
    title: "Polymart",
    year: 2025,
    roles: ["UI/UX Designer", "Front-End Developer"],
    description:
      "An online marketplace web app built with React and Tailwind CSS, showcasing product listings and a Figma-designed UI.",
    languages: ["React", "Tailwind CSS"],
    links: {
      figma:
        "https://www.figma.com/design/kX1A6xGUzqDuqcTbKnO6kv/Polymart-Web?node-id=0-1&t=3aqqJgFeEZaxIMdQ-1",
      github: "https://github.com/RaiGZ971/Polymart",
    },
    images: [
      {
        src: "photos/Polymart_All Listings.png",
        alt: "Screenshot of the Personal Blog Website home page",
      },
    ],
  },
];

const linkLabels = {
  figma: "Figma",
  document: "Document",
  github: "Github",
  demo: "Live Demo",
};

const linkIcons = {
  figma: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg>`,
  document: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  demo: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
};

function renderProjects() {
  const gallery = document.querySelector("[data-project-gallery]");
  if (!gallery) return;

  gallery.innerHTML = projects
    .map((project) => {
      const primary = project.images[0];
      const extra = project.images.length > 1 ? project.images.length - 1 : 0;
      const badge =
        extra > 0
          ? `<span class="project-media-badge">+${extra} photo${extra > 1 ? "s" : ""}</span>`
          : "";

      const actionButtons = Object.entries(project.links || {})
        .filter(([key, url]) => url && url.trim() !== "")
        .map(
          ([key, url]) => `
          <a href="${url}" target="_blank" rel="noopener" class="card-link-btn">
            ${linkIcons[key]}
            ${linkLabels[key]}
          </a>
        `,
        )
        .join("");

      const languagePills =
        project.languages && project.languages.length > 0
          ? `<div class="project-languages">
             ${project.languages.map((lang) => `<span class="project-language-pill">${lang}</span>`).join("")}
           </div>`
          : "";

      return `
        <article class="gallery-card portrait-card">
          <div class="gallery-card-image">
            <img src="${primary.src}" alt="${primary.alt}" loading="lazy" />
            <div class="project-year-badge">${project.year}</div>
            ${badge}
          </div>
          
          <div class="gallery-card-content">
            <div class="project-heading">
              <h4>${project.title}</h4>
              <div class="project-role-pills">
                <span class="project-role-pill">${project.roles.join(" • ")}</span>
              </div>
            </div>
            
            <p class="project-description">${project.description}</p>
            ${languagePills}
            
            <div class="gallery-card-footer">
              ${actionButtons}
            </div>
          </div>
        </article>
      `;
    })
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
