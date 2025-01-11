"use client"

import React, { useEffect, useRef, useState } from "react"
import { OrthographicCamera, useFBO, useTexture } from "@react-three/drei"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

export default function Scene() {
  const device = useDimension()

  if (!device.width || !device.height) {
    return null
  }

  const frustumSize = device.height
  const aspect = device.width / device.height

  return (
    <div className="relative flex h-screen w-full items-center justify-center ">
      <Canvas>
        <OrthographicCamera
          makeDefault
          args={[
            (frustumSize * aspect) / -2,
            (frustumSize * aspect) / 2,
            frustumSize / 2,
            frustumSize / -2,
            -1000,
            1000,
          ]}
          position={[0, 0, 2]}
        />
        <Model />
      </Canvas>
    </div>
  )
}

function Model() {
  const { viewport } = useThree()
  const texture = useTexture("/brush.png")
  const meshRefs = useRef<(THREE.Mesh | null)[]>([])
  const [meshes, setMeshes] = useState<JSX.Element[]>([])
  const mouse = useMouse()
  const device = useDimension()
  const [prevMouse, setPrevMouse] = useState({ x: 0, y: 0 })
  const [currentWave, setCurrentWave] = useState(0)
  const { gl, camera } = useThree()

  const scene = new THREE.Scene()
  const max = 100

  const uniforms = useRef({
    uDisplacement: { value: new THREE.Texture() },
    uTexture: { value: new THREE.Texture() },
    winResolution: {
      value: new THREE.Vector2(0, 0),
    },
  })

  const fboBase = useFBO(device.width, device.height)
  const fboTexture = useFBO(device.width, device.height)

  const { scene: imageScene, camera: imageCamera } = Images(
    new THREE.Vector2(viewport.width, viewport.height)
  )

  useEffect(() => {
    const generatedMeshes = Array.from({ length: max }).map((_, i) => (
      <mesh
        key={i}
        position={[0, 0, 0]}
        ref={(el) => {
          meshRefs.current[i] = el
        }}
        rotation={[0, 0, Math.random()]}
        visible={false}
      >
        <planeGeometry args={[60, 60, 1, 1]} />
        <meshBasicMaterial transparent={true} map={texture} />
      </mesh>
    ))
    setMeshes(generatedMeshes)
  }, [texture])

  function setNewWave(x: number, y: number, currentWave: number) {
    const mesh = meshRefs.current[currentWave]
    if (mesh) {
      mesh.position.x = x
      mesh.position.y = y
      mesh.visible = true
      ;(mesh.material as THREE.Material).opacity = 1
      mesh.scale.x = 1.75
      mesh.scale.y = 1.75
    }
  }

  function trackMousePos(x: number, y: number) {
    if (Math.abs(x - prevMouse.x) > 0.1 || Math.abs(y - prevMouse.y) > 0.1) {
      setCurrentWave((currentWave + 1) % max)
      setNewWave(x, y, currentWave)
    }
    setPrevMouse({ x: x, y: y })
  }

  useFrame(({ gl, scene: finalScene }) => {
    const x = mouse.x - device.width / 1.65
    const y = -mouse.y + device.height / 1.5
    trackMousePos(x, y)
    meshRefs.current.forEach((mesh) => {
      if (mesh && mesh.visible) {
        mesh.rotation.z += 0.025
        ;(mesh.material as THREE.MeshBasicMaterial).opacity *= 0.95
        mesh.scale.x = 0.98 * mesh.scale.x + 0.155
        mesh.scale.y = 0.98 * mesh.scale.y + 0.155
      }
    })

    if (device.width > 0 && device.height > 0) {
      // uniforms.current.uTexture.value = imageTexture;

      // Render to base texture with meshes
      gl.setRenderTarget(fboBase)
      gl.clear()
      meshRefs.current.forEach((mesh) => {
        if (mesh && mesh.visible) {
          scene.add(mesh)
        }
      })
      gl.render(scene, camera)
      meshRefs.current.forEach((mesh) => {
        if (mesh && mesh.visible) {
          scene.remove(mesh)
        }
      })
      uniforms.current.uTexture.value = fboTexture.texture

      gl.setRenderTarget(fboTexture)
      gl.render(imageScene, imageCamera)
      uniforms.current.uDisplacement.value = fboBase.texture

      gl.setRenderTarget(null)
      gl.render(finalScene, camera)

      // Render the scene with updated displacement
      // gl.setRenderTarget(fboTexture);
      // gl.clear();
      // gl.render(scene, camera);
      // uniforms.current.uTexture.value = fboTexture.texture;
      // gl.setRenderTarget(null);

      uniforms.current.winResolution.value = new THREE.Vector2(
        device.width,
        device.height
      ).multiplyScalar(device.pixelRatio)
    }
  }, 1)

  function Images(viewport: THREE.Vector2) {
    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(
      viewport.width / -2,
      viewport.width / 2,
      viewport.height / 2,
      viewport.height / -2,
      -1000,
      1000
    )
    camera.position.z = 2
    scene.add(camera)
    const geometry = new THREE.PlaneGeometry(1, 1)
    const group = new THREE.Group()

    const texture1 = useTexture("/picture9.jpeg")
    const material1 = new THREE.MeshBasicMaterial({ map: texture1 })
    const image1 = new THREE.Mesh(geometry, material1)
    image1.position.x = -0.3 * viewport.width
    image1.position.y = 0
    image1.position.z = 1
    image1.scale.x = 1080 / 4
    image1.scale.y = 1920 / 4
    group.add(image1)

    const texture2 = useTexture("/picture1.jpeg")
    const material2 = new THREE.MeshBasicMaterial({ map: texture2 })
    const image2 = new THREE.Mesh(geometry, material2)
    image2.position.x = -0.001 * viewport.width
    image2.position.y = 0
    image2.position.z = 1
    image2.scale.x = 1080 / 4
    image2.scale.y = 1920 / 4
    group.add(image2)

    // const texture3 = useTexture('/picture3.jpeg');
    // const material3 = new THREE.MeshBasicMaterial({ map: texture3 });
    // const image3 = new THREE.Mesh(geometry, material3);
    // image3.position.x = 0.25 * viewport.width;
    // image3.position.y = 0;
    // image3.position.z = 1;
    // image3.scale.x = viewport.width / 5;
    // image3.scale.y = viewport.width / 4;
    // group.add(image3);

    scene.add(group)
    return { scene, camera }
  }

  return (
    <group>
      {meshes}
      {/* <Images /> */}
      <mesh>
        <planeGeometry args={[device.width, device.height, 1, 1]} />
        <shaderMaterial
          // args={[device.width, device.height, 1]}
          vertexShader={vertex}
          fragmentShader={fragment}
          transparent={true}
          uniforms={uniforms.current}
        ></shaderMaterial>
      </mesh>
    </group>
  )
}

