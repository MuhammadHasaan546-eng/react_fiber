import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// 1. Component name ko Capitalize kiya (Model)
const Model = () => {
  // 2. GLTF object se scene ko destructure kar liya
  const { scene } = useGLTF("./modle.glb");

  return <primitive object={scene} scale={0.2} position={[3, 0, 0]} />;
};

const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color args={["#222222"]} attach="background" />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />

        {/* Capitalized component call */}
        <Model />
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
};

export default App;
