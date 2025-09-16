import { useState } from "react";

const products = [
  { id: 1, name: "T-Shirt", price: 500, category:"Clothes" },
  { id: 2, name: "Jeans", price: 1200, category:"Clothes" },
  { id: 3, name: "Watch", price: 1500, category:"Accessories" },
  { id: 4, name: "Sneakers", price: 2500, category:"Shoes" }
];

export default function Practical7() {
  const [filter, setFilter] = useState("All");

  const categories = ["All","Clothes","Accessories","Shoes"];
  const visible = products.filter(p => filter==="All" || p.category===filter);

  return (
    <div>
      <h3>Practical 7: Filter Products</h3>
      <label>Category: </label>
      <select value={filter} onChange={e=>setFilter(e.target.value)}>
        {categories.map(c => <option key={c}>{c}</option>)}
      </select>

      <div style={{ display:"flex", gap:"20px", marginTop:"20px" }}>
        {visible.map(p => (
          <div key={p.id} style={styles.card}>
            <p>{p.name} - {p.category}</p>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = { card:{ border:"1px solid #ccc", margin:"10px", padding:"10px" }};
