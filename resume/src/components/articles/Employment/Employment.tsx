import styles from "./Employment.module.css"

interface EmploymentProps {
  title: string
  company: string
  description: string
  startDate: string
  finishDate: string
}
const Employment: React.FC<EmploymentProps> = ({
  title,
  company,
  description,
  startDate,
  finishDate,
} : EmploymentProps) => {
  return (
    <div>
      <h3 className={styles.Title}>{title}
      </h3>
      <h4 className={styles.Company}>{company}</h4>
      <p className={styles.Date}>
        {startDate} - {finishDate}
      </p>
      
      <p className={styles.Description} style={{whiteSpace: "pre-line"}}>{description}</p>
    </div>
  )
}

export default Employment