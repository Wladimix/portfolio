import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";
import CompaniesSection from "./sections/CompaniesSection";

const App = () => {
	return (
		<>
			<NavBar />
			<HeroSection />
			<CompaniesSection />
			<ExperienceSection />
			<LogoSection />
		</>
	);
};

export default App;
