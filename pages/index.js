import { motion  } from "framer-motion"

import { projectsData } from "../data/projectsData"

import styles from "../styles/pages/Home.module.scss"
import Switch from "../components/Switch"

export default function Home() {

  const renderProjects = () => (
    projectsData.map(project => (
      <div>
        <img src={project.image} />
      </div>
    ))
  )

  return (
    <div className="container">

      <motion.div 
        initial={false}
        animate={false}
        exit={{ x: "-100%" }}
        transition={{ duration: .4 }}
      >
        <h1>The Abstract design</h1>
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
