const projects = [
  {
    title: "ExtraaLearn Lead Conversion Scorer",
    type: "Machine Learning",
    short: "88% recall across 4,612 leads",
    description:
      "A lead-scoring system that helps an EdTech business identify high-intent prospects while minimizing costly false negatives.",
    points: [
      "Developed and hyperparameter-tuned a Random Forest classifier on 4,612 EdTech leads.",
      "Optimized for recall, reaching 88% to reduce the risk of missing likely conversions.",
      "Used feature importance analysis to identify website engagement as the strongest conversion signal."
    ],
    tech: ["Python", "Random Forest", "Classification", "Hyperparameter Tuning", "Feature Importance"],
    links: [
      {
        label: "Live App",
        url: "https://edtech-lead-scorer-wzwevsh6plafque3vbnhxq.streamlit.app/"
      }
    ]
  },
  {
    title: "Customer Segmentation Using Machine Learning",
    type: "Data Science",
    short: "3 segments from 2,216 customers",
    description:
      "A customer analytics pipeline that turns retail behavior and demographic data into actionable audience segments.",
    points: [
      "Profiled 2,216 retail customers using behavioral and demographic features.",
      "Applied StandardScaler, K-Means, and silhouette analysis to identify three distinct segments.",
      "Translated the clusters into practical targeting, retention, and personalization opportunities."
    ],
    tech: ["Python", "K-Means", "StandardScaler", "Silhouette Analysis", "Customer Analytics"],
    links: [
      {
        label: "Live App",
        url: "https://customer-personality-segmentation-xdyrd6ktfijmnfht5fvqxu.streamlit.app/"
      }
    ]
  },
  {
    title: "World Cup Match Outcome Modeling",
    type: "Predictive Modeling",
    short: "Win, draw, and loss probabilities",
    description:
      "A football match prediction system that estimates outcome probabilities for World Cup fixtures from historical international results.",
    points: [
      "Engineered predictive features from historical international match results.",
      "Used XGBoost to model non-linear patterns behind match outcomes.",
      "Generated interpretable win, draw, and loss probabilities for tournament fixtures."
    ],
    tech: ["Python", "XGBoost", "Feature Engineering", "Probability Modeling", "Sports Analytics"],
    links: [
      {
        label: "Live App",
        url: "https://world-cup-prediction-model-buu24kpc3-taha-asims-projects.vercel.app/"
      }
    ]
  },
  {
    title: "Automated API Data Pipeline",
    type: "Data Engineering",
    short: "CoinGecko to Neon PostgreSQL",
    description:
      "An automated Python pipeline that moves cryptocurrency market data from the CoinGecko API into PostgreSQL for reliable daily analysis.",
    points: [
      "Extracted API data, transformed records, and loaded structured daily snapshots through a defined SQL schema.",
      "Implemented upsert logic so repeated runs update data safely without creating duplicates.",
      "Added unit tests and daily GitHub Actions runs to make the workflow repeatable and observable."
    ],
    tech: ["Python", "CoinGecko API", "ETL", "PostgreSQL", "GitHub Actions"],
    links: [{ label: "Repository", url: "https://github.com/TahaAsim-ui/AutomatedPipeline" }]
  },
  {
    title: "LLM-Powered Document Question Answering System",
    type: "AI Engineering",
    short: "Grounded answers over PDF documents",
    description:
      "A Python system for querying unstructured PDF documents with natural language using a retrieval-augmented generation workflow.",
    points: [
      "Built ingestion and retrieval around OpenAI embeddings and FAISS vector search.",
      "Retrieved relevant document segments before generating a response grounded in the source material.",
      "Combined PDF processing, semantic search, and answer generation into one end-to-end workflow."
    ],
    tech: ["Python", "OpenAI", "FAISS", "RAG", "PDF Processing"],
    links: [{ label: "Repository", url: "https://github.com/TahaAsim-ui/LLM-DocAnswers" }]
  }
];

