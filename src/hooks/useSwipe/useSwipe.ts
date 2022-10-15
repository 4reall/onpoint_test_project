import { useEffect, useRef } from 'react';

import { RefObject } from 'react';

export interface UseSwipeOptions {
	// ref of the container where you want to attach swipe event
	ref: RefObject<HTMLElement>;
	// number of pixels to move your finger to trigger a swipe event.
	// Larger this value means less sensitivity. Default value is 5 (5px)
	thresholdPX?: number;
	leftCallback: () => void;
	rightCallback: () => void;
}

const useSwipe = ({
	ref,
	thresholdPX = 5,
	leftCallback,
	rightCallback,
}: UseSwipeOptions) => {
	const x1 = useRef(0);

	function handleTouchStart(event: TouchEvent) {
		x1.current = event.changedTouches[0].clientX;
	}

	function handleTouchEnd(event: TouchEvent) {
		console.log(2);
		const x2 = event.changedTouches[0].clientX;

		console.log(x1.current, x2);

		if (Math.abs(x2 - x1.current) < thresholdPX) return;

		if (x2 > x1.current) leftCallback();
		else rightCallback();
	}

	useEffect(() => {
		const currentElement = ref.current;

		if (currentElement) {
			currentElement.addEventListener('touchstart', handleTouchStart);
			currentElement.addEventListener('touchend', handleTouchEnd);
		}

		return () => {
			if (!currentElement) return;
			currentElement.removeEventListener('touchstart', handleTouchStart);
			currentElement.removeEventListener('touchend', handleTouchEnd);
		};
	});
};

export default useSwipe;
