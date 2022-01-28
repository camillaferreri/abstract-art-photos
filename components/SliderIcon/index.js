import styles from "./styles.module.scss"

export default function SliderIcon({ active, onClick }) {
  const wrapperClass = [
    styles.wrapper,
    active && styles.active,
  ].join(' ')

  return (
    <div className={wrapperClass} onClick={onClick}>
      <span className={styles.slide}></span>
      <span className={styles.slide}></span>
      <span className={styles.slide}></span>
    </div>
  )
}
