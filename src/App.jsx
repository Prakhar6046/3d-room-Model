import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls } from "@react-three/drei";
import Room from "./components/Room";
import Furniture from "./components/Furniture";
import ControlsPanel from "./components/ControlsPanel";
import FurnitureControls from "./components/FurnitureControls";
import SaveLoadPanel from "./components/SaveLoadPanel";
import { v4 as uuidv4 } from "uuid";

// Define a new, highly detailed, and perfected layout for a luxury apartment.
// The room dimensions are set to provide a realistic 1BHK experience.
const initialLayout = [
  // Living Room Area (Refined for better spacing and flow)
  { id: uuidv4(), type: "sofa", position: [-2.5, 0.25, -2], rotation: [0, Math.PI / 2, 0] },
  { id: uuidv4(), type: "table", position: [-1.5, 0.05, -2], rotation: [0, 0, 0] },
  { id: uuidv4(), type: "tv", position: [-2.5, 0.4, 0.5], rotation: [0, Math.PI / 2, 0] },
  { id: uuidv4(), type: "rug", position: [-1.5, -0.4, -2], rotation: [0, 0, 0] },
  { id: uuidv4(), type: "bookshelf", position: [-3.8, 1.2, -0.5], rotation: [0, Math.PI / 2, 0] },
  { id: uuidv4(), type: "floorLamp", position: [-3.5, 0, -3.5], rotation: [0, 0, 0] },
  
  // Dining Area (Perfectly centered with symmetrical chairs, no clipping)
  { id: uuidv4(), type: "diningTable", position: [0.5, 0.7, -1.6], rotation: [0, 0, 0] },
  { id: uuidv4(), type: "diningChair", position: [0.5, 0.2, -3.3], rotation: [0, 0, 0] },
  { id: uuidv4(), type: "diningChair", position: [0.5, 0.2, 0], rotation: [0, Math.PI, 0] },
  { id: uuidv4(), type: "diningChair", position: [1.5, 0.2, -2], rotation: [0, -Math.PI / 2, 0] },
  { id: uuidv4(), type: "diningChair", position: [-0.5, 0.2, -2], rotation: [0, Math.PI / 2, 0] },
  
  // Bedroom Area (Optimized for space and comfort)
  { id: uuidv4(), type: "bed", position: [0, 0.25, 1.7], rotation: [0, 0, 0] },
  { id: uuidv4(), type: "nightstand", position: [1.5, 0.2, 1], rotation: [0, 0, 0] },
  { id: uuidv4(), type: "nightstand", position: [-1.5, 0.2, 1], rotation: [0, 0, 0] },
  { id: uuidv4(), type: "wardrobe", position: [-3.6, 1.4, 2], rotation: [0, Math.PI / 2, 0] },
  { id: uuidv4(), type: "ac", position: [-3.8, 2.5, -2.5], rotation: [0, Math.PI / 2, 0] },
  
  // Bathroom Area (Improved for functionality and aesthetics)
  { id: uuidv4(), type: "toilet", position: [3.5, 0.2, 2.5], rotation: [0, Math.PI / 2, 0] },
  { id: uuidv4(), type: "sink", position: [3.5, 0.05, 1.5], rotation: [0, 0, 0] },
  { id: uuidv4(), type: "shower", position: [3.5, 1, -0.5], rotation: [0, Math.PI / 2, 0] },
  { id: uuidv4(), type: "mirror", position: [3.5, 1.2, 1.5], rotation: [0, 0, 0] },
];

