import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <Canvas camera={{ position: [2, 2, 2] }}>
      <mesh>
        <directionalLight intensity={1} position={[2, 3, 3]} />
        <boxGeometry />
        <meshBasicMaterial color="red" wireframe={true} />
      </mesh>
    </Canvas>
  );
};

export default App;
