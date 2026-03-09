import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const HeroVisual = () => {
	const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

	return (
		<Canvas
			className="w-full h-screen"
			camera={{ position: [0, 0, 7], fov: 45, near: 0.1, far: 100 }}
			dpr={isMobile ? [1, 1.5] : [1, 2]}
			gl={{
				antialias: !isMobile,
				alpha: true,
				powerPreference: "high-performance",
			}}
		>
			<color attach="background" args={["black"]} />
			<Scene />
		</Canvas>
	);
};

export default HeroVisual;
