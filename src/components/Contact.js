// src/components/Contact.js
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e) {
    e.preventDefault();
    alert(`✅ Thanks ${form.name}, your message has been sent!`);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div style={styles.page}>
      <form style={styles.card} onSubmit={handleSubmit}>
        <h2 style={styles.title}>Contact Me</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={styles.input}
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          style={styles.input}
          required
        />

        <textarea
          placeholder="Your Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          style={styles.textarea}
          required
        />

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
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
    padding: "30px",
    borderRadius: "16px",
    width: "350px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    textAlign: "center"
  },
  title: { marginBottom: "20px", color: "#0077b6" },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ddd"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "100px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ddd"
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(90deg, #0077b6, #00c6ff)",
    border: "none",
    borderRadius: "8px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
  }
};
