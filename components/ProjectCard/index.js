import { motion } from "framer-motion"

import styles from "./styles.module.scss"

export default function ProjectCard({ image, artist, handle, detailVisible }) {

  return (
    <motion.div 
      className={styles.projectCard}
      animate={detailVisible ? "visible" : "hidden"}
      layout
      // layoutId="projectCard"
    >
      <div className={styles.image}>
        <img src={image} />
      </div>

      <motion.div
        variants={{
          hidden: { y: 200, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }}
      >
        <h2 className={styles.artist}>{artist}</h2>
        <h3 className={styles.handle}>{handle}</h3>
      </motion.div>
    </motion.div>
  )
}
