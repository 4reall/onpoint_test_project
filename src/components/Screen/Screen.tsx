import styles from 'components/Screen/screen.module.scss';
import { CSSProperties, PropsWithChildren } from 'react';
import Header from 'components/Header/Header';
import classNames from 'classnames';

interface ScreenProps {
	backgroundImage?: string;
	backgroundColor?: CSSProperties['backgroundColor'];
	className?: string;
}

const Screen = ({
	children,
	backgroundImage,
	backgroundColor,
	className,
}: PropsWithChildren<ScreenProps>) => {
	return (
		<section
			className={classNames(className, styles.container)}
			style={{ backgroundColor }}
		>
			<Header onClick={() => {}} />
			{children}
			{backgroundImage && (
				<img src={backgroundImage} className={styles.background} />
			)}
		</section>
	);
};

export default Screen;
