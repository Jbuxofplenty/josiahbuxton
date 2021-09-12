import React, { Suspense } from 'react';
import { Canvas } from 'react-three-fiber';
import Controls from './Controls';
import TakeOutBox from './TakeOutBox';
import Lights from '../../../components/Lights';

export default function DejaFood(props) {
  return (
    <Canvas
      camera={{ fov: 75, position: [0, 0, 40] }}
      onMouseMove={props.onMouseMove}>
      <>
        <Lights
          type='PointLight'
          color={0xffffff}
          intensity={1.8}
          position={[0, 20, 5]}
        />
          <Lights
            type='PointLight'
            color={0xffffff}
            intensity={1.8}
            position={[5, 20, 5]}
          />
        <Suspense fallback={null}>
          <TakeOutBox position={[0, 20, 0]} />
        </Suspense>
      </>
      <Controls />
    </Canvas>
  );
}
