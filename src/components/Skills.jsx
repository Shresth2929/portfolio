import { useEffect, useRef } from "react";

const skillCategories = [
  {
    category: "FRONTEND",
    num: "01",
    skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "BACKEND",
    num: "02",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "DATABASE",
    num: "03",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"],
  },
  {
    category: "PROGRAMMING",
    num: "04",
    skills: ["Java", "C++", "Python", "PHP"],
  },
  {
    category: "TOOLS",
    num: "05",
    skills: ["Git", "GitHub", "Docker", "AWS", "Vercel"],
  },
];

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const SkillTag = ({ name }) => (
  <span
    style={{
      display: "inline-block",
      fontSize: "clamp(11px, 1.1vw, 13px)",
      fontWeight: "600",
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--muted-grey)",
      border: "1px solid var(--border-grey)",
      padding: "8px 16px",
      cursor: "default",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = "var(--yellow)";
      e.currentTarget.style.color = "var(--yellow)";
      e.currentTarget.style.background = "rgba(245,230,66,0.06)";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = "var(--border-grey)";
      e.currentTarget.style.color = "var(--muted-grey)";
      e.currentTarget.style.background = "transparent";
    }}
  >
    {name}
  </span>
);

const CategoryRow = ({ category, num, skills, delay }) => {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal delay-${delay}`}
      style={{
        display: "grid",
        gridTemplateColumns: "180px 1fr",
        gap: "clamp(20px, 3vw, 48px)",
        alignItems: "flex-start",
        borderTop: "1px solid var(--border-grey)",
        padding: "clamp(20px, 3vw, 36px) 0",
        transition: "background 0.2s ease",
        cursor: "default",
      }}
      onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.01)"; }}
      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", paddingTop: "6px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "10px", color: "var(--yellow)", fontWeight: "700", letterSpacing: "0.1em" }}>
          {num}
        </span>
        <span
          style={{
            fontSize: "clamp(10px, 1.1vw, 13px)",
            fontWeight: "700", letterSpacing: "0.14em",
            color: "var(--muted-grey)", textTransform: "uppercase",
          }}
        >
          {category}
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {skills.map(name => <SkillTag key={name} name={name} />)}
      </div>
    </div>
  );
};

const Skills = () => {
  const headRef = useReveal();

  return (
    <section
      style={{
        background: "var(--charcoal)",
        borderTop: "1px solid var(--border-grey)",
        padding: "clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div ref={headRef} className="reveal" style={{ marginBottom: "clamp(40px, 6vw, 80px)" }}>
          <span className="section-label">Skills</span>
          <h2
            style={{
              fontSize: "clamp(36px, 7vw, 100px)",
              fontWeight: "800", letterSpacing: "-0.02em",
              lineHeight: "1.0", fontFamily: "'Sora', sans-serif",
              color: "var(--soft-white)",
            }}
          >
            MY DIGITAL<br />
            <span style={{ color: "var(--yellow)" }}>TOOLKIT.</span>
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {skillCategories.map(({ category, num, skills }, i) => (
            <CategoryRow
              key={category}
              category={category}
              num={num}
              skills={skills}
              delay={Math.min(i + 1, 5)}
            />
          ))}
          <div style={{ height: "1px", background: "var(--border-grey)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .skill-row-inner {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
