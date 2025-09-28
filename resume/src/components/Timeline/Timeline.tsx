
import type React from "react";
import styles from "./Timeline.module.css"

interface TimelineProps {
  content: React.ReactNode[]
}
const Timeline: React.FC<TimelineProps> = ({ content }) => {
  return <div>
    {content.map((el, i) => {
      return <div key={i} className={styles.TimelineWrapper}>
        <div className={styles.Timeline}>
          <div className={styles.Point}></div>
          <div className={styles.Line}></div>
        </div>
        <div className={styles.TimelineContent}>
          {el}
        </div>
      </div>
    })}
  </div>
}

export default Timeline;