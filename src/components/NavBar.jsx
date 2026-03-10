import { useEffect, useState } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			setScrolled(isScrolled);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
			<div className="inner">
				<a className="logo" href="#hero">
					Владимир Максимов
				</a>

				<nav className="desktop">
					<ul>
						{navLinks.map(({ link, name }) => (
							<li key={name} className="group">
								<a href={link}>
									<span>{name}</span>
									<span className="underline"></span>
								</a>
							</li>
						))}
					</ul>
				</nav>

				<a
					href="https://ukhta.hh.ru/resume/f519587bff1036af350039ed1f6b39314f3077"
					className="resume-btn group"
					target="blank"
				>
					<div className="inner">
						<span>Моё резюме</span>
					</div>
				</a>
			</div>
		</header>
	);
};

export default NavBar;
