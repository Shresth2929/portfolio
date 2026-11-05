import { useEffect, useRef } from "react";

const achievements = [
  {
    num: "138",
    unit: "DAYS",
    title: "Max Streak on LeetCode",
    desc: "Maintained a 138-day maximum problem-solving streak on LeetCode with 372 total submissions, showcasing exceptional consistency and dedication.",
    date: "2025",
    accent: "var(--yellow)",
  },
  {
    num: "209+",
    unit: "SOLVED",
    title: "Problems Solved on LeetCode",
    desc: "Solved 209+ coding problems on LeetCode — 83 Easy, 95 Medium, 31 Hard — sharpening algorithmic thinking across multiple domains.",
    date: "Oct '25",
    accent: "var(--soft-white)",
  },
  {
    num: "06",
    unit: "BADGES",
    title: "Badges Earned on LeetCode",
    desc: "Earned 6 badges on LeetCode including the prestigious 100 Days Badge 2025, reflecting consistent participation and performance in competitive programming.",
    date: "Jan '25",
    accent: "var(--yellow)",
  },
  {
    num: "#1",
    unit: "RANK",
    title: "Leaderboard Topper — Soft Skills & Communication",
    desc: "Ranked among the top students in Soft Skills & Business Communication courses (2nd & 5th semester) at LPU, demonstrating leadership and English proficiency.",
    date: "2023 – 2024",
    accent: "var(--soft-white)",
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

const AchievementCard = ({ num, unit, title, desc, date, accent, index }) => {
  const ref = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal delay-${Math.min(index + 1, 5)}`}
      style={{
        borderTop: "1px solid var(--border-grey)",
        padding: "clamp(24px, 3vw, 40px) 0",
        display: "grid",
        gridTemplateColumns: "120px 1fr",
        gap: "clamp(20px, 3vw, 48px)",
        alignItems: "flex-start",
        transition: "padding-left 0.3s ease",
        cursor: "default",
        position: "relative",
      }}
      onMouseEnter={e => { e.currentTarget.style.paddingLeft = "16px"; }}
      onMouseLeave={e => { e.currentTarget.style.paddingLeft = "0px"; }}
    >
      {/* Yellow left accent on hover */}
      <div
        style={{
          position: "absolute", left: 0, top: 0, bottom: 0,
          width: "2px", background: "var(--yellow)",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Number */}
      <div>
        <div
          style={{
            fontSize: "clamp(32px, 5vw, 56px)", fontWeight: "800",
            letterSpacing: "-0.02em", lineHeight: 1,
            fontFamily: "'Sora', sans-serif",
            color: accent,
          }}
        >
          {num}
        </div>
        <div
          style={{
            fontSize: "9px", fontWeight: "700", letterSpacing: "0.14em",
            color: "var(--text-dim)", textTransform: "uppercase", marginTop: "4px",
          }}
        >
          {unit}
        </div>
      </div>

      {/* Content */}
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", alignItems: "flex-start", gap: "12px" }}>
          <h3
            style={{
              fontSize: "clamp(14px, 1.5vw, 17px)", fontWeight: "700",
              color: "var(--soft-white)", lineHeight: "1.3",
            }}
          >
            {title}
          </h3>
          <span
            style={{
              fontSize: "10px", color: "var(--yellow)", fontWeight: "700",
              letterSpacing: "0.1em", whiteSpace: "nowrap",
              border: "1px solid rgba(245,230,66,0.3)", padding: "3px 10px",
            }}
          >
            {date}
          </span>
        </div>
        <p style={{ fontSize: "clamp(12px, 1.1vw, 13px)", color: "var(--muted-grey)", lineHeight: "1.75" }}>
          {desc}
        </p>
      </div>
    </div>
  );
};

const Achievements = () => {
  const headRef = useReveal();

  return (
    <section
      style={{
        background: "var(--deep-black)",
        borderTop: "1px solid var(--border-grey)",
        padding: "clamp(60px, 8vw, 120px) clamp(20px, 6vw, 80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Heading */}
        <div ref={headRef} className="reveal" style={{ marginBottom: "clamp(40px, 5vw, 72px)" }}>
          <span className="section-label">Proof of Progress</span>
          <h2
            style={{
              fontSize: "clamp(36px, 7vw, 100px)",
              fontWeight: "800", letterSpacing: "-0.02em",
              lineHeight: "1.0", fontFamily: "'Sora', sans-serif",
              color: "var(--soft-white)",
            }}
          >
            PROOF OF<br />
            <span style={{ color: "var(--yellow)" }}>PROGRESS.</span>
          </h2>
        </div>

        {/* Achievement list */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {achievements.map((a, i) => (
            <AchievementCard key={a.title} {...a} index={i} />
          ))}
          <div style={{ height: "1px", background: "var(--border-grey)" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .ach-row { grid-template-columns: 80px 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default Achievements;
