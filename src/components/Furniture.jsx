import React, { useRef } from "react";
import { TransformControls } from "@react-three/drei";
import * as THREE from 'three';

// Create a realistic bed model
function Bed() {
  const groupRef = useRef();
  return (
    <group ref={groupRef}>
      {/* Bed frame */}
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[2.2, 0.4, 2]} />
        <meshStandardMaterial color="#4d4c4c" />
      </mesh>
      {/* Mattress */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[2.1, 0.2, 1.9]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      {/* Duvet */}
      <mesh position={[0, 0.18, 0.3]}>
        <boxGeometry args={[2, 0.08, 1.6]} />
        <meshStandardMaterial color="#7fcdff" />
      </mesh>
      {/* Pillows */}
      <mesh position={[-0.5, 0.25, -0.6]} rotation={[Math.PI / 8, 0, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.5]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      <mesh position={[0.5, 0.25, -0.6]} rotation={[Math.PI / 8, 0, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.5]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      {/* Headboard */}
      <mesh position={[0, 0.5, -1]}>
        <boxGeometry args={[2.2, 1, 0.1]} />
        <meshStandardMaterial color="#795548" />
      </mesh>
    </group>
  );
}

// Create a detailed sofa model
function Sofa() {
  const groupRef = useRef();
  return (
    <group ref={groupRef}>
      {/* Main section */}
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[2.5, 0.5, 1]} />
        <meshStandardMaterial color="#5d4037" />
      </mesh>
      {/* Side section */}
      <mesh position={[1.2, 0.25, -0.75]}>
        <boxGeometry args={[0.5, 0.5, 1.5]} />
        <meshStandardMaterial color="#5d4037" />
      </mesh>
      {/* Backrests */}
      <mesh position={[0, 0.7, -0.4]}>
        <boxGeometry args={[2.5, 0.5, 0.3]} />
        <meshStandardMaterial color="#5d4037" />
      </mesh>
      <mesh position={[1, 0.7, -1]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[1.5, 0.5, 0.3]} />
        <meshStandardMaterial color="#5d4037" />
      </mesh>
      {/* Cushions */}
      <mesh position={[0.5, 0.55, 0.1]}>
        <boxGeometry args={[0.8, 0.2, 0.4]} />
        <meshStandardMaterial color="#d9a066" />
      </mesh>
      <mesh position={[-0.5, 0.55, 0.1]}>
        <boxGeometry args={[0.8, 0.2, 0.4]} />
        <meshStandardMaterial color="#d9a066" />
      </mesh>
      <mesh position={[1.2, 0.55, -0.6]}>
        <boxGeometry args={[0.3, 0.2, 0.3]} />
        <meshStandardMaterial color="#d9a066" />
      </mesh>
    </group>
  );
}

// Simple coffee table model
function Table() {
  const groupRef = useRef();
  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.1, 0]} rotation={[0, Math.PI/4, 0]}>
        <boxGeometry args={[1.2, 0.05, 1.2]} />
        <meshStandardMaterial color="#4e342e" />
      </mesh>
      <mesh position={[-0.4, -0.3, -0.4]}><boxGeometry args={[0.1, 0.7, 0.1]} /><meshStandardMaterial color="#4e342e" /></mesh>
      <mesh position={[0.4, -0.3, 0.4]}><boxGeometry args={[0.1, 0.7, 0.1]} /><meshStandardMaterial color="#4e342e" /></mesh>
      <mesh position={[0.4, -0.3, -0.4]}><boxGeometry args={[0.1, 0.7, 0.1]} /><meshStandardMaterial color="#4e342e" /></mesh>
      <mesh position={[-0.4, -0.3, 0.4]}><boxGeometry args={[0.1, 0.7, 0.1]} /><meshStandardMaterial color="#4e342e" /></mesh>
    </group>
  );
}

// Detailed toilet model
function Toilet() {
  const groupRef = useRef();
  return (
    <group ref={groupRef}>
      <mesh position={[0, -0.05, 0.1]}>
        <boxGeometry args={[0.5, 0.3, 0.6]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      <mesh position={[0, 0.15, -0.35]}>
        <boxGeometry args={[0.5, 0.4, 0.2]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      <mesh position={[0, 0.15, 0.1]}>
        <boxGeometry args={[0.45, 0.05, 0.55]} />
        <meshStandardMaterial color="#eee" />
      </mesh>
    </group>
  );
}

// Detailed sink/vanity model
function Sink() {
  const groupRef = useRef();
  return (
    <group ref={groupRef}>
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[1, 0.5, 0.6]} />
        <meshStandardMaterial color="#5a5a5a" />
      </mesh>
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[1, 0.05, 0.6]} />
        <meshStandardMaterial color="#dcdcdc" />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 32]} />
        <meshStandardMaterial color="#fff" />
      </mesh>
      <mesh position={[0, 0.25, -0.1]}>
        <boxGeometry args={[0.05, 0.2, 0.05]} />
        <meshStandardMaterial color="#aaa" />
      </mesh>
      <mesh position={[0, 0.35, -0.15]}>
        <boxGeometry args={[0.05, 0.05, 0.15]} />
        <meshStandardMaterial color="#aaa" />
      </mesh>
    </group>
  );
}

// Detailed shower model with glass enclosure
function Shower() {
  const groupRef = useRef();
  return (
    <group ref={groupRef}>
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[1.2, 2, 1.2]} />
        <meshStandardMaterial color="#c2e6f4" transparent opacity={0.4} />
      </mesh>
      <mesh position={[0, 1.8, -0.4]}>
        <boxGeometry args={[0.05, 0.05, 0.5]} />
        <meshStandardMaterial color="#6c7a89" />
      </mesh>
      <mesh position={[0, 1.8, -0.6]}><cylinderGeometry args={[0.1, 0.1, 0.05]} /><meshStandardMaterial color="#6c7a89" /></mesh>
    </group>
  );
}

