import { ComponentPropsWithoutRef } from 'react';
import PromoLayoutPage from 'pages/PromoPage/PromoPageLayout/PromoPageLayout';
import Button from 'components/Button/Button';
import styles from 'pages/PromoPage/promo.module.scss';

interface PromoPage {
	onButtonClick: ComponentPropsWithoutRef<'button'>['onClick'];
}

const PromoPage = ({ onButtonClick }: PromoPage) => {
	return (
		<PromoLayoutPage>
			<div className={styles.container}>
				<span className={styles.subtitle}>Привет,</span>
				<span className={styles.title}>
					Это <strong>не</strong> коммерческое задание
				</span>
				<div className={styles.buttonContainer}>
					<Button onClick={onButtonClick}>Что дальше?</Button>
				</div>
			</div>
		</PromoLayoutPage>
	);
};

export default PromoPage;
