import React, { useRef } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Globe = () => {
  const earthMap = useLoader(TextureLoader, 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
  const globeRef = useRef()

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001
    }
  })

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={earthMap} />
    </mesh>
  )
}

export default Globe
