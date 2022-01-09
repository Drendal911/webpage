import styles from '../../styles/layout/Header.module.scss'

export default function Header() {
    return (
        <header className={styles.myHeader}>
            <div className={styles.headerContentContainer}>
                <div className={styles.mainHeader}>Quentin Hogue</div>
                <div className={styles.mainHeader__subOne}>Software Developer</div>
            </div>
        </header>
    )

}