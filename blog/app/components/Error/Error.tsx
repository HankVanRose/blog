import React from 'react';
import styles from './Error.module.css';

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => (
  <div className={styles.errorContainer}>
    <h2 className={styles.errorMessage}>{message}</h2>
    <button className={styles.retryButton} onClick={() => window.location.reload()}>
      Попробовать снова
    </button>
  </div>
);

export default Error;