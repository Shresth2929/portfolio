import { useState, useEffect, useRef } from "react";
import svayam from "../assets/svayam.png";
import prin from "../assets/prin.png";
import tunify from "../assets/tunify.png";
import bluePrintAI from "../assets/bluePrintAI.png";
import investOracleAI from "../assets/investOracle-AI.png";
import alumniConnect from "../assets/AlumniConnect+.png";
import quizzBuzz from "../assets/QuizzBuzz.png";

const projects = [
  {
    img: svayam,
    title: "Svayambhu Developers",
    desc: "Official business website for a construction & renovation firm. Clean UI, component reusability, cross-device compatibility.",
    tags: ["Freelance", "Frontend"],
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    demo: "https://svayambhu-developers.vercel.app",
    code: "https://github.com/Shresth2929/SvayambhuDevelopers",
    featured: true,
    period: "Dec '25 – Jan '26",
  },
  {
    img: prin,
    title: "Principle Pride",
    desc: "Scalable frontend for an AI-powered IT staffing & recruitment platform with React Query and shadcn/ui.",
    tags: ["Freelance", "Frontend"],
    tech: ["React.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "React Query"],
    demo: "https://principlepride.com",
    code: "https://github.com/Shresth2929/PrinciplePride",
    featured: true,
    period: "Sep '25 – Nov '25",
  },
  {
    img: tunify,
    title: "Tunify — AI Music Streaming Platform",
    desc: "Production-ready AI-powered music streaming platform built with MERN stack featuring authentication, dynamic playlists, personalized recommendations, and real-time playback.",
    tags: ["Full Stack", "MERN"],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Tailwind CSS", "Framer Motion"],
    demo: "https://tunify-ie.vercel.app/",
    code: "https://github.com/Shresth2929/Tunify",
    featured: false,
    period: "Mar '25 – Jun '25",
  },
  {
    img: bluePrintAI,
    title: "BluePrint AI — AI Architectural SaaS",
    desc: "AI-powered SaaS platform that converts 2D floor plans into photorealistic 3D architectural renders using modern generative AI workflows.",
    tags: ["Full Stack", "AI"],
    tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma ORM", "Gemini AI", "Tailwind CSS", "Vercel"],
    demo: "https://blue-print-ai-five.vercel.app/",
    code: "https://github.com/Shresth2929/BluePrint-AI",
    featured: false,
    period: "Nov '24 – Feb '25",
  },
  {
    img: investOracleAI,
    title: "InvestOracle AI — AI Investment Research Platform",
    desc: "Production-ready AI-powered investment research platform providing institutional-grade stock analysis, AI-generated reports, live market insights, and interactive dashboards.",
    tags: ["Full Stack", "AI"],
    tech: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Gemini AI", "Finnhub API", "React Query", "Zustand", "Docker", "Tailwind CSS"],
    demo: "https://invest-oracle-ai.vercel.app/",
    code: "https://github.com/Shresth2929/InvestOracle-AI",
    featured: false,
    period: "Aug '25 – Oct '25",
  },
  {
    img: alumniConnect,
    title: "AlumniConnect+ — Alumni Networking Mobile App",
    desc: "Cross-platform React Native application enabling alumni-student networking with secure authentication, real-time messaging, profile management, and seamless mobile UX.",
    tags: ["Full Stack", "Mobile"],
    tech: ["React Native", "Expo Router", "React Context API", "Node.js", "Express.js", "MongoDB", "JWT", "Socket.io", "Docker"],
    demo: "https://expo.dev/accounts/shresth29/projects/alumniconnect/builds/d7c33a91-2938-4589-ad83-04c5dfe6f888",
    code: "https://github.com/Shresth2929/AlumniConnect",
    featured: false,
    period: "Mar '25 – Jun '25",
  },
  {
    img: quizzBuzz,
    title: "QuizBuzz — Java Spring Boot Quiz Application",
    desc: "Quiz management platform built with Java Spring Boot featuring secure session tracking, question management, score evaluation, input validation, and clean MVC architecture.",
    tags: ["Backend", "Java"],
    tech: ["Java", "Spring Boot", "Thymeleaf", "Maven", "MVC", "REST APIs", "Git"],
    demo: "#",
    code: "https://github.com/Shresth2929/QuizBuzz",
    featured: false,
    period: "Jan '26 – Mar '26",
  },
];

const allTags = ["All Projects", "Freelance", "Full Stack", "Frontend", "AI", "MERN", "Mobile", "Backend", "Java"];

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const ProjectCard = ({ project, index }) => {
  const { img, title, desc, tags, tech, demo, code, featured, period } = project;
  const [hovered, setHovered] = useState(false);
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal delay-${Math.min(index + 1, 5)}`}
      style={{
        background: "var(--charcoal)",
        border: "1px solid var(--border-grey)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        borderColor: hovered ? "rgba(245,230,66,0.5)" : "var(--border-grey)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        style={{
          width: "100%", height: "clamp(160px, 18vw, 220px)",
          position: "relative", overflow: "hidden", flexShrink: 0,
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
            transform: hovered ? "scale(1.06)" : "scale(1)",
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute", inset: 0,
            background: `linear-gradient(to top, rgba(20,20,20,0.9) 0%, transparent 50%)`,
            opacity: hovered ? 1 : 0.4,
            transition: "opacity 0.3s ease",
          }}
        />
        {/* Number badge */}
        <div
          style={{
            position: "absolute", top: "12px", left: "12px",
            fontSize: "11px", fontWeight: "800", letterSpacing: "0.08em",
            color: "var(--yellow)", background: "rgba(0,0,0,0.7)",
            padding: "4px 10px", border: "1px solid rgba(245,230,66,0.3)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        {featured && (
          <div
            style={{
              position: "absolute", top: "12px", right: "12px",
              fontSize: "9px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--black)", background: "var(--yellow)",
              padding: "4px 10px",
            }}
          >
            Freelance
          </div>
        )}
        {/* Period badge */}
        <div
          style={{
            position: "absolute", bottom: "10px", right: "12px",
            fontSize: "10px", color: "var(--muted-grey)",
            background: "rgba(0,0,0,0.6)", padding: "3px 8px",
            letterSpacing: "0.06em",
          }}
        >
          {period}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "clamp(16px, 2vw, 24px)", flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
        {/* Tags */}
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {tags.map(t => (
            <span
              key={t}
              style={{
                fontSize: "9px", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--yellow)", border: "1px solid rgba(245,230,66,0.3)",
                padding: "3px 10px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "clamp(14px, 1.5vw, 17px)", fontWeight: "700",
            color: "var(--soft-white)", lineHeight: "1.3",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: "clamp(12px, 1.1vw, 13px)", color: "var(--muted-grey)", lineHeight: "1.7", flex: 1 }}>
          {desc}
        </p>

        {/* Tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
          {tech.slice(0, 5).map(t => (
            <span
              key={t}
              style={{
                fontSize: "9px", letterSpacing: "0.06em", textTransform: "uppercase",
                color: "var(--text-dim)", border: "1px solid var(--border-grey)",
                padding: "2px 8px",
              }}
            >
              {t}
            </span>
          ))}
          {tech.length > 5 && (
            <span
              style={{
                fontSize: "9px", letterSpacing: "0.06em",
                color: "var(--text-dim)", border: "1px solid var(--border-grey)",
                padding: "2px 8px",
              }}
            >
              +{tech.length - 5}
            </span>
          )}
        </div>

        {/* Buttons */}
        <div style={{ display: "flex", gap: "8px", marginTop: "4px" }}>
          {demo !== "#" ? (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1, background: "var(--yellow)", color: "var(--black)",
                fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase",
                padding: "10px 0", textAlign: "center", textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--soft-white)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--yellow)"; }}
            >
              Live Demo
            </a>
          ) : (
            <span
              style={{
                flex: 1, background: "var(--dark-grey)", color: "var(--text-dim)",
                fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "10px 0", textAlign: "center",
              }}
            >
              Demo Soon
            </span>
          )}

          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1, background: "transparent", color: "var(--muted-grey)",
              border: "1px solid var(--border-grey)",
              fontSize: "11px", fontWeight: "600", letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "10px 0", textAlign: "center", textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--yellow)"; e.currentTarget.style.color = "var(--yellow)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-grey)"; e.currentTarget.style.color = "var(--muted-grey)"; }}
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("All Projects");
  const headRef = useReveal();

  const filtered = active === "All Projects"
    ? projects
    : projects.filter(p => p.tags.includes(active));

  return (
    <section
      style={{
        background: "var(--black)",
        borderTop: "1px solid var(--border-grey)",
        padding: "clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Heading */}
        <div ref={headRef} className="reveal" style={{ marginBottom: "clamp(32px, 4vw, 56px)" }}>
          <span className="section-label">Work</span>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(36px, 7vw, 100px)",
                  fontWeight: "800", letterSpacing: "-0.02em",
                  lineHeight: "1.0", fontFamily: "'Sora', sans-serif",
                  color: "var(--soft-white)",
                }}
              >
                SELECTED<br />
                <span style={{ color: "var(--yellow)" }}>WORKS.</span>
              </h2>
            </div>
            <p
              style={{
                fontSize: "clamp(13px, 1.3vw, 15px)", color: "var(--muted-grey)",
                maxWidth: "280px", lineHeight: "1.7",
              }}
            >
              Ideas transformed into digital experiences.
            </p>
          </div>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: "flex", flexWrap: "wrap", gap: "6px",
            marginBottom: "clamp(32px, 4vw, 56px)",
            borderTop: "1px solid var(--border-grey)",
            borderBottom: "1px solid var(--border-grey)",
            padding: "16px 0",
          }}
        >
          {allTags.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                padding: "7px 18px",
                fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", border: "1px solid",
                borderColor: active === f ? "var(--yellow)" : "var(--border-grey)",
                background: active === f ? "var(--yellow)" : "transparent",
                color: active === f ? "var(--black)" : "var(--muted-grey)",
                fontFamily: "inherit",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={e => {
                if (active !== f) {
                  e.currentTarget.style.borderColor = "var(--yellow)";
                  e.currentTarget.style.color = "var(--yellow)";
                }
              }}
              onMouseLeave={e => {
                if (active !== f) {
                  e.currentTarget.style.borderColor = "var(--border-grey)";
                  e.currentTarget.style.color = "var(--muted-grey)";
                }
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
            gap: "clamp(16px, 2vw, 24px)",
          }}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
