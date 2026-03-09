import { OrbitControls, Environment } from "@react-three/drei";
import Photo from "./Photo";
import Glass from "./Glass";
import AnimatedGroup from "./AnimatedGroup";
import { useMediaQuery } from "react-responsive";

const Scene = () => {
	const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
	const hdriUrl = "models/royal_esplanade_2k.hdr";

	return (
		<>
			{!isMobile && (
				<>
					<ambientLight intensity={1.0} />
					<directionalLight position={[-5, 2, -10]} intensity={3.0} />
					<directionalLight position={[0, 10, 0]} intensity={2.0} />
					<directionalLight position={[0, 2, 10]} intensity={1.0} />

					<Environment files={hdriUrl} intensity={1.0} background={false} />
				</>
			)}

			{isMobile && (
				<ambientLight intensity={0.3} />
			)}

			<AnimatedGroup isMobile={isMobile}>
				<Photo isMobile={isMobile} />
				{!isMobile && <Glass />}
			</AnimatedGroup>

			<OrbitControls
				enableDamping
				enablePan={false}
				enableZoom={!isTablet}
				enableRotate={!isTablet}
				enabled={!isMobile}
			/>
		</>
	);
};

export default Scene;
