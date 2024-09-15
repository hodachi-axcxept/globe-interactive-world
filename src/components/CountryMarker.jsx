import React, { useState } from 'react'
import { Html } from '@react-three/drei'

const CountryMarker = ({ position, name, population, history, flag }) => {
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  return (
    <group position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshBasicMaterial color="red" />
      </mesh>
      {hovered && (
        <Html>
          <div className="bg-white p-2 rounded shadow">
            <img src={flag} alt={`${name} flag`} className="w-8 h-4 mb-1" />
            <h3 className="font-bold">{name}</h3>
            <p className="text-sm">人口: {population}</p>
          </div>
        </Html>
      )}
      {clicked && (
        <Html>
          <div className="bg-white p-4 rounded shadow max-w-md">
            <img src={flag} alt={`${name} flag`} className="w-12 h-8 mb-2" />
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
