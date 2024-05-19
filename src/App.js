import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { House } from "./components/House/House";
import { OrbitControls, Sky } from "@react-three/drei";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "80vh" }}>
        <Canvas camera={{ zoom: 1, position: [15, 20, 15] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[35, 35, 0]} intensity={0.4} />
          <pointLight position={[-35, 35, 0]} intensity={0.4} />
          <Sky
            distance={450000}
            sunPosition={[0, 1, 0]}
            inclination={0}
            azimuth={0.25}
          />
          <Suspense fallback={null}>
            <House />
          </Suspense>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}

export default App;
