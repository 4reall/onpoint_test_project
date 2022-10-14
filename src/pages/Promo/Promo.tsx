import styles from './styles.module.scss';
import PromoLayout from 'pages/Promo/PromoLayout/PromoLayout';
import Button from 'components/Button/Button';

const Promo = () => {
	return (
		<PromoLayout>
			<div className={styles.container}>
				<span className={styles.subtitle}>Привет,</span>
				<span className={styles.title}>
					Это <span className={styles.bold}>не</span> коммерческое
					задание
				</span>
				<div className={styles.buttonContainer}>
					<Button>Что дальше?</Button>
				</div>
			</div>
		</PromoLayout>
	);
};

export default Promo;
