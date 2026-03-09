import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import Hero from "./sections/HeroSection";
import ExperienceSection from "./sections/ExperienceSection";

const App = () => {
	return (
		<>
			<NavBar />
			<Hero />
			<ExperienceSection />
			<LogoSection />
		</>
	);
};

export default App;
