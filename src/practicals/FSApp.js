// src/components/FSApp.js
import { useState } from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    image: `${process.env.PUBLIC_URL}/headphone.png`,
    description: "Noise-cancelling wireless headphones with long battery life."
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 3999,
    image: `${process.env.PUBLIC_URL}/smartwatch.png`,
    description: "Track fitness, monitor heart rate, and get notifications."
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1799,
    image: `${process.env.PUBLIC_URL}/speaker.png`,
    description: "Portable speaker with rich bass and waterproof design."
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 999,
    image: `${process.env.PUBLIC_URL}/mouse.png`,
    description: "High precision RGB gaming mouse with ergonomic design."
  },
  {
    id: 5,
    name: "Laptop",
    price: 59999,
    image: `${process.env.PUBLIC_URL}/laptop.png`,
    description: "Powerful laptop for work and gaming."
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 2999,
    image: `${process.env.PUBLIC_URL}/keyboard.png`,
    description: "RGB backlit keyboard with tactile switches."
  },
  {
    id: 7,
    name: "Wireless Earbuds",
    price: 1299,
    image: `${process.env.PUBLIC_URL}/headphone.png`,
    description: "True wireless earbuds with active noise cancellation."
  },
  {
    id: 8,
    name: "Fitness Tracker",
    price: 1999,
    image: `${process.env.PUBLIC_URL}/smartwatch.png`,
    description: "Advanced fitness tracker with heart rate monitoring."
  },
  {
    id: 9,
    name: "Portable Speaker",
    price: 1299,
    image: `${process.env.PUBLIC_URL}/speaker.png`,
    description: "Compact wireless speaker with 360-degree sound."
  },
  {
    id: 10,
    name: "Gaming Mouse Pad",
    price: 499,
    image: `${process.env.PUBLIC_URL}/mouse.png`,
    description: "Large gaming mouse pad with RGB lighting."
  },
  {
    id: 11,
    name: "Gaming Laptop",
    price: 89999,
    image: `${process.env.PUBLIC_URL}/laptop.png`,
    description: "High-performance gaming laptop with RTX graphics."
  },
  {
    id: 12,
    name: "Wireless Keyboard",
    price: 1999,
    image: `${process.env.PUBLIC_URL}/keyboard.png`,
    description: "Wireless mechanical keyboard with long battery life."
  }
];


export default function FSApp() {
  const [cart, setCart] = useState([]);
  const [clickedButton, setClickedButton] = useState(null); // for animation

  function addToCart(product, id) {
    setCart([...cart, product]);
    setClickedButton(id);
    setTimeout(() => setClickedButton(null), 300); // reset animation after 0.3s
  }

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.page}>
      {/* Navigation Bar */}
      <div style={styles.navbar}>
        <Link 
          to="/" 
          style={styles.navLink}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "translateY(0)";
          }}
        >
          🏠 Home
        </Link>
        <Link 
          to="/portfolio" 
          style={styles.navLink}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "translateY(0)";
          }}
        >
          💼 Portfolio
        </Link>
        <Link 
          to="/contact" 
          style={styles.navLink}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.3)";
            e.target.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(255, 255, 255, 0.2)";
            e.target.style.transform = "translateY(0)";
          }}
        >
          📧 Contact
        </Link>
      </div>
      
      <h1 style={styles.title}>🛒 Shopping Cart</h1>

      <div style={styles.grid}>
        {products.map((p) => (
          <div key={p.id} style={styles.card}>
            <img src={p.image} alt={p.name} style={styles.image} />
            <h3 style={styles.cardTitle}>{p.name}</h3>
            <p>{p.description}</p>
            <p style={styles.price}>₹{p.price}</p>
            <button
              style={{
                ...styles.button,
                transform: clickedButton === p.id ? "scale(1.1) translateY(-2px)" : "scale(1)",
                transition: "transform 0.2s",
              }}
              onClick={() => addToCart(p, p.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div style={styles.cartSection}>
        <h2>🛍 Your Cart</h2>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul style={styles.cartList}>
            {cart.map((item, i) => (
              <li key={i} style={styles.cartItem}>
                {item.name} - ₹{item.price}
                <button
                  style={styles.removeButton}
                  onClick={() => removeFromCart(i)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        )}
        <h3>Total: ₹{total}</h3>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    background: "linear-gradient(135deg, #075294ff 0%, #bdeef1ff 100%)",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif"
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
    padding: "15px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    backdropFilter: "blur(10px)"
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    background: "rgba(255, 255, 255, 0.2)",
    transition: "all 0.3s ease",
    fontWeight: "500"
  },
  title: { textAlign: "center", color: "white", marginBottom: "30px" },
  grid: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
    background: "white",
    borderRadius: "16px",
    padding: "15px",
    width: "220px",
    textAlign: "center",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)"
  },
  image: { width: "100%", height: "150px", borderRadius: "12px", objectFit: "cover" },
  cardTitle: { margin: "10px 0", color: "#0077b6" },
  price: { fontWeight: "bold", color: "#333" },
  button: {
    padding: "8px 12px",
    background: "linear-gradient(90deg, #0077b6, #00c6ff)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px"
  },
  cartSection: {
    marginTop: "40px",
    background: "white",
    padding: "20px",
    borderRadius: "16px",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto",
    boxShadow: "0 6px 15px rgba(0,0,0,0.15)"
  },
  cartList: { listStyle: "none", padding: 0 },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    margin: "8px 0",
    fontWeight: "500"
  },
  removeButton: {
    background: "red",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    padding: "2px 8px"
  }
};
