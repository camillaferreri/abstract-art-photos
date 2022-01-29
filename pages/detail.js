import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"

import { useProjectData } from "../utils/useProjectData"
import { intro_text_variants, intro_text_transition } from "../animations/pages/detail"

import styles from "../styles/pages/Detail.module.scss"

export default function Detail() {
  const router = useRouter()
  const projectData = useProjectData(router.query.id)

  return (
    <div className="container">
      <motion.div 
        className={styles.introText}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={intro_text_variants}
        transition={intro_text_transition}
      >
        <h1>{projectData?.artist}</h1>
        <h3>{projectData?.handle}</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Link 
          href={{
            pathname: '/',
            query: { mode: 'slider' },
          }}
          passHref
        >
          <a>
            <img src="/arrow-left.png" />Back
          </a>
        </Link>
      </motion.div>

      <div className={styles.image}>
        <img src={projectData?.image} />
      </div>
    </div>
  )
}
