import styles from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.containerNavbar}>
                <a className={styles.linksNavbar} href="#home">Home</a>
                <a className={styles.linksNavbar} href="#sobre">Sobre</a>
                <a className={styles.linksNavbar} href="#personagens">Personagens</a>
            </div>
        </nav>
    );
}

export default Navbar;