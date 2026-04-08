import { DiCelluloid } from 'react-icons/di';
import Project from '../data/Projects';
import { useNavigate } from 'react-router-dom';

function ProjectSection() {
    const navigate = useNavigate()
    function onClickHandler(name) {
        console.log(name);
        navigate(`/projectsPage#${name}`);
    }

    return (
        <>

            <h1>Featured Projects</h1>
            <div className="flex-container projects-container">
                {Project.map((project, index) => (
                    <div className="flip-card" key={index} onClick={() => onClickHandler(project.name)}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img src={project.logo} alt="" />
                                <div className="tools-container">
                                    {project.tools.map((tool, index) => (
                                        <span key={index}>{tool}</span>
                                    ))}
                                </div></div>
                            <div className="flip-card-back">
                                <p>{project.Description}</p></div>
                        </div>
                    </div>
                ))}

            </div> </>
    )
}
export default ProjectSection;