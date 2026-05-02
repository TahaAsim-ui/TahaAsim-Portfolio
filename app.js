const projects = [
  {
    title: "Full-Stack Electric Car E-Commerce Platform",
    type: "Software Engineering",
    short: "React, Node, Express, MongoDB",
    description:
      "A fully functioning electric car e-commerce web app with catalog discovery, purchase flow, financial tooling, and user support features.",
    points: [
      "Built with React, Node.js, Express, and MongoDB across the frontend, backend, and database layers.",
      "Implemented catalog filtering, a loan calculator, checkout flow, and chatbot support.",
      "Prioritized user experience and system reliability through iterative testing and refinement."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "UX"],
    links: [{ label: "Repository", url: "https://github.com/Asim-Taha/EECS4413" }]
  },
  {
    title: "Marvel Inspired Tower Defence Game",
    type: "Interactive Systems",
    short: "Vanilla JS game prototype",
    description:
      "A vanilla HTML/CSS/JavaScript tower defense prototype inspired by classic Marvel web games, built without external assets or a game engine.",
    points: [
      "Implemented a top-down city map with waves, boss fights, and upgradeable character turrets.",
      "Built procedural canvas combat effects and game-state logic from scratch.",
      "Shows comfort with interaction loops, animation timing, and rapid playable prototyping."
    ],
    tech: ["JavaScript", "Canvas", "Game Logic", "HTML", "CSS"],
    links: [{ label: "Repository", url: "https://github.com/TahaAsim-ui/StarkTowerDefence-prototype-" }]
  },
  {
    title: "YUNeedMoney Finance Management App",
    type: "Software + FinTech",
    short: "Finance dashboard with Plaid and OpenAI",
    description:
      "A full-stack JavaScript finance app for tracking spending, budgets, and transactions with real-time financial dashboarding.",
    points: [
      "Integrated Plaid and OpenAI APIs to connect financial data with smarter user-facing support.",
      "Implemented JWT authentication and MongoDB storage.",
      "Connects product thinking, API integration, and financial data visualization."
    ],
    tech: ["JavaScript", "Plaid", "OpenAI API", "JWT", "MongoDB"],
    links: [{ label: "Repository", url: "https://github.com/MM120-i/YUNeedMoney" }]
  },
  {
    title: "Automated API Data Pipeline",
    type: "Data Engineering",
    short: "CoinGecko to Neon PostgreSQL",
    description:
      "A Python ETL pipeline that extracts CoinGecko crypto market data, transforms it, and loads daily snapshots into Neon PostgreSQL.",
    points: [
      "Added upserts to keep daily market snapshots consistent and usable.",
      "Included unit tests, environment configuration, and GitHub Actions for CI/CD.",
      "Scheduled runs make the pipeline repeatable instead of manually operated."
    ],
    tech: ["Python", "ETL", "PostgreSQL", "GitHub Actions", "CI/CD"],
    links: [{ label: "Repository", url: "https://github.com/TahaAsim-ui/AutomatedPipeline" }]
  },
  {
    title: "LLM-Powered Document Question Answering System",
    type: "AI Engineering",
    short: "RAG over PDF documents",
    description:
      "A Python system for querying unstructured PDF documents with natural language using a retrieval-augmented generation workflow.",
    points: [
      "Implemented a RAG pipeline with OpenAI embeddings and FAISS vector search.",
      "Retrieved relevant document segments and generated grounded responses from source content.",
      "Shows applied LLM work beyond prompting: ingestion, retrieval, ranking, and answer generation."
    ],
    tech: ["Python", "OpenAI", "FAISS", "RAG", "PDF Processing"],
    links: [{ label: "Repository", url: "https://github.com/TahaAsim-ui/LLM-DocAnswers" }]
  },
  {
    title: "Customer Personality Segmentation",
    type: "Data Science",
    short: "Unsupervised learning with K-Means",
    description:
      "A machine learning project applying unsupervised learning to more than 2,200 customer records to identify behavioral clusters.",
    points: [
      "Used K-Means clustering to segment customers into distinct behavioral groups.",
      "Translated clusters into insights for personalized marketing, retention strategy, and ROI optimization.",
      "Shows the data science workflow from records to business-facing recommendations."
    ],
    tech: ["Python", "K-Means", "Clustering", "Customer Analytics", "Data Visualization"],
    links: [
      {
        label: "Presentation",
        url: "https://docs.google.com/presentation/d/1Zz7MsoQPBeqOk47nzUgQ3Wcd1poMnIE8/edit?usp=sharing&ouid=100434361919031081474&rtpof=true&sd=true"
      }
    ]
  },
  {
    title: "Predictive Modelling for Lead Conversion in EdTech",
    type: "Machine Learning",
    short: "Decision Trees and Random Forests",
    description:
      "A supervised machine learning project for predicting user conversion rates and helping marketing teams prioritize effort with data.",
    points: [
      "Used Python to develop Decision Tree and Random Forest models.",
      "Visualized model performance metrics so results could be understood beyond the notebook.",
      "Connected predictions to marketing prioritization and data-supported decision making."
    ],
    tech: ["Python", "Decision Trees", "Random Forests", "Classification", "Model Metrics"],
    links: [
      {
        label: "Presentation",
        url: "https://docs.google.com/presentation/d/1pNhtiN4wWZtC4mt3LkWRVlN8vwozoBHp/edit?usp=sharing&ouid=100434361919031081474&rtpof=true&sd=true"
      }
    ]
  }
];

