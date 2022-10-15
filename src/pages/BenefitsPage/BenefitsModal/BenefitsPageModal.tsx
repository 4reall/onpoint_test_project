import { useState } from 'react';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import styles from './benefitsPageModal.module.scss';
import Carousel from 'components/Carousel/Carousel';

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
				{/*<Carousel width={300}>*/}
				{/*	<div className={styles.redBox}>132</div>*/}
				{/*	<div className={styles.greenBox}>123</div>*/}
				{/*	<div className={styles.blueBox}>123</div>*/}
				{/*</Carousel>*/}
			</Modal>
		</>
	);
};

export default BenefitsPageModal;
