import React from 'react';
import styles from './loading.module.css'
const LoadingUI = () => {
    return (
        <div className={styles.loader_box}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default LoadingUI;