const timelineItems = [
  {
    title: "AgenQ",
    type: "Experience",
    category: "experience",
    date: "Jun 2026 - Present",
    meta: "Research and ML Engineer",
    description:
      "Researching products and industry trends, then translating findings into platform upgrades. Built an end-to-end MCP proof of concept that exposes authenticated OpenAPI endpoints as AI-callable tools with secure API key injection, integration tests, and passing CI."
  },
  {
    title: "DataSphere Lab",
    type: "Experience",
    category: "experience",
    date: "Jun 2025 - Present",
    meta: "Part-time Data Scientist",
    description:
      "Designed a 45-field data dictionary across five datasets, engineered 30+ recommendation features, prototyped content-based filtering with pandas, NumPy, and scikit-learn, and documented SQL used to validate user and interaction data."
  },
  {
    title: "McGill University",
    type: "Education",
    category: "education",
    date: "Jan 2026 - Present",
    meta: "Master of Management in Analytics (Part-time)",
    description:
      "Graduate study connecting analytics, technical execution, and business decision-making."
  },
  {
    title: "Toronto Hydro",
    type: "Experience",
    category: "experience",
    date: "Jan 2023 - Dec 2023",
    meta: "Data & Tech Intern",
    description:
      "Built Excel/VBA reporting that cut resource waste by 17%, a 12-month SAP dashboard that contributed to a 15% reduction in resource spending, dispatcher analysis that helped reduce misrouted emergency calls by about 23%, and Python ETL pipelines for automated reporting."
  },
  {
    title: "hEr Volution",
    type: "Experience",
    category: "experience",
    date: "Jul 2022 - Sep 2022",
    meta: "Advanced Coding Instructor",
    description:
      "Delivered interactive programming lessons, debugging and QA simulations, and personalized code reviews. Structured learning and test preparation raised average scores by 20% by the final weeks."
  },
  {
    title: "York University",
    type: "Education",
    category: "education",
    date: "Sep 2020 - Apr 2025",
    meta: "Honors Bachelor of Science, Computer Science",
    description:
      "Built a computer science foundation spanning software development, data structures, systems, and applied data and AI projects."
  }
];

const timelineYears = ["2020", "2022", "2023", "2025", "2026"];

