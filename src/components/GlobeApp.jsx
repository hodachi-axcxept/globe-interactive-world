import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Globe from './Globe'
import CountryMarkers from './CountryMarkers'
import Weather from './Weather'

const GlobeApp = () => {
  return (
    <div className="w-full h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Globe />
          <CountryMarkers />
          <Weather />
          <OrbitControls enableZoom={true} enablePan={false} minDistance={1.5} maxDistance={10} />
        </Canvas>
      </Suspense>
    </div>
  )
}

export default GlobeApp
