import React from 'react';
import Lights from './Lights';
import ParticleField from './ParticleField';

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
        intensity={0.8}
        position={[10, 10, 10]}
      />
      <ParticleField count={1000} mouse={props.mouse}/>
    </>
  );
}

export default Scene;
