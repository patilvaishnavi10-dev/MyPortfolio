// src/components/Portfolio.js
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  
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
      link: "https://patilvaishnavi10-dev.github.io/MyPortfolio/practicals"
    },
    {
      title: "FS Practical App",
      description: "Practicals 4 to 10 (Shopping Cart UI)",
      tech: "React, State, Props",
      link: "https://patilvaishnavi10-dev.github.io/MyPortfolio/fsapp"
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

  // Get unique technologies for filter options
  const allTechs = ["All", ...new Set(projects.flatMap(p => p.tech.split(", ")))];
  
  // Filter projects based on selected technology
  const filteredProjects = selectedFilter === "All" 
    ? projects 
    : projects.filter(project => project.tech.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <div style={styles.page}>
      <h1 style={styles.title}> My Portfolio</h1>
      
      {/* Filter Bar */}
      <div style={styles.filterContainer}>
        <h3 style={styles.filterTitle}>Filter by Technology:</h3>
        <div style={styles.filterButtons}>
          {allTechs.map(tech => (
            <button
              key={tech}
              onClick={() => setSelectedFilter(tech)}
              style={{
                ...styles.filterButton,
                ...(selectedFilter === tech ? styles.filterButtonActive : {})
              }}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      <div style={styles.grid}>
        {filteredProjects.map((p, i) => (
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
              <a href={p.link} target="_blank" rel="noopener noreferrer" style={styles.button}>Open Project</a>
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
  filterContainer: {
    textAlign: "center",
    marginBottom: "30px",
    padding: "0 20px"
  },
  filterTitle: {
    color: "#fff",
    fontSize: "1.2rem",
    marginBottom: "15px",
    fontWeight: "500"
  },
  filterButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap"
  },
  filterButton: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "2px solid rgba(255, 255, 255, 0.3)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "0.9rem",
    fontWeight: "500"
  },
  filterButtonActive: {
    background: "rgba(255, 255, 255, 0.9)",
    color: "#0077b6",
    border: "2px solid #fff",
    transform: "scale(1.05)"
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
