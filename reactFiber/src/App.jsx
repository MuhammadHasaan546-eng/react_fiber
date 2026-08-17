import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = () => {
  const ref = useRef();
  useFrame(() => {
    const scale = Math.sin(Date.now() * 0.002) * 0.5;
    ref.current.scale.set(scale, scale, scale);
  });

  return (
    <>
      <mesh ref={ref}>
        <directionalLight intensity={1} position={[2, 3, 3]} />
        <boxGeometry />
        <meshBasicMaterial color="red" wireframe={true} />
      </mesh>
      ;
    </>
  );
};

const App = () => {
  return (
    <Canvas camera={{ position: [2, 2, 2] }}>
      <ambientLight intensity={0.9} />
      <Box />
    </Canvas>
  );
};

export default App;
