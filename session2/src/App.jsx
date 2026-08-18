import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* 1. Canvas me 'shadows' prop add kiya */}
      <Canvas shadows camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[10, 10, 10]} />

        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial
            color={"#f04f2f"}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <Environment files={"/Hdri.hdr"} background />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
