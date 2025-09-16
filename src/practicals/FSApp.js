// src/components/FSApp.js
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2499,
    image: "https://cdn.pixabay.com/photo/2016/11/29/03/53/headphones-1867752_1280.jpg",
    description: "Noise-cancelling wireless headphones with long battery life."
  },
  {
    id: 2,
    name: "Smartwatch",
    price: 3999,
    image: "https://cdn.pixabay.com/photo/2016/03/27/20/55/apple-1284089_1280.jpg",
    description: "Track fitness, monitor heart rate, and get notifications."
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1799,
    image: "https://cdn.pixabay.com/photo/2016/12/06/18/27/bluetooth-1882338_1280.jpg",
    description: "Portable speaker with rich bass and waterproof design."
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 999,
    image: "https://cdn.pixabay.com/photo/2014/04/03/11/51/mouse-312324_1280.png",
    description: "High precision RGB gaming mouse with ergonomic design."
  },
  {
    id: 5,
    name: "Laptop",
    price: 54999,
    image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336373_1280.jpg",
    description: "Powerful laptop for work and gaming."
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 2999,
    image: "https://cdn.pixabay.com/photo/2016/03/26/22/14/keyboard-1281630_1280.jpg",
    description: "RGB mechanical keyboard with tactile keys."
  },
  {
    id: 7,
    name: "LED Monitor",
    price: 9999,
    image: "https://cdn.pixabay.com/photo/2015/01/08/18/26/monitor-593337_1280.jpg",
    description: "24-inch LED monitor with vivid colors."
  },
  {
    id: 8,
    name: "DSLR Camera",
    price: 34999,
    image: "https://cdn.pixabay.com/photo/2015/01/08/18/29/camera-593353_1280jpg",
    description: "High-quality DSLR camera for photography."
  },
  {
    id: 9,
    name: "Smartphone",
    price: 24999,
    image: "https://cdn.pixabay.com/photo/2014/05/02/21/50/iphone-336374_1280.jpg",
    description: "Latest smartphone with high-resolution camera."
  },
  {
    id: 10,
    name: "Headset",
    price: 1499,
    image: "https://cdn.pixabay.com/photo/2017/05/12/14/47/headphones-2304145_1280.jpg",
    description: "Stereo headset for gaming and calls."
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
