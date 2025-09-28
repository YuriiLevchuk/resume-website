interface ProjectWidgetProps {
  title: string;
  description: string;
  img?: string;
}

const ProjectWidget:React.FC<ProjectWidgetProps> = ({ title, description, img }) => {
  return (<div className="projectWidget">
    <div className="imageContainer">
      <img src={img ? img :"projects/no-image.png"}/>
    </div>
    
    <h2>{title}</h2>
    <p>{description}</p>
  </div>);
}
 
export default ProjectWidget;