import React from "react";
import Furniture from "./Furniture";

export default function Bathroom({ furniture, colorTheme, onExit }) {
  return (
    <>
      <mesh receiveShadow position={[0, -1.5, 0]}>
        <boxGeometry args={[3,0.1,3]} />
        <meshStandardMaterial color={colorTheme.floor} />
      </mesh>
      <mesh position={[0,1.5,0]}>
        <boxGeometry args={[3,3,3]} />
        <meshStandardMaterial color={colorTheme.ceiling} />
      </mesh>
      {furniture.map(f=>{
        if(f.room==="bathroom")
          return <Furniture key={f.id} {...f} />;
        return null;
      })}
      {/* Exit door */}
      <mesh position={[-1.3,1,0]} onClick={()=>onExit()} castShadow>
        <boxGeometry args={[0.9,2,0.05]} />
        <meshStandardMaterial color={"#654321"} />
      </mesh>
    </>
  );
}
