import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

const HeroVisual = () => {
	console.log("HeroVisual");
	return (
		<Canvas
			camera={{ position: [0, 0, 7], fov: 45, near: 0.1, far: 100 }}
			style={{ width: "100%", height: "100vh" }}
			dpr={window.devicePixelRatio}
			gl={{
				antialias: true,
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