const skills = [
  {
    title: "Software Product Development",
    category: "software",
    copy: "I build user-facing product features and the backend structure behind them: responsive interfaces, API routes, authentication, database-backed workflows, dashboards, and practical UX refinements.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT"]
  },
  {
    title: "Data Science and Machine Learning",
    category: "data",
    copy: "I work with exploratory analysis, feature thinking, supervised and unsupervised modelling, model comparison, and visualizations that make patterns and performance easier to explain.",
    tags: ["Python", "K-Means", "Random Forests", "Metrics", "Visualization"]
  },
  {
    title: "Data Engineering",
    category: "data",
    copy: "I build pipelines that move data from APIs or raw sources into structured storage with repeatable runs, validation, upserts, environment configuration, tests, and deployment automation.",
    tags: ["ETL", "PostgreSQL", "APIs", "Testing", "GitHub Actions"]
  },
  {
    title: "AI and LLM Systems",
    category: "ai",
    copy: "I design AI workflows around ingestion, embeddings, vector search, retrieval, answer generation, and user-facing interfaces that keep outputs grounded in source material.",
    tags: ["OpenAI", "FAISS", "RAG", "Embeddings", "PDFs"]
  },
  {
    title: "Automation and Reliability",
    category: "systems",
    copy: "I care about making systems easier to run: scheduled jobs, CI/CD, tests, configuration, logging, and project structure that reduce manual effort and make behavior easier to trust.",
    tags: ["CI/CD", "Unit Tests", "Config", "Scheduling", "DevEx"]
  },
  {
    title: "Interactive Prototypes",
    category: "systems",
    copy: "I prototype interactive experiences where feedback matters: state transitions, animation, canvas effects, controls, progression, simulations, and playful interfaces that still feel intentional.",
    tags: ["Canvas", "Game Logic", "State", "Animation", "UX"]
  }
];

const missionList = document.querySelector(".mission-list");
const missionType = document.querySelector("#mission-type");
const missionTitle = document.querySelector("#mission-title");
const missionDescription = document.querySelector("#mission-description");
const missionPoints = document.querySelector("#mission-points");
const missionTech = document.querySelector("#mission-tech");
const missionLinks = document.querySelector("#mission-links");
const filterBar = document.querySelector(".filter-bar");
const skillGrid = document.querySelector(".skill-grid");
const clock = document.querySelector("#mission-clock");

let selectedProject = 0;
let selectedFilter = "all";

function renderProjects() {
  missionList.innerHTML = "";
  projects.forEach((project, index) => {
    const button = document.createElement("button");
    button.className = `mission-button${index === selectedProject ? " active" : ""}`;
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(index === selectedProject));
    button.innerHTML = `<strong>${project.title}</strong><span>${project.short}</span>`;
    button.addEventListener("click", () => {
      selectedProject = index;
      renderProjects();
      renderProjectDetail();
    });
    missionList.appendChild(button);
  });
}

