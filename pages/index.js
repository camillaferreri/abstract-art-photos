import { motion } from "framer-motion"

import { projectsData } from "../data/projectsData"

import Switch from "../components/Switch"
import ProjectCard from "../components/ProjectCard"

import styles from "../styles/pages/Home.module.scss"

export default function Home() {

  const renderProjects = () => (
    projectsData.map(project => (
      <ProjectCard
        image={project.image}
      />
    ))
  )

  return (
    <div className="container">
      <motion.div 
        className={styles.introText}
        initial={false}
        animate={false}
        exit={{ x: "-100%" }}
        transition={{ duration: .8 }}
      >
        <h1 className={styles.title}>The Abstract design</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </motion.div>

      <div>
        {renderProjects()}
      </div>

      <Switch />
    </div>
  )
}
