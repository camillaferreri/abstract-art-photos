import { useRouter } from 'next/router'
import Link from "next/link"


import StackIcon from "../StackIcon"
import SliderIcon from "../SliderIcon"

import styles from "./styles.module.scss"

export default function Switch() {
  const router = useRouter()

  return (
    <div className={styles.switchWrapper}>
      <Link href="/" passHref>
        <a>
          <StackIcon active={router.route === "/"} />
        </a>
      </Link>
      
      <div className={styles.switchDivider} />

      <Link href="/slider" passHref>
        <a>
          <SliderIcon active={router.route === "/slider"} />
        </a>
      </Link>
    </div>
  )
}
