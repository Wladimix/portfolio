import { useEffect, useMemo, useState } from "react";
import * as THREE from "three";

const Photo = ({ isMobile }) => {
	const [texture, setTexture] = useState(null);
	const [aspectRatio, setAspectRatio] = useState(1);

	useEffect(() => {
		const loader = new THREE.TextureLoader();
		let loadedTexture = null;

		loader.load("images/hero.png", tex => {
			tex.colorSpace = THREE.SRGBColorSpace;
			loadedTexture = tex;
			setTexture(tex);
			if (tex.image) {
				setAspectRatio(tex.image.width / tex.image.height);
			}
		});

		return () => {
			if (loadedTexture) {
				loadedTexture.dispose();
			}
		};
	}, []);

	const scale = useMemo(() => {
		const photoScale = isMobile ? 4 : 1.2;
		const safeMargin = 1.0;
		const finalScale = photoScale * safeMargin;

		return aspectRatio > 1 ?
				[finalScale, finalScale / aspectRatio, 1]
			:	[finalScale * aspectRatio, finalScale, 1];
	}, [aspectRatio, isMobile]);

	if (!texture) return null;

	return (
		<mesh position={[0, 0, 0.01]} renderOrder={0} scale={scale}>
			<planeGeometry args={[1, 1]} />
			<meshBasicMaterial
				map={texture}
				side={THREE.DoubleSide}
				transparent={false}
				depthWrite={true}
			/>
		</mesh>
	);
};

export default Photo;
