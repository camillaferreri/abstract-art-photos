import styles from "./styles.module.scss"

export default function SliderIcon({ active }) {
  const wrapperClass = [
    styles.wrapper,
    active && styles.active,
  ].join(' ')

  return (
    <div className={wrapperClass}>
      <span className={styles.slide}></span>
      <span className={styles.slide}></span>
      <span className={styles.slide}></span>
    </div>
  )
}
