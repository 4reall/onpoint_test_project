import styles from './styles.module.scss';
import Slider from 'components/Slider/Slider';
import { useRef } from 'react';

const ScrollableNote = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	return (
		<div ref={containerRef} className={styles.container}>
			<div className={styles.note}></div>
			<Slider
				containerHeight={
					containerRef.current?.getBoundingClientRect().height
				}
				setProgress={() => {}}
			/>
		</div>
	);
};

export default ScrollableNote;
