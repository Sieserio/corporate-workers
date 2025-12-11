import { useLocation, useNavigate } from 'react-router-dom';
import { UniversalModal } from '../UniversalModal.tsx';
import React from "react";

interface ModalRouteProps {
    children: React.ReactNode;
    onClose?: () => void;
    showButtonClose: boolean;
}

export function ModalRoute({ children, onClose, showButtonClose = true }: ModalRouteProps) {
    const location = useLocation();
    const navigate = useNavigate();

    // Проверяем, есть ли состояние modal в location.state
    const isModal = location.state?.modal === true;
    const background = location.state?.background;

    const handleClose = () => {
        if (onClose) {
            onClose();
        }
        // Возвращаемся к предыдущему роуту
        if (background) {
            navigate(background);
        } else {
            navigate(-1);
        }
    };

    // Если это модалка - рендерим через портал
    if (isModal) {
        return (
            <UniversalModal showButtonClose={showButtonClose} isOpen={true} onClose={handleClose}>
                {children}
            </UniversalModal>
        );
    }

    // Если не модалка - рендерим как обычную страницу
    return <>{children}</>;
}