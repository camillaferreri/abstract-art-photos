import { motion } from "framer-motion"

import styles from "./styles.module.scss"

export default function SliderIcon({ active, onClick }) {

  return (
    <motion.div 
      className={styles.wrapper} 
      onClick={onClick}
      animate={active ? "active" : "notActive"}
      variants={{
        notActive: { opacity: 0.4 },
        active: { opacity: 1 }
      }}
    >
      <span className={styles.slide}></span>
      <span className={styles.slide}></span>
      <span className={styles.slide}></span>
    </motion.div>
  )
}
