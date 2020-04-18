import React from 'react';
import Text from '../../components/Text.js';

export default function ThreeName() {
  return (
    <mesh visible position={[1, 2, 3]} rotation={[0, 0, 0]}>
      <Text hAlign="center" position={[0, 0, 0]} children="Josiah Buxton" size={1} />
      <Text hAlign="center" position={[0, -5, 0]} children="Developer" size={0.5} />
    </mesh>
  )
}