// Default props for new furniture items
const defaultFurnitureProps = {
  sofa: { position: [0, 0.25, 0], rotation: [0, 0, 0], color: "#5d4037" },
  bed: { position: [0, 0.25, 0], rotation: [0, 0, 0], color: "#795548" },
  table: { position: [0, 0.05, 0], rotation: [0, 0, 0], color: "#a0522d" },
  chair: { position: [0, 0.2, 0], rotation: [0, 0, 0], color: "#654321" },
  wardrobe: { position: [0, 1.4, 0], rotation: [0, 0, 0], color: "#4e342e" },
  tv: { position: [0, 0.4, 0], rotation: [0, 0, 0], color: "#222222" },
  ac: { position: [0, 2.5, 0], rotation: [0, 0, 0], color: "#ddd" },
  fan: { position: [0, 2.8, 0], rotation: [0, 0, 0], color: "#aaa" },
  toilet: { position: [0, 0.2, 0], rotation: [0, 0, 0], color: "#fff" },
  sink: { position: [0, 0.05, 0], rotation: [0, 0, 0], color: "#fff" },
  shower: { position: [0, 1, 0], rotation: [0, 0, 0], color: "#88cfff" },
  mirror: { position: [0, 1.2, 0], rotation: [0, 0, 0], color: "#aaddff" },
  rug: { position: [0, -0.4, 0], rotation: [0, 0, 0], color: "#757575"},
  floorLamp: { position: [0, 0, 0], rotation: [0, 0, 0], color: "#f0e68c"},
  bookshelf: { position: [0, 0.8, 0], rotation: [0, 0, 0], color: "#8b4513"},
  diningTable: { position: [0, 0.05, 0], rotation: [0, 0, 0], color: "#a0522d"},
  diningChair: { position: [0, 0.2, 0], rotation: [0, 0, 0], color: "#654321"},
  studyTable: { position: [0, 0.4, 0], rotation: [0, 0, 0], color: "#4e342e"},
  studyChair: { position: [0, 0.2, 0], rotation: [0, 0, 0], color: "#654321"},
  nightstand: { position: [0, 0.2, 0], rotation: [0, 0, 0], color: "#4e342e"},
};

export default function App() {
  const [colorTheme, setColorTheme] = useState({ wall: "#e0e0e0", floor: "#7e57c2", ceiling: "#f5f5f5" });
  const [furniture, setFurniture] = useState(initialLayout);
  const [selected, setSelected] = useState(null); // No item is selected by default
  const [cameraMode, setCameraMode] = useState("orbit");
  const [hiddenWalls, setHiddenWalls] = useState({ front: true, back: false, left: false, right: false, ceiling: false });
  // Adjusted room dimensions for a more realistic 1BHK
  const [roomDimensions, setRoomDimensions] = useState({ width: 8, depth: 7, height: 3 }); 

  const addFurniture = (type) => {
    const defaultProps = defaultFurnitureProps[type];
    setFurniture([...furniture, {
      id: uuidv4(),
      type: type,
      position: defaultProps.position,
      rotation: defaultProps.rotation,
      color: defaultProps.color,
    }]);
  };

  const removeFurniture = (id) => {
    setFurniture(furniture.filter(f => f.id !== id));
    if (selected === id) setSelected(null);
  };

  const loadLayout = (layout) => setFurniture(layout);
  
  const resetScene = () => setFurniture([]);
  const resetToDefaultLayout = () => setFurniture(initialLayout);

  const toggleWall = (wall) => setHiddenWalls({ ...hiddenWalls, [wall]: !hiddenWalls[wall] });
  const toggleCameraMode = () => setCameraMode(cameraMode === "orbit" ? "fps" : "orbit");

  return (
    <div className="app">
      <div className="sidebar">
        <div className="brand">5-Star 1BHK Designer</div>
        <ControlsPanel
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
          toggleCameraMode={toggleCameraMode}
          addFurniture={addFurniture}
          resetScene={resetScene}
          roomDimensions={roomDimensions}
          setRoomDimensions={setRoomDimensions}
          resetToDefaultLayout={resetToDefaultLayout}
        />
        <div className="section">
          <h3>Wall Visibility (Dollhouse View)</h3>
          {["front", "back", "left", "right", "ceiling"].map(w => (
            <div key={w} className="side-row">
              <label>{w.charAt(0).toUpperCase() + w.slice(1)}</label>
              <input type="checkbox" checked={!hiddenWalls[w]} onChange={() => toggleWall(w)} />
            </div>
          ))}
        </div>
        <FurnitureControls
          furniture={furniture}
          setSelected={setSelected}
          removeFurniture={removeFurniture}
        />
        <SaveLoadPanel furniture={furniture} loadLayout={loadLayout} />
      </div>

      <div className="canvas-wrap">
        <Canvas shadows camera={{ position: [8, 5, 8], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 10, 5]} intensity={0.6} castShadow/>
          <Room colorTheme={colorTheme} hiddenWalls={hiddenWalls} {...roomDimensions} />
          {furniture.map(f => (
            <Furniture
              key={f.id}
              {...f}
              selected={selected === f.id}
              setSelected={() => setSelected(f.id)}
            />
          ))}
          <OrbitControls enabled={cameraMode === "orbit"} />
        </Canvas>
        <div className="canvas-hint">Use mouse to orbit. Click on furniture to move it.</div>
      </div>
    </div>
  );
}