import profileImg from "../assets/myPic.jpeg";
import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.png";
import whatsappIcon from "../assets/whatsapp.png";
import downloadIcon from "../assets/download.png";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Hero = () => {

  const btnHover = (e, type) => {
    if (type === "primary") {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(124,58,237,0.5)";
      e.currentTarget.style.background = "#6d28d9";
    } else if (type === "outline-white") {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.background = "#fff";
      e.currentTarget.style.color = "#000";
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(255,255,255,0.2)";
    } else if (type === "outline-purple") {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.background = "#7c3aed";
      e.currentTarget.style.boxShadow = "0 8px 25px rgba(124,58,237,0.5)";
    }
  };

  const btnLeave = (e, type) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
    if (type === "primary") {
      e.currentTarget.style.background = "#7c3aed";
    } else if (type === "outline-white") {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = "#fff";
    } else if (type === "outline-purple") {
      e.currentTarget.style.background = "transparent";
    }
  };

  const socialLinks = [
    {
      src: linkedinIcon,
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/shresth-veer-singh-598830291/",
      filter: "none",
    },
    {
      src: githubIcon,
      alt: "GitHub",
      href: "https://github.com/shresth2929",
      filter: "invert(1)",
    },
    {
      src: whatsappIcon,
      alt: "WhatsApp",
      href: "https://wa.me/7800794876",
      filter: "none",
    },
  ];

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: "100px",
        paddingBottom: "60px",
        paddingLeft: "120px",
        paddingRight: "60px",
      }}
    >
      {/* LEFT CONTENT */}
      <div style={{ maxWidth: "560px" }}>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "800",
            color: "#fff",
            lineHeight: "1.2",
          }}
        >
          Hey, I'm <br />
          <span style={{ color: "#7c3aed" }}>Shresth</span>
        </h1>

        <p
          style={{
            marginTop: "22px",
            fontSize: "16px",
            color: "#d1d5db",
            lineHeight: "1.8",
          }}
        >
          Computer Science Engineer passionate about building modern, scalable web applications.
          Always learning, building, and improving.
        </p>

        {/* BUTTONS */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "18px",
            flexWrap: "wrap",
          }}
        >
          {/* ABOUT */}
          <button
            onClick={() => scrollTo("about")}
            style={{
              background: "#7c3aed",
              color: "#fff",
              padding: "13px 34px",
              borderRadius: "35px",
              fontSize: "15px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => btnHover(e, "primary")}
            onMouseLeave={(e) => btnLeave(e, "primary")}
          >
            About Me
          </button>

          {/* WORK */}
          <button
            onClick={() => scrollTo("projects")}
            style={{
              background: "transparent",
              color: "#fff",
              padding: "13px 34px",
              borderRadius: "35px",
              fontSize: "15px",
              fontWeight: "600",
              border: "2px solid #fff",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => btnHover(e, "outline-white")}
            onMouseLeave={(e) => btnLeave(e, "outline-white")}
          >
            My Work
          </button>

          {/* RESUME */}
          <a
            href="https://drive.google.com/uc?export=download&id=1tZ7HsUupL_ntUY7iUxQSQ9v7dykntcZG"
            download="Shresth_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              color: "#fff",
              padding: "13px 30px",
              borderRadius: "35px",
              fontSize: "15px",
              fontWeight: "600",
              border: "2px solid #7c3aed",
              textDecoration: "none",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => btnHover(e, "outline-purple")}
            onMouseLeave={(e) => btnLeave(e, "outline-purple")}
          >
            <img
              src={downloadIcon}
              alt="Download"
              style={{ width: "18px", height: "18px", filter: "invert(1)" }}
            />
            Resume
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginRight: "80px",
        }}
      >
        {/* PROFILE IMAGE */}
        <div
          style={{
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            overflow: "hidden",
            background: "#fff",
            flexShrink: 0,
          }}
        >
          <img
            src={profileImg}
            alt="Shresth"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        {/* SOCIAL ICONS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginRight: "30px",
          }}
        >
          {socialLinks.map(({ src, alt, href, filter }) => (
            <a
              key={alt}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#0d1117",
                border: "1px solid #1e2535",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.25s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#7c3aed";
                e.currentTarget.style.background = "rgba(124,58,237,0.15)";
                e.currentTarget.style.transform =
                  "translateY(-4px) scale(1.1)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(124,58,237,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#1e2535";
                e.currentTarget.style.background = "#0d1117";
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={src}
                alt={alt}
                style={{ width: "20px", height: "20px", filter }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;