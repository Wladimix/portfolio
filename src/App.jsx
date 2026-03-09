import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";
import CompaniesSection from "./sections/CompaniesSection";
import SkillsSection from "./sections/SkillsSection";

const App = () => {
	return (
		<>
			<NavBar />
			<HeroSection />
			<CompaniesSection />
			<ExperienceSection />
			<SkillsSection />
			<LogoSection />
		</>
	);
};

export default App;
