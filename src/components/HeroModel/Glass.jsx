import { useLayoutEffect, useRef } from "react";
import * as THREE from "three";

const Glass = () => {
	const meshRef = useRef(null);

	useLayoutEffect(() => {
		if (!meshRef.current) return;

		const isMobile = window.innerWidth < 768;

		const extrudeSettings = {
			depth: 1.0,
			bevelEnabled: true,
			bevelSegments: isMobile ? 2 : 8,
			steps: 2,
			bevelSize: 0.08,
			bevelThickness: 0.1,
			curveSegments: isMobile ? 16 : 64,
		};

		const geometry = new THREE.ExtrudeGeometry(
			createPolygonShape(8, 1.2),
			extrudeSettings,
		);
		geometry.center();

		const material = new THREE.MeshPhysicalMaterial({
			color: "#ffffff",
			transmission: 1.0,
			opacity: 1.0,
			metalness: 0.0,
			roughness: 0.0,
			ior: 1.5,
			thickness: 1.2,
			attenuationColor: 0xffffff,
			attenuationDistance: 9999.0,
			specularIntensity: 1.0,
			envMapIntensity: 1.0,
			clearcoat: 1.0,
			clearcoatRoughness: 0.0,
			transparent: true,
			side: THREE.DoubleSide,
			depthWrite: false,
		});

		meshRef.current.geometry = geometry;
		meshRef.current.material = material;

		return () => {
			geometry.dispose();
			material.dispose();
		};
	}, []);

	return <mesh ref={meshRef} receiveShadow={false} renderOrder={1} />;
};

function createPolygonShape(sides, radius) {
	const shape = new THREE.Shape();
	const angleStep = (Math.PI * 2) / sides;
	const offset = sides === 6 ? Math.PI / 2 : Math.PI / 8;
	for (let i = 0; i < sides; i++) {
		const x = Math.cos(i * angleStep + offset) * radius;
		const y = Math.sin(i * angleStep + offset) * radius;
		if (i === 0) shape.moveTo(x, y);
		else shape.lineTo(x, y);
	}
	return shape;
}

export default Glass;
