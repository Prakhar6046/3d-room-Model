import React from "react";

export default function FurnitureControls({ furniture, setSelected, removeFurniture }) {
  return (
    <div className="section">
      <h3>Furniture List</h3>
      <ul className="furniture-list">
        {furniture.map((f) => (
          <li key={f.id} className="f-item" onClick={() => setSelected(f.id)}>
            <span className="f-name">{f.type.charAt(0).toUpperCase() + f.type.slice(1)}</span>
            <button onClick={(e) => { e.stopPropagation(); removeFurniture(f.id); }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}