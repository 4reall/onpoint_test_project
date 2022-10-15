import styles from 'pages/PromoPage/promo.module.scss';
import PromoLayoutPage from 'pages/PromoPage/PromoPageLayout/PromoPageLayout';
import Button from 'components/Button/Button';

const PromoPage = () => {
	return (
		<PromoLayoutPage>
			<div className={styles.container}>
				<span className={styles.subtitle}>Привет,</span>
				<span className={styles.title}>
					Это <strong>не</strong> коммерческое задание
				</span>
				<div className={styles.buttonContainer}>
					<Button>Что дальше?</Button>
				</div>
			</div>
		</PromoLayoutPage>
	);
};

export default PromoPage;
