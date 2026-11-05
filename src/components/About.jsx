import { useEffect, useRef } from "react";

const experience = [
  {
    num: "01",
    role: "Freelancer",
    company: "Svayambhu Developers",
    period: "Dec '25 – Jan '26",
    desc: "Developed and deployed the official business website for a construction and renovation firm.",
    tech: ["React.js", "Tailwind CSS", "Vercel"],
  },
  {
    num: "02",
    role: "Freelancer",
    company: "Principle Pride",
    period: "Sep '25 – Nov '25",
    desc: "Built a scalable frontend for an AI-powered IT staffing & recruitment platform.",
    tech: ["React.js", "TypeScript", "shadcn/ui", "React Query"],
  },
];

const education = [
  {
    level: "B.Tech Computer Science Engineering",
    school: "Lovely Professional University",
    year: "Aug '23 – Present",
    location: "Punjab, India",
    detail: "CGPA: 8.04",
  },
  {
    level: "Class 12 — Intermediate",
    school: "SKD Academy",
    year: "Apr '22 – Mar '23",
    location: "Lucknow",
    detail: "67.4%",
  },
  {
    level: "Class 10 — Matriculation",
    school: "SKD Academy",
    year: "Apr '20 – Mar '21",
    location: "Lucknow",
    detail: "87.8%",
  },
];

const stats = [
  { value: "2+",   label: "Freelance\nProjects" },
  { value: "209+", label: "LeetCode\nProblems" },
  { value: "8.04", label: "CGPA\nat LPU" },
  { value: "138",  label: "Max Day\nStreak" },
];

