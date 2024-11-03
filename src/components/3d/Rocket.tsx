'use client'

import { useEffect, useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Rocket() {
  const rocketRef = useRef<THREE.Group>(null)
  const { scene: rocketScene } = useGLTF('/rocket.gltf')
  const { scene, camera } = useThree()

  // Create dynamic spiral trail particles with improved parameters
  const particles = useMemo(() => {
    const temp = []
    const spiralCount = 2000 // Increased particle count
    for (let i = 0; i < spiralCount; i++) {
      const t = i / spiralCount
      const angle = t * Math.PI * 30 // Increased spiral turns
      const radius = 8 * (1 - t) // Larger radius
      temp.push({
        position: new THREE.Vector3(
          Math.cos(angle) * radius,
          -i * 0.05, // Tighter vertical spacing
          Math.sin(angle) * radius
        ),
        size: Math.random() * 0.8 + 0.2, // Varied particle sizes
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.05 + 0.02, // Faster movement
        rotationSpeed: Math.random() * 0.04 - 0.02,
        opacity: Math.random() * 0.7 + 0.3,
        color: new THREE.Color().setHSL(
          0.05 + Math.random() * 0.05, // Orange-red hue range
          0.8,
          0.5 + Math.random() * 0.2 // Brighter colors
        )
      })
    }
    return temp
  }, [])

  useEffect(() => {
    camera.position.set(0, 0, 120)
    scene.fog = new THREE.Fog(0x5d0361, 10, 1500)
  }, [camera, scene])

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime()

    if (rocketRef.current) {
      rocketRef.current.rotation.y = time * 0.5
      rocketRef.current.position.y = Math.sin(time) * 15
    }

    // Enhanced spiral trail animation with more dynamic movement
    particles.forEach((particle, i) => {
      particle.position.y += particle.speed * 1.5
      particle.phase += particle.rotationSpeed
      
      // More dynamic spiral movement
      const radius = (1 - particle.position.y / 100) * 8 * 
        (1 + Math.sin(time * 2 + i * 0.1) * 0.3)
      
      particle.position.x = Math.cos(particle.phase + time * 0.8) * radius
      particle.position.z = Math.sin(particle.phase + time * 0.8) * radius
      
      // Enhanced pulsating effects
      particle.size = (Math.sin(time * 3 + i * 0.1) * 0.3 + 0.7) * particle.size
      particle.opacity = Math.sin(time * 2 + particle.phase) * 0.4 + 0.6

      // Reset particles with variation
      if (particle.position.y > 30) {
        particle.position.y = -150
        particle.phase = Math.random() * Math.PI * 2
        particle.speed = Math.random() * 0.05 + 0.02
      }
    })
  })

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />
      <pointLight position={[10, 10, 10]} intensity={2.5} color={0xff3300} />

      {/* Enhanced Dynamic Spiral Trail */}
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[0.15 * particle.size]} />
          <meshBasicMaterial
            color={particle.color}
            transparent
            opacity={particle.opacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}

      {/* Rocket */}
      <group ref={rocketRef}>
        <primitive object={rocketScene} scale={0.5} />
      </group>
    </>
  )
}
