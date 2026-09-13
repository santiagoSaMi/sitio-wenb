import React, { useEffect, useState } from "react";
// 98.css skin — as requested. If your installed package doesn't expose this
// path, the equivalent stylesheet is published as "98.css" (import "98.css").
import "xp.css/dist/98.css";
import "./App.css";

const TABS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const DESKTOP_ICONS = [
  { id: "about", label: "About Me", icon: "computer" },
  { id: "experience", label: "Experience", icon: "briefcase" },
  { id: "skills", label: "Skills", icon: "toolbox" },
  { id: "projects", label: "Projects", icon: "floppy" },
  { id: "contact", label: "Contact", icon: "mail" },
  { id: "github", label: "GitHub", icon: "network", href: "https://github.com/santiagoSaMi" },
];

const PROJECTS = [
  {
    title: "App for Sopó Local Artisans",
    kind: "Recognized by the Sopó local government",
    desc: "An application-based solution to support local artisans in Sopó, making it easier for them to showcase their products and connect with customers. Aimed at strengthening artisan trade through accessible digital tools — recognized by the Sopó local government for its social, economic, and cultural impact on the community.",
    stack: "App Development · Project Leadership",
  },
  {
    title: "JavaFX Bank Management System",
    kind: "GitHub repository",
    desc: "A desktop banking application built with Java and JavaFX (Scene Builder). Manages clients, accounts, and transactions — deposits, withdrawals, transfers, and password changes — through a multi-screen interface.",
    stack: "Java · JavaFX · Scene Builder",
    href: "https://github.com/santiagoSaMi/javafx-bank-management-system",
  },
  {
    title: "Random Cocktail",
    kind: "GitHub repository",
    desc: "A responsive cocktail discovery app built with vanilla JavaScript, pulling live data from TheCocktailDB through a REST API.",
    stack: "JavaScript · REST API · CSS",
    href: "https://github.com/santiagoSaMi/random-cocktail",
  },
  {
    title: "Chibchombia",
    kind: "University project · rebuild in React",
    desc: "A restaurant delivery platform for a Web Applications Development course: a REST backend, a customer-facing menu and cart app, and an order management app with authentication and status tracking, fully dockerized.",
    stack: "React · REST API · Docker",
  },
  {
    title: "SIREC — Emergency Response Architecture",
    kind: "University project · Advanced Architecture Patterns",
    desc: "A serverless architecture for coordinating emergency response after a simulated earthquake: four dockerized microservices on AWS Lambda behind API Gateway, a Next.js frontend on Vercel, and Supabase/PostGIS persistence with row-level security and canary deployments.",
    stack: "AWS Lambda · Supabase · PostGIS · Next.js",
  },
  {
    title: "Distributed Data Cleaning Pipeline",
    kind: "University workshop · Distributed Systems",
    desc: "An out-of-core cleaning pipeline for 300,000 intentionally dirty synthetic records, run on a Dask cluster (one scheduler, three workers) inside Docker Compose and orchestrated with Prefect, writing clean output to Parquet.",
    stack: "Dask · Prefect · Docker Compose · Parquet",
  },
  {
    title: "QR Restaurant Ordering",
    kind: "Personal concept project",
    desc: "A concept for a QR-code restaurant ordering system inspired by Saizeriya's setup in Japan, designed around React/Vite, Fastify, PostgreSQL with Prisma, Redis, and real-time updates via Socket.io.",
    stack: "React · Fastify · Prisma · Socket.io",
  },
  {
    title: "HTML/CSS Landing Page",
    kind: "GitHub repository",
    desc: "A front-end clone of a marketplace landing page, built to practice structuring layouts and styling purely with HTML and CSS.",
    stack: "HTML · CSS",
  },
];

const SKILLS = {
  "Technical / Tools": ["Excel", "MySQL", "Firebase", "Supabase", "Godot Engine", "Java", "Python", "Project management"],
  "Soft Skills": ["Effective communication", "Negotiation", "Analytical thinking"],
};

