import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function NeuralNetwork({ mousePosition }) {
  const particlesRef = useRef(null);
  const linesRef = useRef(null);
  const connectionsRef = useRef([]);

  const particleCount = 100;

  const { positions, connections } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const connections = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }

    for (let i = 0; i < particleCount; i++) {
      const numConnections = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < numConnections; j++) {
        const targetIndex = Math.floor(Math.random() * particleCount);
        if (targetIndex !== i) {
          connections.push([i, targetIndex]);
        }
      }
    }

    connectionsRef.current = connections;
    return { positions, connections };
  }, []);

  const linePositions = useMemo(() => {
    const linePos = new Float32Array(connections.length * 6);
    connections.forEach((conn, i) => {
      linePos[i * 6] = positions[conn[0] * 3];
      linePos[i * 6 + 1] = positions[conn[0] * 3 + 1];
      linePos[i * 6 + 2] = positions[conn[0] * 3 + 2];
      linePos[i * 6 + 3] = positions[conn[1] * 3];
      linePos[i * 6 + 4] = positions[conn[1] * 3 + 1];
      linePos[i * 6 + 5] = positions[conn[1] * 3 + 2];
    });
    return linePos;
  }, [connections, positions]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + i) * 0.002;
        positions[i3] += Math.cos(time + i * 0.5) * 0.001;

        const dx = mousePosition.x * 5 - positions[i3];
        const dy = mousePosition.y * 5 - positions[i3 + 1];
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 3) {
          positions[i3] += dx * 0.001;
          positions[i3 + 1] += dy * 0.001;
        }
      }

      particlesRef.current.geometry.attributes.position.needsUpdate = true;
      particlesRef.current.rotation.y += 0.0002;
    }

    if (linesRef.current && particlesRef.current) {
      const particlePos = particlesRef.current.geometry.attributes.position.array;
      const linePos = linesRef.current.geometry.attributes.position.array;

      connectionsRef.current.forEach((conn, i) => {
        linePos[i * 6] = particlePos[conn[0] * 3];
        linePos[i * 6 + 1] = particlePos[conn[0] * 3 + 1];
        linePos[i * 6 + 2] = particlePos[conn[0] * 3 + 2];
        linePos[i * 6 + 3] = particlePos[conn[1] * 3];
        linePos[i * 6 + 4] = particlePos[conn[1] * 3 + 1];
        linePos[i * 6 + 5] = particlePos[conn[1] * 3 + 2];
      });

      linesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          color="#00FFFF"
          transparent
          opacity={0.8}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={connections.length * 2}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#8A2BE2"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </>
  );
}
