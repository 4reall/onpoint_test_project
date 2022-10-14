import styles from './styles.module.scss';
import { PropsWithChildren } from 'react';
import Header from 'components/Header/Header';

interface ScreenProps {
	background: string;
}

const Screen = ({ children, background }: PropsWithChildren<ScreenProps>) => {
	return (
		<section draggable={false} className={styles.container}>
			<Header onClick={() => {}} />
			{children}
			<img src={background} className={styles.background} />
		</section>
	);
};

export default Screen;
