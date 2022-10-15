import {
	ComponentPropsWithoutRef,
	CSSProperties,
	PropsWithChildren,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './modal.module.scss';
import classNames from 'classnames';

interface ModalProps {
	isOpen: boolean;
	setIsOpen: () => void;
	contentClasses?: ComponentPropsWithoutRef<'div'>['className'];
}

const Modal = ({
	isOpen,
	setIsOpen,
	children,
	contentClasses,
}: PropsWithChildren<ModalProps>) => {
	return (
		<CSSTransition
			in={isOpen}
			timeout={200}
			classNames={{
				enter: styles.fadeInEnter,
				enterActive: styles.fadeInEnterActive,
				exit: styles.fadeInExit,
				exitActive: styles.fadeInExitActive,
			}}
			unmountOnExit
		>
			<div className={styles.modal}>
				<div className={styles.overlay} onClick={setIsOpen} />
				<div className={classNames(styles.content, contentClasses)}>
					{children}
					<button onClick={setIsOpen} className={styles.closeBtn}>
						<span />
					</button>
				</div>
			</div>
		</CSSTransition>
	);
};

export default Modal;
