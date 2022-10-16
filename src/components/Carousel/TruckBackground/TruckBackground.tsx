import FloatImage from 'components/FloatImage/FloatImage';
import styles from './truckBackground.module.scss';
import onpoint from 'assets/images/onpoint.png';

interface TruckBackgroundProps {
	slidesNumber: number;
}

const TruckBackground = ({ slidesNumber }: TruckBackgroundProps) => {
	return (
		<>
			<FloatImage className={styles.blurBlue} />
			<FloatImage
				className={styles.blurBlue}
				position={{
					left: Math.ceil(100 / slidesNumber) + '%',
					bottom: -50,
				}}
			/>
			<FloatImage
				className={styles.blurPink}
				position={{
					top: -20,
					left: 2 * Math.ceil(100 / slidesNumber) - 12 + '%',
				}}
				rotate={30}
				zIndex={1}
			/>
			<FloatImage
				className={styles.blurBlue}
				position={{
					top: -120,
					left: 2 * Math.ceil(100 / slidesNumber) - 4 + '%',
				}}
				rotate={30}
				zIndex={1}
			/>
			<FloatImage
				className={styles.blurBlue}
				w={400}
				position={{
					top: -140,
					left: 2 * Math.ceil(100 / slidesNumber) + 3 + '%',
				}}
				rotate={-4}
				zIndex={1}
			/>
			<FloatImage
				position={{
					bottom: 15,
					left: '2.7%',
				}}
				zIndex={50}
			>
				<img src={onpoint} />
			</FloatImage>
			<FloatImage
				position={{
					bottom: 15,
					left: Math.ceil(100 / slidesNumber) + 1.5 + '%',
				}}
				zIndex={50}
			>
				<img src={onpoint} />
			</FloatImage>
			<FloatImage
				position={{
					bottom: 15,
					left: 2 * Math.ceil(100 / slidesNumber) + 1 + '%',
				}}
				zIndex={50}
			>
				<img src={onpoint} />
			</FloatImage>
		</>
	);
};

export default TruckBackground;
