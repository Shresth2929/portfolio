import { useEffect, useRef, useState } from "react";
import profileImg from "../assets/myPic.jpeg";
import downloadIcon from "../assets/download.png";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import whatsappIcon from "../assets/whatsapp.png";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const LINES = ["DESIGNING.", "BUILDING.", "SCALING."];

const Hero = () => {
  const [revealed, setRevealed] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setRevealed(true), 100);
    return () => clearTimeout(timer);
  }, []);

  /* Parallax on mouse move */
  const imgRef = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (!imgRef.current || window.innerWidth < 900) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: "100vh",
        background: "var(--black)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingTop: "68px",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(245,230,66,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245,230,66,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Yellow Glow */}
      <div
        style={{
          position: "absolute", top: "30%", right: "5%",
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(245,230,66,0.07) 0%, transparent 70%)",
          zIndex: 0, pointerEvents: "none",
        }}
      />

      {/* STATUS BADGE */}
      <div
        style={{
          position: "absolute", top: "100px", right: "clamp(20px, 5vw, 60px)",
          display: "flex", alignItems: "center", gap: "8px", zIndex: 2,
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(-16px)",
          transition: "all 0.6s ease 0.8s",
        }}
      >
        <span
          style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: "#22c55e",
            animation: "pulse-yellow 2s infinite",
            boxShadow: "0 0 0 0 rgba(34,197,94,0.4)",
          }}
        />
        <span style={{ fontSize: "11px", color: "var(--muted-grey)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Available for work
        </span>
      </div>

      {/* MAIN CONTENT */}
      <div
        style={{
          position: "relative", zIndex: 1,
          maxWidth: "1400px", margin: "0 auto", width: "100%",
          padding: "clamp(20px, 4vw, 60px) clamp(20px, 5vw, 60px)",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "clamp(20px, 4vw, 60px)",
          alignItems: "flex-end",
        }}
        className="hero-grid"
      >
        {/* LEFT: TYPOGRAPHY */}
        <div>
          {/* Intro line */}
          <div
            style={{
              display: "flex", alignItems: "center", gap: "12px",
              marginBottom: "clamp(16px, 2vw, 28px)",
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s ease 0.1s",
            }}
          >
            <span
              style={{
                fontSize: "11px", fontWeight: "700", letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--muted-grey)",
              }}
            >
              Full Stack Developer
            </span>
            <span style={{ width: "40px", height: "1px", background: "var(--border-grey)" }} />
            <span
              style={{
                fontSize: "11px", fontWeight: "700", letterSpacing: "0.18em",
                textTransform: "uppercase", color: "var(--yellow)",
              }}
            >
              Lucknow, India
            </span>
          </div>

          {/* BIG TYPE LINES */}
          <div style={{ marginBottom: "clamp(10px, 2vw, 20px)" }}>
            {LINES.map((line, i) => (
              <div
                key={line}
                style={{ overflow: "hidden", lineHeight: 1 }}
              >
                <h1
                  style={{
                    fontSize: "clamp(42px, 9vw, 140px)",
                    fontWeight: "800",
                    letterSpacing: "-0.02em",
                    color: i === 1 ? "var(--yellow)" : "var(--soft-white)",
                    lineHeight: "1.0",
                    fontFamily: "'Sora', 'Space Grotesk', sans-serif",
                    display: "block",
                    opacity: revealed ? 1 : 0,
                    transform: revealed ? "translateY(0)" : "translateY(100%)",
                    transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.12}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${0.2 + i * 0.12}s`,
                    marginBottom: "2px",
                  }}
                >
                  {line}
                </h1>
              </div>
            ))}
          </div>

          {/* NAME */}
          <div
            style={{
              display: "flex", alignItems: "center", gap: "20px",
              marginBottom: "clamp(20px, 3vw, 40px)",
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease 0.58s",
            }}
          >
            <span
              style={{
                width: "40px", height: "1px",
                background: "var(--yellow)", flexShrink: 0,
              }}
            />
            <p
              style={{
                fontSize: "clamp(13px, 1.6vw, 18px)", fontWeight: "400",
                color: "var(--muted-grey)", letterSpacing: "0.06em",
              }}
            >
              HEY, I'M{" "}
              <span style={{ color: "var(--soft-white)", fontWeight: "700" }}>
                SHRESTH VEER SINGH
              </span>
            </p>
          </div>

          {/* BIO */}
          <p
            style={{
              maxWidth: "520px",
              fontSize: "clamp(14px, 1.4vw, 16px)",
              color: "var(--muted-grey)",
              lineHeight: "1.8",
              marginBottom: "clamp(24px, 3vw, 44px)",
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.68s",
            }}
          >
            Computer Science Engineering student passionate about building modern,
            scalable web applications, intelligent products, and impactful digital experiences.
            <span style={{ color: "var(--yellow)" }}> MERN Stack | AI Enthusiast.</span>
          </p>

          {/* CTA BUTTONS */}
          <div
            style={{
              display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center",
              marginBottom: "clamp(32px, 4vw, 56px)",
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.7s ease 0.78s",
            }}
          >
            <button
              className="btn-yellow"
              onClick={() => scrollTo("projects")}
            >
              Explore My Work
              <span style={{ fontSize: "16px" }}>→</span>
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=1tZ7HsUupL_ntUY7iUxQSQ9v7dykntcZG"
              download="Shresth_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <img src={downloadIcon} alt="Download" style={{ width: "14px", height: "14px", filter: "invert(1)" }} />
              Resume
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div
            style={{
              display: "flex", gap: "12px",
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.7s ease 0.88s",
            }}
          >
            {[
              { src: linkedinIcon, alt: "LinkedIn", href: "https://www.linkedin.com/in/shresth-veer-singh-598830291/", filter: "none" },
              { src: githubIcon,   alt: "GitHub",   href: "https://github.com/shresth2929",                             filter: "invert(1)" },
              { src: whatsappIcon, alt: "WhatsApp", href: "https://wa.me/7800794876",                                   filter: "none" },
            ].map(({ src, alt, href, filter }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "40px", height: "40px",
                  border: "1px solid var(--border-grey)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none", transition: "all 0.25s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--yellow)";
                  e.currentTarget.style.background = "rgba(245,230,66,0.1)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border-grey)";
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <img src={src} alt={alt} style={{ width: "18px", height: "18px", filter }} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: PROFILE IMAGE */}
        <div
          style={{
            position: "relative", flexShrink: 0, alignSelf: "flex-end",
            opacity: revealed ? 1 : 0,
            transition: "opacity 1s ease 0.4s",
          }}
          className="hero-image-col"
        >
          {/* Yellow accent frame */}
          <div
            style={{
              position: "absolute",
              bottom: "16px", right: "16px",
              width: "calc(100% - 16px)", height: "calc(100% - 16px)",
              border: "2px solid var(--yellow)",
              zIndex: 0,
              opacity: 0.5,
            }}
          />
          {/* Image */}
          <div
            ref={imgRef}
            style={{
              width: "clamp(200px, 24vw, 380px)",
              height: "clamp(260px, 32vw, 500px)",
              overflow: "hidden",
              position: "relative", zIndex: 1,
              transition: "transform 0.15s ease",
            }}
          >
            <img
              src={profileImg}
              alt="Shresth Veer Singh"
              onLoad={() => setImgLoaded(true)}
              style={{
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "top",
                filter: imgLoaded ? "grayscale(20%) contrast(1.05)" : "none",
                transition: "filter 0.6s ease",
              }}
            />
            {/* Yellow overlay accent */}
            <div
              style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(245,230,66,0.12) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Floating tag: designation */}
          <div
            style={{
              position: "absolute", top: "24px", left: "-24px",
              background: "var(--charcoal)", border: "1px solid var(--border-grey)",
              padding: "10px 16px", zIndex: 2,
            }}
          >
            <div style={{ fontSize: "10px", color: "var(--yellow)", fontWeight: "700", letterSpacing: "0.12em", textTransform: "uppercase" }}>MERN Stack</div>
            <div style={{ fontSize: "11px", color: "var(--muted-grey)", marginTop: "2px" }}>Full Stack Developer</div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div
        style={{
          position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          zIndex: 2,
          opacity: revealed ? 1 : 0,
          transition: "opacity 1s ease 1.2s",
        }}
      >
        <span style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--text-dim)", textTransform: "uppercase" }}>Scroll</span>
        <div
          style={{
            width: "1px", height: "48px",
            background: "linear-gradient(to bottom, var(--yellow), transparent)",
            animation: "float 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Ticker tape */}
      <div
        className="ticker-wrap"
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className="ticker-track">
          {["React.js", "•", "Next.js", "•", "Node.js", "•", "MongoDB", "•", "TypeScript", "•", "Tailwind CSS", "•", "Docker", "•", "AWS", "•", "PostgreSQL", "•", "Prisma", "•", "Full Stack", "•", "MERN Stack", "•", "AI Enthusiast", "•",
            "React.js", "•", "Next.js", "•", "Node.js", "•", "MongoDB", "•", "TypeScript", "•", "Tailwind CSS", "•", "Docker", "•", "AWS", "•", "PostgreSQL", "•", "Prisma", "•", "Full Stack", "•", "MERN Stack", "•", "AI Enthusiast", "•"
          ].map((item, i) => (
            item === "•"
              ? <span key={i} className="ydot">●</span>
              : <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-image-col {
            display: none !important;
          }
        }
        @keyframes pulse-yellow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
          50% { box-shadow: 0 0 0 8px rgba(34,197,94,0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
