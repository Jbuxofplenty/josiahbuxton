import * as THREE from 'three'
import React, { useState, useEffect, useMemo } from 'react'
import { useLoader, useUpdate, useFrame } from 'react-three-fiber';

export default function({ children, vAlign = 'center', hAlign = 'center', size = 1, ...props }) {
  const font = useLoader(THREE.FontLoader, './assets/fonts/webgl/Space Age_Regular.json')
  const config = useMemo(
    () => ({ font,
      size: 40,
      height: 10,
      curveSegments: 3,
      bevelEnabled: true,
      bevelThickness: 2,
      bevelSize: 2,
      bevelOffset: 0,
      bevelSegments: 8 }),
    [font]
  )
  const mesh = useUpdate(
    self => {
      const size = new THREE.Vector3()
      self.geometry.computeBoundingBox()
      self.geometry.boundingBox.getSize(size)
      self.position.x = hAlign === 'center' ? -size.x / 2 : hAlign === 'right' ? 0 : -size.x
      self.position.y = vAlign === 'center' ? -size.y / 2 : vAlign === 'top' ? 0 : -size.y
    },
    [children]
  )

  // Fade in the scene
  const [seconds, setSeconds] = useState(0);

  useFrame(() => {
    let opacity = seconds / 300;
    mesh.current.material.opacity = opacity;
    mesh.current.material.transparent = true;
  })

  useEffect(() => {
    if(seconds <= 300) {
      let interval = null;
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 10);
      return () => clearInterval(interval);
    }
  }, [seconds]);

  return (
    <group {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
      <mesh ref={mesh}>
        <textGeometry attach="geometry" args={[children, config]} />
        <meshNormalMaterial attach="material" transparent opacity={0} />
      </mesh>
    </group>
  )
}
