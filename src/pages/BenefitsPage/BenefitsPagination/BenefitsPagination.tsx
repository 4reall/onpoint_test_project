import Pagination from 'components/Pagination/Pagination';
import styles from './benefitsPagination.module.scss';

const list = [
	'Lorem ipsum dolor sit amet.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, neque.',
	'Lorem ipsum dolor sit amet, consectetur.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing.',
	'Lorem ipsum dolor sit amet.',
	'Lorem ipsum dolor sit amet, consectetur adipisicing.',
];

const ITEMS_PER_PAGE = 3;

const concatZero = (number: number) => (number < 10 ? '0' + number : number);

const BenefitsPagination = () => {
	return (
		<Pagination
			controlsPosition={{
				bottom: 30,
				left: 221,
			}}
			itemsPerPage={ITEMS_PER_PAGE}
		>
			{list.map((item, i) => (
				<div key={Date.now() + i} className={styles.listItem}>
					<span className={styles.listItemNumber}>
						{concatZero(i + 1)}
					</span>
					<p className={styles.listItemText}>{item}</p>
				</div>
			))}
		</Pagination>
	);
};

export default BenefitsPagination;
