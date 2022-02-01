import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

import { projectsData } from "../data/projectsData"
import { intro_text_variants, intro_text_transition, slider_wrapper_variants, slider_wrapper_transition } from "../animations/pages/home"

import Switch from "../components/Switch"
import ProjectCard from "../components/ProjectCard"

import styles from "../styles/pages/Home.module.scss"

export default function Home() {
  const router = useRouter()
  const constraintsRef = useRef(null)
  const [ layoutIsSlider, setLayoutIsSlider ] = useState(router.query.mode ? true : false)
  const [ constraints, setConstrains ] = useState({ right: 0, left: 0 })

  useEffect(() => {
    setConstrains({
      right: 20,
      left: -(constraintsRef.current?.getBoundingClientRect().width - window?.outerWidth) 
    })
  }, [layoutIsSlider])

  const goProjectDetail = (e, id) => {
    e.preventDefault()
    if (!layoutIsSlider) return;
    router.push({
      pathname: "/detail", 
      query: { id: id }
    })
  }

  const renderProjects = () => (
    projectsData.map((project, index) => (
      <ProjectCard
        key={project.id}
        id={project.id}
        image={project.image}
        artist={project.artist}
        handle={project.handle}
        custom={index}
        layoutIsSlider={layoutIsSlider}
        onClick={(e) => goProjectDetail(e, project.id)}
      />
    ))
  )

  return (
    <div className="container">
      <motion.div 
        className={styles.introText}
        animate={layoutIsSlider ? "hidden" : "visible"}
        variants={intro_text_variants}
        transition={intro_text_transition}
        initial={false}
      >
        <h1>The Abstract design</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat. Duis aute irure 
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
          nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </motion.div>

      <motion.div 
        className={styles.sliderWrapper}
        drag={layoutIsSlider ? "x" : false}
        dragConstraints={layoutIsSlider ? constraints : false}
        animate={layoutIsSlider ? "slider" : "stack"}
        variants={slider_wrapper_variants}
        transition={slider_wrapper_transition}
        initial={false}
      >
        <motion.div 
          ref={constraintsRef} 
          className={styles.sliderContent}
        >
          {renderProjects()}
        </motion.div>
      </motion.div>

      <Switch 
        layoutIsSlider={layoutIsSlider}
        setSliderLayout={() => setLayoutIsSlider(true)}
        setStackLayout={() => setLayoutIsSlider(false)}
      />
    </div>
  )
}
