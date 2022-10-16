import { PropsWithChildren } from 'react';

import Screen from 'components/Screen/Screen';
import FloatImage from 'components/FloatImage/FloatImage';

import bottle from 'assets/images/benefits/bottle.png';
import dish from 'assets/images/benefits/dish.png';
import schedule from 'assets/images/benefits/schedule.png';
import styles from './benefitsPageLayout.module.scss';

const BenefitsPageLayout = ({ children }: PropsWithChildren<{}>) => {
	return (
		<Screen className={styles.screen}>
			<FloatImage position={{ left: 10, bottom: 0 }} zIndex={30}>
				<img src={bottle} />
			</FloatImage>
			<h2 className={styles.subtitle}>ключевое сообщение</h2>
			<h1 className={styles.title}>brendxy</h1>
			<div className={styles.grid}>
				<div className={styles.note}>
					<FloatImage position={{ left: 110, top: -35 }}>
						<img src={dish} />
					</FloatImage>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Molestias, veritatis!
				</div>
				<div className={styles.note}>
					<FloatImage position={{ left: 35, top: -25 }}>
						<img src={schedule} />
					</FloatImage>
					Lorem ipsum dolor sit amet.
				</div>
				{children}
			</div>
		</Screen>
	);
};

export default BenefitsPageLayout;
