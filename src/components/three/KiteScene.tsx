'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

/* -------------------------------------------------------------------------- */
/*  Palette                                                                    */
/* -------------------------------------------------------------------------- */

const TERRACOTTA = '#C2613A'; // warm matte sail
const OCHRE = '#C2924E'; // tail ribbons
const INK = '#1C1714'; // spars / fine lines

/* -------------------------------------------------------------------------- */
/*  prefers-reduced-motion hook                                                */
/* -------------------------------------------------------------------------- */

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, []);

  return reduced;
}

/* -------------------------------------------------------------------------- */
/*  Kite                                                                       */
/* -------------------------------------------------------------------------- */

interface KiteProps {
  reducedMotion: boolean;
}

function Kite({ reducedMotion }: KiteProps) {
  const group = useRef<THREE.Group>(null);
  const sail = useRef<THREE.Mesh>(null);

  // Flat diamond / rhombus sail built from an extruded shape so it reads as a
  // real kite (slightly thick, soft edges) rather than a paper-thin plane.
  const sailGeometry = useMemo(() => {
    const shape = new THREE.Shape();
    const halfW = 0.9; // horizontal radius
    const top = 1.35; // distance to the top point
    const bottom = 1.7; // distance to the (longer) bottom point
    shape.moveTo(0, top);
    shape.lineTo(halfW, 0.15);
    shape.lineTo(0, -bottom);
    shape.lineTo(-halfW, 0.15);
    shape.closePath();

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.05,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.04,
      bevelSegments: 3,
      curveSegments: 12,
    });
    geo.center();
    return geo;
  }, []);

  // Tail: a series of small ochre ribbon segments trailing below the kite.
  const tailSegments = useMemo(
    () =>
      Array.from({ length: 5 }, (_, i) => ({
        y: -2.0 - i * 0.42,
        scale: 0.26 - i * 0.03,
        phase: i * 0.7,
      })),
    [],
  );

  useFrame((state, delta) => {
    if (!group.current) return;

    const t = state.clock.elapsedTime;

    // Gentle parallax tilt toward the pointer (lerped for smoothness).
    const targetY = reducedMotion ? 0 : state.pointer.x * 0.35;
    const targetX = reducedMotion ? 0 : -state.pointer.y * 0.25;

    // Slow breeze drift layered on top of the parallax target.
    const breezeY = reducedMotion ? 0 : Math.sin(t * 0.18) * 0.12;
    const breezeX = reducedMotion ? 0 : Math.cos(t * 0.15) * 0.06;

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY + breezeY,
      Math.min(1, delta * 2),
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX + breezeX,
      Math.min(1, delta * 2),
    );

    // Subtle roll, like a kite leaning on the wind.
    if (sail.current) {
      sail.current.rotation.z = reducedMotion ? 0 : Math.sin(t * 0.22) * 0.06;
    }
  });

  const sailMaterial = (
    <meshStandardMaterial color={TERRACOTTA} roughness={0.55} metalness={0.1} />
  );

  return (
    <group ref={group}>
      {/* Sail */}
      <mesh ref={sail} geometry={sailGeometry} castShadow>
        {sailMaterial}
      </mesh>

      {/* Crossed spars */}
      <mesh position={[0, 0.1, 0.06]}>
        <boxGeometry args={[0.04, 2.7, 0.04]} />
        <meshStandardMaterial color={INK} roughness={0.6} metalness={0.15} />
      </mesh>
      <mesh position={[0, 0.18, 0.06]}>
        <boxGeometry args={[1.7, 0.04, 0.04]} />
        <meshStandardMaterial color={INK} roughness={0.6} metalness={0.15} />
      </mesh>

      {/* Trailing tail ribbons */}
      {tailSegments.map((seg, i) => (
        <mesh key={i} position={[0, seg.y, 0]} rotation={[0, 0, 0.0]}>
          <planeGeometry args={[seg.scale, seg.scale * 0.7]} />
          <meshStandardMaterial
            color={OCHRE}
            roughness={0.5}
            metalness={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scene wrapper                                                              */
/* -------------------------------------------------------------------------- */

function KiteRig({ reducedMotion }: KiteProps) {
  // Float adds organic vertical drift; near-zero when reduced motion is on.
  return (
    <Float
      speed={reducedMotion ? 0 : 1.1}
      rotationIntensity={reducedMotion ? 0 : 0.25}
      floatIntensity={reducedMotion ? 0 : 0.6}
      floatingRange={[-0.15, 0.15]}
    >
      <Kite reducedMotion={reducedMotion} />
    </Float>
  );
}

/* -------------------------------------------------------------------------- */
/*  Public component                                                           */
/* -------------------------------------------------------------------------- */

export default function KiteScene() {
  const reducedMotion = useReducedMotion();

  return (
    <Canvas
      className="w-full h-full"
      style={{ background: 'transparent' }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 6], fov: 40 }}
      frameloop="always"
    >
      {/* Bright, warm lighting suited to a white-background scene */}
      <ambientLight intensity={0.8} />
      <directionalLight
        position={[3, 4, 5]}
        intensity={1.1}
        color="#FFF4EA"
      />
      <directionalLight position={[-4, -2, 2]} intensity={0.3} color="#E8D9C8" />

      <KiteRig reducedMotion={reducedMotion} />

      {/* Subtle reflections only — no background takeover */}
      <Environment preset="city" background={false} environmentIntensity={0.35} />
    </Canvas>
  );
}
