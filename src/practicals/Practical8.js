import { useState } from "react";

const products = [
  { id: 1, name: "T-Shirt", price: 500 },
  { id: 2, name: "Jeans", price: 1200 },
  { id: 3, name: "Watch", price: 1500 },
  { id: 4, name: "Sneakers", price: 2500 }
];

export default function Practical8() {
  const [search, setSearch] = useState("");
  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h3>Practical 8: Search Products</h3>
      <input 
        placeholder="Search..." 
        value={search}
        onChange={e=>setSearch(e.target.value)}
      />
      <div style={{ display:"flex", gap:"20px", marginTop:"20px" }}>
        {filtered.map(p => (
          <div key={p.id} style={styles.card}>
            <p>{p.name}</p>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = { card:{ border:"1px solid #ccc", margin:"10px", padding:"10px" }};
