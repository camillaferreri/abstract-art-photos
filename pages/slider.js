import Switch from "../components/Switch"
import {projectsData} from "../data/projectsData"
import styles from "../styles/pages/Home.module.scss"

export default function Slider() {

  const renderProjects = () => (
    projectsData.map(project => (
      <div>
        <img src={project.image} />
      </div>
    ))
  )

  return (
    <div className="container">

      <div>
        {renderProjects()}
      </div>

      <Switch />
    </div>
  )
}
