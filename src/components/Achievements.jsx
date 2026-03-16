import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node-js.png";
import mongoLogo from "../assets/mongoDB.png";
import expressLogo from "../assets/express.webp";
import javaLogo from "../assets/java.png";
import gitLogo from "../assets/social.png";

const skills = [
  { logo: reactLogo, title: "Frontend Development", desc: "Building modern, responsive UIs using React." },
  { logo: nodeLogo, title: "Backend Development", desc: "Scalable server-side apps using Node.js." },
  { logo: expressLogo, title: "API Development", desc: "RESTful APIs with Express & clean architecture." },
  { logo: mongoLogo, title: "Database Management", desc: "Optimized MongoDB schemas & queries." },
  { logo: javaLogo, title: "Java Programming", desc: "Strong OOP, DSA & backend fundamentals." },
  { logo: gitLogo, title: "Version Control", desc: "Git, GitHub & collaborative workflows." },
];

const achievements = [
  {
    icon: "🔥",
    title: "138-Day Max Streak on LeetCode",
    desc: "Maintained a 138-day maximum problem-solving streak on LeetCode with 372 total submissions in the past year, showcasing exceptional consistency and dedication.",
    date: "2025",
    color: "#f97316"
  },
  {
    icon: "💡",
    title: "209+ Problems Solved on LeetCode",
    desc: "Solved 209+ coding problems on LeetCode — 83 Easy, 95 Medium, 31 Hard — sharpening algorithmic thinking and problem-solving skills across multiple domains.",
    date: "Oct '25",
    color: "#7c3aed"
  },
  {
    icon: "🏅",
    title: "6 Badges Earned on LeetCode",
    desc: "Earned 6 badges on LeetCode including the prestigious 100 Days Badge 2025, reflecting consistent participation and performance in competitive programming.",
    date: "Jan '25",
    color: "#3b82f6"
  },
  {
    icon: "🏆",
    title: "Leaderboard Topper — Soft Skills & Communication",
    desc: "Ranked among the top students in Soft Skills & Business Communication courses (2nd & 5th semester) at LPU, demonstrating strong leadership and spoken English proficiency.",
    date: "2023 – 2024",
    color: "#22c55e"
  },
];

const Achievements = () => {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "100px 80px" }}>

      {/* ===== SKILLS ===== */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2 style={{ fontSize: "38px", fontWeight: "700", marginBottom: "10px" }}>My Skills</h2>
        <p style={{ color: "#9ca3af", fontSize: "15px" }}>
          Full Stack Developer (MERN) with strong Java foundation
        </p>
      </div>

      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px", maxWidth: "1000px", margin: "0 auto 100px auto"
      }}>
        {skills.map(({ logo, title, desc }) => (
          <div
            key={title}
            style={{
              background: "#0d1117", border: "1px solid #1e2535",
              borderRadius: "16px", padding: "32px 24px",
              textAlign: "center", transition: "transform 0.25s, border-color 0.25s",
              cursor: "default"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.borderColor = "#7c3aed";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#1e2535";
            }}
          >
            <div style={{
              width: "64px", height: "64px", borderRadius: "14px",
              background: "#1a1f2e", display: "flex", alignItems: "center",
              justifyContent: "center", margin: "0 auto 20px auto"
            }}>
              <img src={logo} alt={title} style={{ width: "36px", height: "36px", objectFit: "contain" }} />
            </div>
            <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "10px" }}>{title}</h3>
            <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.6" }}>{desc}</p>
          </div>
        ))}
      </div>

      {/* ===== ACHIEVEMENTS ===== */}
      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <h2 style={{ fontSize: "38px", fontWeight: "700", marginBottom: "10px" }}>Achievements</h2>
        <p style={{ color: "#9ca3af", fontSize: "15px" }}>
          Milestones that reflect consistency, excellence & growth
        </p>
      </div>

      <div style={{ maxWidth: "750px", margin: "0 auto", position: "relative" }}>
        <div style={{
          position: "absolute", left: "21px", top: "0", bottom: "0",
          width: "2px", background: "linear-gradient(to bottom, #7c3aed, transparent)"
        }} />

        {achievements.map(({ icon, title, desc, date, color }, i) => (
          <div key={i} style={{ display: "flex", gap: "24px", marginBottom: "28px", alignItems: "flex-start" }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "50%",
              background: "#0d1117", border: `2px solid ${color}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "20px", flexShrink: 0, zIndex: 1
            }}>
              {icon}
            </div>
            <div
              style={{
                flex: 1, background: "#0d1117", border: "1px solid #1e2535",
                borderRadius: "14px", padding: "20px 24px",
                transition: "border-color 0.25s, transform 0.25s"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.transform = "translateX(6px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "#1e2535";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: "700", color: "#fff" }}>{title}</h3>
                <span style={{ fontSize: "11px", color: color, fontWeight: "600", whiteSpace: "nowrap", marginLeft: "12px" }}>
                  {date}
                </span>
              </div>
              <p style={{ fontSize: "13px", color: "#9ca3af", lineHeight: "1.6" }}>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;