import gsap from "gsap";
import GlowCard from "../components/GlowCard";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../constants";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
	const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

	useGSAP(() => {
		if (!isMobile) {
			gsap.utils.toArray(".timeline-card").forEach(card => {
				gsap.from(card, {
					xPercent: -100,
					opacity: 0,
					transformOrigin: "left left",
					duration: 1,
					ease: "power2.inOut",
					scrollTrigger: {
						trigger: card,
						start: "top 98%",
					},
				});
			});

			gsap.utils.toArray(".expText").forEach(text => {
				gsap.from(text, {
					x: 50,
					opacity: 0,
					duration: 1,
					ease: "power2.inOut",
					scrollTrigger: {
						trigger: text,
						start: "top 95%",
					},
				});
			});
		}
	}, []);

	return (
		<section className="w-full md:mt-40 mt-20 section-padding xl:px-0">
			<div className="w-full h-full md:px-20 px-5">
				<TitleHeader title="Участие в проектах" />

				<div className="mt-32 relative">
					<div className="relative z-50 xl:space-y-32 space-y-10">
						{expCards.map((card, index) => (
							<div key={card.title} className="exp-card-wrapper">
								<div className="xl:w-2/6">
									<GlowCard
										card={card}
										index={index}
										stars={0}
									/>
								</div>

								<div className="xl:w-4/6">
									<div className="flex items-start">
										<div className="expText flex xl:gap-20 md:gap-10 gap-5 relative border-l-2 border-gradient-line pl-10">
											<div className="timeline-logo absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
												<img
													src={card.logoPath}
													alt="logo"
												/>
											</div>

											<div>
												<h1 className="font-semibold text-3xl mb-2">
													{card.title}
												</h1>

												{card.company && (
													<p className="text-blue-50 italic">
														Компания:
													</p>
												)}

												{card.company && (
													<p className="text-amber-300 mb-4">
														{card.company}
													</p>
												)}

												<p className="text-blue-50 italic">
													Задачи и обязанности
												</p>

												<ul className="list-disc ms-5 mb-2 flex flex-col gap-3 text-white-50">
													{card.responsibilities.map(
														responsibility => (
															<li
																key={
																	responsibility
																}
																className="text-lg"
															>
																{responsibility}
															</li>
														),
													)}
												</ul>

												<p className="text-blue-50 italic">
													Стек технологий
												</p>

												<ul className="list-disc ms-7 text-cyan-400">
													{card.technologies.map(
														technology => (
															<li
																key={technology}
																className="text-lg"
															>
																{technology}
															</li>
														),
													)}
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ExperienceSection;