/* Scroll-reveal hook */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const StatBlock = ({ value, label, delay }) => {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal delay-${delay}`}
      style={{
        borderTop: "1px solid var(--border-grey)",
        paddingTop: "24px",
      }}
    >
      <div
        style={{
          fontSize: "clamp(36px, 5vw, 64px)", fontWeight: "800",
          color: "var(--yellow)", letterSpacing: "-0.02em",
          fontFamily: "'Sora', sans-serif",
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "12px", color: "var(--muted-grey)",
          marginTop: "8px", letterSpacing: "0.06em",
          whiteSpace: "pre-line",
        }}
      >
        {label}
      </div>
    </div>
  );
};

const About = () => {
  const headRef   = useReveal();
  const bioRef    = useReveal();
  const expRef    = useReveal();
  const eduRef    = useReveal();

  return (
    <>
      {/* ===== ABOUT SECTION ===== */}
      <section
        id="about-section"
        style={{
          background: "var(--black)",
          borderTop: "1px solid var(--border-grey)",
          padding: "clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

          {/* Section Label */}
          <div ref={headRef} className="reveal" style={{ marginBottom: "clamp(24px, 4vw, 48px)" }}>
            <span className="section-label">About</span>

            {/* Big editorial heading */}
            <h2
              style={{
                fontSize: "clamp(36px, 7vw, 100px)",
                fontWeight: "800", letterSpacing: "-0.02em",
                lineHeight: "1.0", fontFamily: "'Sora', sans-serif",
                color: "var(--soft-white)",
              }}
            >
              MORE THAN<br />
              <span style={{ color: "var(--yellow)" }}>JUST</span> CODE.
            </h2>
          </div>

          {/* Two-column editorial layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px, 5vw, 80px)",
              alignItems: "flex-start",
              marginBottom: "clamp(48px, 6vw, 100px)",
            }}
            className="about-grid"
          >
            {/* BIO */}
            <div ref={bioRef} className="reveal-left">
              <p
                style={{
                  fontSize: "clamp(16px, 1.6vw, 20px)",
                  lineHeight: "1.85",
                  color: "var(--muted-grey)",
                  marginBottom: "24px",
                }}
              >
                Hey! I'm{" "}
                <span style={{ color: "var(--soft-white)", fontWeight: "700" }}>Shresth Veer Singh</span>
                {" "}— a Computer Science Engineering student at{" "}
                <span style={{ color: "var(--soft-white)", fontWeight: "600" }}>Lovely Professional University</span>{" "}
                with a CGPA of{" "}
                <span style={{ color: "var(--yellow)", fontWeight: "700" }}>8.04</span>.
                I specialize in building full-stack applications using the MERN stack.
              </p>
              <p
                style={{
                  fontSize: "clamp(16px, 1.6vw, 20px)",
                  lineHeight: "1.85",
                  color: "var(--muted-grey)",
                  marginBottom: "24px",
                }}
              >
                I've delivered{" "}
                <span style={{ color: "var(--yellow)", fontWeight: "700" }}>real-world freelance projects</span>
                {" "}— from a construction firm's business website to an AI-powered IT staffing platform —
                combining clean UI, strong architecture, and performance-first thinking.
              </p>
              <p
                style={{
                  fontSize: "clamp(16px, 1.6vw, 20px)",
                  lineHeight: "1.85",
                  color: "var(--muted-grey)",
                }}
              >
                Beyond development, I actively sharpen my DSA skills on LeetCode
                (<span style={{ color: "var(--yellow)", fontWeight: "700" }}>209+ problems solved</span>),
                hold multiple NPTEL certifications from IITs, and am driven by a passion for
                continuous learning and building products that matter.
              </p>
            </div>

            {/* STATS GRID */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(20px, 3vw, 40px)",
              }}
            >
              {stats.map(({ value, label }, i) => (
                <StatBlock key={label} value={value} label={label} delay={i + 1} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "var(--border-grey)", marginBottom: "clamp(48px, 6vw, 80px)" }} />

          {/* ===== EXPERIENCE & EDUCATION ===== */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "clamp(32px, 5vw, 80px)",
            }}
            className="about-grid"
            id="experience"
          >
            {/* EXPERIENCE */}
            <div ref={expRef} className="reveal-left">
              <div style={{ marginBottom: "clamp(24px, 3vw, 40px)" }}>
                <span className="section-label">Experience</span>
                <h3
                  style={{
                    fontSize: "clamp(22px, 3vw, 36px)", fontWeight: "800",
                    letterSpacing: "-0.01em", fontFamily: "'Sora', sans-serif",
                    color: "var(--soft-white)",
                  }}
                >
                  THE JOURNEY<br />
                  <span style={{ color: "var(--yellow)" }}>SO FAR.</span>
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {experience.map((exp, i) => (
                  <div
                    key={exp.company}
                    style={{
                      borderTop: "1px solid var(--border-grey)",
                      paddingTop: "clamp(16px, 2vw, 28px)",
                      paddingBottom: "clamp(16px, 2vw, 28px)",
                      position: "relative",
                      transition: "padding-left 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.paddingLeft = "16px"; }}
                    onMouseLeave={e => { e.currentTarget.style.paddingLeft = "0px"; }}
                  >
                    <div
                      style={{
                        position: "absolute", left: 0, top: 0, bottom: 0,
                        width: "2px", background: "var(--yellow)",
                        opacity: 0, transition: "opacity 0.3s ease",
                      }}
                      className="exp-accent"
                    />
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                      <span
                        style={{
                          fontSize: "10px", fontWeight: "700", letterSpacing: "0.14em",
                          color: "var(--yellow)", textTransform: "uppercase",
                        }}
                      >
                        {exp.num} — {exp.role}
                      </span>
                      <span style={{ fontSize: "11px", color: "var(--text-dim)", whiteSpace: "nowrap" }}>
                        {exp.period}
                      </span>
                    </div>
                    <h4
                      style={{
                        fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: "700",
                        color: "var(--soft-white)", marginBottom: "10px",
                      }}
                    >
                      {exp.company}
                    </h4>
                    <p style={{ fontSize: "13px", color: "var(--muted-grey)", lineHeight: "1.7", marginBottom: "12px" }}>
                      {exp.desc}
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {exp.tech.map(t => (
                        <span
                          key={t}
                          style={{
                            fontSize: "10px", fontWeight: "600", letterSpacing: "0.08em",
                            color: "var(--muted-grey)", border: "1px solid var(--border-grey)",
                            padding: "3px 10px", textTransform: "uppercase",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div ref={eduRef} className="reveal-right">
              <div style={{ marginBottom: "clamp(24px, 3vw, 40px)" }}>
                <span className="section-label">Education</span>
                <h3
                  style={{
                    fontSize: "clamp(22px, 3vw, 36px)", fontWeight: "800",
                    letterSpacing: "-0.01em", fontFamily: "'Sora', sans-serif",
                    color: "var(--soft-white)",
                  }}
                >
                  ACADEMIC<br />
                  <span style={{ color: "var(--yellow)" }}>FOUNDATION.</span>
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {education.map((edu, i) => (
                  <div
                    key={edu.level}
                    style={{
                      borderTop: "1px solid var(--border-grey)",
                      paddingTop: "clamp(16px, 2vw, 24px)",
                      paddingBottom: "clamp(16px, 2vw, 24px)",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                      <span style={{ fontSize: "11px", color: "var(--yellow)", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        {edu.year}
                      </span>
                      <span
                        style={{
                          fontSize: "10px", fontWeight: "700",
                          color: "var(--black)", background: "var(--yellow)",
                          padding: "2px 10px", letterSpacing: "0.06em",
                        }}
                      >
                        {edu.detail}
                      </span>
                    </div>
                    <h4 style={{ fontSize: "clamp(14px, 1.6vw, 17px)", fontWeight: "700", color: "var(--soft-white)", marginBottom: "4px" }}>
                      {edu.level}
                    </h4>
                    <p style={{ fontSize: "12px", color: "var(--muted-grey)" }}>
                      {edu.school} · {edu.location}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

export default About;
