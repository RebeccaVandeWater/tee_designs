import React, {useRef} from 'react';
import { easing } from 'maath';
import { useFrame } from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import * as THREE from 'three';

const Backdrop = () => {
  const shadows = useRef();

  return (
    <AccumulativeShadows ref={shadows} temporal color='#0f0050' frames={60} alphaTest={1.5} scale={10} rotation={[Math.PI / 2, 1, 0]} position={[0, 0, -0.14]}>
      <RandomizedLight amount={4} radius={7} intensity={2.5} ambient={0.35} position={[5, 5, -10]} />
      <RandomizedLight amount={4} radius={6} intensity={2.5} ambient={0.55} position={[-5, 5, -9]} />
    </AccumulativeShadows>
  )
}

export default Backdrop