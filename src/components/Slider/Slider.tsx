import styles from 'components/Slider/slider.module.scss';
import {useState, TouchEvent, useRef} from 'react';

interface SliderProps {
	setProgress: (number: number) => void;
}

const Slider = ({setProgress}: SliderProps) => {
	const [offset, setOffset] = useState(0);
	const [dragging, setDragging] = useState(false);
	const shiftY = useRef(0);
	const truckRef = useRef<HTMLSpanElement>(null);

	const handleTouchStart = (e: TouchEvent<HTMLSpanElement>) => {
		if (!truckRef.current) return;

		setDragging(true);

		// deference between touch y and thumb y + top offset
		shiftY.current =
			e.touches[0].clientY -
			e.currentTarget.getBoundingClientRect().top +
			truckRef.current?.getBoundingClientRect().top;
	};

	const handleTouchMove = (e: TouchEvent<HTMLSpanElement>) => {
		if (!dragging || !truckRef.current) return;

		const y = e.touches[0].clientY - shiftY.current;
		const maxHeight =
			truckRef.current?.getBoundingClientRect().height -
			e.currentTarget.getBoundingClientRect().height;

		console.log(y)

		// top limit
		if (y < 0) {
			setOffset(0);
			return;
		}
		// bottom limit
		if (y > maxHeight) {
			setOffset(maxHeight);
			return;
		}

		setOffset(y);
		// normalize to 0-100 range
		setProgress((y / maxHeight) * 100);
	};

	const handleTouchEnd = () => {
		setDragging(false);
	};

	return (
		<div className={styles.container}>
			<span
				onTouchStart={handleTouchStart}
				onTouchMove={handleTouchMove}
				onTouchEnd={handleTouchEnd}
				style={{top: offset}}
				className={styles.slider}
			/>
			<span ref={truckRef} className={styles.truck}/>
		</div>
	);
};

export default Slider;