function renderProjectDetail() {
  const project = projects[selectedProject];
  missionType.textContent = project.type;
  missionTitle.textContent = project.title;
  missionDescription.textContent = project.description;
  missionPoints.innerHTML = project.points.map((point) => `<li>${point}</li>`).join("");
  missionTech.innerHTML = project.tech.map((item) => `<span>${item}</span>`).join("");
  missionLinks.innerHTML = project.links
    .map((link) => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`)
    .join("");
}

function renderFilters() {
  const filters = [
    ["all", "All"],
    ["software", "Software"],
    ["data", "Data"],
    ["ai", "AI"],
    ["systems", "Systems"],
  ];
  filterBar.innerHTML = "";
  filters.forEach(([value, label]) => {
    const button = document.createElement("button");
    button.className = `filter-button${value === selectedFilter ? " active" : ""}`;
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", () => {
      selectedFilter = value;
      renderFilters();
      renderSkills();
    });
    filterBar.appendChild(button);
  });
}

function renderSkills() {
  const visible = skills.filter((skill) => selectedFilter === "all" || skill.category === selectedFilter);
  skillGrid.innerHTML = visible
    .map(
      (skill) => `
        <article class="skill-card">
          <h3>${skill.title}</h3>
          <p>${skill.copy}</p>
          <div class="tech-row">${skill.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </article>
      `
    )
    .join("");
}

function tickClock() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString("en-CA", { hour12: false });
}

function startSpaceCanvas() {
  const canvas = document.querySelector("#space-canvas");
  const ctx = canvas.getContext("2d");
  const pointer = { x: 0.5, y: 0.5 };
  let stars = [];
  let comets = [];
  let width = 0;
  let height = 0;
  let rafId;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(430, Math.floor((width * height) / 2800));
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 0.9 + 0.1,
      speed: Math.random() * 0.34 + 0.08,
      drift: Math.random() * 0.8 - 0.4,
      hue: Math.random() > 0.72 ? "228, 179, 95" : Math.random() > 0.46 ? "126, 183, 199" : "246, 241, 231"
    }));
    comets = Array.from({ length: 5 }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height * 0.6,
      speed: 1.6 + index * 0.35,
      delay: index * 120
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const wellX = width * (0.68 + (pointer.x - 0.5) * 0.04);
    const wellY = height * (0.38 + (pointer.y - 0.5) * 0.04);

    const gradient = ctx.createRadialGradient(wellX, wellY, 20, wellX, wellY, Math.max(width, height) * 0.62);
    gradient.addColorStop(0, "rgba(0,0,0,0.96)");
    gradient.addColorStop(0.18, "rgba(228,179,95,0.18)");
    gradient.addColorStop(0.36, "rgba(126,183,199,0.08)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    const nebula = ctx.createRadialGradient(width * 0.18, height * 0.7, 0, width * 0.18, height * 0.7, width * 0.54);
    nebula.addColorStop(0, "rgba(126,183,199,0.13)");
    nebula.addColorStop(0.48, "rgba(228,179,95,0.08)");
    nebula.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = nebula;
    ctx.fillRect(0, 0, width, height);

    stars.forEach((star) => {
      const dx = star.x - wellX;
      const dy = star.y - wellY;
      const distance = Math.max(Math.sqrt(dx * dx + dy * dy), 90);
      const pull = 42 / distance;
      star.x += -dy * pull * star.speed * 0.03 + (pointer.x - 0.5) * star.z * 0.25 + star.drift * 0.06;
      star.y += dx * pull * star.speed * 0.03 + star.speed * star.z;

      if (star.y > height + 20 || star.x < -20 || star.x > width + 20) {
        star.x = Math.random() * width;
        star.y = -10;
      }

      ctx.fillStyle = `rgba(${star.hue}, ${0.22 + star.z * 0.72})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.z * 1.5, 0, Math.PI * 2);
      ctx.fill();
    });

    comets.forEach((comet) => {
      comet.x += comet.speed;
      comet.y += comet.speed * 0.28;
      if (comet.x > width + 180 || comet.y > height + 80) {
        comet.x = -180 - Math.random() * 260;
        comet.y = Math.random() * height * 0.52;
      }
      const tail = ctx.createLinearGradient(comet.x - 150, comet.y - 36, comet.x, comet.y);
      tail.addColorStop(0, "rgba(126,183,199,0)");
      tail.addColorStop(1, "rgba(246,241,231,0.42)");
      ctx.strokeStyle = tail;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(comet.x - 150, comet.y - 36);
      ctx.lineTo(comet.x, comet.y);
      ctx.stroke();
    });

    ctx.strokeStyle = "rgba(228, 179, 95, 0.23)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(wellX, wellY, 170, 42, -0.22, 0, Math.PI * 2);
    ctx.stroke();

    rafId = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (event) => {
    pointer.x = event.clientX / width;
    pointer.y = event.clientY / height;
  });
  resize();
  draw();

  return () => cancelAnimationFrame(rafId);
}

renderProjects();
renderProjectDetail();
renderFilters();
renderSkills();
tickClock();
setInterval(tickClock, 1000);
startSpaceCanvas();
