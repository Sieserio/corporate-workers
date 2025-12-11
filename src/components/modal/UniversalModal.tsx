import ReactDOM from 'react-dom';
import styles from './UniversalModal.module.scss';
import React, {type ReactNode, useCallback, useEffect, useState} from "react";
import CloseIcon from '../../assets/images/icons/ui/close.svg';

interface UniversalModalProps {
    children: ReactNode;
    isOpen: boolean;
    showButtonClose: boolean;
    onClose: () => void;
}

export function UniversalModal({ children, isOpen = true, showButtonClose = true, onClose}: UniversalModalProps) {

    const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

    // проверяем что у нас есть root для отображения модалки
    useEffect(() => {
        let container = document.getElementById('root-modal');

        if (!container) {
            container = document.createElement('div');
            container.id = 'root-modal';
            document.body.appendChild(container);
        }
        setModalRoot(container);
        console.log('root готов')

        return () => {
            if (container && container.children.length === 0 ) {
                document.body.removeChild(container);
            }
        }
    }, []);

    const handleClose = useCallback(()=> {
        onClose();
    }, [onClose]);

    const handleClickOverlayOut = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    }, [handleClose]);

    const handleEscape = useCallback((event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            handleClose()
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        }
    }, [isOpen])

    if (!isOpen || !modalRoot) {
        return null;
    }


    return ReactDOM.createPortal(
        <div className={styles.overlay} onClick={handleClickOverlayOut}>
            <div className={styles.dialog}>
                { showButtonClose &&
                    <button className={styles.closeButton} onClick={handleClose}>
                        <CloseIcon className={styles.icon}/>
                    </button>
                }
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>,
        modalRoot
    )
}