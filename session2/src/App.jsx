import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, useHelper } from "@react-three/drei";
import { useRef } from "react";

const Scene = () => {
  const dirLight = useRef(null);
  useHelper(dirLight, THREE.DirectionalLightHelper, 1);
  return (
    <>
      <directionalLight ref={dirLight} position={[0, 2, 2]} />
      <mesh>
        <boxGeometry args={[22, 2, 2]} />
        <meshStandardMaterial
          color={"#f04f2f"}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <OrbitControls />
    </>
  );
};

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.1} />
        <Scene />
      </Canvas>
    </div>
  );
}
