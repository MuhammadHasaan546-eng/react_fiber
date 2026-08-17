import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const Box = () => {
  const texture = useTexture({
    map: "/color.jpg",
    roughnessMap: "/tiles_0133_preview.jpg",
    metalnessMap: "/title.png",
  });

  return (
    // castShadow: Yeh box shadow drop karega
    <mesh scale={1.5} position={[0, 1.5, 0]} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial {...texture} />
    </mesh>
  );
};

const Plain = () => {
  return (
    // receiveShadow: Yeh plane doosray objects ki shadow ko capture karega
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={"gray"} />
    </mesh>
  );
};

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      {/* 1. Canvas me 'shadows' prop add kiya */}
      <Canvas shadows camera={{ position: [0, 3, 6] }}>
        <ambientLight intensity={0.4} />

        {/* 2. Directional light me shadow settings configure ki */}
        <directionalLight
          castShadow
          position={[5, 8, 5]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />

        <Suspense fallback={null}>
          <Box />
          <Plain />
        </Suspense>

        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
