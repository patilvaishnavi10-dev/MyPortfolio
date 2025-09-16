import { useState } from "react";

const products = [
  { id: 1, name: "T-Shirt", price: 500 },
  { id: 2, name: "Jeans", price: 1200 },
  { id: 3, name: "Sneakers", price: 2500 }
];

export default function Practical5() {
  const [cart, setCart] = useState([]);

  function addToCart(p) {
    setCart(prev => {
      const exists = prev.find(x => x.id === p.id);
      return exists
        ? prev.map(x => x.id === p.id ? { ...x, qty: x.qty + 1 } : x)
        : [...prev, { ...p, qty: 1 }];
    });
  }

  function decrease(p) {
    setCart(prev => prev
      .map(x => x.id === p.id ? { ...x, qty: x.qty - 1 } : x)
      .filter(x => x.qty > 0)
    );
  }

  return (
    <div>
      <h3>Practical 5: Quantity Control</h3>
      <div style={{ display: "flex", gap: "20px" }}>
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
          <h4>Cart</h4>
          {cart.map(item => (
            <div key={item.id} style={styles.card}>
              <p>{item.name} (₹{item.price})</p>
              <button onClick={() => decrease(item)}>-</button>
              <span style={{ margin:"0 10px" }}>{item.qty}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: { border:"1px solid #ccc", margin:"10px", padding:"10px" }
};
