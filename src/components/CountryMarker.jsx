import React, { useState, useRef } from 'react'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

const CountryMarker = ({ position, name, population, history, flag }) => {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)
  const flagRef = useRef()

  const loader = new THREE.TextureLoader()
  const flagTexture = loader.load(flag)

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
        ref={flagRef}
      >
        <planeGeometry args={[0.1, 0.06]} />
        <meshBasicMaterial map={flagTexture} side={THREE.DoubleSide} />
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
