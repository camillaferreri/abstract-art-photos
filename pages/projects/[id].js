import { motion } from "framer-motion"
import Link from "next/link"

import { useProjectData } from "../../utils/useProjectData"
import { intro_text_variants, intro_text_transition } from "../../animations/pages/detail"

import styles from "../../styles/pages/Detail.module.scss"

const Detail = ({ project }) => {
  return (
    <motion.div className="container">
      <motion.div 
        className={styles.introText}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={intro_text_variants}
        transition={intro_text_transition}
      >
        <h1>{project?.artist}</h1>
        <h3>{project?.handle}</h3>

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
          <a><img src="/arrow-left.png" />Back</a>
        </Link>
      </motion.div>

      <motion.div 
        className={styles.image} 
        layoutId={`image-${project?.id}`}
        transition={{ duration: 0.4 }}
      >
        <img src={project?.image} />
      </motion.div>
    </motion.div>
  )
}

Detail.getInitialProps = async function(context) {
  const { id } = context.query;
  return {
    project: useProjectData(id)
  };
};

export default Detail;
