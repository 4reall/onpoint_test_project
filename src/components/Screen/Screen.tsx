import { PropsWithChildren } from 'react';
import classNames from 'classnames';
import styles from 'components/Screen/screen.module.scss';

interface ScreenProps {
	className?: string;
}

const Screen = ({ children, className }: PropsWithChildren<ScreenProps>) => {
	return (
		<section className={classNames(className, styles.container)}>
			{children}
		</section>
	);
};

export default Screen;
