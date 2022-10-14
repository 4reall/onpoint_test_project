import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';
import styles from 'components/Button/button.module.scss';

interface ButtonOwnProps {}

type ButtonProps = ButtonOwnProps & ComponentPropsWithoutRef<'button'>;

const Button = ({ children, ...props }: ButtonProps) => {
	return (
		<button
			className={classNames(props.className, styles.button)}
			{...props}
		>
			<span className={styles.circleWrapper}>
				<span className={styles.circleInner}>
					<span className={styles.arrow} />
				</span>
			</span>
			{children}
		</button>
	);
};

export default Button;
