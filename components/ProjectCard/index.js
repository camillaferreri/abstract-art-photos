import { motion } from "framer-motion"

import { project_card_variants, project_card_transition, detail_variants, detail_transition } from "../../animations/components/projectCard"

import styles from "./styles.module.scss"

export default function ProjectCard({ image, artist, handle, custom }) {

  return (
    <motion.div className={styles.projectCard}>
      <motion.div 
        className={styles.image}
        variants={project_card_variants}
        transition={project_card_transition}
        custom={custom}
      >
        <img src={image} />
      </motion.div>

      <motion.div
        variants={detail_variants}
        transition={detail_transition}
      >
        <h2 className={styles.artist}>{artist}</h2>
        <h3 className={styles.handle}>{handle}</h3>
      </motion.div>
    </motion.div>
  )
}
