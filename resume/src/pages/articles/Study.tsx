interface StudyProps {
    degree: string
    school: string
    year: string
}

const Study: React.FC<StudyProps> = ({ degree, school, year } : StudyProps) => {
    return (
        <div className="study">
            <h2>{degree}</h2>
            <p>{school}</p>
            <p>{year}</p>
        </div>
    )
}

export default Study;
