import { useState, useEffect, useRef } from "react";
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
  },
];

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

const CertCard = ({ cert, index }) => {
  const { img, issuer, title, org, date, score, viewLink, downloadLink } = cert;
  const [hovered, setHovered] = useState(false);
  const ref = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal delay-${Math.min((index % 3) + 1, 5)}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "var(--charcoal)",
        border: "1px solid",
        borderColor: hovered ? "rgba(245,230,66,0.5)" : "var(--border-grey)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Image area */}
      <div
        style={{
          width: "100%", height: "140px",
          position: "relative", overflow: "hidden", flexShrink: 0,
          background: "var(--dark-grey)",
        }}
      >
        <img
          src={img}
          alt={title}
          style={{
            width: "100%", height: "100%", objectFit: "cover",
            opacity: 0.85,
            transition: "transform 0.5s ease, opacity 0.3s ease",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
        {/* Issuer badge */}
        <div
          style={{
            position: "absolute", top: "10px", left: "10px",
            background: "var(--yellow)", color: "var(--black)",
            fontSize: "9px", fontWeight: "800", letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "3px 10px",
          }}
        >
          {issuer}
        </div>
        {/* Date badge */}
        <div
          style={{
            position: "absolute", bottom: "10px", right: "10px",
            background: "rgba(0,0,0,0.7)", color: "var(--muted-grey)",
            fontSize: "10px", letterSpacing: "0.08em",
            padding: "3px 8px",
          }}
        >
          {date}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          padding: "clamp(14px, 1.6vw, 20px)",
          flex: 1, display: "flex", flexDirection: "column", gap: "10px",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(12px, 1.1vw, 14px)", fontWeight: "700",
            color: "var(--soft-white)", lineHeight: "1.4",
          }}
        >
          {title}
        </h3>
        <p style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.04em" }}>
          {org}
        </p>
        {score && (
          <span
            style={{
              display: "inline-block", alignSelf: "flex-start",
              fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--yellow)", border: "1px solid rgba(245,230,66,0.4)",
              padding: "3px 10px",
            }}
          >
            {score}
          </span>
        )}

        {/* Buttons */}
        <div style={{ display: "flex", gap: "8px", marginTop: "auto" }}>
          <a
            href={viewLink}
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1, textAlign: "center", textDecoration: "none",
              padding: "9px 0",
              fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--black)", background: "var(--yellow)",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "var(--soft-white)"}
            onMouseLeave={e => e.currentTarget.style.background = "var(--yellow)"}
          >
            View
          </a>
          <a
            href={downloadLink}
            download
            target="_blank"
            rel="noreferrer"
            style={{
              flex: 1, textAlign: "center", textDecoration: "none",
              padding: "9px 0",
              fontSize: "10px", fontWeight: "700", letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--muted-grey)", border: "1px solid var(--border-grey)",
              background: "transparent",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--yellow)"; e.currentTarget.style.color = "var(--yellow)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-grey)"; e.currentTarget.style.color = "var(--muted-grey)"; }}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

const Certificates = () => {
  const headRef = useReveal();

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
        <div ref={headRef} className="reveal" style={{ marginBottom: "clamp(40px, 5vw, 72px)" }}>
          <span className="section-label">Certifications</span>
          <h2
            style={{
              fontSize: "clamp(36px, 7vw, 100px)",
              fontWeight: "800", letterSpacing: "-0.02em",
              lineHeight: "1.0", fontFamily: "'Sora', sans-serif",
              color: "var(--soft-white)",
            }}
          >
            CREDENTIALS<br />
            <span style={{ color: "var(--yellow)" }}>& PROOF.</span>
          </h2>
          <p
            style={{
              marginTop: "20px", fontSize: "clamp(13px, 1.3vw, 15px)",
              color: "var(--muted-grey)", maxWidth: "480px",
            }}
          >
            Professional credentials from IITs and global institutions
            that validate my technical expertise.
          </p>
        </div>

        {/* Cert Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(14px, 2vw, 20px)",
          }}
        >
          {certs.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
