import React, { useState, useRef, useEffect } from 'react'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const CountryMarker = ({ position, name, population, history, flag }) => {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const groupRef = useRef()
  const flagRef = useRef()

  const loader = new THREE.TextureLoader()
  const flagTexture = loader.load(flag)

  // Calculate the position slightly above the globe surface
  const surfacePosition = new THREE.Vector3(...position).normalize().multiplyScalar(1.02)

  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.position.copy(surfacePosition)
    }
  }, [surfacePosition])

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Slow down the rotation speed
      const rotationAngle = clock.getElapsedTime() * 0.001 // Reduced from 0.1 to 0.001
      groupRef.current.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), rotationAngle)
      groupRef.current.quaternion.setFromRotationMatrix(
        new THREE.Matrix4().lookAt(groupRef.current.position, new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0))
      )
    }
  })

  return (
    <group ref={groupRef}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        ref={flagRef}
      >
        <planeGeometry args={[0.1, 0.06]} />
        <meshBasicMaterial map={flagTexture} side={THREE.DoubleSide} transparent={true} />
      </mesh>
      {hovered && (
        <Html>
          <div className="bg-white p-2 rounded shadow">
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm">人口: {population}</p>
          </div>
        </Html>
      )}
      {clicked && (
        <Html>
          <div className="bg-white p-4 rounded shadow max-w-md">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="mb-2">人口: {population}</p>
            <p className="text-sm">{history}</p>
          </div>
        </Html>
      )}
    </group>
  )
}

export default CountryMarker
