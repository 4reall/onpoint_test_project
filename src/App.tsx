import BenefitsPage from 'pages/BenefitsPage/Benefits.page';
import Carousel from 'components/Carousel/Carousel';
import PromoPage from 'pages/PromoPage/Promo.page';
import NotePage from 'pages/NotePage/Note.page';

const App = () => {
	return (
		<>
			<Carousel
				width={document.documentElement.clientWidth}
				height={document.documentElement.clientHeight}
			>
				<PromoPage />
				<NotePage />
				<BenefitsPage />
			</Carousel>

			{/*<PromoPage/>*/}
		</>
	);
};

export default App;