// Simple rug model
function Rug() {
    return (
        <mesh position={[0, -0.4, 0]}>
            <boxGeometry args={[3, 0.05, 2]} />
            <meshStandardMaterial color="#757575" />
        </mesh>
    );
}

// Simple floor lamp model
function FloorLamp() {
    return (
        <group>
            <mesh position={[0, -0.15, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 1, 32]} />
                <meshStandardMaterial color="#aaa" />
            </mesh>
            <mesh position={[0, 0.35, 0]}>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial color="#ffffaa" />
            </mesh>
        </group>
    );
}

// New model for a bookshelf
function Bookshelf() {
  return (
    <group>
      <mesh position={[0, 0.7, 0]}>
        <boxGeometry args={[0.2, 1.5, 0.8]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      <mesh position={[0, 1.4, 0]}>
        <boxGeometry args={[0.2, 0.1, 0.8]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[0.2, 0.1, 0.8]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.2, 0.1, 0.8]} />
        <meshStandardMaterial color="#8b4513" />
      </mesh>
    </group>
  );
}

// New model for a dining table
function DiningTable() {
  return (
    <group>
      <mesh position={[0, 0.1, 0]}>
        <boxGeometry args={[1.5, 0.05, 2.5]} />
        <meshStandardMaterial color="#a0522d" />
      </mesh>
      <mesh position={[-0.6, -0.3, -1]}><boxGeometry args={[0.1, 0.7, 0.1]} /><meshStandardMaterial color="#a0522d" /></mesh>
      <mesh position={[0.6, -0.3, 1]}><boxGeometry args={[0.1, 0.7, 0.1]} /><meshStandardMaterial color="#a0522d" /></mesh>
      <mesh position={[0.6, -0.3, -1]}><boxGeometry args={[0.1, 0.7, 0.1]} /><meshStandardMaterial color="#a0522d" /></mesh>
      <mesh position={[-0.6, -0.3, 1]}><boxGeometry args={[0.1, 0.7, 0.1]} /><meshStandardMaterial color="#a0522d" /></mesh>
    </group>
  );
}

// New model for a dining chair
function DiningChair() {
  return (
    <group>
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.5]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[0, 0.5, -0.25]}>
        <boxGeometry args={[0.5, 0.6, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
    </group>
  );
}

// New model for a study table
function StudyTable() {
  return (
    <group>
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.5, 0.05, 0.8]} />
        <meshStandardMaterial color="#4e342e" />
      </mesh>
      <mesh position={[-0.6, 0.2, 0.3]}><boxGeometry args={[0.1, 0.4, 0.1]} /><meshStandardMaterial color="#4e342e" /></mesh>
      <mesh position={[0.6, 0.2, 0.3]}><boxGeometry args={[0.1, 0.4, 0.1]} /><meshStandardMaterial color="#4e342e" /></mesh>
      <mesh position={[-0.6, 0.2, -0.3]}><boxGeometry args={[0.1, 0.4, 0.1]} /><meshStandardMaterial color="#4e342e" /></mesh>
      <mesh position={[0.6, 0.2, -0.3]}><boxGeometry args={[0.1, 0.4, 0.1]} /><meshStandardMaterial color="#4e342e" /></mesh>
    </group>
  );
}

// New model for a study chair
function StudyChair() {
  return (
    <group>
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.5, 0.4, 0.5]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      <mesh position={[0, 0.5, -0.25]}>
        <boxGeometry args={[0.5, 0.6, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
    </group>
  );
}

// New model for a nightstand
function Nightstand() {
  return (
    <group>
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.6, 0.4, 0.6]} />
        <meshStandardMaterial color="#4e342e" />
      </mesh>
    </group>
  );
}

export default function Furniture({ type, position, color, selected, setSelected, rotation }) {
  const meshRef = useRef();

  // Conditionally render the correct furniture model
  const renderFurniture = () => {
    switch (type) {
      case "sofa": return <Sofa />;
      case "bed": return <Bed />;
      case "table": return <Table />;
      case "wardrobe": return <mesh><boxGeometry args={[1, 2, 0.6]} /><meshStandardMaterial color={color} /></mesh>;
      case "tv": return <mesh><boxGeometry args={[1.2, 0.7, 0.1]} /><meshStandardMaterial color={color} /></mesh>;
      case "ac": return <mesh><boxGeometry args={[0.5, 0.5, 0.3]} /><meshStandardMaterial color={color} /></mesh>;
      case "fan": return <mesh><cylinderGeometry args={[0.05, 0.05, 0.5, 8]} /><meshStandardMaterial color={color} /></mesh>;
      case "toilet": return <Toilet />;
      case "sink": return <Sink />;
      case "shower": return <Shower />;
      case "mirror": return <mesh><boxGeometry args={[0.8, 0.6, 0.05]} /><meshStandardMaterial color={"#aaddff"} transparent opacity={0.5} /></mesh>;
      case "rug": return <Rug />;
      case "floorLamp": return <FloorLamp />;
      case "bookshelf": return <Bookshelf />;
      case "diningTable": return <DiningTable />;
      case "diningChair": return <DiningChair />;
      case "studyTable": return <StudyTable />;
      case "studyChair": return <StudyChair />;
      case "nightstand": return <Nightstand />;
      default: return null;
    }
  };

  return (
    <TransformControls
      object={meshRef}
      mode="translate"
      enabled={selected} // Only enable if this specific item is selected
      onMouseDown={e => e.stopPropagation()}
    >
      <group ref={meshRef} position={position} rotation={rotation} onClick={() => setSelected()}>
        {renderFurniture()}
      </group>
    </TransformControls>
  );
}