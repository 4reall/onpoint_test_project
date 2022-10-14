import Screen from 'components/Screen/Screen';
import { PropsWithChildren } from 'react';
import FloatImage from 'components/FloatImage/FloatImage';
import styles from 'pages/Note/NotePageLayout/notePageLayout.module.scss';
import sperm from 'assets/images/pink_sperm.png';

const NotePageLayout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<Screen className={styles.screen}>
			<div className={styles.content}>{children}</div>
			<FloatImage className={styles.blurBlue} />
			<FloatImage
				className={styles.blurPink}
				position={{ top: -20, right: -40 }}
				rotate={30}
				zIndex={1}
			/>
			<FloatImage
				className={styles.blurBlue}
				position={{ top: -100, right: -150 }}
				rotate={30}
				zIndex={1}
			/>
			<FloatImage position={{ top: 400, right: 200 }} zIndex={1} />
			<FloatImage
				zIndex={3}
				position={{ top: 50, right: -270 }}
				w={900}
				h={500}
				rotate={25}
				className={styles.fadeInAnimation1}
			>
				<img src={sperm} />
			</FloatImage>
			<FloatImage
				zIndex={3}
				position={{ top: 100, right: -290 }}
				w={700}
				h={300}
				rotate={25}
				opacity={70}
				className={styles.fadeInAnimation2}
			>
				<img src={sperm} />
			</FloatImage>
			<FloatImage
				zIndex={0}
				position={{ top: 60, right: -30 }}
				w={300}
				h={150}
				rotate={25}
				opacity={70}
				className={styles.fadeInAnimation2}
			>
				<img src={sperm} />
			</FloatImage>
			<FloatImage
				zIndex={3}
				position={{ top: 420, right: -450 }}
				w={600}
				h={250}
				rotate={25}
				opacity={70}
				className={styles.fadeInAnimation2}
			>
				<img src={sperm} />
			</FloatImage>
			<FloatImage
				position={{ top: 520, right: -170 }}
				w={300}
				h={150}
				rotate={25}
				opacity={70}
				blur={1}
				className={styles.fadeInAnimation2}
			>
				<img src={sperm} />
			</FloatImage>
		</Screen>
	);
};

export default NotePageLayout;
