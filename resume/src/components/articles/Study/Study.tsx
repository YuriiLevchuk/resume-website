import styles from "./Study.module.css"

interface StudyProps {
  degree: string
  school: string
  year: string
}

const Study: React.FC<StudyProps> = ({ degree, school, year } : StudyProps) => {
  return (
    <div>
      <h3 className={styles.Degree}>{degree}</h3>
      <h4 className={styles.Date}>{year}</h4>
      <p className={styles.School}>{school}</p>
    </div>
  )
}

export default Study;
