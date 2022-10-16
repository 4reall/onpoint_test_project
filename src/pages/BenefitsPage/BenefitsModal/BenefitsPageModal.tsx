import { useState } from 'react';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import BenefitsPagination from 'pages/BenefitsPage/BenefitsPagination/BenefitsPagination';

import styles from './benefitsPageModal.module.scss';

const BenefitsPageModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Button onClick={handleClick}>Подробнее</Button>
			<Modal
				isOpen={isOpen}
				setIsOpen={handleClick}
				contentClasses={styles.content}
			>
				<h2 className={styles.subtitle}>Преимущества</h2>
				<h1 className={styles.title}>
					brend<strong>xy</strong>
				</h1>
				<BenefitsPagination />
			</Modal>
		</>
	);
};

export default BenefitsPageModal;
