import styles from "./Columns.module.css"

interface ColumnsProps {
  content: React.ReactNode[]
}

const Columns: React.FC<ColumnsProps> = ({ content }) => {

  return <div className={styles.ColumnsWrapper}>
    {content.map((el, i) => {
      return <div className={styles.Column} key={i}>
        {el}
      </div>
    })}
  </div>;
}

export default Columns