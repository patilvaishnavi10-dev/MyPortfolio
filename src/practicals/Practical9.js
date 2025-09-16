import { useState } from "react";

const products = [
  { id:1, name:"T-Shirt", price:500, desc:"Cotton casual wear" },
  { id:2, name:"Jeans", price:1200, desc:"Blue denim" },
  { id:3, name:"Sneakers", price:2500, desc:"Sport shoes" }
];

export default function Practical9() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h3>Practical 9: Product Detail Modal</h3>
      <div style={{ display:"flex", gap:"20px" }}>
        {products.map(p => (
          <div key={p.id} style={styles.card} onClick={()=>setSelected(p)}>
            <p>{p.name}</p>
            <p>₹{p.price}</p>
          </div>
        ))}
      </div>

      {selected && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h4>{selected.name}</h4>
            <p>{selected.desc}</p>
            <p>Price: ₹{selected.price}</p>
            <button onClick={()=>setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  card:{ border:"1px solid #ccc", margin:"10px", padding:"10px", cursor:"pointer" },
  modal:{
    position:"fixed", top:0,left:0,right:0,bottom:0,
    background:"rgba(0,0,0,0.5)",
    display:"flex", justifyContent:"center", alignItems:"center"
  },
  modalContent:{ background:"#fff", padding:"20px", borderRadius:"8px" }
};
