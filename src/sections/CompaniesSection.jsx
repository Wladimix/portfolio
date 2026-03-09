import { companies } from "../constants";
import TitleHeader from "../components/TitleHeader";

const CompaniesSection = () => {
	return (
		<section id="companies">
			<div className="w-full padding-x-lg">
				<TitleHeader title="Компании" className="mb-20" />

				<div className="mx-auto grid-3-cols">
					{companies.map(({ date, title, post }) => (
						<div
							key={title}
							className="card-border rounded-xl p-8 flex flex-col gap-4"
						>
							<h3 className="text-white text-2xl font-semibold">
								{title}
							</h3>
							<p className="text-white-50 text-lg">{post}</p>
							<p className="text-orange-400">🗓️&nbsp;{date}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CompaniesSection;
