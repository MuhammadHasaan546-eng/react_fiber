import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <div>
      <Canvas>
        <mesh>
          <ambientLight />
          <boxGeometry />
          <meshBasicMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  );
};

export default App;
