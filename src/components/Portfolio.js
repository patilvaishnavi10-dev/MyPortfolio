// src/components/Portfolio.js
import { Link } from "react-router-dom";

export default function Portfolio() {
  const projects = [
    {
      title: "Personal Website",
      description: "My personal website built with React",
      tech: "React, Router",
      extLink: "https://github.com/vaishnavipatil/personal-website"
    },
    {
      title: "Library Practicals App",
      description: "Mini app to simulate borrowing books",
      tech: "React, Hooks, State",
      link: "/practicals"
    },
    {
      title: "FS Practical App",
      description: "Practicals 4 to 10 (Shopping Cart UI)",
      tech: "React, State, Props",
      link: "/fsapp"
    },
    {
      title: "Weather Forecast App",
      description: "A simple app showing live weather updates",
      tech: "React, OpenWeather API",
      extLink: "https://github.com/vaishnavipatil/weather-app"
    },
    {
      title: "Student Management System",
      description: "CRUD project for managing students",
      tech: "React, Node.js, MongoDB",
      extLink: "https://github.com/vaishnavipatil/student-management"
    },
    {
      title: "Portfolio Template",
      description: "A responsive portfolio design using only HTML & CSS",
      tech: "HTML, CSS, Flexbox",
      extLink: "https://github.com/vaishnavipatil/portfolio-template"
    }
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.title}> My Portfolio</h1>
      <div style={styles.grid}>
        {projects.map((p, i) => (
          <div
            key={i}
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
              e.currentTarget.style.border = "1px solid #073a67ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = styles.card.boxShadow;
              e.currentTarget.style.border = styles.card.border;
            }}
          >
            <h3 style={styles.cardTitle}>{p.title}</h3>
            <p>{p.description}</p>
            <p><b>Tech:</b> {p.tech}</p>

            {p.link ? (
              <Link to={p.link} style={styles.button}>Open Project</Link>
            ) : (
              <a href={p.extLink} target="_blank" rel="noopener noreferrer" style={styles.button}>
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px 20px",
    background: "linear-gradient(135deg, #075294ff 0%, #bdeef1ff 100%)",
    fontFamily: "'Poppins', sans-serif"
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    color: "#fff",
    marginBottom: "30px"
  },
  grid: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  card: {
    background: "rgba(255, 255, 255, 0.85)",
    borderRadius: "16px",
    padding: "20px",
    width: "260px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    border: "1px solid transparent"
  },
  cardTitle: {
    marginBottom: "10px",
    color: "#0077b6"
  },
  button: {
    display: "inline-block",
    marginTop: "10px",
    padding: "8px 14px",
    borderRadius: "8px",
    background: "linear-gradient(90deg, #0077b6, #00c6ff)",
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "0.3s"
  }
};