function useMouse() {
  const [mouse, setMouse] = React.useState({ x: 0, y: 0, pixelRatio: 0 })

  const mouseMove = (e: { clientX: any; clientY: any }) => {
    const { clientX, clientY } = e
    setMouse({
      x: clientX,
      y: clientY,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    })
  }

  React.useEffect(() => {
    window.addEventListener("mousemove", mouseMove)
    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  return mouse
}

function useDimension() {
  const [dimension, setDimension] = React.useState({
    width: 0,
    height: 0,
    pixelRatio: 1,
  })

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const resize = () => {
        setDimension({
          width: window.innerWidth,
          height: window.innerHeight,
          pixelRatio: window.devicePixelRatio,
        })
      }

      resize()

      window.addEventListener("resize", resize)

      return () => window.removeEventListener("resize", resize)
    }
  }, [])

  return dimension
}

const fragment = `
uniform sampler2D uTexture;
uniform sampler2D uDisplacement;
uniform vec4 winResolution;
varying vec2 vUv;
float PI = 3.141592653589793238;

void main() {
  vec2 vUvScreen = gl_FragCoord.xy / winResolution.xy;

  vec4 displacement = texture2D(uDisplacement, vUvScreen);
  float theta = displacement.r*2.0*PI;

  vec2 dir = vec2(sin(theta),cos(theta));
  vec2 uv = vUvScreen + dir*displacement.r*0.075;
  vec4 color = texture2D(uTexture,uv);

  gl_FragColor = color;
}
`

const vertex = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`
