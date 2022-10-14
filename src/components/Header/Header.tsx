import { ComponentProps } from 'react';
import { ReactComponent as Home } from 'assets/images/home.svg';
import styles from 'components/Header/header.module.scss';

interface HeaderProps {
	onClick: ComponentProps<'button'>['onClick'];
}

const Header = ({ onClick }: HeaderProps) => {
	return (
		<header className={styles.header}>
			<button className={styles.button}>
				<Home />
			</button>
			<span className={styles.divider} />
			<span className={styles.title}>project</span>
		</header>
	);
};

export default Header;
