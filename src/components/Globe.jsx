import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import * as THREE from 'three'

const Globe = () => {
  const earthMap = useLoader(TextureLoader, 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  const bumpMap = useLoader(TextureLoader, 'https://unpkg.com/three-globe/example/img/earth-topology.png')
  const globeRef = useRef()

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshPhongMaterial 
        map={earthMap} 
        bumpMap={bumpMap}
        bumpScale={0.05}
        specularMap={earthMap}
        specular={new THREE.Color('grey')}
        shininess={5}
      />
    </mesh>
  )
}

export default Globe
