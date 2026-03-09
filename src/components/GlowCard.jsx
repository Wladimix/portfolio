import { useRef } from "react";

const GlowCard = ({ card, children, index, stars }) => {
	const cardRefs = useRef([]);

	const handleMouseMove = index => e => {
		const card = cardRefs.current[index];
		if (!card) return;

		const rect = card.getBoundingClientRect();
		const mouseX = e.clientX - rect.left - rect.width / 2;
		const mouseY = e.clientY - rect.top - rect.height / 2;

		let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);

		angle = (angle + 360) % 360;

		card.style.setProperty("--start", angle + 60);
	};

	const renderStars = stars => {
		return stars ?
				<div className="flex items-center gap-1 mb-5">
					{Array.from({ length: stars }, (_, i) => (
						<img
							src="images/star.png"
							key={i}
							alt="star"
							className="size-5"
						/>
					))}
				</div>
			:	"";
	};

	return (
		<div
			ref={el => (cardRefs.current[index] = el)}
			onMouseMove={handleMouseMove(index)}
			className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
		>
			<div className="glow" />

			{renderStars(stars)}

			{card.descriptionHeader && (
				<p className="text-blue-50 italic">{card.descriptionHeader}</p>
			)}

			<div className="mb-5">
				<p className="text-white-50 text-lg">{card.description}</p>
			</div>

			{card.extraHeader && (
				<p className="text-blue-50 italic">{card.extraHeader}</p>
			)}
			{card.extra && (
				<div className="mb-5">
					<p className="text-white-50 text-lg">{card.extra}</p>
				</div>
			)}

			{children}
		</div>
	);
};

export default GlowCard;
