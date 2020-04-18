import React, { Suspense } from 'react';
import Swarm from "./Swarm";
import ThreeName from './ThreeName';
import Lights from '../../components/Lights';
import Loader from '../../components/Loader.js';

function Scene(props) {

  return (
    <>
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
      <Suspense fallback={<Loader />}>
        <ThreeName />
        <Swarm count={150} mouse={props.mouse} />
      </Suspense>
    </>
  );
}

export default Scene;
