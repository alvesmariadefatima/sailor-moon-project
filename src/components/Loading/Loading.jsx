import React, { useState, useEffect } from 'react';
import styles from './Loading.module.css'; // Estilos para o componente de loading

const Loading = () => {
  const [loadingVisible, setLoadingVisible] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState('Carregando... ✨');

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeout(() => {
        setLoadingVisible(false);
      }, 2000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loadingVisible && (
        <div className={styles['loading-container']}>
          <div className={styles['sailor-moon-loading']}>
            <img src="/luna e artemis.png" alt="Luna e Ártemis" className={styles['loading']} />
          </div>
          <p className={styles['loading-message']}>{loadingMessage}</p>
        </div>
      )}
    </>
  );
};

export default Loading;