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
        <div className="employment">
            <h2>{title} @ {company}</h2>
            <p>{description}</p>
            <p>
                {startDate} - {finishDate}
            </p>
        </div>
    )
}

export default Employment