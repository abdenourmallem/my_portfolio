import Navbar from '../navbar';
import  Project  from '../../data/Projects.jsx';

function ProjectsPage() {


    return (
        <>
            <Navbar />
            {Project.map((project, index) => (<div key={index}>
                <h1>{project.Title}</h1>
                <img src="../" alt="" />
                <p>{project.Description}</p>
            </div>
            ))}<div>

            </div>

        </>
    );
}
export default ProjectsPage;