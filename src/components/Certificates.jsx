import dsa from "../assets/dsa.png";
import ml from "../assets/ml.png";
import cloud from "../assets/cloud.png";
import genAI from "../assets/genAI.png";
import computationalTheory from "../assets/computationalTheory.png";
import placementAce from "../assets/placementAce.png";

const certs = [
  {
    img: dsa,
    issuer: "NPTEL · Elite",
    title: "Data Structure and Algorithms using Java",
    org: "IIT Kharagpur",
    date: "Jul–Oct 2025",
    score: "60%",
    viewLink: "https://drive.google.com/file/d/1iSbfie0iE5OGpYq0Sitn6OE9sV8gAbqo/view",
    downloadLink: "https://drive.google.com/uc?export=download&id=1iSbfie0iE5OGpYq0Sitn6OE9sV8gAbqo",
    gradient: "linear-gradient(135deg, #1a2035, #0d1117)"
  },
  {
    img: ml,
    issuer: "NPTEL · Elite",
    title: "Machine Learning & Deep Learning — Fundamentals and Applications",
    org: "IIT Guwahati",
    date: "Jul–Oct 2025",
    score: "63%",
    viewLink: "https://drive.google.com/file/d/1VLTRXwFeAm8Cdlz5aU52kgImThy1h_s1/view",
    downloadLink: "https://drive.google.com/uc?export=download&id=1VLTRXwFeAm8Cdlz5aU52kgImThy1h_s1",
    gradient: "linear-gradient(135deg, #0d2035, #0a1a2e)"
  },
  {
    img: cloud,
    issuer: "NPTEL · Elite",
    title: "Cloud Computing",
    org: "IIT Kharagpur",
    date: "Jan–Apr 2025",
    score: "51%",
    viewLink: "https://drive.google.com/file/d/1JmMv3hYp8yYbJPkcyAnZnV_RcxF9GC80/view",
    downloadLink: "https://drive.google.com/uc?export=download&id=1JmMv3hYp8yYbJPkcyAnZnV_RcxF9GC80",
    gradient: "linear-gradient(135deg, #0a1a2e, #0d1117)"
  },
  {
    img: genAI,
    issuer: "Infosys Springboard",
    title: "Master Generative AI & Generative AI Tools (ChatGPT & more)",
    org: "Infosys Limited",
    date: "Dec 2025",
    score: null,
    viewLink: "https://drive.google.com/file/d/1hQDYvVEgr_3x-d2YOdD2pxlJKCNIz7N2/view",
    downloadLink: "https://drive.google.com/uc?export=download&id=1hQDYvVEgr_3x-d2YOdD2pxlJKCNIz7N2",
    gradient: "linear-gradient(135deg, #1a1535, #0d1020)"
  },
  {
    img: computationalTheory,
    issuer: "Infosys Springboard",
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    org: "Infosys Limited",
    date: "Jul 2025",
    score: null,
    viewLink: "https://drive.google.com/file/d/1SxdgcEcYBxUMeecBUMXWiid6SWUtH6pC/view",
    downloadLink: "https://drive.google.com/uc?export=download&id=1SxdgcEcYBxUMeecBUMXWiid6SWUtH6pC",
    gradient: "linear-gradient(135deg, #1a1020, #0d0a1a)"
  },
  {
    img: placementAce,
    issuer: "LPU · Grade O",
    title: "Placement Ace: Java Bootcamp (LeetCode–Codeforces Edition)",
    org: "Centre for Professional Enhancement, LPU",
    date: "Jun–Jul 2025",
    score: "Grade O",
    viewLink: "https://drive.google.com/file/d/1z5surZlgeDHAzx3FZzeFlRRlhvC29PT1/view",
    downloadLink: "https://drive.google.com/uc?export=download&id=1z5surZlgeDHAzx3FZzeFlRRlhvC29PT1",
    gradient: "linear-gradient(135deg, #1a0a00, #2a1500)"
  },
];

const Certificates = () => {
  return (
    <section style={{ background: "#000", color: "#fff", padding: "100px 80px" }}>

      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "38px", fontWeight: "700", marginBottom: "10px" }}>Certifications</h2>
        <p style={{ color: "#9ca3af", fontSize: "15px" }}>
          Professional credentials that validate my technical expertise
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        {certs.map(({ img, issuer, title, org, date, score, viewLink, downloadLink, gradient }) => (
          <div
            key={title}
            style={{
              background: "#0d1117",
              border: "1px solid #1e2535",
              borderRadius: "14px",
              overflow: "hidden",
              transition: "transform 0.25s, border-color 0.25s",
              display: "flex",
              flexDirection: "column"
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.borderColor = "#7c3aed";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "#1e2535";
            }}
          >
            <div style={{
              width: "100%", height: "140px",
              background: gradient,
              position: "relative", overflow: "hidden"
            }}>
              <img
                src={img}
                alt={title}
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: "0.85" }}
              />
              <div style={{
                position: "absolute", top: "10px", left: "10px",
                background: "rgba(124,58,237,0.9)", color: "#fff",
                fontSize: "10px", padding: "3px 8px",
                borderRadius: "6px", fontWeight: "600"
              }}>
                {issuer}
              </div>
              <div style={{
                position: "absolute", bottom: "10px", right: "10px",
                color: "#fff", fontSize: "11px", fontWeight: "600",
                background: "rgba(0,0,0,0.55)",
                padding: "2px 8px", borderRadius: "6px"
              }}>
                {date}
              </div>
            </div>

            <div style={{ padding: "14px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "13px", fontWeight: "600", color: "#fff", marginBottom: "6px", lineHeight: "1.4" }}>
                {title}
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "10px" }}>
                {org}
              </div>

              {score && (
                <div style={{
                  display: "inline-block", fontSize: "11px", fontWeight: "600",
                  color: "#7c3aed", background: "rgba(124,58,237,0.1)",
                  padding: "2px 10px", borderRadius: "6px", marginBottom: "12px",
                  alignSelf: "flex-start"
                }}>
                  {score}
                </div>
              )}

              <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
                <a
                  href={viewLink}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: 1, textAlign: "center", textDecoration: "none",
                    padding: "8px 0", borderRadius: "8px",
                    fontSize: "12px", fontWeight: "600",
                    color: "#fff", background: "#7c3aed",
                    transition: "background 0.2s"
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#6d28d9"}
                  onMouseLeave={e => e.currentTarget.style.background = "#7c3aed"}
                >
                  👁 View
                </a>

                <a
                  href={downloadLink}
                  download
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    flex: 1, textAlign: "center", textDecoration: "none",
                    padding: "8px 0", borderRadius: "8px",
                    fontSize: "12px", fontWeight: "600",
                    color: "#7c3aed", background: "transparent",
                    border: "1px solid #7c3aed",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(124,58,237,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  ⬇ Download
                </a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;