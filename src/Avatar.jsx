import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Avatar = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create body (cylinder)
    const bodyGeometry = new THREE.CylinderGeometry(1, 1, 3, 32);
    const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = -1;
    scene.add(body);

    // Create head (sphere)
    const headGeometry = new THREE.SphereGeometry(1, 32, 32);
    const headMaterial = new THREE.MeshBasicMaterial({ color: 0xFFD700 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 2;
    scene.add(head);

    // Create eyes
    const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.3, 2.5, 0.8);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.3, 2.5, 0.8);
    scene.add(leftEye);
    scene.add(rightEye);

    // Lighting
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    // Camera position
    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      body.rotation.y += 0.01;
      head.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-32 h-24bg-gray-200"></div>;
};

export default Avatar;
