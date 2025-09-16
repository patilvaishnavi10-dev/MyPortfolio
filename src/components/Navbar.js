// src/components/Navbar.js
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>🌐 MyPortfolio</h2>
      <div style={styles.links}>
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              ...styles.link,
              borderBottom:
                location.pathname === item.path ? "2px solid #fff" : "none"
            }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 30px",
    background: "linear-gradient(90deg, #0c3462ff, #3a7ca8ff)",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },
  logo: { margin: 0, fontWeight: "600", fontSize: "1.5rem" },
  links: { display: "flex", gap: "20px" },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    paddingBottom: "4px",
    transition: "0.3s"
  }
};
