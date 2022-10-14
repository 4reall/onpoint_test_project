import styles from 'components/FloatImage/floatImage.module.scss';
import { CSSProperties, PropsWithChildren } from 'react';
import classNames from 'classnames';

interface FloatImageProps {
	zIndex?: number;
	position?: {
		left?: number;
		right?: number;
		top?: number;
		bottom?: number;
	};
	rotate?: number;
	w?: number;
	h?: number;
	blur?: number;
	opacity?: number;
	backgroundColor?: CSSProperties['backgroundColor'];
	className?: string;
}

const FloatImage = ({
	zIndex,
	children,
	rotate,
	position,
	w,
	h,
	opacity,
	blur,
	className,
	backgroundColor,
}: PropsWithChildren<FloatImageProps>) => {
	return (
		<span
			className={classNames(styles.floatImage, className)}
			style={{
				zIndex,
				...position,
				transform: `rotate(${rotate}deg)`,
				width: w,
				height: h,
				filter: `blur(${blur}px)`,
				opacity: opacity + '%',
				backgroundColor,
			}}
		>
			{children}
		</span>
	);
};

export default FloatImage;
