import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Box = () => {
  const ref = useRef();
  useFrame((state, delta) => {
    const target = state.mouse.x * 2;
    ref.current.position.x += (target - ref.current.position.x) * delta * 10;
  });

  return (
    <>
      <mesh ref={ref}>
        <boxGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      ;
    </>
  );
};

const App = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.9} />
      <Box />
    </Canvas>
  );
};

export default App;
