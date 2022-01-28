import { useState, useRef, useEffect } from "react"
import { motion, AnimateSharedLayout } from "framer-motion"

import { projectsData } from "../data/projectsData"
import { intro_text_variants } from "../animations/pages/home"

import Switch from "../components/Switch"
import ProjectCard from "../components/ProjectCard"

import styles from "../styles/pages/Home.module.scss"

export default function Home() {
  const constraintsRef = useRef(null)
  const [ layoutIsSlider, setLayoutIsSlider ] = useState(false)
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
        layoutIsSlider={layoutIsSlider}
        custom={index}
      />
    ))
  )

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <motion.div 
          className={styles.introText}
          animate={layoutIsSlider ? "hidden" : "visible"}
          variants={intro_text_variants}
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

        <motion.div 
          className={styles.sliderWrapper}
          drag="x"
          dragConstraints={constraints}        
        >
          {/* <AnimateSharedLayout> */}
            <motion.div 
              ref={constraintsRef} 
              className={styles.sliderContent}
              layout
            >
              {renderProjects()}
            </motion.div>
          {/* </AnimateSharedLayout> */}
        </motion.div>
      </div>

      <Switch 
        layoutIsSlider={layoutIsSlider}
        setSliderLayout={() => setLayoutIsSlider(true)}
        setStackLayout={() => setLayoutIsSlider(false)}
      />
    </div>
  )
}
