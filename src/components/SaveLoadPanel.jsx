import React from "react";

export default function SaveLoadPanel({ furniture, loadLayout }) {
  const saveLayout = () => {
    const layoutJSON = JSON.stringify(furniture);
    localStorage.setItem("savedLayout", layoutJSON);
    alert("Layout saved!");
  };

  const loadLayoutFromStorage = () => {
    const layoutJSON = localStorage.getItem("savedLayout");
    if (layoutJSON) {
      loadLayout(JSON.parse(layoutJSON));
      alert("Layout loaded!");
    } else {
      alert("No saved layout found.");
    }
  };

  return (
    <div className="section">
      <h3>Save & Load</h3>
      <div className="side-row">
        <button className="btn" onClick={saveLayout}>Save Layout</button>
        <button className="btn-ghost" onClick={loadLayoutFromStorage}>Load Layout</button>
      </div>
    </div>
  );
}