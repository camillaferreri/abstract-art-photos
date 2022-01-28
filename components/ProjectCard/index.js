import { motion } from "framer-motion"

import { project_card_variants, detail_variants } from "../../animations/components/projectCard"

import styles from "./styles.module.scss"

export default function ProjectCard({ image, artist, handle, layoutIsSlider, custom }) {

  return (
    <motion.div 
      className={styles.projectCard}
      animate={layoutIsSlider ? "slider" : "stack"}
      variants={project_card_variants}
      custom={custom}
    >
      <div className={styles.image}>
        <img src={image} />
      </div>

      <motion.div
        variants={detail_variants}
        transition={{ duration: 0.4 }}
      >
        <h2 className={styles.artist}>{artist}</h2>
        <h3 className={styles.handle}>{handle}</h3>
      </motion.div>
    </motion.div>
  )
}
