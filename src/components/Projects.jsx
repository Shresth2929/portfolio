import { useState } from "react";
import svayam from "../assets/svayam.png";
import prin from "../assets/prin.png";
import tunify from "../assets/tunify.png";
import bluePrintAI from "../assets/bluePrintAI.png";

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
    period: "Dec '25 – Jan '26"
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
    period: "Sep '25 – Nov '25"
  },

  {
    img: tunify,
    title: "Tunify — AI Music Streaming Platform",
    desc: "Production-ready AI-powered music streaming platform built with MERN stack featuring authentication, dynamic playlists, personalized recommendations, and real-time playback.",
    tags: ["Full Stack", "MERN"],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Cloudinary",
      "Tailwind CSS",
      "Framer Motion"
    ],
    demo: "https://tunify-ie.vercel.app/",
    code: "https://github.com/Shresth2929",
    featured: false,
    period: "Mar '25 – Jun '25"
  },

  {
    img: bluePrintAI,
    title: "BluePrint AI — AI Architectural SaaS",
    desc: "AI-powered SaaS platform that converts 2D floor plans into photorealistic 3D architectural renders using modern generative AI workflows.",
    tags: ["Full Stack", "AI"],
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Gemini AI",
      "Tailwind CSS",
      "Vercel"
    ],
    demo: "https://blue-print-ai-five.vercel.app/",
    code: "https://github.com/Shresth2929",
    featured: false,
    period: "Nov '24 – Feb '25"
  },
];

const allTags = [
  "All Projects",
  "Freelance",
  "Full Stack",
  "Frontend",
  "AI",
  "MERN"
];

const Projects = () => {

  const [active, setActive] = useState("All Projects");

  const filtered =
    active === "All Projects"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <section style={{ background: "#000", color: "#fff", padding: "100px 80px" }}>

      {/* HEADING */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "38px", fontWeight: "700", marginBottom: "10px" }}>
          Featured Projects
        </h2>
        <p style={{ color: "#9ca3af", fontSize: "15px" }}>
          Real-world work — freelance clients & personal builds
        </p>
      </div>

      {/* FILTER BUTTONS */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "40px",
        }}
      >
        {allTags.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: "8px 22px",
              borderRadius: "20px",
              fontSize: "13px",
              cursor: "pointer",
              border: "1px solid #2a2a3a",
              background: active === f ? "#7c3aed" : "#0d1117",
              color: active === f ? "#fff" : "#9ca3af",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "24px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {filtered.map(({ img, title, desc, tags, tech, demo, code, featured, period }) => (
          <div
            key={title}
            style={{
              background: "#0d1117",
              border: "1px solid #1e2535",
              borderRadius: "16px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* IMAGE */}
            <div style={{ width: "100%", height: "200px", position: "relative" }}>
              <img
                src={img}
                alt={title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />

              {featured && (
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    background: "#7c3aed",
                    color: "#fff",
                    fontSize: "11px",
                    padding: "4px 10px",
                    borderRadius: "10px",
                    fontWeight: "600",
                  }}
                >
                  Freelance ⭐
                </div>
              )}

              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  right: "12px",
                  color: "#9ca3af",
                  fontSize: "11px",
                  background: "rgba(0,0,0,0.5)",
                  padding: "2px 8px",
                  borderRadius: "6px",
                }}
              >
                {period}
              </div>
            </div>

            {/* CONTENT */}
            <div style={{ padding: "20px", flex: 1 }}>

              {/* TAGS */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "10px" }}>
                {tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "#1a1f2e",
                      color: "#7c3aed",
                      fontSize: "11px",
                      padding: "4px 10px",
                      borderRadius: "8px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 style={{ fontSize: "17px", fontWeight: "700", marginBottom: "8px" }}>
                {title}
              </h3>

              <p style={{ fontSize: "13px", color: "#9ca3af", marginBottom: "16px" }}>
                {desc}
              </p>

              {/* TECH */}
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "18px" }}>
                {tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "#111827",
                      color: "#cbd5e1",
                      fontSize: "11px",
                      padding: "3px 10px",
                      borderRadius: "6px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div style={{ display: "flex", gap: "10px" }}>
                {demo !== "#" ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      flex: 1,
                      background: "#7c3aed",
                      color: "#fff",
                      padding: "10px 0",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: "600",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    Live Demo
                  </a>
                ) : (
                  <span
                    style={{
                      flex: 1,
                      background: "#1a1f2e",
                      color: "#4b5563",
                      padding: "10px 0",
                      borderRadius: "8px",
                      fontSize: "13px",
                      textAlign: "center",
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
                    flex: 1,
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid #2a2a3a",
                    padding: "10px 0",
                    borderRadius: "8px",
                    fontSize: "13px",
                    textAlign: "center",
                    textDecoration: "none",
                  }}
                >
                  Source Code
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;