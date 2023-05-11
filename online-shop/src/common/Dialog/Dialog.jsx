import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './Dialog.module.scss'


function Dialog({ isOpen, onClose }){
    return (
        <CSSTransition
            in={isOpen}
            timeout={600}
            classNames={styles.dialog}
            unmountOnExit
        >
            <div className={styles.dialog}>
                <div className={styles.dialogContent}>
                    <h2>Ваш коментар додано успішно!</h2>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </CSSTransition>
    );
};

export default Dialog;

