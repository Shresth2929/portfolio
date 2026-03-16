import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import leetcode from "../assets/leetcode.png";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/gmail.png";
import phone from "../assets/phone.png";



const links = [
  { icon: linkedin, label: "LinkedIn", sub: "Let's network", href: "https://www.linkedin.com/in/shresth-veer-singh-598830291/" },
  { icon: github, label: "GitHub", sub: "See my code", href: "https://github.com/shresth2929" },
  { icon: leetcode, label: "LeetCode", sub: "DSA practice", href: "https://leetcode.com/u/shresth_veer_singh/" },
  { icon: whatsapp, label: "WhatsApp", sub: "Chat with me", href: "https://wa.me/7800794876" },
  { icon: email, label: "Email", sub: "Drop a message", href: "mailto:shresthveer0408@gmail.com" },
  { icon: phone, label: "Call", sub: "Direct call", href: "tel:+917800794876" },
];

const Connect = () => {
  return (
    <section style={{ background: "#000", padding: "90px 60px", textAlign: "center" }}>

      <h2 style={{ color: "#fff", fontSize: "38px", fontWeight: "700", marginBottom: "10px" }}>
        Connect
      </h2>
      <p style={{ color: "#9ca3af", fontSize: "15px", marginBottom: "50px" }}>
        Let's connect and build something amazing together
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        maxWidth: "820px",
        margin: "0 auto"
      }}>
        {links.map(({ icon, label, sub, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#0d1117",
              border: "1px solid #1e2535",
              borderRadius: "14px",
              padding: "22px 24px",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textDecoration: "none",
              transition: "border-color 0.2s, transform 0.2s",
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
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "#1a1f2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
              <img src={icon} alt={label} style={{ width: "24px", height: "24px" }} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ color: "#fff", fontSize: "15px", fontWeight: "600" }}>{label}</div>
              <div style={{ color: "#6b7280", fontSize: "12px", marginTop: "2px" }}>{sub}</div>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default Connect;