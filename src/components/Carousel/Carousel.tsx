import { Children, PropsWithChildren, useRef } from 'react';
import useSwipe from 'hooks/useSwipe';
import TruckBackground from 'components/Carousel/TruckBackground/TruckBackground';
import styles from './carousel.module.scss';

interface CarouselProps {
	width: number;
	height: number;
	slideNumber: number;
	setSideNumber: (slideNumber: number) => void;
}

const Carousel = ({
	children,
	width,
	height,
	slideNumber,
	setSideNumber,
}: PropsWithChildren<CarouselProps>) => {
	const windowRef = useRef<HTMLDivElement>(null);

	const handleLeftClick = () => {
		if (slideNumber === 0) return;
		setSideNumber(slideNumber - 1);
	};
	const handleRightClick = () => {
		if (slideNumber === Children.count(children) - 1) return;
		setSideNumber(slideNumber + 1);
	};

	useSwipe({
		ref: windowRef,
		thresholdPX: 50,
		leftCallback: handleLeftClick,
		rightCallback: handleRightClick,
	});

	return (
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
				<TruckBackground slidesNumber={Children.count(children)} />
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
	);
};

export default Carousel;
