import { useEffect, useState } from "react";
import * as THREE from "three";

const Photo = () => {
	console.log("Photo");
	const [texture, setTexture] = useState(null);
	const [aspectRatio, setAspectRatio] = useState(1);

	useEffect(() => {
		const loader = new THREE.TextureLoader();
		loader.load("/images/hero.png", tex => {
			tex.colorSpace = THREE.SRGBColorSpace;
			setTexture(tex);
			if (tex.image) {
				setAspectRatio(tex.image.width / tex.image.height);
			}
		});

		return () => {
			if (texture) {
				texture.dispose();
			}
		};
	}, [texture]);

	const photoScale = 1.2;
	const safeMargin = 1.0;
	const finalScale = photoScale * safeMargin;

	const scale =
		aspectRatio > 1 ?
			[finalScale, finalScale / aspectRatio, 1]
		:	[finalScale * aspectRatio, finalScale, 1];

	if (!texture) return null;

	return (
		<mesh position={[0, 0, 0.01]} renderOrder={0} scale={scale}>
			<planeGeometry args={[1, 1]} />
			<meshStandardMaterial
				map={texture}
				side={THREE.DoubleSide}
				color="#ffffff"
				roughness={0.2}
				metalness={0.1}
				transparent={false}
				alphaTest={0.5}
				depthWrite={true}
			/>
		</mesh>
	);
};

export default Photo;
