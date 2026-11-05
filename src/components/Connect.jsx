import { useEffect, useRef } from "react";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import leetcode from "../assets/leetcode.png";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/gmail.png";
import phone from "../assets/phone.png";

const links = [
  {
    icon: linkedin,
    label: "LinkedIn",
    sub: "Let's network",
    href: "https://www.linkedin.com/in/shresth-veer-singh-598830291/",
    filter: "none",
  },
  {
    icon: github,
    label: "GitHub",
    sub: "See my code",
    href: "https://github.com/shresth2929",
    filter: "invert(1)",
  },
  {
    icon: leetcode,
    label: "LeetCode",
    sub: "DSA practice",
    href: "https://leetcode.com/u/shresth_veer_singh/",
    filter: "none",
  },
  {
    icon: whatsapp,
    label: "WhatsApp",
    sub: "Chat with me",
    href: "https://wa.me/7800794876",
    filter: "none",
  },
  {
    icon: email,
    label: "Email",
    sub: "shresthveer0408@gmail.com",
    href: "mailto:shresthveer0408@gmail.com",
    filter: "none",
  },
  {
    icon: phone,
    label: "Call",
    sub: "+91 7800794876",
    href: "tel:+917800794876",
    filter: "none",
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

const Connect = () => {
  const headRef = useReveal();
  const linksRef = useReveal();
  const year = new Date().getFullYear();

  return (
    <>
      <section
        style={{
          background: "var(--charcoal)",
          borderTop: "1px solid var(--border-grey)",
          padding: "clamp(60px, 8vw, 140px) clamp(20px, 6vw, 80px) 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background yellow glow */}
        <div
          style={{
            position: "absolute", bottom: "-100px", right: "-100px",
            width: "600px", height: "600px",
            background: "radial-gradient(circle, rgba(245,230,66,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* BIG HEADING */}
          <div
            ref={headRef}
            className="reveal"
            style={{ marginBottom: "clamp(48px, 6vw, 96px)" }}
          >
            <span className="section-label">Connect</span>
            <h2
              style={{
                fontSize: "clamp(40px, 9vw, 130px)",
                fontWeight: "800", letterSpacing: "-0.03em",
                lineHeight: "0.95", fontFamily: "'Sora', sans-serif",
                color: "var(--soft-white)",
              }}
            >
              LET'S BUILD<br />
              <span style={{ color: "var(--yellow)" }}>SOMETHING</span><br />
              EXTRAORDINARY.
            </h2>
            <p
              style={{
                marginTop: "clamp(20px, 3vw, 36px)",
                fontSize: "clamp(14px, 1.4vw, 17px)",
                color: "var(--muted-grey)",
                maxWidth: "480px",
                lineHeight: "1.75",
              }}
            >
              Have an interesting idea or opportunity? I'm always open to collaborating on
              exciting projects. Let's connect and create something remarkable.
            </p>
          </div>

          {/* Contact Links */}
          <div
            ref={linksRef}
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
              gap: "0",
              borderTop: "1px solid var(--border-grey)",
            }}
          >
            {links.map(({ icon, label, sub, href, filter }, i) => (
              <a
                key={label}
                href={href}
                target={label === "Email" || label === "Call" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className={`delay-${Math.min(i + 1, 5)}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "clamp(20px, 2.5vw, 32px) clamp(16px, 2vw, 28px)",
                  borderRight: i % 3 !== 2 ? "1px solid var(--border-grey)" : "none",
                  borderBottom: "1px solid var(--border-grey)",
                  textDecoration: "none",
                  transition: "background 0.25s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(245,230,66,0.04)";
                  const arrow = e.currentTarget.querySelector(".link-arrow");
                  if (arrow) arrow.style.transform = "translate(4px, -4px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  const arrow = e.currentTarget.querySelector(".link-arrow");
                  if (arrow) arrow.style.transform = "translate(0, 0)";
                }}
              >
                {/* Icon container */}
                <div
                  style={{
                    width: "44px", height: "44px", flexShrink: 0,
                    border: "1px solid var(--border-grey)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <img src={icon} alt={label} style={{ width: "22px", height: "22px", filter }} />
                </div>

                {/* Text */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "clamp(14px, 1.4vw, 16px)", fontWeight: "700",
                      color: "var(--soft-white)", marginBottom: "2px",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: "11px", color: "var(--text-dim)",
                      letterSpacing: "0.04em",
                      overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                    }}
                  >
                    {sub}
                  </div>
                </div>

                {/* Arrow */}
                <span
                  className="link-arrow"
                  style={{
                    fontSize: "18px", color: "var(--yellow)",
                    transition: "transform 0.25s ease",
                    flexShrink: 0,
                  }}
                >
                  ↗
                </span>
              </a>
            ))}
          </div>

          {/* FOOTER */}
          <div
            style={{
              borderTop: "1px solid var(--border-grey)",
              padding: "clamp(24px, 3vw, 36px) 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "18px", fontWeight: "800",
                  letterSpacing: "0.08em", color: "var(--soft-white)",
                }}
              >
                SHRESTH<span style={{ color: "var(--yellow)" }}>.</span>
              </span>
              <p style={{ fontSize: "11px", color: "var(--text-dim)", marginTop: "4px", letterSpacing: "0.06em" }}>
                Full Stack Developer · MERN Stack · AI Enthusiast
              </p>
            </div>
            <p style={{ fontSize: "11px", color: "var(--text-dim)", letterSpacing: "0.06em" }}>
              © {year} Shresth Veer Singh. All rights reserved.
            </p>
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .connect-links {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .connect-links {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
};

export default Connect;
