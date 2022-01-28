import { useEffect, useRef, useState } from "react"
import { motion, AnimateSharedLayout } from "framer-motion"

import { projectsData } from "../data/projectsData"

import Switch from "../components/Switch"
import ProjectCard from "../components/ProjectCard"

import styles from "../styles/pages/Slider.module.scss"

export default function Slider() {
  const constraintsRef = useRef(null)
  const [ constraints, setConstrains ] = useState({ right: 0, left: 0 })

  useEffect(() => {
    setConstrains({
      right: 20,
      left: -(constraintsRef.current?.getBoundingClientRect().width - window?.innerWidth) 
    })
  }, [])

  const renderProjects = () => (
    projectsData.map((project, index) => (
      <ProjectCard
        key={index}
        image={project.image}
        artist={project.artist}
        handle={project.handle}
        detailVisible
      />
    ))
  )

  return (
    <div className="container">
      <motion.div 
        className={styles.sliderWrapper}
        drag="x"
        dragConstraints={constraints}        
      >
        <AnimateSharedLayout>
          <motion.div 
            ref={constraintsRef} 
            className={styles.sliderContent}
            layout
          >
            {renderProjects()}
          </motion.div>
        </AnimateSharedLayout>
      </motion.div>

      <Switch />
    </div>
  )
}
