import styles from 'pages/Promo/promo.module.scss';
import PromoLayout from 'pages/Promo/PromoLayout/PromoLayout';
import Button from 'components/Button/Button';

const Promo = () => {
	return (
		<PromoLayout>
			<div className={styles.container}>
				<span className={styles.subtitle}>Привет,</span>
				<span className={styles.title}>
					Это <strong>не</strong> коммерческое задание
				</span>
				<div className={styles.buttonContainer}>
					<Button>Что дальше?</Button>
				</div>
			</div>
		</PromoLayout>
	);
};

export default Promo;
