import { useState, useEffect, useRef } from "react";

const NAV_ITEMS = [
  { label: "Home",       target: "home" },
  { label: "About",      target: "about" },
  { label: "Skills",     target: "skills" },
  { label: "Projects",   target: "projects" },
  { label: "Experience", target: "experience" },
  { label: "Connect",    target: "connect" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [scrolled, setScrolled]     = useState(false);
  const [active,   setActive]       = useState("home");
  const [menuOpen, setMenuOpen]     = useState(false);
  const [progress, setProgress]     = useState(0);
  const rafRef                      = useRef(null);

  /* Scroll effects */
  useEffect(() => {
    const onScroll = () => {
      const scrollY   = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 40);
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      /* Active section tracking */
      const ids = NAV_ITEMS.map(n => n.target);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (target) => {
    scrollTo(target);
    setMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        style={{
          position: "fixed", top: 0, left: 0, height: "2px",
          width: `${progress}%`, background: "var(--yellow)",
          zIndex: 10000, transition: "width 0.1s linear",
        }}
      />

      <nav
        style={{
          position: "fixed", top: 0, left: 0, width: "100%",
          zIndex: 9000,
          background: scrolled
            ? "rgba(8,8,8,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1400px", margin: "0 auto",
            padding: "0 40px",
            height: "68px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}
        >
          {/* WORDMARK */}
          <button
            onClick={() => handleNav("home")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              color: "var(--soft-white)", fontSize: "20px", fontWeight: "700",
              letterSpacing: "0.08em", fontFamily: "inherit",
              display: "flex", alignItems: "center", gap: "1px",
            }}
          >
            SHRESTH<span style={{ color: "var(--yellow)" }}>.</span>
          </button>

          {/* DESKTOP NAV */}
          <ul
            style={{
              display: "flex", alignItems: "center", gap: "4px",
              listStyle: "none", margin: 0, padding: 0,
            }}
            className="desktop-nav"
          >
            {NAV_ITEMS.map(({ label, target }) => {
              const isActive = active === target;
              return (
                <li key={label}>
                  <button
                    onClick={() => handleNav(target)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontSize: "13px",
                      fontWeight: isActive ? "700" : "500",
                      letterSpacing: "0.06em",
                      color: isActive ? "var(--yellow)" : "var(--muted-grey)",
                      padding: "8px 16px",
                      position: "relative",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "var(--soft-white)"; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "var(--muted-grey)"; }}
                  >
                    {label}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute", bottom: 2, left: "50%",
                          transform: "translateX(-50%)",
                          width: "16px", height: "2px",
                          background: "var(--yellow)",
                          display: "block",
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CONNECT BUTTON */}
          <button
            onClick={() => handleNav("connect")}
            className="desktop-nav"
            style={{
              background: "var(--yellow)", color: "var(--black)",
              border: "none", cursor: "pointer",
              fontFamily: "inherit", fontSize: "12px", fontWeight: "700",
              letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "10px 24px",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "var(--soft-white)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(245,230,66,0.3)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "var(--yellow)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Connect
          </button>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
            className="mobile-menu-btn"
            style={{
              background: "none", border: "none", cursor: "pointer",
              display: "flex", flexDirection: "column", gap: "5px",
              padding: "8px",
            }}
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                style={{
                  display: "block", width: "24px", height: "2px",
                  background: "var(--soft-white)",
                  transition: "all 0.3s ease",
                  transform: menuOpen
                    ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                    : i === 1 ? "opacity: 0; scaleX(0)"
                    : "rotate(-45deg) translate(5px, -5px)"
                    : "none",
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          style={{
            position: "fixed", top: 0, left: 0, width: "100%", height: "100vh",
            background: "rgba(0,0,0,0.97)", zIndex: 8000,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            gap: "8px",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div
            style={{
              position: "absolute", top: 24, right: 24,
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "var(--muted-grey)", fontSize: "28px", lineHeight: 1,
              }}
            >
              ✕
            </button>
          </div>
          {NAV_ITEMS.map(({ label, target }, i) => (
            <button
              key={label}
              onClick={() => handleNav(target)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "inherit", fontSize: "clamp(28px, 8vw, 48px)",
                fontWeight: "800", letterSpacing: "0.04em",
                color: active === target ? "var(--yellow)" : "var(--soft-white)",
                padding: "12px 24px", textTransform: "uppercase",
                transition: "color 0.2s, transform 0.2s",
                transform: menuOpen ? "translateX(0)" : "translateX(60px)",
                transitionDelay: menuOpen ? `${i * 0.06}s` : "0s",
                opacity: menuOpen ? 1 : 0,
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--yellow)"; e.currentTarget.style.transform = "translateX(12px)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = active === target ? "var(--yellow)" : "var(--soft-white)"; e.currentTarget.style.transform = "translateX(0)"; }}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav("connect")}
            style={{
              marginTop: "24px", background: "var(--yellow)", color: "var(--black)",
              border: "none", cursor: "pointer", fontFamily: "inherit",
              fontSize: "14px", fontWeight: "700", letterSpacing: "0.1em",
              textTransform: "uppercase", padding: "16px 48px",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.3s ease",
              transitionDelay: menuOpen ? "0.36s" : "0s",
            }}
          >
            Let's Connect
          </button>
        </div>
      </nav>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (min-width: 901px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
