import React from "react";
import styles from './Footer.module.css';

function Footer () {
    return (
        <footer className={styles.footer}>
            <img src="/logotipo-sailormoon.png" alt="Logotipo Sailor Moon" />
            <p>2024© -  Sailor Moon</p>
            <div className={styles.containerLinksRodape}>
                <a class={styles.linksRodape} href="#home">Home</a>
                <a className={styles.linksRodape} href="#sobre">Sobre</a>
                <a className={styles.linksRodape} href="#personagens">Personagens</a>
            </div>
        </footer>
    );
}

export default Footer;