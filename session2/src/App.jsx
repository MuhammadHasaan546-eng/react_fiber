import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

import React from "react";

const Scen = () => {
  return (
    <>
      <perspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <OrbitControls />
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Scen />
    </Canvas>
  );
};

export default App;
