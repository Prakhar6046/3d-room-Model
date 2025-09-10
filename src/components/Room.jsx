import React, { useRef } from "react";

export default function Room({ width = 8, depth = 7, height = 3, colorTheme, hiddenWalls = {} }) {
  const roomRef = useRef();

  return (
    <group ref={roomRef} position={[0, height / 2, 0]}>
      {/* Floor */}
      <mesh receiveShadow position={[0, -height / 2, 0]}>
        <boxGeometry args={[width, 0.1, depth]} />
        <meshStandardMaterial color={colorTheme.floor} />
      </mesh>

      {/* Ceiling */}
      {!hiddenWalls.ceiling && (
        <mesh position={[0, height / 2, 0]}>
          <boxGeometry args={[width, 0.1, depth]} />
          <meshStandardMaterial color={colorTheme.ceiling} />
        </mesh>
      )}

      {/* Outer Walls */}
      {!hiddenWalls.back && (
        <mesh position={[0, 0, -depth / 2]}>
          <boxGeometry args={[width, height, 0.1]} />
          <meshStandardMaterial color={colorTheme.wall} />
        </mesh>
      )}
      {!hiddenWalls.left && (
        <mesh position={[-width / 2, 0, 0]}>
          <boxGeometry args={[0.1, height, depth]} />
          <meshStandardMaterial color={colorTheme.wall} />
        </mesh>
      )}
      {!hiddenWalls.right && (
        <mesh position={[width / 2, 0, 0]}>
          <boxGeometry args={[0.1, height, depth]} />
          <meshStandardMaterial color={colorTheme.wall} />
        </mesh>
      )}
      {!hiddenWalls.front && (
        <mesh position={[0, 0, depth / 2]}>
          <boxGeometry args={[width, height, 0.1]} />
          <meshStandardMaterial color={colorTheme.wall} />
        </mesh>
      )}

      {/* Interior Walls for a more defined 1BHK layout */}
      {/* Wall separating Living/Dining from Bedroom/Bathroom */}
      <mesh position={[width / 2 - 4.8, 0, -depth / 2 + 4]}>
        <boxGeometry args={[width - 2.3, height, 0.1]} />
        <meshStandardMaterial color={colorTheme.wall} />
      </mesh>

      {/* FIXED: The wall between the bedroom and bathroom is now a single, correctly positioned piece,
          preventing any visual breaks or overlaps. The bathroom is now a fully enclosed and private space. */}
      <mesh position={[2, 0, 0]}>
        <boxGeometry args={[0.1, height, depth - 0]} />
        <meshStandardMaterial color={colorTheme.wall} />
      </mesh>

      {/* Small wall for Bathroom entrance (Fixed position) */}
      <mesh position={[width / 2 - 0, 0, -depth / 2 + 6.95]}>
        <boxGeometry args={[1, height, 0.1]} />
        <meshStandardMaterial color={colorTheme.wall} />
      </mesh>

      {/* Bedroom entrance wall segment (Fixed position) */}
      {/* <mesh position={[-width / 2 + 0.8, 0, depth / 2 - 3.5]}>
        <boxGeometry args={[1, height, 0.1]} />
        <meshStandardMaterial color={colorTheme.wall} />
      </mesh> */}
    </group>
  );
}