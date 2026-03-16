import homeIcon from "../assets/home.png";
import aboutIcon from "../assets/aboutMe.png";
import skillsIcon from "../assets/skills.png";
import projectsIcon from "../assets/projects.png";
import contactIcon from "../assets/connect.png";

const navItems = [
  { icon: homeIcon, label: "Home", target: "home" },
  { icon: aboutIcon, label: "About", target: "about" },
  { icon: skillsIcon, label: "Skills", target: "skills" },
  { icon: projectsIcon, label: "Projects", target: "projects" },
  { icon: contactIcon, label: "Connect", target: "connect" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0,
      width: "100%", height: "70px",
      background: "#0b0f19",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: "1300px", height: "100%",
        margin: "0 auto", padding: "0 50px",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>

        {/* LOGO */}
        <h1
          onClick={() => scrollTo("home")}
          style={{
            color: "#fff", fontSize: "26px", fontWeight: "700",
            marginLeft: "40px", cursor: "pointer"
          }}
        >
          Shresth<span style={{ color: "#7c3aed" }}>.</span>
        </h1>

        {/* NAV ITEMS */}
        <ul style={{ display: "flex", alignItems: "center", gap: "6px", listStyle: "none", margin: 0, padding: 0 }}>
          {navItems.map(({ icon, label, target }) => (
            <li
              key={label}
              onClick={() => scrollTo(target)}
              style={{
                display: "flex", alignItems: "center", gap: "7px",
                padding: "8px 16px", borderRadius: "10px",
                cursor: "pointer", color: "#9ca3af",
                fontSize: "14px", fontWeight: "500",
                transition: "all 0.25s ease"
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(124,58,237,0.15)";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(124,58,237,0.2)";
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.opacity = "1";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "#9ca3af";
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                const img = e.currentTarget.querySelector("img");
                if (img) img.style.opacity = "0.6";
              }}
            >
              <img
                src={icon}
                alt={label}
                style={{ width: "15px", height: "15px", filter: "invert(1)", opacity: "0.6", transition: "opacity 0.25s" }}
              />
              <span>{label}</span>
            </li>
          ))}
        </ul>

        {/* CONTACT ME */}
        <button
          onClick={() => window.location.href = "tel:+917800794876"}
          style={{
            background: "#7c3aed", color: "#fff",
            padding: "11px 30px", borderRadius: "25px",
            fontSize: "15px", fontWeight: "600",
            border: "2px solid #9d5ff5",
            cursor: "pointer", marginRight: "40px",
            transition: "all 0.25s ease"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "#6d28d9";
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "0 8px 25px rgba(124,58,237,0.55)";
            e.currentTarget.style.borderColor = "#a78bfa";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "#7c3aed";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.borderColor = "#9d5ff5";
          }}
        >
          Contact Me
        </button>

      </div>
    </nav>
  );
};

export default Navbar;