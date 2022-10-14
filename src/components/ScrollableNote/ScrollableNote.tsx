import { PropsWithChildren, useRef, useState } from 'react';
import styles from './scrollableNote.module.scss';
import Slider from 'components/Slider/Slider';

const ScrollableNote = ({
	children,
	height,
}: PropsWithChildren<{ height?: number }>) => {
	const [progress, setProgress] = useState(0);
	const noteRef = useRef<HTMLDivElement>(null);

	const handleSlide = (number: number) => {
		if (!noteRef.current) return;

		const scroll =
			(number / 100) *
			(noteRef.current.scrollHeight -
				noteRef.current.getBoundingClientRect().height);
		noteRef.current.scrollTop = scroll;
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