const skills = [
  {
    title: "Programming Languages",
    category: "software",
    copy: "Production-oriented programming across data workflows, APIs, modeling, automation, and interactive applications.",
    tags: ["Python", "SQL", "JavaScript", "TypeScript", "C++"]
  },
  {
    title: "Data Science & Machine Learning",
    category: "data",
    copy: "From feature engineering and recommender prototypes to tuned classifiers, clustering, evaluation, and business-facing interpretation.",
    tags: ["scikit-learn", "XGBoost", "pandas", "NumPy", "Feature Engineering"]
  },
  {
    title: "Data & Databases",
    category: "data",
    copy: "Reliable pipelines and structured datasets designed for analysis, validation, scheduled delivery, and downstream modeling.",
    tags: ["ETL Pipelines", "Relational Databases", "PostgreSQL", "Snowflake", "Data Mining"]
  },
  {
    title: "AI & Agent Systems",
    category: "ai",
    copy: "Applied AI systems that connect models to useful context and real workflows through retrieval, tool protocols, and secure integrations.",
    tags: ["MCP SDK", "OpenAI", "FAISS", "RAG", "Embeddings"]
  },
  {
    title: "Backend & Integration",
    category: "systems",
    copy: "Backend connections that safely move structured information between products, services, AI tools, and reporting systems.",
    tags: ["REST APIs", "OpenAPI", "JSON/XML", "System Integration", "Postman"]
  },
  {
    title: "Analytics Platforms",
    category: "systems",
    copy: "Tools for turning operational and analytical data into accessible dashboards, reports, and collaborative workflows.",
    tags: ["Power BI", "Tableau", "Excel", "Databricks", "SharePoint", "Linux"]
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
const timelineFilterBar = document.querySelector(".timeline-filter-bar");
const timelineTrack = document.querySelector(".timeline-track");

let selectedProject = 0;
let selectedFilter = "all";
let selectedTimelineFilter = "all";

function renderProjects() {
  if (!missionList) return;
  missionList.innerHTML = "";
  projects.forEach((project, index) => {
    const button = document.createElement("button");
    button.className = `mission-button${index === selectedProject ? " active" : ""}`;
    button.type = "button";
    button.setAttribute("role", "tab");
    button.setAttribute("aria-controls", "mission-detail");
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
  if (!missionType || !missionTitle || !missionDescription || !missionPoints || !missionTech || !missionLinks) return;
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
  if (!filterBar) return;
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
    button.setAttribute("aria-pressed", String(value === selectedFilter));
    button.addEventListener("click", () => {
      selectedFilter = value;
      renderFilters();
      renderSkills();
    });
    filterBar.appendChild(button);
  });
}

function renderSkills() {
  if (!skillGrid) return;
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

function renderTimelineFilters() {
  if (!timelineFilterBar) return;
  const filters = [
    ["all", "All"],
    ["experience", "Experience"],
    ["education", "Education"],
  ];

  timelineFilterBar.innerHTML = "";
  filters.forEach(([value, label]) => {
    const button = document.createElement("button");
    button.className = `timeline-filter${value === selectedTimelineFilter ? " active" : ""}`;
    button.type = "button";
    button.textContent = label;
    button.setAttribute("aria-pressed", String(value === selectedTimelineFilter));
    button.addEventListener("click", () => {
      selectedTimelineFilter = value;
      renderTimelineFilters();
      renderTimeline();
    });
    timelineFilterBar.appendChild(button);
  });
}

function getVisibleTimelineItems() {
  return timelineItems.filter((item) => selectedTimelineFilter === "all" || item.category === selectedTimelineFilter);
}

function renderTimeline() {
  if (!timelineTrack) return;
  const visible = getVisibleTimelineItems();
  const yearGroups = timelineYears.map((year) => ({
    year,
    items: visible.filter((item) => getTimelineStartYear(item) === year),
  }));

  timelineTrack.innerHTML = `
    <div class="timeline-map" style="--year-count: ${timelineYears.length}">
      ${yearGroups
        .map(
          (group, yearIndex) => `
            <div class="timeline-year" style="--year-index: ${yearIndex}">
              <div class="timeline-events timeline-events-top">
                ${group.items
                  .filter((_, itemIndex) => (yearIndex + itemIndex) % 2 === 0)
                  .map(renderTimelineCard)
                  .join("")}
              </div>
              <div class="timeline-axis-point">
                <span class="timeline-pin" aria-hidden="true"></span>
                <strong>${group.year}</strong>
              </div>
              <div class="timeline-events timeline-events-bottom">
                ${group.items
                  .filter((_, itemIndex) => (yearIndex + itemIndex) % 2 !== 0)
                  .map(renderTimelineCard)
                  .join("")}
              </div>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTimelineCard(item) {
  return `
    <article class="timeline-card">
      <p class="timeline-date">${item.date}</p>
      <h3 class="timeline-card-title">${item.title}</h3>
      <p class="timeline-card-meta">${item.meta}</p>
      <p class="timeline-card-desc">${item.description}</p>
    </article>
  `;
}

function getTimelineStartYear(item) {
  return item.date.match(/\d{4}/)?.[0] ?? "";
}

function tickClock() {
  if (!clock) return;
  const now = new Date();
  clock.textContent = now.toLocaleTimeString("en-CA", { hour12: false });
}

function startSpaceCanvas() {
  const canvas = document.querySelector("#space-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
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
renderTimelineFilters();
renderTimeline();
renderFilters();
renderSkills();
tickClock();
setInterval(tickClock, 1000);
startSpaceCanvas();
