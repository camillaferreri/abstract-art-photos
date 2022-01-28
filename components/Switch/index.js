import StackIcon from "../StackIcon"
import SliderIcon from "../SliderIcon"

import styles from "./styles.module.scss"

export default function Switch({ layoutIsSlider, setSliderLayout, setStackLayout }) {
  return (
    <div className={styles.switchWrapper}>  
      <StackIcon 
        active={!layoutIsSlider} 
        onClick={setStackLayout}
      />
      
      <div className={styles.switchDivider} />

      <SliderIcon 
        active={layoutIsSlider} 
        onClick={setSliderLayout}
      />
    </div>
  )
}
