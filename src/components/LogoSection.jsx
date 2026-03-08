import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
	return (
		<div className="flex-none flex-center marquee-item md:w-20 w-7">
			<img src={icon.imgPath} alt={icon.name} />
		</div>
	);
};
const LogoSection = () => {
	return (
		<div className="md:my-20 my-10 relative">
			<div className="gradient-edge"></div>
			<div className="gradient-edge"></div>

			<div className="marquee h-52">
				<div className="marquee-box md:gap-20 gap-10">
					{logoIconsList.map(icon => (
						<LogoIcon key={icon.name} icon={icon} />
					))}

					{logoIconsList.map(icon => (
						<LogoIcon key={icon.name} icon={icon} />
					))}

					{logoIconsList.map(icon => (
						<LogoIcon key={icon.name} icon={icon} />
					))}
				</div>
			</div>
		</div>
	);
};

export default LogoSection;
