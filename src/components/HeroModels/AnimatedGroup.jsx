import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimatedGroup = ({ children, isMobile }) => {
	const groupRef = useRef();
	const timeRef = useRef(0);

	useFrame((_, delta) => {
		timeRef.current += delta;

		groupRef.current.rotation.y += delta * 0.5;

		groupRef.current.rotation.x = Math.cos(timeRef.current * 0.5) * 0.2;

		groupRef.current.rotation.z =
			Math.sin(timeRef.current * 0.3 * 0.7) * 0.1;
	});

	return (
		<group
			ref={groupRef}
			scale={isMobile ? 0.9 : 1.4}
			position={[0, isMobile ? -0.9 : 0, 0]}
		>
			{children}
		</group>
	);
};

export default AnimatedGroup;
