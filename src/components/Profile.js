// src/components/Profile.js

export default function Profile() {
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* ✅ Pulls image from public/ */}
        <img src="/profile.png" alt="Profile" style={styles.image} />

        <h1 style={styles.title}>Hi, I'm Vaishnavi Patil</h1>
        <p style={styles.subtitle}>
          🎓 SY BCA Student | 💻 Web Developer | 🚀 Tech Enthusiast
        </p>

        <div style={styles.buttons}>
          <a href="/resume.pdf" style={styles.button} download>
            📄 Resume
          </a>
          <a href="/contact" style={styles.buttonAlt}>
            ✉️ Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #075294ff 0%, #bdeef1ff 100%)",
    fontFamily: "'Poppins', sans-serif"
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
  },
  image: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    marginBottom: "20px",
    objectFit: "cover",
    border: "3px solid #0077b6"
  },
  title: {
    fontSize: "2rem",
    margin: "10px 0",
    fontWeight: "600",
    color: "#333"   // ✅ Clear, no gradient/blue line issue
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "#555",
    marginBottom: "25px"
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap"
  },
  button: {
    padding: "10px 20px",
    background: "linear-gradient(90deg, #0077b6, #37a8c8ff)",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "0.3s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
  },
  buttonAlt: {
    padding: "10px 20px",
    background: "#ddebfaff",
    color: "#0077b6",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "0.3s",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }
};
