import { useState } from 'react';

import BenefitsPage from 'pages/BenefitsPage/Benefits.page';
import Carousel from 'components/Carousel/Carousel';
import PromoPage from 'pages/PromoPage/Promo.page';
import NotePage from 'pages/NotePage/Note.page';
import Header from 'components/Header/Header';

const App = () => {
	const [slideNumber, setSlideNumber] = useState(0);

	const handleButtonClick = () => setSlideNumber(1);
	const handleHomeClick = () => {
		if (slideNumber !== 0) setSlideNumber(0);
	};

	return (
		<>
			<Header onClick={handleHomeClick} />
			<Carousel
				setSideNumber={(slideNumber) => setSlideNumber(slideNumber)}
				slideNumber={slideNumber}
				width={document.documentElement.clientWidth}
				height={document.documentElement.clientHeight}
			>
				<PromoPage onButtonClick={handleButtonClick} />
				<NotePage />
				<BenefitsPage />
			</Carousel>
		</>
	);
};

export default App;
