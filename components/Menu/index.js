import styles from "./styles.module.scss"

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav__wrapper}>
          <img src="/logo.svg" />
          <h3>Test fe</h3>
        </div>
      </div>
    </nav>
  )
}
