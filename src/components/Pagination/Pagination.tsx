import {
	Children,
	PropsWithChildren,
	ReactNode,
	useEffect,
	useState,
} from 'react';
import cn from 'classnames';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import styles from 'components/Pagination/pagination.module.scss';

interface PaginationProps {
	itemsPerPage: number;
	controlsPosition?: {
		left?: number;
		right?: number;
		bottom?: number;
		top?: number;
	};
}

const Pagination = ({
	children,
	itemsPerPage,
	controlsPosition,
}: PropsWithChildren<PaginationProps>) => {
	const [currentPage, setCurrentPage] = useState(0);
	const [page, setPage] = useState<ReactNode[]>([]);

	const pageNumber = Math.ceil(Children.count(children) / itemsPerPage);

	const handleLeftClick = () => {
		if (currentPage === 0) return;
		setCurrentPage((state) => state - 1);
	};
	const handleRightClick = () => {
		if (currentPage === pageNumber - 1) return;
		setCurrentPage((state) => state + 1);
	};
	const handleClick = (slide: number) => () => setCurrentPage(slide);

	useEffect(() => {
		const items = Children.toArray(children);

		setPage(
			items.slice(
				currentPage * itemsPerPage,
				currentPage * itemsPerPage + itemsPerPage
			)
		);
	}, [currentPage]);

	const dots = new Array(pageNumber)
		.fill('')
		.map((_, i) => (
			<button
				onClick={handleClick(i)}
				className={cn(
					styles.controlsDot,
					i === currentPage && styles.controlsDotActive
				)}
			/>
		));

	return (
		<>
			<div className={styles.page}>
				<SwitchTransition mode="out-in">
					<CSSTransition
						key={currentPage}
						classNames={{
							enter: styles.fadeInEnter,
							enterActive: styles.fadeInEnterActive,
							exit: styles.fadeInExit,
							exitActive: styles.fadeInExitActive,
						}}
						timeout={200}
					>
						<div>{page}</div>
					</CSSTransition>
				</SwitchTransition>
			</div>
			<div style={{ ...controlsPosition }} className={styles.controls}>
				<button
					onClick={handleLeftClick}
					className={styles.controlsArrowLeft}
				/>
				<div className={styles.controlsDots}>{dots}</div>
				<button
					onClick={handleRightClick}
					className={styles.controlsArrowRight}
				/>
			</div>
		</>
	);
};

export default Pagination;
