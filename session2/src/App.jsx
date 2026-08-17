import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const Box = () => {
  // Object passing style for multiple maps
  const texture = useTexture({
    map: "/color.jpg",
    roughnessMap: "/tiles_0133_preview.jpg",
    metalnessMap: "/title.png",
  });

  return (
    <mesh scale={1.5}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial {...texture} />
    </mesh>
  );
};

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        {/* Suspense zaroori hai */}
        <Suspense fallback={null}>
          <Box />
        </Suspense>

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
