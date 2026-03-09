const ElectricBorderCard = () => {
	return (
		<div className="card-container">
			<div className="inner-container">
				<div className="border-outer">
					<div className="main-card">
						<div className="glow-layer-1"></div>
						<div className="glow-layer-2"></div>
						<div className="overlay-1"></div>
						<div className="overlay-2"></div>
						<div className="background-glow"></div>

						<div className="content-container">
							<div className="content-top">
								<a href="#" className="scrollbar-glass">Резюме</a>
								<p className="title">Обо мне</p>
							</div>

							<hr className="divider" />

							<div className="content-bottom">
								<p className="description">
									Привет! Я ищу работу на позицию разработчика в сфере JavaScript/TypeScript.
									Мне интересны как backend, так и frontend, так как я успел поработать в обоих
									направлениях (но для начала я бы хотел развиваться в одном из этих направлений).
									Также попробовал себя в качестве системного администратора, но всё же решил,
									что хочу развиваться именно как разработчик. Хочу попасть в коллектив, в котором
									ценится грамотно написанный и читаемый код. Мне будет интересно при необходимости
									выполнить тестовое задание и рассказать подробней о себе на собеседовании.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ElectricBorderCard;
