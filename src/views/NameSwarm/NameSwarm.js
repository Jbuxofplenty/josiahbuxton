import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Swarm from "./Swarm";
import ThreeName from './ThreeName';
import Controls from './Controls';
import Lights from 'components/Lights';
import Loader from 'components/Loader.js';

export default function NameSwarm(props) {
  const screenWidth = screen.width;
  const position = screenWidth < 400 ? 100 : 40;
  return (
    <Suspense fallback={<Loader />}>
      <Canvas
        concurrent
        camera={{ fov: 75, position: [0, 0, position] }}
        onMouseMove={props.onMouseMove}>
        <>
          <Suspense fallback={<Loader />}>
            <Lights
              type='AmbientLight'
              color={0xffffff}
              intensity={0.8}
              position={[10, 10, 10]}
            />
            <Lights
              type='PointLight'
              color={0xffffff}
              intensity={1.8}
              position={[0, 0, -20]}
            />
            <ThreeName />
            <Swarm count={150} mouse={props.mouse} />
          </Suspense>
        </>
        <Controls />
      </Canvas>
    </Suspense>
  );
}
