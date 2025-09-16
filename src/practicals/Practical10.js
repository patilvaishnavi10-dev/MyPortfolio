import { useState } from "react";

const products = [
  { id: 1, name: "T-Shirt", price: 500 },
  { id: 2, name: "Jeans", price: 1200 },
  { id: 3, name: "Sneakers", price: 2500 }
];

export default function Practical10() {
  const [cart, setCart] = useState([]);

  function addToCart(p) {
    setCart(prev => {
      const exists = prev.find(x => x.id === p.id);
      return exists
        ? prev.map(x => x.id === p.id ? { ...x, qty: x.qty + 1 } : x)
        : [...prev, { ...p, qty: 1 }];
    });
  }

  function checkout() {
    const total = cart.reduce((sum,x)=>sum + x.price*x.qty,0);
    alert(`Thank you! Your total is ₹${total}`);
    setCart([]);
  }

  return (
    <div>
      <h3>Practical 10: Checkout Simulation</h3>
      <div style={{ display:"flex", gap:"20px" }}>
        <div>
          <h4>Products</h4>
          {products.map(p => (
            <div key={p.id} style={styles.card}>
              <p>{p.name} - ₹{p.price}</p>
              <button onClick={()=>addToCart(p)}>Add</button>
            </div>
          ))}
        </div>
        <div>
          <h4>Cart</h4>
          {cart.map(item => (
            <p key={item.id}>{item.name} × {item.qty}</p>
          ))}
          {cart.length > 0 && <button onClick={checkout}>Checkout</button>}
        </div>
      </div>
    </div>
  );
}

const styles = { card:{ border:"1px solid #ccc", margin:"10px", padding:"10px" }};
