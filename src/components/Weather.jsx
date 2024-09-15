import React, { useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const Weather = () => {
  const { scene } = useThree()
  const [season, setSeason] = useState(getCurrentSeason())

  useEffect(() => {
    const interval = setInterval(() => {
      setSeason(getCurrentSeason())
    }, 60000) // Update every minute
    return () => clearInterval(interval)
  }, [])

  useFrame(() => {
    if (season === 'winter') {
      createSnowflake(scene)
    } else if (season === 'spring' || season === 'autumn') {
      createRaindrop(scene)
    }
    
    // Occasionally create lightning in summer
    if (season === 'summer' && Math.random() < 0.001) {
      createLightning(scene)
    }
  })

  return null
}

const getCurrentSeason = () => {
  const now = new Date()
  const month = now.getMonth()
  if (month >= 2 && month <= 4) return 'spring'
  if (month >= 5 && month <= 7) return 'summer'
  if (month >= 8 && month <= 10) return 'autumn'
  return 'winter'
}

const createSnowflake = (scene) => {
  const snowflake = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0xffffff }))
  snowflake.position.set(
    Math.random() * 4 - 2,
    Math.random() * 4 + 1,
    Math.random() * 4 - 2
  )
  snowflake.scale.set(0.02, 0.02, 0.02)
  scene.add(snowflake)
  setTimeout(() => scene.remove(snowflake), 5000)
}

const createRaindrop = (scene) => {
  const raindrop = new THREE.Sprite(new THREE.SpriteMaterial({ color: 0x7ac5ff }))
  raindrop.position.set(
    Math.random() * 4 - 2,
    Math.random() * 4 + 1,
    Math.random() * 4 - 2
  )
  raindrop.scale.set(0.01, 0.05, 0.01)
  scene.add(raindrop)
  setTimeout(() => scene.remove(raindrop), 1000)
}

const createLightning = (scene) => {
  const lightning = new THREE.PointLight(0xffff00, 30, 500, 1.7)
  lightning.position.set(
    Math.random() * 4 - 2,
    Math.random() * 4 + 1,
    Math.random() * 4 - 2
  )
  scene.add(lightning)
  setTimeout(() => scene.remove(lightning), 200)
}

export default Weather
