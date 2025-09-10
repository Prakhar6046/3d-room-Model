import React from "react";

export default function ControlsPanel({ colorTheme, setColorTheme, toggleCameraMode, addFurniture, resetScene, resetToDefaultLayout, roomDimensions, setRoomDimensions }) {
  const furnitureTypes = [
    "sofa", "bed", "table", "chair", "wardrobe", "tv", "ac", "fan", "toilet", 
    "sink", "shower", "mirror", "rug", "floorLamp", "bookshelf", "diningTable", 
    "diningChair", "studyTable", "studyChair", "nightstand"
  ];

  return (
    <>
      <div className="section">
        <h3>Room Theme</h3>
        <div className="side-row">
          <label>Wall:</label>
          <input type="color" value={colorTheme.wall} onChange={e => setColorTheme({ ...colorTheme, wall: e.target.value })} />
        </div>
        <div className="side-row">
          <label>Floor:</label>
          <input type="color" value={colorTheme.floor} onChange={e => setColorTheme({ ...colorTheme, floor: e.target.value })} />
        </div>
        <div className="side-row">
          <label>Ceiling:</label>
          <input type="color" value={colorTheme.ceiling} onChange={e => setColorTheme({ ...colorTheme, ceiling: e.target.value })} />
        </div>
      </div>

      <div className="section">
        <h3>Room Dimensions</h3>
        <div className="side-row">
          <label>Width:</label>
          <input type="number" value={roomDimensions.width} onChange={e => setRoomDimensions({ ...roomDimensions, width: Number(e.target.value) })} />
        </div>
        <div className="side-row">
          <label>Depth:</label>
          <input type="number" value={roomDimensions.depth} onChange={e => setRoomDimensions({ ...roomDimensions, depth: Number(e.target.value) })} />
        </div>
        <div className="side-row">
          <label>Height:</label>
          <input type="number" value={roomDimensions.height} onChange={e => setRoomDimensions({ ...roomDimensions, height: Number(e.target.value) })} />
        </div>
      </div>
      
      <div className="section">
        <h3>Add Furniture</h3>
        <div className="add-furniture-list">
          {furnitureTypes.map(type => (
            <button key={type} className="add-btn" onClick={() => addFurniture(type)}>
              Add {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Controls</h3>
        <div className="side-row">
          <button className="btn" onClick={toggleCameraMode}>Toggle Camera</button>
          <button className="btn-ghost" onClick={resetToDefaultLayout}>Reset to Default</button>
        </div>
        <div className="side-row" style={{marginTop: '10px'}}>
            <button className="btn-ghost" style={{width: '100%'}} onClick={resetScene}>Clear All Furniture</button>
        </div>
      </div>
    </>
  );
}