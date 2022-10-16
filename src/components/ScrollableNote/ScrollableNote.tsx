import { PropsWithChildren, useRef } from 'react';
import styles from './scrollableNote.module.scss';
import Slider from 'components/Slider/Slider';

const ScrollableNote = ({
	children,
	height,
}: PropsWithChildren<{ height?: number }>) => {
	const noteRef = useRef<HTMLDivElement>(null);

	const handleSlide = (number: number) => {
		if (!noteRef.current) return;

		noteRef.current.scrollTop =
			(number / 100) *
			(noteRef.current.scrollHeight -
				noteRef.current.getBoundingClientRect().height);
	};

	return (
		<div className={styles.container} style={{ height }}>
			<Slider setProgress={handleSlide} />
			<div ref={noteRef} className={styles.note}>
				{children}
			</div>
		</div>
	);
};

export default ScrollableNote;