const CERTIFICATIONS = [
  "Cisco Essentials – Cisco, 2024",
  "English – C1 Level",
  "Japanese – N5 Level",
];

function useClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000 * 30);
    return () => clearInterval(id);
  }, []);
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMaximized, setIsMaximized] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const clock = useClock();

  function openTab(tabId) {
    setIsOpen(true);
    setActiveTab(tabId);
    setStartMenuOpen(false);
  }

  function handleIconActivate(icon) {
    setSelectedIcon(icon.id);
    if (icon.href) {
      window.open(icon.href, "_blank", "noopener");
      return;
    }
    openTab(icon.id);
  }

  return (
    <div className="win98-desktop" onClick={() => startMenuOpen && setStartMenuOpen(false)}>
      <div className="desktop-icons">
        {DESKTOP_ICONS.map((icon) => (
          <button
            key={icon.id}
            className={`desktop-icon${selectedIcon === icon.id ? " selected" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIcon(icon.id);
            }}
            onDoubleClick={(e) => {
              e.stopPropagation();
              handleIconActivate(icon);
            }}
          >
            <span className={`win98-icon win98-icon-${icon.icon}`} aria-hidden="true" />
            <span className="label">{icon.label}</span>
          </button>
        ))}
      </div>

      {isOpen && (
        <div className={`win98-window-wrap${isMaximized ? " maximized" : ""}`}>
          <div className="window">
            <div className="title-bar">
              <div className="title-bar-text">SantiagoOS — Portfolio.exe</div>
              <div className="title-bar-controls">
                <button aria-label="Minimize" onClick={() => setIsOpen(false)} />
                <button
                  aria-label={isMaximized ? "Restore" : "Maximize"}
                  onClick={() => setIsMaximized((v) => !v)}
                />
                <button aria-label="Close" onClick={() => setIsOpen(false)} />
              </div>
            </div>

            <div className="window-body">
              <menu role="tablist">
                {TABS.map((tab) => (
                  <li key={tab.id} role="tab" aria-selected={activeTab === tab.id}>
                    <a
                      href={`#${tab.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab(tab.id);
                      }}
                    >
                      {tab.label}
                    </a>
                  </li>
                ))}
              </menu>

              <div className="window tab-panel" role="tabpanel">
                <div className="window-body">
                  {activeTab === "about" && <AboutPanel />}
                  {activeTab === "experience" && <ExperiencePanel />}
                  {activeTab === "skills" && <SkillsPanel />}
                  {activeTab === "projects" && <ProjectsPanel />}
                  {activeTab === "contact" && <ContactPanel />}
                </div>
              </div>
            </div>

            <div className="status-bar">
              <p className="status-bar-field">Santiago Sabogal Millan</p>
              <p className="status-bar-field">Final-semester Computer Engineering student</p>
              <p className="status-bar-field">Ready</p>
            </div>
          </div>
        </div>
      )}

      {startMenuOpen && (
        <div className="window start-menu" onClick={(e) => e.stopPropagation()}>
          <div className="window-body">
            <ul className="tree-view">
              {TABS.map((tab) => (
                <li key={tab.id}>
                  <a href={`#${tab.id}`} onClick={(e) => { e.preventDefault(); openTab(tab.id); }}>
                    {tab.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/santiagoSaMi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      <footer className="site-footer">
        Built with <a href="https://jdan.github.io/98.css/" target="_blank" rel="noopener noreferrer">98.css</a> by <a href="https://github.com/jdan" target="_blank" rel="noopener noreferrer">jdan</a>.
      </footer>

      <div className="taskbar">
        <button
          className="start-button"
          onClick={(e) => {
            e.stopPropagation();
            setStartMenuOpen((v) => !v);
          }}
        >
          <span className="windows-logo" aria-hidden="true"><i /><i /><i /><i /></span> Start
        </button>
        {!isOpen && (
          <button className="taskbar-task" onClick={() => setIsOpen(true)}>
            SantiagoOS — Portfolio.exe
          </button>
        )}
        <div className="taskbar-clock">{clock}</div>
      </div>
    </div>
  );
}

function AboutPanel() {
  return (
    <>
      <p>
        Final-semester Computer Engineering student with experience in video game development
        and web page design, focused on generating measurable results. Has led app projects for
        artisans in Sopó, earning recognition from the local government. Seeks to contribute his
        international work-values skills to an organization focused on innovation and growth.
      </p>

      <fieldset>
        <legend>Quick facts</legend>
        <ul className="about-stats">
          <li>🎓 Final-semester Computer Engineering student — Universidad de La Sabana</li>
          <li>🇯🇵 Academic Exchange — Saitama University, Japan (Apr–Aug 2026)</li>
          <li>🏆 Recognized by the Sopó local government for an artisan-support app</li>
          <li>🗣️ English C1 · Japanese N5</li>
          <li>💻 14 repositories and counting, on GitHub</li>
        </ul>
      </fieldset>
    </>
  );
}

function ExperiencePanel() {
  return (
    <>
      <fieldset>
        <legend>Work Experience</legend>
        <div className="timeline-item">
          <h4>Store Ambassador</h4>
          <p className="timeline-meta">Loto del Sur — Bogotá · December 2022 – December 2023</p>
          <ul>
            <li>Implemented customer service in English, which led to improved sales to foreign customers.</li>
          </ul>
        </div>
      </fieldset>

      <fieldset>
        <legend>Education</legend>
        <div className="timeline-item">
          <h4>Academic Exchange Program</h4>
          <p className="timeline-meta">Saitama University — Japan · April 2026 – August 2026</p>
          <p>Computer Engineering</p>
        </div>
        <div className="timeline-item">
          <h4>Computer Engineering</h4>
          <p className="timeline-meta">Universidad de La Sabana — Chía, Cundinamarca · 2022 – In progress</p>
          <p>Received the academic excellence scholarship upon enrolling, kept until 2023.</p>
        </div>
        <div className="timeline-item">
          <h4>High School Diploma</h4>
          <p className="timeline-meta">Fundación Colegio Cardenal John Henry Newman — Cajicá, Cundinamarca</p>
          <p>Ranked among the top 5 results in the Saber standardized test for the class of 2022.</p>
        </div>
      </fieldset>
    </>
  );
}

function SkillsPanel() {
  return (
    <>
      <p>Technical tools and soft skills built through coursework, projects, and work experience.</p>
      {Object.entries(SKILLS).map(([group, items]) => (
        <fieldset key={group} className="skills-group">
          <legend>{group}</legend>
          <ul className="tree-view skills-tree">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </fieldset>
      ))}
      <fieldset className="skills-group">
        <legend>Certifications & Languages</legend>
        <ul className="tree-view skills-tree">
          {CERTIFICATIONS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </fieldset>
    </>
  );
}

function ProjectsPanel() {
  return (
    <>
      <p>A mix of GitHub repositories, university coursework, and self-initiated concepts.</p>
      <div className="project-grid">
        {PROJECTS.map((project) => (
          <fieldset key={project.title} className="project-card">
            <legend>{project.title}</legend>
            <p className="project-kind">{project.kind}</p>
            <p className="project-desc">{project.desc}</p>
            <p className="project-stack">{project.stack}</p>
            {project.href && (
              <button onClick={() => window.open(project.href, "_blank", "noopener")}>
                View on GitHub
              </button>
            )}
          </fieldset>
        ))}
      </div>
    </>
  );
}

function ContactPanel() {
  return (
    <fieldset>
      <legend>Get in touch</legend>
      <p>The best place to see my latest code, or to reach out about a project, is my GitHub profile.</p>
      <button onClick={() => window.open("https://github.com/santiagoSaMi", "_blank", "noopener")}>
        github.com/santiagoSaMi
      </button>
    </fieldset>
  );
}
