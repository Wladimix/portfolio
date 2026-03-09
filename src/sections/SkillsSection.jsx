import TitleHeader from "../components/TitleHeader";
import { skills } from "../constants";
import GlowCard from "../components/GlowCard";

const SkillsSection = () => {
	return (
		<section className="flex-center section-padding">
			<div className="w-full h-full md:px-10 px-5">
				<TitleHeader id="skills" title="Навыки" />

				<div className="lg:columns-3 md:columns-2 columns-1 mt-16">
					{skills.map(skill => (
						<GlowCard card={skill} stars={skill.stars}>
							<div className="flex items-center gap-3">
								<div className="md:w-10 w-7">
									<img src={skill.imgPath} alt={skill.name} />
								</div>
								<div>
									<h1
										className={`font-bold text-2xl text-[${skill.color}]`}
									>
										{skill.name}
									</h1>
									<p className="text-white-50">
										{skill.level}
									</p>
								</div>
							</div>
						</GlowCard>
					))}
				</div>
			</div>
		</section>
	);
};

export default SkillsSection;
