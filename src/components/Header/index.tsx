
import styles from './styles.module.scss'

export function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>AME Sorocaba</h1>
                <h2>Pesquisa de Satisfação</h2>
            </div>
        </div>
    )
}