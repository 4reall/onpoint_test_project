import styles from './carousel.module.scss';
import {
	Children,
	PropsWithChildren,
	useEffect,
	useRef,
	useState,
	TouchEvent,
} from 'react';
import useSwipe from 'hooks/useSwipe/useSwipe';
import { log } from 'util';

interface CarouselProps {
	width: number;
	height: number;
}

const Carousel = ({
	children,
	width,
	height,
}: PropsWithChildren<CarouselProps>) => {
	const [slideNumber, setSideNumber] = useState(0);
	const windowRef = useRef<HTMLDivElement>(null);

	const handleLeftClick = () => {
		if (slideNumber === 0) return;
		setSideNumber((state) => state - 1);
	};
	const handleRightClick = () => {
		if (slideNumber === Children.count(children) - 1) return;
		setSideNumber((state) => state + 1);
	};
	const handleClick = () => {};

	useSwipe({
		ref: windowRef,
		thresholdPX: 30,
		leftCallback: handleLeftClick,
		rightCallback: handleRightClick,
	});

	return (
		<>
			<div
				ref={windowRef}
				className={styles.window}
				style={{ width, height }}
			>
				<div
					className={styles.truck}
					style={{
						width: +width * Children.count(children),
						left: -width * slideNumber,
					}}
				>
					{Children.map(children, (child) => (
						<div
							key={Date.now()}
							className={styles.slide}
							style={{ width }}
						>
							{child}
						</div>
					))}
				</div>
			</div>
			{/*<div className={styles.controls}>*/}
			{/*	<button*/}
			{/*		onClick={handleLeftClick}*/}
			{/*		className={styles.controlsArrowLeft}*/}
			{/*	/>*/}
			{/*	<button*/}
			{/*		onClick={handleRightClick}*/}
			{/*		className={styles.controlsArrowRight}*/}
			{/*	/>*/}
			{/*</div>*/}
		</>
	);
};

export default Carousel;
