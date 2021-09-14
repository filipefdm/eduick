import React from 'react';
import styles from './styles.module.scss';

const Modal = ({ id = 'modal', children, onClose = () => {} }) => {
    const handleOutsideClick = (e) => {
        if (e.target.id === id) {
            onClose();
        }
    }

    return (
        <div id={id} className={styles.modal} onClick={handleOutsideClick}>
            <main className={styles.container}>
                <button 
                className={styles.close} 
                onClick={onClose}>
                    <img src="/close.svg" alt="Close Button" />
                </button>

                {children}
            </main>
        </div> 
    )      
};

export default Modal;