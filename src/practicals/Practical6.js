import { useState, useEffect } from "react";

const products = [
  { id: 1, name: "T-Shirt", price: 500 },
  { id: 2, name: "Jeans", price: 1200 },
  { id: 3, name: "Sneakers", price: 2500 }
];

export default function Practical6() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(p) {
    setCart(prev => {
      const exists = prev.find(x => x.id === p.id);
      return exists
        ? prev.map(x => x.id === p.id ? { ...x, qty: x.qty + 1 } : x)
        : [...prev, { ...p, qty: 1 }];
    });
  }

  return (
    <div>
      <h3>Practical 6: Cart with LocalStorage</h3>
      <div style={{ display:"flex", gap:"20px" }}>
        <div>
          <h4>Products</h4>
          {products.map(p => (
            <div key={p.id} style={styles.card}>
              <p>{p.name} - ₹{p.price}</p>
              <button onClick={() => addToCart(p)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div>
          <h4>Cart (saved)</h4>
          {cart.map(item => <p key={item.id}>{item.name} × {item.qty}</p>)}
        </div>
      </div>
    </div>
  );
}

const styles = { card:{ border:"1px solid #ccc", margin:"10px", padding:"10px" }};
