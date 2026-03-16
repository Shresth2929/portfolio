import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node-js.png";
import mongoLogo from "../assets/mongoDB.png";
import expressLogo from "../assets/express.webp";
import javaLogo from "../assets/java.png";
import gitLogo from "../assets/social.png";

const experience = [
  {
    icon: "🏗️",
    role: "Freelancer",
    company: "Svayambhu Developers",
    period: "Dec '25 – Jan '26",
    desc: "Developed and deployed the official business website for a construction and renovation firm.",
    tech: ["React.js", "Tailwind CSS", "Vercel"],
  },
  {
    icon: "🤖",
    role: "Freelancer",
    company: "Principle Pride",
    period: "Sep '25 – Nov '25",
    desc: "Built a scalable frontend for an AI-powered IT staffing & recruitment platform.",
    tech: ["React.js", "TypeScript", "shadcn/ui", "React Query"],
  },
];

const education = [
  {
    icon: "🎓",
    level: "B.Tech (CSE)",
    school: "Lovely Professional University",
    year: "Aug '23 – Present",
    location: "Punjab, India",
    detail: "CGPA: 8.04"
  },
  {
    icon: "📖",
    level: "Class 12 — Intermediate",
    school: "SKD Academy",
    year: "Apr '22 – Mar '23",
    location: "Vrindavan Yojna, Lucknow",
    detail: "Percentage: 67.4%"
  },
  {
    icon: "📚",
    level: "Class 10 — Matriculation",
    school: "SKD Academy",
    year: "Apr '20 – Mar '21",
    location: "Vrindavan Yojna, Lucknow",
    detail: "Percentage: 87.8%"
  },
];

const stats = [
  { value: "2+", label: "Freelance Projects" },
  { value: "209+", label: "LeetCode Solved" },
  { value: "8.04", label: "CGPA at LPU" },
  { value: "138", label: "Max Day Streak" },
];

const TimelineItem = ({ icon, topLabel, title, desc, tech, period, location, detail, isLast }) => (
  <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
      <div style={{
        width: "42px", height: "42px", borderRadius: "50%",
        background: "#0d1117", border: "2px solid #7c3aed",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "18px", zIndex: 1
      }}>
        {icon}
      </div>
      {!isLast && (
        <div style={{
          width: "2px", flex: 1, minHeight: "28px",
          background: "linear-gradient(to bottom, #7c3aed44, #1e2535)",
          marginTop: "4px"
        }} />
      )}
    </div>

    <div
      style={{
        flex: 1, background: "#0d1117", border: "1px solid #1e2535",
        borderRadius: "14px", padding: "18px 20px",
        marginBottom: isLast ? "0" : "16px",
        transition: "border-color 0.25s, transform 0.25s"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "#7c3aed";
        e.currentTarget.style.transform = "translateX(5px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "#1e2535";
        e.currentTarget.style.transform = "translateX(0)";
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6px" }}>
        <span style={{ fontSize: "11px", color: "#7c3aed", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          {topLabel}
        </span>
        {period && (
          <span style={{ fontSize: "11px", color: "#6b7280", whiteSpace: "nowrap", marginLeft: "12px" }}>
            {period}
          </span>
        )}
      </div>

      <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#fff", marginBottom: "6px" }}>{title}</h3>

      {location && (
        <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "8px" }}>📍 {location}</div>
      )}

      {detail && (
        <div style={{
          display: "inline-block", fontSize: "12px", color: "#7c3aed", fontWeight: "600",
          background: "rgba(124,58,237,0.1)", padding: "3px 10px",
          borderRadius: "6px", marginBottom: desc ? "10px" : "0"
        }}>
          {detail}
        </div>
      )}

      {desc && (
        <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.6", marginBottom: tech ? "12px" : "0" }}>
          {desc}
        </p>
      )}

      {tech && (
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {tech.map(t => (
            <span key={t} style={{ background: "#111827", color: "#cbd5e1", fontSize: "11px", padding: "3px 10px", borderRadius: "6px" }}>
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const About = () => {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "100px 80px" }}>

      {/* ABOUT ME INTRO */}
      <div style={{ maxWidth: "1000px", margin: "0 auto 100px auto" }}>
        <div style={{ marginBottom: "16px" }}>
          <span style={{ fontSize: "13px", color: "#7c3aed", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            About Me
          </span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "36px", fontWeight: "700", lineHeight: "1.3", marginBottom: "24px" }}>
              Passionate Engineer,<br />
              <span style={{ color: "#7c3aed" }}>Problem Solver.</span>
            </h2>
            <p style={{ fontSize: "15px", color: "#9ca3af", lineHeight: "1.9", marginBottom: "16px" }}>
              Hey! I'm <span style={{ color: "#fff", fontWeight: "600" }}>Shresth Veer Singh</span>  a Computer Science Engineering student at Lovely Professional University with a CGPA of 8.04. I specialize in building full-stack web applications using the MERN stack.
            </p>
            <p style={{ fontSize: "15px", color: "#9ca3af", lineHeight: "1.9", marginBottom: "16px" }}>
              I've delivered real-world projects for clients from a construction firm's business website to an AI-powered IT staffing platform combining clean UI, strong architecture, and performance-first thinking.
            </p>
            <p style={{ fontSize: "15px", color: "#9ca3af", lineHeight: "1.9" }}>
              Beyond development, I actively sharpen my DSA skills on LeetCode (209+ problems solved), hold multiple NPTEL certifications from IITs, and am driven by a passion for continuous learning and building products that matter.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {stats.map(({ value, label }) => (
              <div
                key={label}
                style={{
                  background: "#0d1117", border: "1px solid #1e2535",
                  borderRadius: "16px", padding: "28px 20px", textAlign: "center",
                  transition: "border-color 0.25s, transform 0.25s"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "#7c3aed";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "#1e2535";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: "32px", fontWeight: "800", color: "#7c3aed", marginBottom: "8px" }}>{value}</div>
                <div style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.4" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* EXPERIENCE & EDUCATION */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", maxWidth: "1000px", margin: "0 auto" }}>
        <div>
          <h2 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "28px", borderLeft: "3px solid #7c3aed", paddingLeft: "14px" }}>
            Experience
          </h2>
          {experience.map((exp, i) => (
            <TimelineItem
              key={exp.company}
              icon={exp.icon}
              topLabel={exp.role}
              title={exp.company}
              desc={exp.desc}
              tech={exp.tech}
              period={exp.period}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>

        <div>
          <h2 style={{ fontSize: "26px", fontWeight: "700", marginBottom: "28px", borderLeft: "3px solid #7c3aed", paddingLeft: "14px" }}>
            Education
          </h2>
          {education.map((edu, i) => (
            <TimelineItem
              key={edu.level}
              icon={edu.icon}
              topLabel={edu.level}
              title={edu.school}
              period={edu.year}
              location={edu.location}
              detail={edu.detail}
              isLast={i === education.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;