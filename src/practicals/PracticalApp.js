// src/practicals/PracticalApp.js
import { useState } from "react";
import { Link } from "react-router-dom";

function Book({ title, author, available, onBorrow }) {
  return (
    <div style={styles.book}>
      <h3>{title}</h3>
      <p style={{ margin: "6px 0" }}>{author}</p>
      <p>Status: <strong>{available ? "Available ✅" : "Borrowed ❌"}</strong></p>
      <button onClick={onBorrow} disabled={!available} style={styles.btn}>
        {available ? "Borrow" : "Unavailable"}
      </button>
    </div>
  );
}

export default function PracticalApp() {
  const [books, setBooks] = useState([
    { id: 1, title: "React Basics", author: "D. Abramov", available: true },
    { id: 2, title: "Python 101", author: "G. van Rossum", available: true },
    { id: 3, title: "AI for Students", author: "A. Ng", available: true }
  ]);

  function borrowBook(id) {
    setBooks((prev) => prev.map(b => b.id === id ? { ...b, available: false } : b));
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Library Practicals App</h2>
      <Link to="/" style={{ display: "inline-block", marginBottom: "12px", color: "blue" }}>← Back to Personal Website</Link>
      <p>Click Borrow to simulate borrowing a book.</p>
      <div style={styles.grid}>
        {books.map(b => <Book key={b.id} {...b} onBorrow={() => borrowBook(b.id)} />)}
      </div>
    </div>
  );
}

const styles = {
  grid: { display: "flex", gap: "18px", marginTop: "16px", flexWrap: "wrap" },
  book: { width: "220px", padding: "12px", borderRadius: "8px", border: "1px solid #ddd" },
  btn: { marginTop: "10px", padding: "8px 10px", borderRadius: "6px", border: "none", background: "#0077b6", color: "white", cursor: "pointer" }
};
