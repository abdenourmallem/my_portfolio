import Navbar from '../navbar';
import './style.css';
import Footer from '../footer';
import cvData from '../../data/cvData';

function ResumePage() {
    return (<>
        <Navbar />
        <div className='resume-container'>
            <div className='personal-info'>
                <h1>{cvData.name}</h1>
                <h3>{cvData.location}</h3>
                <h3>{cvData.phone} | {cvData.email}</h3>
            </div>
            <div className='resume-section'>
                <h3 className='section-title'>Profissional Experience</h3>
                <hr />
                {cvData.experience.map((exp) => (<div key={exp.id} classname='section-item'>
                    <h3>{exp.company} </h3>
                    <div className='details'>
                        <div className='title-date'>
                            <p className='title' >{exp.title}</p>
                            <p className='date-section'>{exp.date}</p>
                        </div>

                        {exp.bullets.map((bullet, index) => (<ul key={index} className='bullets-list'>
                            <li>{bullet}</li>
                        </ul>))}
                    </div>

                </div>))}
            </div>
            <div className='resume-section'>
                <h3 className='section-title'>Education</h3>
                <hr />
                {cvData.education.map((edu) => (<div key={edu.id} classname='section-item'>
                    <h3>{edu.school} </h3>
                    <div className='details title-date'>
                        <p className='title'>{edu.title}</p>
                        <p className='date-section'>{edu.date}</p>
                    </div>

                </div>))}
            </div>
            <div className='resume-section'>
                <h3 className='section-title'>Skills</h3>
                <hr />
                <div className='details'>
                    {cvData.skills.map((skill) => (<div key={skill.id} className='section-item'>
                        <ul className='skill-item'>
                            <li>
                                <h4>{skill.category}: </h4>
                                {<p>{skill.items.join(', ')}</p>}
                            </li>
                        </ul>

                    </div>))}
                </div>

            </div>
            <div className='resume-section'>
                <h3 className='section-title'>Projects</h3>
                <hr />
                {cvData.projects.map((project) => (<div key={project.id} classname='section-item'>
                    <h3>{project.title}</h3>
                    <div className='details'>
                        <p>{project.description}</p>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {project.tools.map((tool, index) => (<span key={index} className='tool-badge'>{tool}</span>))}
                        </div>
                    </div>


                </div>))}
            </div>

        </div>

        <Footer />
    </>)
}

export default ResumePage;