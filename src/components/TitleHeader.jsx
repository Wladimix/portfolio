const TitleHeader = ({ title, className }) => {
	return (
		<div
			className={`${className} font-semibold md:text-5xl text-3xl text-center`}
		>
			{title}
		</div>
	);
};

export default TitleHeader;
