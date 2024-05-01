import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <a href="#">
                            <span>로그인</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}