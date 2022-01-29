import Link from "next/link"
import { useRouter } from "next/router"

import { useProjectData } from "../utils/useProjectData"

import styles from "../styles/pages/Home.module.scss"

export default function Detail() {
  const router = useRouter()
  const projectData = useProjectData(router.query.id)

  return (
    <div className="container">
      <div>
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
          <a className={styles.backButton}>Back</a></Link>
      </div>

      <img src={projectData?.image} />
    </div>
  )
}
