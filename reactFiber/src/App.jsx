import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Box = () => {
  return (
    // boxGeometry me args={[width, height, depth]} se size bara hoga
    <mesh>
      <boxGeometry />
      <meshBasicMaterial color="orange" />
    </mesh>
  );
};

const App = () => {
  return (
    // Canvas container ki height aur width hamesha parent element se aati hai
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Box />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default App;
