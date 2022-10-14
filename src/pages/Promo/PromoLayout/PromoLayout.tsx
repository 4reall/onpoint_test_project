import bg from 'assets/bg.png';
import FloatImage from 'components/FloatImage/FloatImage';
import sperm from 'assets/pink_sperm.png';
import ball from 'assets/blue_ball.png';
import virus from 'assets/blue_virus.png';
import cell from 'assets/blue_cell.png';
import worm from 'assets/blue_worm.png';
import Screen from 'components/Screen/Screen';
import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

const PromoLayout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<Screen background={bg}>
			{children}
			<FloatImage
				zIndex={3}
				position={{ top: 85, right: -25 }}
				w={650}
				h={250}
			>
				<img src={sperm} />
			</FloatImage>
			<FloatImage
				className={styles.floatingAnimation1}
				zIndex={3}
				position={{ top: 60, right: 216 }}
				w={66}
				h={66}
			>
				<img src={ball} />
			</FloatImage>
			<FloatImage
				className={styles.circularAnimation}
				zIndex={3}
				position={{ top: 180, right: 60 }}
				w={120}
				h={120}
			>
				<img src={virus} />
			</FloatImage>
			<FloatImage
				zIndex={3}
				position={{ bottom: 0, right: 260 }}
				w={350}
				h={150}
				className={styles.scaleAnimation}
			>
				<img src={cell} />
			</FloatImage>
			<FloatImage
				className={styles.floatingAnimation2}
				position={{ bottom: 200, left: 33 }}
				w={70}
				h={70}
				rotate={180}
			>
				<img src={ball} />
			</FloatImage>
			<FloatImage
				zIndex={3}
				position={{ bottom: -50, left: -210 }}
				w={500}
				h={200}
				rotate={160}
				blur={7}
				opacity={76}
			>
				<img src={sperm} />
			</FloatImage>
			<FloatImage
				position={{ bottom: 70, left: 340 }}
				w={50}
				h={50}
				opacity={90}
				blur={12}
			>
				<img src={ball} />
			</FloatImage>
			<FloatImage position={{ top: 80, left: -5 }} w={130} h={130}>
				<img src={worm} />
			</FloatImage>
		</Screen>
	);
};

export default PromoLayout;
